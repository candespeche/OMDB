import React, { Component } from "react";
import store from "../store";
import LogIn from "../components/Login";
import { connect } from "react-redux";
import { sendLogin } from "../store/actions/user";
import { withRouter } from "react-router";

const mapStateToProps = state => {
  return { state };
};

const mapDispatchToProps = (dispatch, state) => {
  return {
    send_Login: (username, password) => dispatch(sendLogin(username, password))
  };
};

class LogInContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
    this.handleChangeA = this.handleChangeA.bind(this);
    this.handleChangeB = this.handleChangeB.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    event.preventDefault(e);
    this.props
      .send_Login(this.state.username, this.state.password)
      .then(() => this.props.history.push("/"));
  }

  handleChangeA(e) {
    const value = e.target.value;
    this.setState({
      username: value
    });
  }

  handleChangeB(e) {
    console.log(e.target.value);
    const value = e.target.value;
    this.setState({
      password: value
    });
  }

  render() {
    return (
      <LogIn
        handleSubmit={this.handleSubmit}
        handleChangeA={this.handleChangeA}
        handleChangeB={this.handleChangeB}
      />
    );
  }
}
export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(LogInContainer)
);
