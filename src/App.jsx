import {useState } from "react"
import Pipe from "./Pipe"

function App(){
  const [hight,setHight] = useState(0)
  const [weight,setWeight] = useState(0)
  const [result,setResutl] = useState(0)

  function handleOperation(){
    if(!hight && !weight) return
    setResutl(weight / ((hight / 100) ** (hight / 100)))
  }

  //start of Project
  return (
    <div className="container">
      <h1 className="BMI-title">BMI-CHECK</h1>
      <div className="form">
        <div className="form-group" >
            <label>Height</label>
            <input type="number" id="hight" onChange={(e)=>setHight(e.target.value)} placeholder="cm" required/>
         </div>
        <div className="form-group">
            <label>Weight</label>
            <input type="number" id="weight" onChange={(e)=>setWeight(e.target.value)} placeholder="kg" required/>
        </div>
        <button type="submit" onClick={handleOperation}>Result</button>
        <h2>{result === 0 ? '' : result <= 38 && result > 13 ? result.toFixed(2) : 'Incorrect inputs, please write the height in cm and wieght in kg'}</h2>
    </div>
    <Pipe result = {result}/>
</div>
  )
}
export default App