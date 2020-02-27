import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { fetchMovie } from "../store/actions/movies";

const mapStateToProps = state => {
  return {
    movies: state.movies,
    selectedMovie: state.movies
  };
};

const mapDispatchToProps = (dispatch, state) => {
  return {
    findMovie: found => dispatch(fetchMovie(found))
  };
};

class Movies extends React.Component {
  handleClick(id) {
    this.props.findMovie(id).then(movie => {
      this.setState({
        selectedMovie: movie
      });
    });
  }

  render() {
    const movie = this.props.movies.movies;
    return (
      <div>
        <div className="container">
          <hr />
          <br />
          <br />

          <div className="row">
            {movie.map((movie, index) => (
              <div class="col-lg-4 col-md-4">
                <div class="card mb-4">
                  <Link to={`/movies/${movie.imdbID}`}>
                    <img
                      class="card-img-top"
                      style={{ height: "490px" }}
                      onClick={() => {
                        this.handleClick(`${movie.imdbID}`);
                      }}
                      src={movie.Poster}
                      alt="Card image cap"
                    />
                  </Link>
                  <div class="card-body">
                    <h5 class="card-title">{movie.Title}</h5>
                    <p class="card-text">{movie.Year}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Movies);
