//fichier qui permet de centraliser les fonctions de requêtes à l'api
import axios from "axios";
import { BASE_URL, API_KEY_PARAM } from "../config";

export class TVShowApi {
  static async fetchPopulars() {
    const resPopular = await axios.get(`${BASE_URL}tv/popular${API_KEY_PARAM}`);
    return resPopular.data.results;
  }
}
