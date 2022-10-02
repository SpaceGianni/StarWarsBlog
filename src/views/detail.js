import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import DetailPersonaje from "./detailPersonajes";

const Detalle = () => {
  const urlPersonajes = "https://www.swapi.tech/api/people/"; //URL especifica para descargar info de los personajes
  const [detail, setDetail] = useState(null);
  const { uid } = useParams();

  useEffect(() => {
    //console.log(detail);
    getDetails(uid);
  }, [uid]);

  const getDetails = async (uid) => {
    try {
      const response = await fetch(urlPersonajes + uid);
      //console.log(response);
      const {
        result: { properties },
      } = await response.json();
      setDetail(properties);
      console.log("respuesta con los datos", properties);
    } catch (error) {
      console.log(error);
    }

  };
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
        
          <DetailPersonaje
            uid={uid}
            name={detail?.name}
            birth_year={detail?.birth_year}
            eye_color={detail?.eye_color}
            gender={detail?.gender}
            height={detail?.height}
            skin_color={detail?.skin_color}
            
          />
        </div>
      </div>
    </div>
  );
};

export default Detalle;
