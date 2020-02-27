import React from "react";
import NavBar from "./NavBar";
import store from "../store";
import { connect } from "react-redux";
import { fetchMovies } from "../store/actions/movies";
import { desLog } from "../store/actions/user";
import { withRouter } from "react-router";

const mapStateToProps = state => {
  return {
    inputValue: state.movies,
    movies: state.movies,
    state
  };
};

const mapDispatchToProps = (dispatch, state) => {
  return {
    findMovie: found => dispatch(fetchMovies(found)),
    LogOut: () => dispatch(desLog())
  };
};

class NavBarContainer extends React.Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange(e) {
    const value = e.target.value;
    this.setState({
      inputValue: value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props
      .findMovie(this.state.inputValue)

      .then(ans => {
        {
          this.setState({
            movies: ans
          });
        }
      })
      .then(() => {
        this.props.history.push("/search");
      });
  }

  handleClick() {
    this.props.LogOut().then(() => this.props.history.push("/login"));
  }

  render() {
    return (
      <div>
        <NavBar
          props={this.props}
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
          handleClick={this.handleClick}
        />
      </div>
    );
  }
}

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(NavBarContainer)
);
