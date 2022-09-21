import React from 'react'
import { Link, Route, Routes } from "react-router-dom";


export const ReactTopis = () => {
  return (
    <div>
      <h1>React Topis</h1>
      <ul>
        <li>
         <Link to="/react/jsx">JSX</Link>
        </li>
        <li>
          <Link to="/react/props">Props</Link>
      </li>
      </ul>
      <Routes>
        <Route path='' element={<>React docs</>} /> 
        <Route path='/jsx' element={<>Jsx docs</> } />
      </Routes>
    </div>
  );
}
