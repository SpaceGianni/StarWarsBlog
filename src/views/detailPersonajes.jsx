import React, { useContext, useEffect } from "react";
import "../styles/detailPersonajes.css";
import { AppContext } from "../store/appContext";
import { useParams } from "react-router-dom";

const DetailPersonaje = () => {
  const { uid } = useParams();
  const { store, actions } = useContext(AppContext);

  useEffect(() => {
    actions.getPersonajeById(`https://www.swapi.tech/api/people/${uid}`);
  }, []);

  useEffect(() => {
    actions.getPersonajeById(`https://www.swapi.tech/api/people/${uid}`);
  }, [uid]);

  return (
    <div className="contenedor-general card mb-3">
      <img
        src="https://img.freepik.com/free-vector/futuristic-technology-dark-blue-background_87202-1321.jpg?w=996&t=st=1664725745~exp=1664726345~hmac=7af412aafd8ffb6b5e29b2ff119585847ac39435946285d3c19df4d5d836a8b7"
        className="card-img-top"
        alt="..."
      />
      <div className="card-body">
        <h5 className="card-title">{store.personaje?.result?.properties?.name}</h5>
        <p className="card-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
          deserunt harum, natus odio sequi delectus ea velit praesentium, sit,
          sunt quasi vel. Commodi, sapiente dolorem excepturi quasi cumque
          soluta quia!
          <br />
          <br />
          Algunos datos: <br />
          <ul>
            <li><i>Año de nacimiento:</i>{store.personaje?.result?.properties?.birth_year}</li>
            <li><i>Color de ojos:</i>{store.personaje?.result?.properties?.eye_color} </li>
            <li><i>Género:</i> {store.personaje?.result?.properties?.gender} </li>
            <li><i>Altura:</i>{store.personaje?.result?.properties?.height}  </li>
            <li><i>Color de piel:</i>{store.personaje?.result?.properties?.skin_color}  </li>
          </ul>
        </p>
        <p className="card-text">
          <small className="text-muted">{store.personaje?.result?.properties?.uid}</small>
        </p>
      </div>
    </div>
  );
};

DetailPersonaje.defaultProps = {
  uid: "00123",
  name: "Alien",
  birth_year: "2000BC",
  eye_color: "blue",
  gender: "Something",
  height: "2m",
  skin_color: "transparent",
};

export default DetailPersonaje;
