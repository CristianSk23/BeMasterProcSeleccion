import {
  GET_GENRES,
  GET_GAMES,
  GET_GAMES_CATEGORY,
} from "../actions/actionsTypes";

const initialState = {
  genres: [],
  games: [],
  gamesTemp: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_GENRES:
      const genres = [...action.payload].slice(0, 5);

      return {
        ...state,
        genres: genres,
      };

    case GET_GAMES:
      const gamesAux = [...action.payload];

      return {
        ...state,
        games: gamesAux,
      };

    case GET_GAMES_CATEGORY:
      /* console.log("Llega por payload ", action.payload);
      console.log("Estado de los videojuegos ", [...state.games]); */
      const gamesFind = state.games.filter((game) =>
        game.genres.some((genre) => genre.name === action.payload)
      );

      return {
        ...state,
        gamesTemp: gamesFind.slice(0, 5),
      };

    default:
      return {
        ...state,
      };
  }
};
export default reducer;
