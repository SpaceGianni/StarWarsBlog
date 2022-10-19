import React, { useContext } from "react";
import "../styles/personajes.css";
import { AppContext } from "../store/appContext";
import ComicCardVehiculos from "./comicCardVehiculos";

const Vehiculos = () => {

  const { store } = useContext(AppContext);

  return (
    <>
      <div className="principal-personajes">
        <h1>Vehículos</h1>
        <div className="row">
          {!!store.vehiculos.results &&
            store.vehiculos.results.length > 0 &&
            store.vehiculos.results.map(({ name, uid }) => {
              return (
                <div className="col-md-3" key={uid} id="contenedor-cartas">
                  <ComicCardVehiculos name={name} uid={uid} />
                </div>
              );
            })}
          ;
        </div>
      </div>
    </>
  );
};

export default Vehiculos;
