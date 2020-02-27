const initialState = {
  username: "",
  password: ""
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "SEND_REGISTER":
      return Object.assign({}, state, {
        username: action.username,
        password: action.password
      });

    case "SEND_LOGIN":
      return Object.assign({}, state, {
        username: action.username,
        password: action.password
      });

    case "SEND_LOGOUT":
      return Object.assign({}, state, {
        username: "",
        password: ""
      });

    default:
      return state;
  }
};
