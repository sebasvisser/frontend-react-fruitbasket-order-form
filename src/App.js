import React, { useState } from 'react';
import './App.css';

function App() {
  const [strawberryValue, setStrawberryValue] = useState(0);
  const [bananaValue, setBananaValue] = useState(0);
  const [appleValue, setAppleValue] = useState(0);
  const [kiwiValue, setKiwiValue] = useState(0);

  function resetCounters() {
    setStrawberryValue(0);
    setBananaValue(0);
    setAppleValue(0);
    setKiwiValue(0);
    console.log("The Great Reset")
  }

  const { register, handleSubmit, watch, formState: { errors } } = useForm({mode: "onBlur"});
  const chosenFreq = watch('bezorgfrequentie');

  function onSubmit(data){
    console.log(data);
  }

  return (
    <>
      /*We beginnen met de fruit counter*/
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

    /*  Start van het formulier (via React Hook Form) */
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>
          Voornaam:
          <input type="text" placeholder="Voornaam"
                 {...register("voornaam",
                     {required: "Voornaam mag niet leeg zijn"})}
                 onBlur={handleSubmit}
          />
        </label>
        {errors.voornaam && <p>{errors.voornaam.message}</p>}


        <label>
          Achternaam:
          <input type="text" placeholder="Achternaam"
                 {...register("achternaam",
                     {required: "Achternaam mag niet leeg zijn"})}
          />
        </label>
        {errors.achternaam && <p>{errors.achternaam.message}</p>}


        <label>
          Leeftijd:
          <input type="number" placeholder="Leeftijd"
                 {...register(
                     "leeftijd",
                     {required: true,
                       min: {
                         value: 18,
                         message: "Minimaal 18 jaar oud.",
                       }
                     })}
          />
        </label>
        {errors.leeftijd && <p>{errors.leeftijd.message}</p>}

        <label>
          Postcode:
          <input type="text" placeholder="Postcode"
                 {...register(
                     "postcode",
                     {required: "Postcode mag niet leeg zijn",
                       minLength: {
                         value: 6,
                         message: "Postcode bestaat uit minimaal 6 tekens",
                       },
                       maxLength: {
                         value: 6,
                         message: "Postcode bestaat uit maximaal 6 tekens",
                       },
                       pattern: {
                         value: /[0-9]{4}[a-z-A-Z]{2}/i ,
                         message: "Postcode patroon: getal-getal-getal-getal-letter-letter",
                       }
                     })}
          />
        </label>
        {errors.postcode && <p>{errors.postcode.message}</p>}

        <label>
          Bezorgfrequentie:
          <select {...register("bezorgfrequentie", { required: true })}>
            <option value="iedere week">Iedere week</option>
            <option value="om de week">Om de week</option>
            <option value="iedere maand">Iedere maand</option>
            <option value="anders">Anders</option>
          </select>
        </label>
        {errors.bezorgfrequentie && <p>{errors.bezorgfrequentie.message}</p>}

        { chosenFreq === 'anders' && (
            <label>
              Voer een andere frequentie in:
              <input type="text" placeholder="Andere frequentie"
                     {...register("anders", {})} />
            </label>
        )}

        <label>
          Opmerkingen:
          <textarea
              {...register("opmerkingen", {})} />
        </label>

        <label>
          Akkoord met de voorwaarden?
          <input type="checkbox" placeholder="Akkoord?"
                 {...register(
                     "akkoord",
                     {required: "Geen feestje zonder voorwaarden"}
                 )}
          />
        </label>
        {errors.akkoord && <p>{errors.akkoord.message}</p>}

        <input type="submit" />
      </form>
    </>
  );
}

export default App;
