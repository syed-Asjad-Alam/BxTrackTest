import React, { useState } from "react"; 
import Portal from '../Portal/Portal'
import './App.css'


function App() {

  const [fname,setfname] = useState()
  const [lname,setlname] = useState()

  const [portal,setPortal] = useState(false)

  

  return (
    <div className="Main">
    {portal ? <Portal fname={fname} lname={lname} setPortal={setPortal}/> : <div>
    <div className="innerMain">
      <h3>Enter first Name</h3>
      <input value={fname}  onChange={(text) => setfname(text.target.value)}></input>
    </div>
    <div className="innerMain">
      <h3>Enter last Name</h3>
      <input value={lname} onChange ={(text) => setlname(text.target.value)}></input>
    </div>
    <button className="proceed" onClick={() => setPortal(true)}>Proceed</button>
    
  </div>}
  </div>
    
  );
}

export default App;
