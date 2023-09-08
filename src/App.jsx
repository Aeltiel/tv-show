import { TVShowApi } from "./Api/tv-show";
import { useEffect, useState } from "react";
import { BACKDROP_BASE_URL } from "./config";
import TVShowDetail from "./Composants/TVShowDetail";
import Logo from "./Composants/Logo";
import logo from "./Assets/logo.png";
import TVShowList from "./Composants/TVShowList";
import SearchBar from "./Composants/SearchBar";

function App() {
  const [currentTV, setCurrentTV] = useState();
  const [recommendations, setRecommendations] = useState([]);

  async function fetchpopulars() {
    try {
      const populars = await TVShowApi.fetchPopulars();
      if (populars.length > 0) {
        setCurrentTV(populars[0]);
      }
    } catch (error) {
      alert("Erreur durant la recherche des séries populaires");
    }
  }

  async function fetchReco(tvShowId) {
    try {
      const reco = await TVShowApi.fetchRecommendations(tvShowId);
      if (reco.length > 0) {
        setRecommendations(reco.slice(0, 10));
      }
    } catch (error) {
      alert("Erreur durant la recherche des séries recommandées");
    }
  }

  useEffect(() => {
    fetchpopulars();
  }, []);

  useEffect(() => {
    if (currentTV) {
      fetchReco(currentTV.id);
    }
  }, [currentTV]);

  async function searchTVShow(tvShowName) {
    try {
      const searchRes = await TVShowApi.fetchByTitle(tvShowName);
      if (searchRes.length > 0) {
        setCurrentTV(searchRes[0]);
      }
    } catch (error) {
      alert("Erreur durant la recherche de votre série");
    }
  }

  return (
    <div
      className="main_container"
      style={{
        background: currentTV
          ? `linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.55)), url("${BACKDROP_BASE_URL}${currentTV.backdrop_path}") no-repeat center / cover`
          : "black",
      }}
    >
      <div className="header">
        <div className="row">
          <div className="col-4">
            <Logo
              image={logo}
              title="WhatToWatch"
              subtitle="Find a show you may like"
            />
          </div>
          <div className="col-sm-12 col-lg-4">
            <SearchBar onSubmit={searchTVShow} />
          </div>
        </div>
      </div>
      <div className="tvShowSetails">
        {currentTV && <TVShowDetail tvshow={currentTV} />}
      </div>
      <div className="recommandations">
        {recommendations && recommendations.length > 0 && (
          <TVShowList tvShowList={recommendations} onClickItem={setCurrentTV} />
        )}
      </div>
    </div>
  );
}

export default App;
