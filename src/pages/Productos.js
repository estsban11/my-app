import React from "react";
import { useLocation } from "react-router-dom";

export const Productos = () => {
  let { search } = useLocation();
  let quey = new URLSearchParams(search);
  let start = quey.get("inicio");
  let end = quey.get("fin");
  console.log(start + end);
  
  return (
    <div>
      <h3>Productos</h3>
      <p>
        Mostrando productos del <b>{start}al { end}</b>
      </p>
      <button>Atras</button>
      <button>Adelante</button>
    </div>
  );
};
