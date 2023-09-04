import {useState} from 'react'
import CalcButton from "./component/CalcButton"

function App() {

  const [calculator, setCalculator] = useState({
    displayValue: '0',
    storedValue: 0,
    operator: '',
    calculating: false
  });

  function handleCalculations (value) {
    if (value === 'RESET') {
      setCalculator({
        displayValue: '0',
        storedValue: 0,
        operator: '',
        calculating: false
      })
    } else
    if (value === '.' && !calculator.displayValue.includes('.')) {
      setCalculator(prevState => {
        return {...prevState,
          displayValue: prevState.displayValue + value}
      })
    } else
    if (value === 'DEL') {
      setCalculator(prevState => {
        return {...prevState,
        displayValue: '0'}
      })
    }  else
    if (!isNaN(value) && calculator.displayValue === '0'){
      setCalculator(prevState => {
        return {...prevState,
        displayValue:value}
      })
    } else 
    if(calculator.calculating === false) {
      if (value === '+' || value === '-' || value === 'x' || value === '/') {
        setCalculator(prevState => {
          return {...prevState,
            storedValue: prevState.displayValue,
            operator: value
          }
        })
      }
      if(!isNaN(value) && calculator.operator !== '') {
        setCalculator(prevState => {
          return {...prevState,
          displayValue: value,
          calculating: true}
        })
      } else
      if (!isNaN(value)){
        setCalculator(prevState => {
          return {...prevState,
          displayValue: prevState.displayValue + value}
        })
      } 
    } else
    if(calculator.calculating === true) {
      if(value === '=') {
        if(calculator.operator === '+') {
          setCalculator(prevState => {
            return { ...prevState,
            displayValue: String(Number(prevState.storedValue) + Number(prevState.displayValue)),
            storedValue: 0,
            operator: '',
            calculating: false
          }})
        } else
        if(calculator.operator === '-') {
          setCalculator(prevState => {
            return { ...prevState,
            displayValue: String(Number(prevState.storedValue) - Number(prevState.displayValue)),
            storedValue: 0,
            operator: '',
            calculating: false
          }})
        } else
        if(calculator.operator === 'x') {
          setCalculator(prevState => {
            return { ...prevState,
            displayValue: String(Number(prevState.storedValue) * Number(prevState.displayValue)),
            storedValue: 0,
            operator: '',
            calculating: false
          }})
        } else
        if(calculator.operator === '/' && calculator.displayValue !== '0') {
          setCalculator(prevState => {
            return { ...prevState,
            displayValue: String(Number(prevState.storedValue) / Number(prevState.displayValue)),
            storedValue: 0,
            operator: '',
            calculating: false
          }})
        } 
      } else 
      if(value === '+' || value === '-' || value === 'x' || value === '/') {
        if(calculator.operator === '+') {
          setCalculator(prevState => {
            return { ...prevState,
            displayValue: String(Number(prevState.storedValue) + Number(prevState.displayValue)),
            storedValue: String(Number(prevState.storedValue) + Number(prevState.displayValue)),
            operator: value,
            calculating: false
          }})
        } else
        if(calculator.operator === '-') {
          setCalculator(prevState => {
            return { ...prevState,
            displayValue: String(Number(prevState.storedValue) - Number(prevState.displayValue)),
            storedValue: String(Number(prevState.storedValue) - Number(prevState.displayValue)),
            operator: value,
            calculating: false
          }})
        } else
        if(calculator.operator === 'x') {
          setCalculator(prevState => {
            return { ...prevState,
            displayValue: String(Number(prevState.storedValue) * Number(prevState.displayValue)),
            storedValue: String(Number(prevState.storedValue) * Number(prevState.displayValue)),
            operator: value,
            calculating: false
          }})
        } else
        if(calculator.operator === '/' && calculator.displayValue !== '0') {
          setCalculator(prevState => {
            return { ...prevState,
            displayValue: String(Number(prevState.storedValue) / Number(prevState.displayValue)),
            storedValue: String(Number(prevState.storedValue) / Number(prevState.displayValue)),
            operator: value,
            calculating: false
          }})
        }
      }  else
      if (!isNaN(value)){
        setCalculator(prevState => {
          return {...prevState,
          displayValue: prevState.displayValue + value}
        })
      } 
    }  
  }

  //'888888888888888888888888888888888888888888' max length of input

  return (
    <div>
      <div className="container">
        <div className="row">
          <h1 className="col">calc</h1>
          <p className="col">THEME <span>switch with 3 cases</span></p>
        </div>
        <div className="row">
          <input disabled className="col" type="string" value={calculator.displayValue}/>
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
