import React, { useState } from 'react';
import './App.css';

function App() {
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = () => {
    alert(`Caso ingresado: ${inputValue}`);
  };

  const handleNewCase = () => {
    setInputValue('');
  };

  return (
    <div className="App">
      <h1 className="title">Ingresa tu caso</h1>
      <div className="input-container">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          className="input-bar"
          placeholder="Escribe aquí tu caso"
        />
        <div className="buttons-container">
          <button onClick={handleNewCase} className="new-case-button">Redactar nuevo caso</button>
          <button onClick={handleSubmit} className="submit-button">Enviar</button>
        </div>
      </div>
    </div>
  );
}

export default App;
