import React, { useState } from "react"; 
import Portal from '../Portal/Portal'


function App() {

  const [fname,setfname] = useState()
  const [lname,setlname] = useState()

  const [portal,setPortal] = useState(false)

  

  return (
    <div>
    {portal ? <Portal fname={fname} lname={lname} setPortal={setPortal}/> : <div>
    <div>
      <h3>Enter first Name</h3>
      <input value={fname}  onChange={(text) => setfname(text.target.value)}></input>
    </div>
    <div>
      <h3>Enter last Name</h3>
      <input value={lname} onChange ={(text) => setlname(text.target.value)}></input>
    </div>
    <button onClick={() => setPortal(true)}>Proceed</button>
    
  </div>}
  </div>
    
  );
}

export default App;
