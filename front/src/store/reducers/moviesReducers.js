const initialState = {
  movies: [],
  selectedMovie: {},
  favorites: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "RECEIVE_FAVORITE":
      return { ...state, favorites: [...state.favorites, action.favorites] };

    case "REMOVE_FAVORITE":
      return Object.assign({}, state, { favorites: action.movies });

    case "RECEIVE_MOVIE":
      return Object.assign({}, state, { selectedMovie: action.movie });

    case "RECEIVE_MOVIES":
      return Object.assign({}, state, { movies: action.movies });
    default:
      return state;
  }
};
