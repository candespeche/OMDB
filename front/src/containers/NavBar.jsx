import React from "react";
import { Link } from "react-router-dom";
import img1 from "../assets/omdb-03.png";
import "../assets/styles/styles.css";

export default props => {
  const logged = props.props.state.users.username;

  const omdb = {
    maxWidth: "50px"
  };

  return (
    <nav className="navbar navbar-expand-sm bg-light navbar-light">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link to="/">
            <img
              src={img1}
              style={{ width: "85px", marginRight: "50px", marginLeft: "20px" }}
              alt="OMDb"
            />
          </Link>
        </li>

        <li className="nav-item">
          <Link to="/favorite" className="nav-link">
            Favoritas
          </Link>
        </li>
        <li className="nav-item nav-link"> | </li>
        <li className="nav-item">
          {!logged ? (
            <div>
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a className="nav-link" href="/register">
                    Registrarse
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/login">
                    Iniciar sesión
                  </a>
                </li>
              </ul>
            </div>
          ) : (
            <div>
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a onClick={props.handleClick} className="nav-link">
                    Cerrar sesión
                  </a>
                </li>
              </ul>
            </div>
          )}
        </li>
      </ul>

      <form
        onSubmit={e => props.handleSubmit(e)}
        style={{ marginLeft: "20px" }}
        className="form-inline my-2 my-lg-0"
      >
        <input
          className="form-control mr-sm-2"
          type="text"
          placeholder="Buscar película"
          onChange={props.handleChange}
        />
        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">
          Buscar
        </button>
      </form>
    </nav>
  );
};
