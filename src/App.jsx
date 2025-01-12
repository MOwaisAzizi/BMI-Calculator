import { useEffect, useState } from "react"
import Pipe from "./Pipe"

function App(){
  //states
  const [hight,setHight] = useState(0)
  const [weight,setWeight] = useState(0)
  const [result,setResutl] = useState(0)
  const [catagory,setCatagory] = useState('')

  function handleOperation(){
    if(!hight && !weight) return
    setResutl(weight / (hight * hight))
  }

  useEffect(function(){
    if(result < 17.1 && result >= 15 ) setCatagory('Underweight')
      else if(result >= 17.1 && result < 23.2 ) setCatagory('Normal')
      else if(result >= 23.2 && result < 38 ) setCatagory('overweight')
      else if( (result < 15 || result >= 38) && result !== 0 ) setCatagory('uncurrect input detected')
  },[result])

  return (
    <div className="container">
      <div className="form">
        <div className="form-group" >
            <label>Hight</label>
            <input type="number" id="hight" onChange={(e)=>setHight(e.target.value)} placeholder="cm" required/>
         </div>
        <div className="form-group">
            <label>Weight</label>
            <input type="number" id="weight" onChange={(e)=>setWeight(e.target.value)} placeholder="kg" required/>
        </div>
        <button type="submit" onClick={handleOperation}>Result</button>
        <h2>{result === 0 ? '' : result.toFixed(2)}</h2>
        {/* <h2>{catagory}</h2> */}

    <Pipe result = {result}/>

    </div>
</div>
  )
}
export default App