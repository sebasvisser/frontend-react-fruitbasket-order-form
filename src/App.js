import React, { useState } from 'react';
import './App.css';

function App() {
  const [strawberryValue, setStrawberryValue] = React.useState(0);
  const [bananaValue, setBananaValue] = React.useState(0);
  const [appleValue, setAppleValue] = React.useState(0);
  const [kiwiValue, setKiwiValue] = React.useState(0);

  function resetCounters() {
    setStrawberryValue(0);
    setBananaValue(0);
    setAppleValue(0);
    setKiwiValue(0);
    console.log("The Great Reset")
  }

  return (
    <>
      <h1>Fruitmand bezorgservice</h1>
        <div className="fruit" id="strawberry">
          <span className="emoji">🍓</span>
          <h2>Aardbeien</h2>
          <span className="fruitButtons">
            <button onClick={() => {
                if(strawberryValue === 0 ){
                  console.log("can't have less");
            }else{
                setStrawberryValue(strawberryValue - 1)}}}>
              -
            </button>
            <span>{strawberryValue}</span>
            <button onClick={() => setStrawberryValue(strawberryValue + 1)}>
              +
            </button>
          </span>
        </div>
        <div className="fruit" id="banana">
          <span className="emoji">🍌</span>
          <h2>Bananen</h2>
          <span className="fruitButtons">
            <button onClick={() => {
              if(bananaValue === 0 ){
                console.log("can't have less");
              }else{
                setBananaValue(bananaValue - 1)}}}>
              -
            </button>
            <span>{bananaValue}</span>
            <button onClick={() => setBananaValue(bananaValue + 1)}>
              +
            </button>
          </span>
        </div>
        <div className="fruit" id="apple">
          <span className="emoji">🍏</span>
          <h2>Appels</h2>
          <span className="fruitButtons">
            <button onClick={() => {
              if(appleValue === 0 ){
                console.log("can't have less");
              }else{
                setAppleValue(appleValue - 1)}}}>
              -
            </button>
            <span>{appleValue}</span>
            <button onClick={() => setAppleValue(appleValue +  1)}>
              +
            </button>
          </span>
        </div>
        <div className="fruit" id="kiwi">
          <span className="emoji">🥝</span>
          <h2>Kiwi's</h2>
          <span className="fruitButtons">
            <button onClick={() => {
              if(kiwiValue === 0 ){
                console.log("can't have less");
              }else{
                setKiwiValue(kiwiValue - 1)}}}>
              -
            </button>
            <span>{kiwiValue}</span>
            <button onClick={() => setKiwiValue(kiwiValue + 1)}>
              +
            </button>
          </span>
        </div>
        <div className="reset-button">
          <button onClick={resetCounters}>RESET</button>
        </div>

    </>
  );
}

export default App;
