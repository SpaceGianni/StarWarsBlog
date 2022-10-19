import React, {useContext } from "react";
import { AppContext } from "../store/appContext";
import caracters from "../recursos/20-perosnajes-star-wars.jpeg";
import planets from "../recursos/planetas3.jpeg";
import maquinas from "../recursos/vehicles2.jpeg";
import "../styles/carousel.css";



const Carousel = () => {
  return (
<div
  id="carouselExampleCaptions"
  className="carousel slide"
  data-bs-ride="false"
>
  <div className="carousel-indicators">
    <button
      type="button"
      data-bs-target="#carouselExampleCaptions"
      data-bs-slide-to={0}
      className="active"
      aria-current="true"
      aria-label="Slide 1"
    />
    <button
      type="button"
      data-bs-target="#carouselExampleCaptions"
      data-bs-slide-to={1}
      aria-label="Slide 2"
    />
    <button
      type="button"
      data-bs-target="#carouselExampleCaptions"
      data-bs-slide-to={2}
      aria-label="Slide 3"
    />
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={caracters} className="d-block w-100 h-100" alt="Personajes de Starwars" id="imagen1_carousel" />
      <div className="carousel-caption d-none d-md-block">
        <h5>Personajes de Starwars</h5>
        <p>Presiona sobre la imagen para ver tus personajes favoritos</p>
      </div>
    </div>
    <div className="carousel-item">
      <img src={planets} className="d-block w-100 h-100" alt="..." id="imagen2_carousel" />
      <div className="carousel-caption d-none d-md-block">
        <h5>Planetas de Starwars</h5>
        <p>Tenemos una sección con todos los planetas de la serie. Haz click en la imagen para verlos</p>
      </div>
    </div>
    <div className="carousel-item">
      <img src={maquinas} className="d-block w-100 h-100" alt="..." id="imagen3_carousel" />
      <div className="carousel-caption d-none d-md-block">
        <h5>Vehiculos de Starwars</h5>
        <p>Mira los magníficos vechículos creados en la serie</p>
      </div>
    </div>
  </div>
  <button
    className="carousel-control-prev"
    type="button"
    data-bs-target="#carouselExampleCaptions"
    data-bs-slide="prev"
  >
    <span className="carousel-control-prev-icon" aria-hidden="true" />
    <span className="visually-hidden">Anterior</span>
  </button>
  <button
    className="carousel-control-next"
    type="button"
    data-bs-target="#carouselExampleCaptions"
    data-bs-slide="next"
  >
    <span className="carousel-control-next-icon" aria-hidden="true" />
    <span className="visually-hidden">Siguiente</span>
  </button>
</div>



  );
};

export default Carousel;
