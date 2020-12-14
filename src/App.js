import React from "react";
import { Formulario } from "./components/Formulario";

export const App = () => {
  return (
    <div className="container">
      <div className="jumbotron">
        <p className="lead text-center">Buscador de imagen</p>
        <Formulario />
      </div>
    </div>
  );
};
