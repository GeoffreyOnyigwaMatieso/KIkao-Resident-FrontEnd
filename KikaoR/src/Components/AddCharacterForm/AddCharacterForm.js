import React, {useState} from "react";

function AddCharacterForm({charaterForm}) {
    const [land, setLand] = useState("");
    const [location, setLocation] = useState("");
    const [size, setSize] = useState("");
    

    function handleSubmit(e){
        // prevent form default
        e.preventDefault();
        // structuring our object for POST HTTP Verb
        const charItem = {
            land:land,
            location:location,
            size:size,
           
        }
        post(charItem)
    }

    function post (data){
        fetch("http://localhost:9292/land", {    
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data)
        })
        charaterForm(data)
      }

  return (
    <div className="ui segment fs-4 fw-bold mb-4">
    <form className="ui form" onSubmit = {handleSubmit}>
      <div className="inline fields">
        <input type="text" name="name" placeholder="Land" value = {land} onChange ={(e) =>setLand(e.target.value)}/>
        <input type="text" name="status" placeholder="Locations" value = {location} onChange={(e)=>setLocation(e.target.value)} />
        <input type="text" name="LastKnownLocation" placeholder="Size" value = {size} onChange={(e) => setSize(e.target.value)}/> 
      </div>
      <button type = "submit" className="ui button">
        Add Land
      </button>
    </form>
  </div>
  )
}

export default AddCharacterForm