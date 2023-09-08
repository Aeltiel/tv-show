import { TVShowApi } from "./Api/tv-show";
import { useEffect, useState } from "react";
import { BACKDROP_BASE_URL } from "./config";
import TVShowDetail from "./Composants/TVShowDetail";
import Logo from "./Composants/Logo";
import logo from "./Assets/logo.png";
import TVShowListItem from "./Composants/TVShowListItem";

function App() {
  const [currentTV, setCurrentTV] = useState();

  async function fetchpopulars() {
    const populars = await TVShowApi.fetchPopulars();
    if (populars.length > 0) {
      setCurrentTV(populars[0]);
    }
  }

  useEffect(() => {
    fetchpopulars();
  }, []);

  function setCurrentTVFromRecommendations(tvshow) {
    alert(JSON.stringify(tvshow));
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
            <input type="text" />
          </div>
        </div>
      </div>
      <div className="tvShowSetails">
        {currentTV && <TVShowDetail tvshow={currentTV} />}
      </div>
      <div className="recommandations">
        {currentTV && (
          <TVShowListItem
            tvshow={currentTV}
            onClick={setCurrentTVFromRecommendations}
          />
        )}
      </div>
    </div>
  );
}

export default App;
