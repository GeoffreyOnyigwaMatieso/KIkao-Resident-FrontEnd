import React,{useEffect,useState} from "react";
import { fetchData,fetchUrl } from "./KikaoFunctions";

function Employee() {
const [employees,setEmployees]=useState([])
    //Fetch employees

    

    return (<React.Fragment> {employees}</React.Fragment> );
}

export default Employee;