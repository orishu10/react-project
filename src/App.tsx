import { useState, useContext } from "react";
import "./App.css";
import Home from "./componets/Home";
import { ContextComp, MyContext } from "./componets/ContextComp.tsx";
import TripDetail from "./componets/TripDetail.tsx";
import Trips from "./componets/Trips.tsx";
import UserReg from "./componets/UserReg.tsx";
import NewTripForm from "./componets/NewTripForm.tsx";
import { BrowserRouter as Router, Routes, Route, Link, useParams } from 'react-router-dom';
import UserLogin from "./componets/UserLogin.tsx";

function App() {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/Trips" element={<Trips/>} />
      <Route path="/TripDetail/:id" element={<TripDetail/>} />
      <Route path="/NewTripForm" element={<NewTripForm/>} />
      <Route path="/UserReg" element={<UserReg/>} />
      <Route path="/UserLogin" element={<UserLogin/>} />
    </Routes>
  </Router>
  );
}

export default App;
