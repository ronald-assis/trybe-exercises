// arquivo App.js, criado pelo create-react-app, modificado
import React from 'react';
import './App.css';
import Pokedex from './Components/Pokedex';

class App extends React.Component {
  render() {    
    return (
      <div className="App">
        <h1>Pokedex</h1>
        <Pokedex />
      </div>
    );
  }
}

export default App;