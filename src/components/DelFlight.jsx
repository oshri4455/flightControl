import React from 'react'
import { useState } from 'react'

export default function DelFlight(props) {
    const [numberFlight,setNumberFlight] = useState('')

    const checkDel = ()=>{
        if(numberFlight != props.numberFlight){
            alert('the number flight found')
            return
        }
        else{
            props.del(numberFlight)
        }
    }
  return (
    <div>
        <h2>Del Flight</h2>
        
<input id='inptDel' onChange={(e)=>{setNumberFlight(e.target.value)}} type="text" placeholder='numberFlight' />
<br />
<button id='btnDel' onClick={()=>{props.del(props.index)}} className="btn btn-dark"  >del</button>



    </div>
  )
}
