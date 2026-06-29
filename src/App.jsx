import React, { useState } from "react"
const App = () =>{
 const [a,setA] = useState(20)
 const changeA =()=> {
  console.log("chal gaya")
  setA=(20)
 }
return (
  <div> 
    <h1>value of a is {a}</h1>
    <button onClick={changeA}>Change user</button>
  </div>
)
}
export default App
