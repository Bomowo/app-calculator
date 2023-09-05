import {useState, useEffect} from 'react'
import CalcButton from "./component/CalcButton"

function App() {

  const [calculator, setCalculator] = useState({
    displayValue: '0',
    storedValue: 0,
    operator: '',
    calculating: false
  });

  const [theme, setTheme] = useState({
    value: 1,
    class: 'blue'
  })

  useEffect (()=>{ 
    document.body.className = ''

    document.body.classList.add(theme.class);
  }, [theme])

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
        if(calculator.operator === '/' && Number(calculator.displayValue) !== 0) {
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
        if(calculator.operator === '/' && Number(calculator.displayValue) !== 0) {
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

  function handleThemeSlider (event) {
    setTheme(prevTheme => {

      let setClass = ''
      if(event.target.value === '1'){
        setClass = 'blue'
      } else
      if(event.target.value === '2') {
        setClass = 'white'
      } else
      if(event.target.value === '3'){
        setClass = 'dark'
      }
      
      return {
      ...prevTheme,
      value: event.target.value,
      class: setClass
    }})
  }

  return (
    <div>
      <div className="container display">
      <p className='theme-numbers'>1 2 3</p>
        <div className="title">
          <h1>calc</h1>
          <div className='theme-container'>
            <p className="theme">THEME</p>
            <div className="switch-toggle">
            <input type="range" onChange={handleThemeSlider} min="1" step="1" max="3" value={theme.value} id="custom-toggle" className="tgl-def"/>
            </div>
          </div>
        </div>
          <input disabled className="number" type="string" value={calculator.displayValue}/>
      </div>
      <div className="container numpad"> 
        <div className="row">
          <CalcButton cssClass="numbtn" value='7' calcClick={handleCalculations}/>
          <CalcButton cssClass="numbtn" value='8' calcClick={handleCalculations}/>
          <CalcButton cssClass="numbtn" value='9' calcClick={handleCalculations}/>
          <CalcButton cssClass='func-btn' value='DEL' calcClick={handleCalculations}/>
        </div>
        <div className="row">
        <CalcButton cssClass="numbtn" value='4' calcClick={handleCalculations}/>
        <CalcButton cssClass="numbtn" value='5' calcClick={handleCalculations}/>
        <CalcButton cssClass="numbtn" value='6' calcClick={handleCalculations}/>
        <CalcButton cssClass="numbtn" value='+' calcClick={handleCalculations}/>
        </div>
        <div className="row">
        <CalcButton cssClass="numbtn" value='1' calcClick={handleCalculations}/>
        <CalcButton cssClass="numbtn" value='2' calcClick={handleCalculations}/>
        <CalcButton cssClass="numbtn" value='3' calcClick={handleCalculations}/>
        <CalcButton cssClass="numbtn" value='-' calcClick={handleCalculations}/>
        </div>
        <div className="row">
        <CalcButton cssClass="numbtn" value='.' calcClick={handleCalculations}/>
        <CalcButton cssClass="numbtn" value='0' calcClick={handleCalculations}/>
        <CalcButton cssClass="numbtn" value='/' calcClick={handleCalculations}/>
        <CalcButton cssClass="numbtn" value='x' calcClick={handleCalculations}/>
        </div>
        <div className="row last">
        <CalcButton cssClass='func-btn' value='RESET' calcClick={handleCalculations}/>
        <CalcButton cssClass='euqal-btn'value='=' calcClick={handleCalculations}/>
        </div>
      </div>
    </div>
  )
}

export default App
