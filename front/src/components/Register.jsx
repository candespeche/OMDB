import React from "react";

export default props => {
  return (
    <form
      className="container"
      method="POST"
      action="/api/register"
      onSubmit={props.handleSubmit}
    >
      <br />

      <h2>Registrate</h2>
      <br />

      <div class="form-group">
        <label for="email">Usuario:</label>
        <input
          onChange={props.handleChangeA}
          type="email"
          class="form-control"
          placeholder="Nombre de usuario / Email"
          id="email"
          name="username"
        />
      </div>
      <div class="form-group">
        <label for="pwd">Contraseña:</label>
        <input
          onChange={props.handleChangeB}
          type="password"
          class="form-control"
          placeholder="Crear contraseña"
          id="pwd"
          name="password"
        />
      </div>

      <button type="submit" class="btn btn-primary">
        Crear
      </button>
    </form>
  );
};
