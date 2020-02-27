import axios from "axios";

const receiveFavs = favorites => ({
  type: "RECEIVE_FAVORITE",
  favorites
});

const receiveMovies = movies => ({
  type: "RECEIVE_MOVIES",
  movies
});

const receiveMovie = movie => ({
  type: "RECEIVE_MOVIE",
  movie
});

export const fetchFavs = id => dispatch =>
  axios
    .get(`http://www.omdbapi.com/?apikey=c2d429a0&i=${id}`)
    .then(res => res.data)
    .then(movie => dispatch(receiveFavs(movie)));

export const fetchMovies = found => dispatch =>
  axios
    .get(`http://www.omdbapi.com/?apikey=c2d429a0&s=${found}`)
    .then(movies => movies.data)
    .then(movies => {
      dispatch(receiveMovies(movies.Search));
    });

export const fetchMovie = id => dispatch =>
  axios
    .get(`http://www.omdbapi.com/?apikey=c2d429a0&i=${id}`)
    .then(res => res.data)
    .then(movie => dispatch(receiveMovie(movie)));
