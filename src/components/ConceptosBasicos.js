import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Acerca } from "../pages/Acerca";
import { Home } from "../pages/Home";
import { Contacto} from "../pages/Contacto";
import { Menu } from "./Menu";
import { Usuario } from "../pages/Usuario";
import { Error404 } from "../pages/Error404";
import { Productos } from "../pages/Productos";

export const ConceptosBasicos = () => {
  return (
    <div>
      <h1>Conceptos basicos</h1>
      <BrowserRouter>
        <Menu />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/acerca" element={<Acerca />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/usuario/:username" element={<Usuario />} />
          <Route path="/productos" element={ <Productos/>} />
          <Route path="*" element={ <Error404/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};
