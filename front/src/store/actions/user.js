import axios from "axios";

const send_register = (username, password) => ({
  type: "SEND_REGISTER",
  username,
  password
});

const send_Login = (username, password) => ({
  type: "SEND_LOGIN",
  username,
  password
});

const log_Out = (username, password) => ({
  type: "SEND_LOGOUT"
});

export const sendRegister = (username, password) => dispatch =>
  axios
    .post("/api/register", { username, password })
    .then(res => res.data)
    .then(user => dispatch(send_register(user)));

export const sendLogin = (username, password) => dispatch =>
  axios
    .post("/api/login", { username, password })
    .then(res => res.data)
    .then(user => dispatch(send_Login(user)));

export const desLog = () => dispatch =>
  axios.post("/api/logout").then(() => dispatch(log_Out()));
