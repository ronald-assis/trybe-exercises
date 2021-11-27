import React, { Component } from "react";
import Timer from "./components/Timer";
import logo from "./assets/trybemestar.png";
import "./App.css";

//1 - Criar um botão para ativar/desativar o componente do tipo Contador
//2 - Reforçar a estrutura de uso do ComponentDidMount
//3 - Reforçar a renderização condicional
//4 - setInterval e setTimeout
//5 - Criar uma contagem no nosso Contador
//6 - Adicionar nossas fases do contador zen
//7 - Montar nossa estrutura de atualização com o ComponentDidUpdate
//8 - Desmontar o componente com ComponentWillUnmount
//9 - Usar shouldComponentUpdate
// BÔNUSSSSSSSSS - CONTADOR COM SOM

class App extends Component {
  constructor() {
    super();

    this.state = {
      showTimer: false
    };

    this.toggleTimer = this.toggleTimer.bind(this);
  }

  toggleTimer() {
    this.setState((prevState) => ({ showTimer: !prevState.showTimer }));
  }

  render() {
    const { showTimer } = this.state;

    return (
      <div>
        <header>
          <img src={ logo } alt="logo" />
        </header>
        <main>
          {showTimer ? <Timer /> : null}

          <button type="button" onClick={ this.toggleTimer }>
            {showTimer ? 'Desligar Timer' : 'Ligar Timer'}
          </button>
        </main>
      </div>
    );
  }
}

export default App;