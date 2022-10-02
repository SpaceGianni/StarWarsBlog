import React from "react";
import "../styles/detailPersonajes.css";


const DetailPersonaje = ({
  uid,
  name,
  birth_year,
  eye_color,
  gender,
  height,
  skin_color,
}) => {
  return (
    <div className="contenedor-general card mb-3">
      <img src="https://img.freepik.com/free-vector/futuristic-technology-dark-blue-background_87202-1321.jpg?w=996&t=st=1664725745~exp=1664726345~hmac=7af412aafd8ffb6b5e29b2ff119585847ac39435946285d3c19df4d5d836a8b7" className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
          deserunt harum, natus odio sequi delectus ea velit praesentium, sit,
          sunt quasi vel. Commodi, sapiente dolorem excepturi quasi cumque
          soluta quia!
          <br />
          <br />
          Algunos datos: <br />
          <ul>
            <li>Año de nacimiento: {birth_year}</li>
            <li>Color de ojos: {eye_color}</li>
            <li>Género: {gender}</li>
            <li>Altura: {height}</li>
            <li>Color de piel: {skin_color}</li>
          </ul>
        </p>
        <p className="card-text">
          <small className="text-muted">{uid}</small>
        </p>
      </div>
    </div>
  );
};

DetailPersonaje.defaultProps = {
  uid : "00123",
  name : "Alien", 
  birth_year : "2000BC",
  eye_color: "blue",
  gender: "Something",
  height : "2m",
  skin_color : "transparent"
}


export default DetailPersonaje;
