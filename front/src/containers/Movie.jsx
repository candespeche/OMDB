import React from "react";
import { fetchFavs } from "../store/actions/movies";
import "../assets/styles/styles.css";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import { IoIosHeartEmpty } from "react-icons/io";
import heartE from "../assets/heartEmpty-01.png";

const mapStateToProps = state => {
  return {
    selectedMovie: state.movies,
    favorites: state.movies.favorites
  };
};
const mapDispatchToProps = (dispatch, state) => {
  return {
    addFav: id => dispatch(fetchFavs(id))
  };
};

class Movie extends React.Component {
  handleClick(id) {
    this.props
      .addFav(id)
      .then(fav => {
        this.setState({
          favorites: { ...this.props.favorites, fav }
        });
      })
      .then(() => this.props.history.push("/favorite"));
  }

  render() {
    const movie = this.props.selectedMovie.selectedMovie;
    console.log(movie);
    return (
      <div>
        <div className="container">
          <hr />
          <br />

          <div className="row">
            <img className="col-lg-4" src={movie.Poster} />
            <h5>
              <br />

              <h2 className="movInfotit">{movie.Title}</h2>
              <p className="movInfo">
                <br />
                <b>Género: </b>
                {movie.Genre}
              </p>
              <p className="movInfo">
                <b>Clasificación: </b>
                {movie.Rated}
              </p>
              <p className="movInfo">
                <b>Fecha de estreno: </b>
                {movie.Released}
              </p>
              <p className="movInfo">
                <b>Director/a: </b>
                {movie.Director}
              </p>
              <p className="movInfo">
                <b>Reparto: </b>
                {movie.Actors}
              </p>
              <p className="movInfo">
                <b>Duración: </b>
                {movie.Runtime}
              </p>
              <br />
              <img
                onClick={() => this.handleClick(`${movie.imdbID}`)}
                style={{ height: "25px" }}
                src="https://image.flaticon.com/icons/svg/1077/1077086.svg"
              />
              <i
                onClick={() => this.handleClick(`${movie.imdbID}`)}
                className="favs"
              >
                + Añadir a Favoritas
              </i>
            </h5>
          </div>
        </div>
      </div>
    );
  }
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Movie));

// https://image.flaticon.com/icons/svg/1077/1077086.svg

{
  /* <button
                className="btn btn-success "
                onClick={() => this.handleClick(`${movie.imdbID}`)}
                type="submit"
              >
                FAV
              </button> */
}
