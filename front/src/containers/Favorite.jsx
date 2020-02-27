import React from "react";
import store from "../store";
import { connect } from "react-redux";
import { fetchMovies, fetchMovie } from "../store/actions/movies";
import { fetchFavs } from "../store/actions/movies";
import { withRouter } from "react-router";
import { Link } from "react-router-dom";

const mapStateToProps = state => {
  return {
    favorites: state.movies.favorites
  };
};

const mapDispatchToProps = (dispatch, state) => {
  return {
    findMovie: found => dispatch(fetchFavs(found))
  };
};

class FavoriteContainer extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(evt) {
    evt.preventDefault();
    this.props
      .findMovie(this.state.inputValue)

      .then(ans => {
        {
          this.setState({
            favorites: ans
          });
        }
      });
  }

  render() {
    const movie = this.props.favorites;

    return (
      <div>
        <div className="container">
          <br />
          <h2>Favoritas</h2>
          <hr />
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

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(FavoriteContainer)
);

// <div>
//   <div className="container">
//     <br />
//     <h2>Películas</h2>
//     <hr />
//     <div className="row">
//       {movie.map((movie, index) => (
//         <div class="col-lg-4 col-md-4">
//           <div class="card mb-4">
//             <Link to={`/movies/${movie.imdbID}`}>
//               <img
//                 class="card-img-top"
//                 style={{ height: "490px" }}
//                 onClick={() => {
//                   this.handleClick(`${movie.imdbID}`);
//                 }}
//                 src={movie.Poster}
//                 alt="Card image cap"
//               />
//             </Link>
//             <div class="card-body">
//               <h5 class="card-title">{movie.Title}</h5>
//               <p class="card-text">{movie.Year}</p>
//               {/* <a
//               href="http://www.jquery2dotnet.com/"
//               class="btn btn-outline-dark btn-sm"
//             >
//               Go somewhere
//             </a> */}
//             </div>
//           </div>
//         </div>
//       ))}
//     </div>
//   </div>
// </div>;
