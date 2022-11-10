import React, { useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import { fetchData} from "./components/Functions";
import Home from "./components/Home";



const App = () => {

  const [employees,setEmployees]=useState([])

  fetchData(someUrl)
  .then(data=>setEmployees(data))
   return (
    <BrowserRouter>
      <NavBar>
        <Routes>
          <Route path="/" element={<Dash employees={employees}/>} />
          <Route path="/home" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard/>} />
          <Route path="/employees" element={<Employee />} />
          <Route path="/employers" element={<Employer />} />
          <Route path="/edit" element={<EditUserRecord />} />
        </Routes>
      </NavBar>
    </BrowserRouter>
  );
};

export default App;
