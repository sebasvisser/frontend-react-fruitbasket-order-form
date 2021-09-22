import React from 'react';
import './App.css';
import Fruitcounter
  from './components/Fruitcounter';

function App() {
  const [strawberryValue, setStrawberryValue] = React.useState(0);
  const [bananaValue, setBananaValue] = React.useState(0);
  const [appleValue, setAppleValue] = React.useState(0);
  const [kiwiValue, setKiwiValue] = React.useState(0);

  function strawberryValueSetter(children){
    if (children.value === "-"){
      console.log("hoi minus aardbei");
    }
  }
  return (
    <>
      <h1>Fruitmand bezorgservice</h1>
        <div className="fruit" id="strawberry">
          <span className="emoji">🍓</span>
          <h2>Aardbeien</h2>
          <span className="fruitButtons">
            <button onClick={setStrawberryValue+1}>-</button>
            <span>{strawberryValue}</span>
            <button>+</button>
          </span>
        </div>
        <div className="fruit" id="banana">
          <span className="emoji">🍌</span>
          <h2>Bananen</h2>
          <span className="fruitButtons">
            <button>-</button>
            <span>{bananaValue}</span>
            <button>+</button>
          </span>
        </div>
        <div className="fruit" id="apple">
          <span className="emoji">🍏</span>
          <h2>Appels</h2>
          <span className="fruitButtons">
            <button>-</button>
            <span>{appleValue}</span>
            <button>+</button>
          </span>
        </div>
        <div className="fruit" id="kiwi">
          <span className="emoji">🥝</span>
          <h2>Kiwi's</h2>
          <span className="fruitButtons">
            <button>-</button>
            <span>{kiwiValue}</span>
            <button>+</button>
          </span>
        </div>
        <div className="reset-button">
          <button>RESET</button>
        </div>

    </>
  );
}

export default App;
