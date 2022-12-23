import logo from './logo.svg';
import './App.css';
import Signin from './components/SignIn'
import { useState } from 'react';
import AllFlight from './components/AllFlight'
import AddFlight from './components/AddFlight'
import DelFlight from './components/DelFlight'
import 'bootstrap/dist/css/bootstrap.min.css' 
import ControlPanel from './components/ControlPanel'
import SortFlight from './components/SortFlight'
import {HashRouter,Routes,Route} from 'react-router-dom'
import { useEffect } from 'react';



function App() {


  const [planOpt,setPlenOpt] = useState([])
  const [sort, setSort] = useState("");
  const [tempFlight,setTempFlight] = useState([])
  const [flag,setFlag]=useState(false)
  const [newFlight,setNewFlights] = useState([])
  const [vall, setVal] = useState("");

  useEffect(()=>{
    fetch('/getData').then((res)=>{
      return res.json()
    }).then((data)=>{
      setTempFlight(data)
    })
    },[flag])
  

  const del = (index)=>{
    let temp = planOpt.filter((val,i)=>(i != index)) 
    setPlenOpt([...temp])
fetch('/delFlight',{
  headers:{  'Accept': 'application/json',
  'Content-Type': 'application/json'},
  method:'post',
  body:JSON.stringify({
  flightDel:temp
  })
}).then((res)=>{
 return res.json()
}).then((data)=>{
  setFlag(!flag)
})

  }
  

const addPlan = (n,c,p)=>{
let temp = {
  id:n,
  company:c,
  passengerNumaber:p
}
if(temp.id == ''){
  document.getElementById('inpt1').style.borderColor = 'red'
  return false
}
if(temp.company == ''){
  document.getElementById('inpt2').style.borderColor = 'red'
  return false 
}
if(temp.passengerNumaber == ''){
  document.getElementById('inpt3').style.borderColor = 'red'
  return false
}
if(isNaN(temp.id)){
  alert('the id not a number')
  return false
}
if(temp.id.length >= 5){
  alert('the ength of id eror')
  return false
}
if(temp.passengerNumaber >= 1000){
  alert('the passengers on the plan up to 1000 people ')
  return false
}

  if(temp.company !=  temp.company.toLowerCase()){
  alert('the company need to be small leters')
  return false
    
  }
  if(!isNaN(temp.company)){
    alert('number Illegal on comapny')
    return false
  }

  setPlenOpt([...planOpt,temp])
  



fetch('/addFlight',{
  headers:{  'Accept': 'application/json',
'Content-Type': 'application/json'},
method:'post',
body:JSON.stringify({
  flightAdd:temp
})
}).then((res)=>{
 return res.json()
}).then((data)=>{
  setFlag(!flag)
})
}


const menu = ()=>{
  if(flag === true){
    return <ControlPanel    />
  }
}

useEffect(()=>{


  if (sort === "") {
    setTempFlight([]);
  }
  if (sort === "low") {
setTempFlight([...planOpt].sort((a,b)=>a.id - b.id))
  }
  if (sort === "high") {
    setTempFlight([...planOpt].sort((a,b)=>b.id - a.id))
  }
},[sort])

useEffect(() => {

  const newFlight = planOpt.filter((value) => {
    return value.company.includes(vall);
  });
  setNewFlights(newFlight);
}, [vall]);


const select = () => {
  return (
    <div id='divSelsect'>
      <select onChange={(e) => setSort(e.target.value)}>
        <option value="">select flight number</option>
        <option value={"low"}>low to high</option>
        <option value={"high"}>high to low</option>
      </select>
    </div>
  );
};


const lockFlight = ()=>{
  return(
  <input id='input' type='serch' placeholder='Enter company Name' onChange={(e)=>setVal(e.target.value)}/>
  )
}






  return (
    <div className="App">
      
<HashRouter> 
<h1>Flight Control</h1>
{menu()}    
<Routes>

  <Route path='/'  element = {<Signin   setFlag = {setFlag}/>}  />
<Route path='/controlPanel' element = {<ControlPanel   />}              />
  {planOpt.map((val,index)=>{
 return  <Route path='/controlPanel/allFlight'  element = {<AllFlight val = {vall} newFlight = {newFlight} lockFlight = {lockFlight} addPlan ={addPlan} planOpt = {planOpt} id = {val.id} company = {val.company} numberFlight = {val.passengerNumaber} index = {index}  />}  />
  })}

  <Route path='/controlPanel/add' element = {<AddFlight planOpt = {planOpt}  addPlan = {addPlan}  />} />
  
   <Route path= '/controlPanel/sort' element =  {<SortFlight  select = {select}   addPlan = {addPlan}  planOpt = {planOpt}    tempFlight = {tempFlight} sort={sort}  />} />

  {planOpt.map((val,index)=>{
  return <Route  path='/controlPanel/delFlight'  element = {<DelFlight planOpt = {planOpt} del = {del}  id = {val.id} company = {val.company} passengerNumaber = {val.passengerNumaber} index = {index}    />}  />
  

  })}

</Routes>
</HashRouter>




    </div>
  );
}

export default App;
