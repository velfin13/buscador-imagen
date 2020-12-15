import React, { useState } from "react";
import { Error } from "./Error";

export const Formulario = ({guardarBusqueda}) => {
  //state para guardartermino
  const [termino, guardarTermino] = useState("");
  //state error
  const [error, guardarError] = useState(false);

  //recogiendo datos del formulario
  const handleChange = (e) => {
    guardarTermino(e.target.value);
  };

  //cuando el usuario hace el submit
  const handleSubmit = (e) => {
    e.preventDefault();

    //validar
    if (termino.trim() === "") {
      guardarError(true);
      return;
    }

    //si pasa la validacion
    guardarError(false);

    //pasar los datos al componente principal
    guardarBusqueda(termino);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="row">
        <div className="form-group col-md-8">
          <input
            type="text"
            className="form-control form-control-lg"
            placeholder="busca una imagen: ejemplo: perro,cafe"
            onChange={handleChange}
          />
        </div>
        <div className="form-group col-md-4">
          <input
            type="submit"
            className="btn btn-lg btn-danger btn-block"
            value="Buscar"
          />
        </div>
      </div>
      {error ? <Error mensaje="ingresa un termino de busqueda" /> : null}
    </form>
  );
};
