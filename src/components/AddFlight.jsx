import React ,{useState} from 'react'

export default function AddFlight(props) {

const [id ,setNumberFlight] = useState('')
const [company,setcompanyName]= useState ('')
const [passengerNumaber,setpassengerNumaber] = useState('')



  return (
    <div >
      <h2>Add Flight</h2>
<input id='inpt1' onChange={(e)=>{setNumberFlight(e.target.value)}} type="text" placeholder='number flight' />
<br />
<input id='inpt2'  onChange={(e)=>{setcompanyName(e.target.value)}} type="text"placeholder='company flight' />
<br />
<input id='inpt3' onChange={(e)=>{setpassengerNumaber(e.target.value)}} type="text" placeholder='pasenger Number' />
<br />
<button id='btn1' className="btn btn-dark" onClick={()=>{props.addPlan(id,company,passengerNumaber)}}>Add</button>

    </div>
  )
}
