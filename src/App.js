import React, { useEffect, useState } from "react";
import { Formulario } from "./components/Formulario";
import { ListadoImagen } from "./components/ListadoImagen";

export const App = () => {
  //state de datos
  const [busqueda, guardarBusqueda] = useState("");
  //state guardar consulta
  const [imagenes, guardarImagenes] = useState([]);
  //state para paginar
  const [paginaactual, guardarPaginaActual] = useState(1);
  const [paginaTotal, guardarPaginaTotal] = useState(1);

  //funcion que consulta la api
  useEffect(() => {
    const consultaAPI = async () => {
      //prevenir que se ejecute si no hay busqueda
      if (busqueda === "") return;

      const paginador = 30;
      const apikey = "18772523-6d7c37fb8cd4deab034196bc8";
      const url = `https://pixabay.com/api/?key=${apikey}&q=${busqueda}&per_page=${paginador}&page=${paginaactual}`;

      const respuesta = await fetch(url);
      const resultado = await respuesta.json();

      guardarImagenes(resultado.hits);

      //calcular pagina actual
      const calcularPaginasTotal = Math.ceil(resultado.totalHits / paginador);
      guardarPaginaTotal(calcularPaginasTotal);

      //animacion
      const jumbotron = document.querySelector(".jumbotron");
      jumbotron.scrollIntoView({ behavior: "smooth" });
    };
    consultaAPI();
  }, [busqueda, paginaactual]);

  //funcion paginaAnterior
  const paginaAnterior = () => {
    const nuevaPaginaActual = paginaactual - 1;
    if (nuevaPaginaActual === 0) return;
    guardarPaginaActual(nuevaPaginaActual);
  };

  //funcion paginaAnterior
  const paginaSiguiente = () => {
    const nuevaPaginaActual = paginaactual + 1;
    if (nuevaPaginaActual > paginaTotal) return;
    guardarPaginaActual(nuevaPaginaActual);
  };

  return (
    <div className="container">
      <div className="jumbotron">
        <p className="lead text-center">Buscador de imagen</p>
        <Formulario guardarBusqueda={guardarBusqueda} />
      </div>
      <div className="row justify-content-center">
        <ListadoImagen imagenes={imagenes} />

        {paginaactual === 1 ? null : (
          <button
            type="button"
            className="btn btn-info mr-1"
            onClick={paginaAnterior}
          >
            &laquo; Anterior
          </button>
        )}
        {paginaactual === paginaTotal ? null : (
          <button
            type="button"
            className="btn btn-info"
            onClick={paginaSiguiente}
          >
            siguiente &raquo;
          </button>
        )}
      </div>
    </div>
  );
};
