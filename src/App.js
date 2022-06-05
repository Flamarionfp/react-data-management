import "./App.css";
import React, { useState } from "react";
import Intervalo from "./components/Intervalo";
import Media from "./components/Media";
import Soma from "./components/Soma";
import Sorteio from "./components/Sorteio";
import { Provider } from "react-redux";
import store from "../src/redux";

function App() {
  const [min, setMin] = useState(1);
  const [max, setMax] = useState(10);

  function handleChangeMin(event) {
    setMin(+event.target.value);
  }

  function handleChangeMax(event) {
    setMax(+event.target.value);
  }

  return (
    <Provider store={store}>
      <div className="App">
        <h1>React Data Management</h1>
        <div className="cards-container">
          <Intervalo
            min={min}
            max={max}
            handleChangeMax={handleChangeMax}
            handleChangeMin={handleChangeMin}
          />
        </div>
        <div className="cards-container">
          <Media min={min} max={max} />
          <Soma min={min} max={max} />
          <Sorteio min={min} max={max} />
        </div>
      </div>
    </Provider>
  );
}

export default App;
