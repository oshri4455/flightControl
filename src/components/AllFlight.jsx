import React from 'react'
import './style.css'



export default function AllFlight(props) {



  return (
   
    <div >
       {props.lockFlight()}
      <h2 id='h2'>All flight</h2>
     
<table>

<tr id='tr' >
<th className='th'>number Flight</th>
<th className='th'>company Name</th>
<th className='th'>passenger Numaber</th>
</tr>

</table>
{props.newFlight.map((val)=>{
  return  <table>
  <tr id='tr' >
  <td className='td' style={{color:'red'}}>{val.id}</td>
  <td className='td' style={{color:'red'}}>{val.company}</td>
  <td className='td'  style={{color:'red'}}>{val.passengerNumaber}</td>
  </tr >
    </table>
})}


    </div>
  )
}
