import React from 'react'
import images from './images/img..jpg'

function Cards() {
    let mtStyle = {
        width: '18rem'
    }

    let mtStyles = {
        textAlign:'center',
        marginTop : '60px',
        marginBottom : '60px'

    }

  return (
    <>
   <div className='container' style={mtStyles}>
    <h1>
        My Projects
    </h1>
   </div>
    <div className='container' >
        <div className='row'>
        <div class="card card col-lg-3 mx-auto" style={mtStyle}>
  <img src={images} class="img-thumbnail mt-2" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go to connect</a>
  </div>
</div>
<div class="card col-lg-3 mx-auto" style={mtStyle}>
  <img src={images} class="img-thumbnail mt-2" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go to connect</a>
  </div>
</div>
<div class="card card col-lg-3 mx-auto" style={mtStyle}>
  <img src={images} class="img-thumbnail mt-2" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go to connect</a>
  </div>
</div>
        </div>
    </div>
   
    </>
  )
}

export default Cards