import React from 'react'
import {Carousel} from 'react-bootstrap';

import logo from './images/1.jpg'
import logo2 from './images/2.jpg'


// import './contact.css'
function BootstrapCarousel() {

  let myStyle={
    marginTop:'100px'
  }

  let myStyles = {
    marginRight : '40px',
    float : 'right',
    width: '200px',
    height:'auto',
  }

  
  let myStyless = {
    marginLeft :'20px',
    width:'100%',
    height:'560px'
    // width: '100% ',
    // height: '60vh'
  }


  return (
<>
    <div className='container mt-5'>
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block" style={ myStyless}
          src={logo}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block " style={ myStyless}
          src={logo2}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block " style={ myStyless}
          src={logo}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>

   </div>
    <div className='container' style={myStyle}>
        <h4>
            CH IRFAN  <span className='bg'>GUJJAR</span>
        </h4>

        <p className='mt-3'>
            MERN STACK DEVELOPER
        </p>
        <button type="button" class="btn btn-success">Hire me</button>
    </div>
    <div className='container mt-5 col-md-1 ' style={myStyles}>
    {/* <img src={images} class="img-fluid " alt="..."  /> */}
    </div>

   </> 
  )
}
export default BootstrapCarousel