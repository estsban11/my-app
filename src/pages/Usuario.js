import React from "react";
import { useParams } from "react-router-dom";

export const Usuario = () => {
  let { username, age } = useParams();
  return (
    <div>
      <h3>Perfil del usuario</h3>
      <p>Nombre del usuario: <b>{username}</b></p>
      <p>Edad: <b>{ age}</b></p>
    </div>
  );
};
