import {useState} from 'react'
import CalcButton from "./component/CalcButton"

function App() {

  const [result, setResult] = useState('');

  function handleCalculations (value) {
    console.log(value)
    if (value === 'RESET') {
      setResult('')
    } else
    if (value === 'DEL') {
      setResult('')
    } else 
    if (!isNaN(value)){
      setResult(prevValue => prevValue + value)
    }
  }


  return (
    <div>
      <div className="container">
        <div className="row">
          <h1 className="col">calc</h1>
          <p className="col">THEME <span>switch with 3 cases</span></p>
        </div>
        <div className="row">
          <input disabled className="col" type="string" value={result}/>
        </div>
      </div>
      <div className="container"> 
        <div className="row">
          <CalcButton value='7' calcClick={handleCalculations}/>
          <CalcButton value='8' calcClick={handleCalculations}/>
          <CalcButton value='9' calcClick={handleCalculations}/>
          <CalcButton value='DEL' calcClick={handleCalculations}/>
        </div>
        <div className="row">
        <CalcButton value='4' calcClick={handleCalculations}/>
        <CalcButton value='5' calcClick={handleCalculations}/>
        <CalcButton value='6' calcClick={handleCalculations}/>
        <CalcButton value='+' calcClick={handleCalculations}/>
        </div>
        <div className="row">
        <CalcButton value='1' calcClick={handleCalculations}/>
        <CalcButton value='2' calcClick={handleCalculations}/>
        <CalcButton value='3' calcClick={handleCalculations}/>
        <CalcButton value='-' calcClick={handleCalculations}/>
        </div>
        <div className="row">
        <CalcButton value='.' calcClick={handleCalculations}/>
        <CalcButton value='0' calcClick={handleCalculations}/>
        <CalcButton value='/' calcClick={handleCalculations}/>
        <CalcButton value='x' calcClick={handleCalculations}/>
        </div>
        <div className="row">
        <CalcButton value='RESET' calcClick={handleCalculations}/>
        <CalcButton value='=' calcClick={handleCalculations}/>
        </div>
      </div>
    </div>
  )
}

export default App
