import React from "react";
import Personajes from "./personajes";
import Planetas from "./planetas";
import Vehiculos from "./vehiculos";
import Carousel from "../componentes/carousel";
import "../styles/home.css";

const Home = () => {
  return (
    <>
      <h3 className="titulo-blog">
        Bienvenid@ al Blog de Starwars. Puedes revisar los personajes, los
        planetas y vehículos de la saga haciendo click en "Ver más" y los puedes
        guardar en "favoritos".
      </h3>
      <Carousel/>
    </>
  );
};

export default Home;
