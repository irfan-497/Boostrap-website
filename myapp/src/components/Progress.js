import React from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar';

function  Progress() {
  return (
    <div className='container mt-5'>

        <h1 style={{textAlign:"center"}}>
            My Skills
        </h1>
        <span style={{fontSize:"25px",fontFamily:"Cursive"}} >HTML</span>
      <ProgressBar variant="info" now={90} style={{marginBottom:"10px"}} />
      <span style={{fontSize:"25px", fontFamily:"Cursive"}} >CSS</span>
      <ProgressBar variant="info" now={80} style={{marginBottom:"10px"}} />
      <span style={{fontSize:"25px",fontFamily:"Cursive"}} >Bootstrap</span>
      <ProgressBar variant="warning" now={90} style={{marginBottom:"10px"}}/>
      <span style={{fontSize:"25px",fontFamily:"Cursive"}} >JavaScript</span>
      <ProgressBar variant="success" now={80} style={{marginBottom:"10px"}}/>
      <span style={{fontSize:"25px",fontFamily:"Cursive"}} >React Js</span>
      <ProgressBar variant="danger" now={60} style={{marginBottom:"10px"}}/>
      <span style={{fontSize:"25px",fontFamily:"Cursive"}} >Node Js</span>
      <ProgressBar variant="arning" now={65} style={{marginBottom:"10px"}}/>
      <span style={{fontSize:"25px",fontFamily:"Cursive"}} >Express Js</span>
      <ProgressBar variant="danger" now={90} style={{marginBottom:"10px"}}/>
      <span style={{fontSize:"25px",fontFamily:"Cursive"}} >MonGoDB</span>
      <ProgressBar variant="info" now={90} style={{marginBottom:"10px"}}/>
    
    </div>
  );
}

export default Progress;