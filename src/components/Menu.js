import React from "react";
import { Link, NavLink } from "react-router-dom";

export const Menu = () => {
  return (
    <nav>
      <ol>
        <li>
          <span>Componente Link</span>
          <br />
          <Link to="/">Home</Link>
          <Link to="/acerca">Acerca</Link>
          <Link to="/contacto">Contacto</Link>
        </li>
        <li>
          <span>NavLink</span>
          <br />
          <NavLink to="/" activeClassName="active">
            Home
          </NavLink>
          <NavLink to="/acerca" activeClassName="active">
            Acerca
          </NavLink>
          <NavLink to="/contacto" activeClassName="active">
            Contacto
          </NavLink>
        </li>
        <li>
          <span>Paramentros</span>
          <br />
          <Link to="/usuario/esteban">Esteban</Link>
        </li>
        <li>
          <span>Parametros consulta</span>
          <br />
          <Link to="/productos">Productos</Link>
        </li>
        <li>
          <span>Redirecciones: </span>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <span>Rutas anidadas</span>
          <Link to="/react">React</Link>
        </li>
        <li>
          <span>Rutas privadas:</span>
          <Link to='/login'>Login</Link>
          <Link to='/dashboard'>DashBoard</Link>
        </li>
      </ol>
    </nav>
  );
};
