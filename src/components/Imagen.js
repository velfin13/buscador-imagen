import React from "react";

export const Imagen = ({ imagen }) => {
  console.log(imagen);

  //extraer variables
  const { largeImageURL, likes, previewURL, tags, views } = imagen;

  return (
    <div className="col-12 col-sm-6 col-md-4 col-lg-3">
      <div className="card">
        <img src={previewURL} alt={tags} className="card-img-top mb-4" />
        <div className="carf-body">
          <p className="card-text">{likes} Me gusta</p>
          <p className="card-text">{views} Vistas</p>
        </div>
        <div className="card-footer">
            <a 
            href={largeImageURL}
            className="btn btn-primary btn-block"
            target="_blank"
            rel="noopener noreferrer"
            >
                Ver imagen
            </a>
        </div>
      </div>
    </div>
  );
};
