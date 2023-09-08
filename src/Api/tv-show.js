//fichier qui permet de centraliser les fonctions de requêtes à l'api
import axios from "axios";
import { BASE_URL, API_KEY_PARAM } from "../config";

export class TVShowApi {
  static async fetchPopulars() {
    const resPopular = await axios.get(`${BASE_URL}tv/popular${API_KEY_PARAM}`);
    return resPopular.data.results;
  }

  static async fetchRecommendations(tvShowId) {
    const resReco = await axios.get(
      `${BASE_URL}tv/${tvShowId}/recommendations${API_KEY_PARAM}`
    );
    return resReco.data.results;
  }

  static async fetchByTitle(title) {
    const resTitle = await axios.get(
      `${BASE_URL}search/tv${API_KEY_PARAM}&query=${title}`
    );
    return resTitle.data.results;
  }
}
