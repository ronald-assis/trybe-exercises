import React from 'react';
import './App.css';

class App extends React.Component {
  constructor() {
    super()
    /* Para definir um estado inicial ao componente, a ser definido
    no momento em que o componente for colocado na tela, faça uma atribuição
    de um objeto à chave `state` do `this`, ou seja, ao `this.state`*/
    this.state = {
      numeroDeCliques: 0,
      clickTwo: 0,
    }
    this.handleClick = this.handleClick.bind(this);
    this.click = this.click.bind(this)
  }

  handleClick = () => {
    /* Você **NUNCA** deve fazer atribuições diretamente a `this.state`. Deve,
    ao invés disso, SEMPRE utilizar a função `this.setState(novoEstado)` do
    React*/
    this.setState((ea, _props) => ({
      numeroDeCliques: ea.numeroDeCliques + 1
    }))
  }

  click = () => {
    this.setState((estadoAnterio, _props) => ({
      clickTwo: estadoAnterio.clickTwo + 1
    }))
  }

  getColorBackground = (num) => num % 2 === 0 ? 'green' : 'white'

  render() {
    const { numeroDeCliques, clickTwo } = this.state
    /*Para LER o estado, você pode usar `this.state.chaveDoMeuEstado`*/
    return <div>
      <button onClick={this.handleClick} style={{ backgroundColor: this.getColorBackground(numeroDeCliques) }}>
        Botão 1 | Count = {numeroDeCliques}
      </button>
      <button onClick={this.click} style={{backgroundColor: this.getColorBackground(clickTwo)}}>
        Botão 1 | Count = {clickTwo}
      </button>
    </div>

  }
}

export default App;