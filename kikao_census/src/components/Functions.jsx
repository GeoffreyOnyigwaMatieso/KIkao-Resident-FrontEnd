    //Abstract FETCH

    function fetchData(url){
     let result;
        useEffect(()=>{
        result =fetch(url)
        .then (response=>response.json())
       return result;
        },[])
        

    }

    //Abstract PATCH

    function patchSomeData(endPointUrl,element,dataToPatch){

    let result=fetch(endPointUrl + `/${element.id}`,
        {
          method:"PATCH",
          headers:{
            "Content-Type":"application/json",
            "Application":"application/json"
          },
          body:JSON.stringify(dataToPatch)
        }
        )
        .then(res=>res.json())

        return result;
    }

 export {fetchData,patchSomeData};