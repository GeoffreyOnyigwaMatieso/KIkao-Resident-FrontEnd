import React from "react";
import { useEffect,useState } from "react";


function Functions() {

const[fetchData,setFetchData]=useState([])
    //Abstract fetch 

    function fetchData(url){

        useEffect(()=>{
        fetch(url)
        .then (response=>response.json())
        .then ((data)=>setFetchData(data))
        .catch(console.error)
        },[])

    }


    return ( <React.Fragment> </React.Fragment>);
}

export {fetchData }default Functions;