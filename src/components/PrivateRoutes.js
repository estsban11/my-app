import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

export const PrivateRoutes = (props) => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={props.path} element={props.element} />
      </Routes>
    </BrowserRouter>
  );
}
