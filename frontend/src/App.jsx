import React, { useContext } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import { AppContext } from "./Context/AppContext";
import Home from "./Pages/home/Home";
import Products from "./Pages/products/Products";
import {Login} from "./Pages/login/Login";

function App() {
  const {user, setUser} = useContext(AppContext) 

  return (
    <>
      <Routes>
        <Route path="/login" element={
          user.logged ?
            <Navigate to="/home" />
          : 
            <Login />
        } />
        <Route path="/products" element={<Products />} />
        <Route exact path="/home" element={
          user.logged ?
            <Home />
          : 
            <Navigate to="/login" />
        }/>
      </Routes>
    </>
  );
}

export default App;
