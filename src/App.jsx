

function App() {


  return (
    <div>
      <div className="container">
        <div className="row">
          <h1 className="col">calc</h1>
          <p className="col">THEME <span>switch with 3 cases</span></p>
        </div>
        <div className="row">
          <input className="col" type="number" />
        </div>
      </div>
      <div className="container"> 
        <div className="row">
          <button className="col">7</button>
          <button className="col">8</button>
          <button className="col">9</button>
          <button className="col">DEL</button>
        </div>
        <div className="row">
          <button className="col">4</button>
          <button className="col">5</button>
          <button className="col">6</button>
          <button className="col">+</button>
        </div>
        <div className="row">
          <button className="col">1</button>
          <button className="col">2</button>
          <button className="col">3</button>
          <button className="col">-</button>
        </div>
        <div className="row">
          <button className="col">.</button>
          <button className="col">0</button>
          <button className="col">/</button>
          <button className="col">x</button>
        </div>
        <div className="row">
          <button className="col">RESET</button>
          <button className="col">=</button>
        </div>
      </div>
    </div>
  )
}

export default App
