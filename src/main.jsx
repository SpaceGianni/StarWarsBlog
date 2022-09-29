import React from "react";
import Navbar from "./componentes/navbar";
import Home from "./views/home";
import Personajes from "./views/personajes";
import Planetas from "./views/planetas";
import Vehiculos from "./views/vehiculos";
import Notfound from "./views/notfound";
import Detail from "./views/detail";
import { BrowserRouter, Route, Routes } from 'react-router-dom';


const Main = () =>{
    const apiURL = "https://www.swapi.tech/api";
    return (
        <>
         <BrowserRouter>
        <Navbar/>
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/:uid/detail" element={<Detail/>} />
            <Route path="/personajes" element={<Personajes/>} />
            <Route path="/planetas" element={<Planetas/>} />
            <Route path="/vehiculos" element={<Vehiculos/>} />
            <Route path="*" element={<Notfound/>} />
        </Routes>
        </BrowserRouter>
        </>
    )
}

export default Main;