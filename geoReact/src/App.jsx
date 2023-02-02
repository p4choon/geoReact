import './App.css'
import React from 'react'
//import ReactDOM from 'react-dom/client'
import './index.css'
import Header from "./Layout/Header";
import Footer from "./Layout/Footer";
import LoginRegister from "./auth/LoginRegister";
import { UserContext } from './userContext';
import { useState } from 'react';
import { Routes, Route } from "react-router-dom";
import NotFound from "./NotFound";
import About from "./About";
import Place from "./Places/Place";
import PlaceAdd from "./Places/PlaceAdd";
import PlaceEdit from "./Places/PlaceEdit";
import PlaceGrid from "./Places/PlaceGrid";
import PlaceList from "./Places/PlaceList";

export default function App() {
  // difere`cnai entre emprar i no emprar state

  let [authToken, setAuthToken] = useState("");

  return (
    <>
      <UserContext.Provider value={{ authToken, setAuthToken }}>
        {authToken ? (
          <>
            <Header/>
            <Routes>
              <Route path="*" element={<NotFound />} />
              <Route path="/" element={<About />} />
              <Route path="/about" element={<About />} />
              <Route path="/places/:id" element={ <Place/> } />
              <Route path="/places/add" element={ <PlaceAdd/> } />
              <Route path="/places/edit/:id" element={ <PlaceEdit/> } /> 
              <Route path="/places/grid" element={ <PlaceGrid />}  />
              <Route path="/places/list" element={ <PlaceList/> } />
            </Routes>
            <Footer/>
          </>
        ) : (
          <LoginRegister />
        )}
      </UserContext.Provider>
    </>
  );
}
