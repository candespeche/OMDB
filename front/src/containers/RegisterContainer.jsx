import React, { Component } from "react";
import Register from "../components/Register";
import store from "../store";
import { sendRegister } from "../store/actions/user";
import { connect, Provider } from "react-redux";

const mapDispatchToProps = (dispatch, state) => {
  return {
    sendUser: (user, pass) => dispatch(sendRegister(user, pass))
  };
};

class RegisterContainer extends Component {
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
  handleChangeA(e) {
    const value = e.target.value;
    this.setState({
      username: value
    });
  }
  handleChangeB(e) {
    const value = e.target.value;
    this.setState({
      password: value
    });
  }

  handleSubmit(e) {
    event.preventDefault(e);
    this.props
      .sendUser(this.state.username, this.state.password)
      .then(() => this.props.history.push("/"));
  }

  render() {
    return (
      <Register
        handleSubmit={this.handleSubmit}
        handleChangeA={this.handleChangeA}
        handleChangeB={this.handleChangeB}
      />
    );
  }
}

export default connect(null, mapDispatchToProps)(RegisterContainer);
