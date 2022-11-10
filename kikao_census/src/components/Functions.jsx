import { useEffect } from "react";

    //Abstract fetch 

    function fetchData(url){
     let result;
        useEffect(()=>{
        result =fetch(url)
        .then (response=>response.json())
       return result;
        },[])
        

    }

 export {fetchData};