

function App() {


  return (
    <div>
      <div className="container">
        <div className="row">
          <h1 className="six columns">calc</h1>
          <p className="six columns">THEME <span>switch with 3 cases</span></p>
        </div>
        <div className="row">
          <input className="twelve columns" type="number" />
        </div>
      </div>
      <div className="container"> 
        <div className="row">
          <button className="three columns">7</button>
          <button className="three columns">8</button>
          <button className="three columns">9</button>
          <button className="three columns">DEL</button>
        </div>
        <div className="row">
          <button className="three columns">4</button>
          <button className="three columns">5</button>
          <button className="three columns">6</button>
          <button className="three columns">+</button>
        </div>
        <div className="row">
          <button className="three columns">1</button>
          <button className="three columns">2</button>
          <button className="three columns">3</button>
          <button className="three columns">-</button>
        </div>
        <div className="row">
          <button className="three columns">.</button>
          <button className="three columns">0</button>
          <button className="three columns">/</button>
          <button className="three columns">x</button>
        </div>
        <div className="row">
          <button className="six columns">RESET</button>
          <button className="six columns">=</button>
        </div>
      </div>
    </div>
  )
}

export default App
