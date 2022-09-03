import React from "react";
import { useLocation, useNavigate} from "react-router-dom";

export const Productos = () => {
  let { search } = useLocation();
  let quey = new URLSearchParams(search);
  let start =  parseInt( quey.get("inicio")) || 1;
  let end = parseInt(quey.get("fin")) || 20;
  let history = useNavigate();
  const LIMIT = 20;

  const handlePrev = (e) => { 
    history({
      search: `?inicio=${start - LIMIT}&fin=${end - LIMIT}`,
    });

  }
  const handleNext = (e) => {
    history({
      search:`?inicio=${start+LIMIT}&fin=${end+LIMIT}`
    });
  };
  return (
    <div>
      <h3>Productos</h3>
      <p>
        Mostrando productos del{" "}
        <b>
          {start}al {end}
        </b>
      </p>
      {start > LIMIT && <button onClick={handlePrev}>Atras</button>}
      <button onClick={handleNext}>Adelante</button>
    </div>
  );
};
