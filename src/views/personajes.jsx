import React, {useContext } from "react";
import "../styles/personajes.css";
import { AppContext } from "../store/appContext";
import ComicCardPersonajes from "./comicCardPersonajes";

const Personajes = () => {


  const {store} = useContext(AppContext);

  return (
    <>
    <div className="principal-personajes d-fluid">
      <h1>Personajes</h1>
      <div className="row">  
        {!! store.personajes &&
          store.personajes.results.length > 0 &&
          store.personajes.results.map(({ name, uid }) => {
            return (
              <div className="col-md-3" key={uid} id="contenedor-cartas">
                <ComicCardPersonajes name={name} uid={uid} />
              </div>
            )
          })}
        ;
      </div>
      </div>
    </>
  );
};

export default Personajes;
