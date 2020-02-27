import React from "react";

export default props => {
  return (
    <form
      className="container"
      method="POST"
      action="/api/login"
      onSubmit={props.handleSubmit}
    >
      <br />
      <h2>Iniciá sesión</h2>
      <br />
      <div class="form-group">
        <label for="email">Usuario:</label>
        <input
          onChange={props.handleChangeA}
          type="email"
          class="form-control"
          placeholder="Ingresar usuario"
          id="email"
        />
      </div>
      <div class="form-group">
        <label for="pwd">Contraseña:</label>
        <input
          onChange={props.handleChangeB}
          type="password"
          class="form-control"
          placeholder="Ingresar contraseña"
          id="pwd"
        />
      </div>
      <button type="submit" class="btn btn-primary">
        Enviar
      </button>
    </form>
  );
};
