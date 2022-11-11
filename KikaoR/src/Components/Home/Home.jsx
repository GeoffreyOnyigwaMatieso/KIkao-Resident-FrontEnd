import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap"
import './Home.css'

function Home() {
  return (
    // <div>
    //   <div className="getstarted">
    //             </div>
    //             <div class="text-center">
    //             <img src="Images/logo.png" alt ="" img-fluid/>
    //             </div>
    //         </div>
    <div className='container-fluid my-6'>
      <div className="row d-flex justify-content-center">
        <div className='col-md-6'>
                <img src="Images/bgone.png" alt="" img-fluid/>    
        </div>
        <div className='col-md-6'>
                <h1 className="ubuntu my-4">Rick & <span className="text-primary">Morty</span> </h1>
                    <span style={{color:'White'}}>
                    <p class="fs-6 text-dark fw-bold font-monospace" > Rick and Morty is an American adult animated science <br />fiction sitcom created by Justin Roiland and Dan 
                     <br />Harmon for Cartoon Network's late night programming block Adult swim </p>
                    </span>
        </div>

      </div>

    </div>
    
  )
}

export default Home


