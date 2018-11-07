import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    let empleado = {
      nombre: 'Orlando',
      apellido: 'Reyes',
      profesion: 'Desarrollador Web',
      edad: 25,
      pais: 'México'
    }

    let {nombre} = empleado;
    let {apellido} = empleado;
    let {profesion} = empleado;
    let {edad} = empleado;
    let {pais} = empleado;

    return (
      <div className="contenido">
        <h1 className="texto">Aprendiendo React</h1>
        <p>Nombre: {nombre}</p>
        <p>Apellido: {apellido}</p>
        <p>Profesion: {profesion}</p>
        <p>Edad: {edad}</p>
        <p>Pais: {pais}</p>
      </div>
    );
  }
}

export default App;
