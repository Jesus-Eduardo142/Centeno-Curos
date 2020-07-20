import React from 'react';
import logo from './assets/img/logo.svg';
import './assets/css/App.css';

import MiComponente from './components/MiComponente';

function HolaMundo(nombre, edad){
  var presentacion = (
    <div>
      <h2>Hola , soy {nombre}</h2>
      <h2>Tengo {edad} años</h2>
    </div> 
  );
  return presentacion;
}

function App() {
  var nombre = "Jesus Eduardo Dominguez"
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hola, Bienvenido al curos de react
        </p>
        {HolaMundo(nombre, 20)}
        
        <section className="Componentes">
          <MiComponente/>
        </section>

      </header>
    </div>
  );
}

export default App;
