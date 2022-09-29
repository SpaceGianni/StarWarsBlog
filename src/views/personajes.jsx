import React, { useEffect, useState } from "react";
import ComicCard from "../componentes/comicCard";

const Personajes = () => {
  const urlPersonajes = "https://www.swapi.tech/api/people/"; //URL especifica para descargar info de los personajes
  const [personajes, setPersonajes] = useState(null); //variable que guardará la info de los personajes

  useEffect(() => {
    getPersonajes();
  }, []);

  const getPersonajes = async () => {
    try {
      const response = await fetch(urlPersonajes);
      console.log(response);
      const { results } = await response.json();
      setPersonajes(results);
      console.log(results);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <h1>Personajes</h1>
      <div className="container">
        {!!personajes &&
          personajes.length > 0 &&
          personajes.map(({ name, uid }) => {
            return (
              <div className="col-md-3" key={uid}>
                <ComicCard name={name} uid={uid} />
              </div>
            );
          })}
        ;
      </div>
    </>
  );
};

export default Personajes;
