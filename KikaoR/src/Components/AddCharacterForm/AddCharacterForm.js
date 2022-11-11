import React, {useState} from "react";

function AddCharacterForm({charaterForm}) {
    const [name, setName] = useState("");
    const [status, setStatus] = useState("");
    const [LastKnownLocation, setLastKnownLocation] = useState("");
    const [Firstseenin, setFirstseenin] = useState("")

    function handleSubmit(e){
        // prevent form default
        e.preventDefault();
        // structuring our object for POST HTTP Verb
        const charItem = {
            name:name,
            status:status,
            LastKnownLocation:LastKnownLocation,
            Firstseenin:Firstseenin
        }
        post(charItem)
    }

    function post (data){
        fetch("http://localhost:8001/charactersprofile", {
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
        <input type="text" name="name" placeholder="Land" value = {name} onChange ={(e) =>setName(e.target.value)}/>
        <input type="text" name="status" placeholder="Locations" value = {status} onChange={(e)=>setStatus(e.target.value)} />
        <input type="text" name="LastKnownLocation" placeholder="Size" value = {LastKnownLocation} onChange={(e) => setLastKnownLocation(e.target.value)}/> 
      </div>
      <button type = "submit" className="ui button">
        Add Land
      </button>
    </form>
  </div>
  )
}

export default AddCharacterForm