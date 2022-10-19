import React from "react";
import Navbar from "./componentes/navbar";
import Home from "./views/home";
import Personajes from "./views/personajes";
import Planetas from "./views/planetas";
import Vehiculos from "./views/vehiculos";
import Notfound from "./views/notfound";
import { BrowserRouter, Route, Routes,useParams  } from 'react-router-dom';
import injectContext from "./store/appContext";
import DetailPersonaje from "./views/detailPersonajes";
import DetailPlaneta from "./views/detailPlaneta";
import DetailVehiculo from "./views/detailVehiculo";



const Main = () =>{
    

    return (
        <>
       
         <BrowserRouter>
        <Navbar/>
        <Routes>
            <Route path="/vehiculo/:uid/detail" element={<DetailVehiculo />} />
            <Route path="/personaje/:uid/detail" element={<DetailPersonaje />} />
            <Route path="/planeta/:uid/detail" element={<DetailPlaneta />} />
            <Route path="/personajes" element={<Personajes/>} />
            <Route path="/planetas" element={<Planetas/>} />
            <Route path="/vehiculos" element={<Vehiculos/>} />
            <Route path="/" element={<Home/>} />
            <Route path="*" element={<Notfound/>} />
        </Routes>
        </BrowserRouter>
        
       
        </>
    )
}

export default injectContext(Main);