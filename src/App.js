import "./App.css";
import React from "react";
import Intervalo from "./components/Intervalo";
import Media from "./components/Media";
import Soma from "./components/Soma";
import Sorteio from "./components/Sorteio";
import AppProvider from "../src/contexts/AppContext";

function App() {
  return (
    <AppProvider>
      <div className="App">
        <h1>React Data Management</h1>
        <div>
          <p>Context API</p>
        </div>
        <div className="cards-container">
          <Intervalo />
        </div>
        <div className="cards-container">
          <Media />
          <Soma />
          <Sorteio />
        </div>
      </div>
    </AppProvider>
  );
}

export default App;
