import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Acerca } from "../pages/Acerca";
import { Home } from "../pages/Home";
import { Contacto} from "../pages/Contacto";
import { Menu } from "./Menu";
import { Usuario } from "../pages/Usuario";
import { Error404 } from "../pages/Error404";
import { Productos } from "../pages/Productos";
import { ReactTopis } from "../pages/ReactTopis";
import { Login } from "../pages/Login";
import { Dashboard } from "../pages/Dashboard";
import { PrivateRoutes } from "./PrivateRoutes";

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
          <Route path="/productos" element={<Productos />} />
          <Route path="/react" element={<ReactTopis />} />
          <Route path="/about" element={<Navigate to="/acerca" />} />
          <Route path="/contact" element={<Navigate to="/contacto" />} />
          <Route path="/login" element={<Login />} />
          <PrivateRoutes path='/dashboard' element={ <Dashboard/>} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};
