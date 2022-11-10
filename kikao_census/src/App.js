import React, { useState,useEffect } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import { fetchData, fetchUrl} from "./components/KikaoFunctions";
import Home from "./components/Home";
import Employee from "./components/Employee";
import Employer from "./components/Employer";
import Edit from "./components/Edit";




const App = () => {

  const [employees,setEmployees]=useState([])

  useEffect(()=>{

    const fetchEmployees=()=>{
      fetchData(fetchUrl)
   
    .then((data)=>{setEmployees(data)})
    .catch((error)=>console.log("Error",error))
  }
    fetchEmployees();
    },[]);
    console.log("Employees are",employees)
   
    const listItems = employees.map(
      (element) => {
          return (
              <ul key={element.id}>
                  <li style={{ 
                      fontWeight: 'bold', 
                      color: 'red' }}
                  >
                      {element.id}
                  </li>
                  <li>{element.firstName}</li>
              </ul>
          )
      }
  )

    
   return (
     <React.Fragment>
    {listItems}
     </React.Fragment>
  );
};

export default App;
