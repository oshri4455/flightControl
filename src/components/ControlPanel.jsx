import React from 'react'
import { Link } from 'react-router-dom'

export default function ControlPanel() {

  return (
    <div id='div'>

<Link to={'/controlPanel/allFlight'}><button id='btn'  className="btn btn-dark" >כל הטיסות</button></Link> 
<br /> 
<Link to={'/controlPanel/sort'}><button id='btn' className="btn btn-dark" >מיון טיסות</button></Link>
<br />
<Link to={'/controlPanel/add'}><button id='btn' className="btn btn-dark"  >הוסף טיסה</button></Link>
<br />
<Link to={'/controlPanel/delFlight'} ><button id='btn' className="btn btn-dark" >מחק טיסה</button></Link>



    </div>
  )
}
