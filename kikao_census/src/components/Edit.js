import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { patchSomeData } from "./Functions";

const EditStudentRecord = () => {
    const navigate = useNavigate()
    const location=useLocation()
    const {elem}=location.state
    const [formData, setFormData] = useState(
    {
      name:elem.name,
      specialization:elem.specialization,
      id:elem.id,
      employer:elem.employer,
      email:elem.email
    }
  )
  function handleChange(e){
    setFormData({...formData, [e.target.name]:e.target.value})
  }
  
  function handleSubmit(e){
    e.preventDefault()
    // console.log(JSON.stringify(formdata))
    patchSomeData(url,formData,elem)
      .then(data=>navigate("/"))
      .catch(console.error)
  }
  return (
    
    <div className="form">
    <h2>Edit  details</h2>
    <div className="container">
        <form id="student-form" onSubmit={handleSubmit}>
            <label for="name">Name</label>
            <input type="text" id="name" name="name" value={formData.name} onChange={handleChange}/>

            <label for="name">Id</label>
            <input type="number" id="id" name="adm_no" value={formData.id} onChange={handleChange}/>

            <label for="name">Employer</label>
            <input type="number" id="employer" name="course_id" value={formData.employer} onChange={handleChange}/>

            <label for="name">Specialization</label>
            <input type="text" id="specialization" name="class_name" value={formData.specialization} onChange={handleChange}/>

            <label for="name">Email</label>
            <input type="email" id="email" name="email" value={formData.email} onChange={handleChange}/>

            <button id="btn" type="submit">Edit </button>
        </form>
    </div>
    </div>
    
  );
};
export default EditStudentRecord;