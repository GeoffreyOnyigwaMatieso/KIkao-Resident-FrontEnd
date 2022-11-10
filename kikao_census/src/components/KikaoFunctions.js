

   const fetchUrl=" http://localhost:3000/employees";
  
 
   
       //fetch abstraction
   const fetchData = async (url) => {
       const response = await fetch(url)
       if (!response.ok) {
         throw new Error('Data coud not be fetched!')
       } else {
         return response.json()
       }
   }
   
   
   //POST abstraction
   const postData=(url,dataToPost)=>fetch(url, {
       method: "POST",
       headers: {
         "Content-Type": "application/json",
       },
       body: JSON.stringify(dataToPost),
     });
   
   
     const patchSomeData = (endPointUrl,element,dataToPatch)=>{
   
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
   
   
    
   
   export  {fetchData,postData,patchSomeData,fetchUrl};