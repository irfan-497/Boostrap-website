import React from 'react'

function Table() {
  return (
    <>
    <hr></hr>
    <h1 style={{textAlign:"center",marginTop : "50px",marginBottom : "50px"}}>
        My Team
    </h1>
    <div className='container'>
         <table class="table table-dark table-hover">
    <thead>
      <tr>
        <th>Firstname</th>
        <th>Lastname</th>
        <th>Email</th>
        <th>Phone No</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Ch Irfan </td>
        <td>Gujjar</td>
        <td>irfangujjar3499@gmail.com</td>
        <td>03060280419</td>
      </tr>
      <tr>
        <td>Mary</td>
        <td>Moe</td>
        <td>mary@example.com</td>
        <td>98484848484</td>
      </tr>
      <tr>
        <td>July</td>
        <td>Dooley</td>
        <td>july@example.com</td>
        <td>56565656565</td>
      </tr>
    </tbody>
  </table>
    </div>
    </>
  )
}

export default Table