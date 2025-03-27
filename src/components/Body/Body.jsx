import React from 'react'
import "./Body.css"
import "./Body.js"

const Body = () => {
  return (
    <div className="tab">
    <h1>❄ Avibot Widget!</h1>
    <ul className="menu">
        <li>Input:<span><input type="number" name="input" id="numBer" placeholder='Value'required /></span> </li>

    </ul>
    <div className="box">
       <div className="btnhome">
          <button className='btn' id='bTn'>Fetch</button>
        </div> 
    </div>
  </div>
  )
}

export default Body
