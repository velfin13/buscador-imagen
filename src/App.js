import React, { useEffect, useState } from "react";
import { Formulario } from "./components/Formulario";
import { ListadoImagen } from "./components/ListadoImagen";

export const App = () => {
  //state de datos
  const [busqueda, guardarBusqueda] = useState("");
  //state guardar consulta
  const [imagenes, guardarImagenes] = useState([]);

  //funcion que consulta la api
  useEffect(() => {
    const consultaAPI = async () => {
      //prevenir que se ejecute si no hay busqueda
      if (busqueda === "") return;

      const paginador = 30;
      const apikey = "18772523-6d7c37fb8cd4deab034196bc8";
      const url = `https://pixabay.com/api/?key=${apikey}&q=${busqueda}&per_page=${paginador}`;

      const respuesta = await fetch(url);
      const resultado = await respuesta.json();
      guardarImagenes(resultado.hits);
    };
    consultaAPI();
  }, [busqueda]);

  return (
    <div className="container">
      <div className="jumbotron">
        <p className="lead text-center">Buscador de imagen</p>
        <Formulario guardarBusqueda={guardarBusqueda} />
      </div>
      <div className="row justify-content-center">
      <ListadoImagen imagenes={imagenes} />
      </div>
    </div>
  );
};
