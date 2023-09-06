import { TVShowApi } from "./Api/tv-show";
import { useEffect, useState } from "react";
import { BACKDROP_BASE_URL } from "./config";
import TVShowDetail from "./Composants/TVShowDetail";

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

  console.log(currentTV);

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
            <div>Logo</div>
            <div>Subtitle</div>
          </div>
          <div className="col-sm-12 col-lg-4">
            <input type="text" />
          </div>
        </div>
      </div>
      <div className="tvShowSetails">
        {currentTV && <TVShowDetail tvshow={currentTV} />}
      </div>
      <div className="recommandations">Recommandations</div>
    </div>
  );
}

export default App;
