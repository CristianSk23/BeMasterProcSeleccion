import {
  GET_GENRES,
  GET_ACTION_GAMES,
  GET_GAMES,
  GET_GAMES_CATEGORY,
  GET_INDIE_GAMES,
  GET_ADVENTURE_GAMES,
  GET_RPG_GAMES,
  GET_STRATEGY_GAMES,
} from "./actionsTypes";
import axios from "axios";
const key = "13e28b0cefb441d399fa357254d9dab9";
const URLgenres = `https://api.rawg.io/api/genres?key=${key}`;

export const getGenres = () => {
  return async (dispatch) => {
    try {
      const { data } = await axios(URLgenres);

      const genres = data.results;

      return dispatch({
        type: GET_GENRES,
        payload: genres,
      });
    } catch (error) {
      throw Error(error.message);
    }
  };
};

export const getGames = () => {
  return async (dispatch) => {
    try {
      let listAllGamesAPI = [];
      for (let i = 1; i < 3; i++) {
        let URL = `https://api.rawg.io/api/games?key=${key}&page=${i}&page_size=80`;
        const { data } = await axios.get(URL);
        const games = data.results;

        listAllGamesAPI.push(...games);
      }

      return dispatch({
        type: GET_GAMES,
        payload: listAllGamesAPI,
      });
    } catch (error) {
      throw Error(error.message);
    }
  };
};
export const getGamesCategory = (genre) => {
  return {
    type: GET_GAMES_CATEGORY,
    payload: genre,
  };
};
