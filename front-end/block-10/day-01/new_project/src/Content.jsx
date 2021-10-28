import React, { Component } from "react";

const conteudos = [
  {
    conteudo: 'High Order Functions',
    bloco: 8,
    status: 'Aprendido'
  },
  {
    conteudo: 'Composicao de Componentes',
    bloco: 11,
    status: 'Aprendendo',
  },
  {
    conteudo: 'Composicao de Estados',
    bloco: 12,
    status: 'Aprenderei'
  },
  {
    conteudo: 'Redux',
    bloco: 16,
    status: 'Aprenderei'
  },
];

class Content extends Component {
  render() {
    return (
      <div className='content'>
        {conteudos.map((value) => (
          <div key={value.conteudo} className='card'>
            <h4>O conteudo é: {value.conteudo}</h4>
            <p>Status: {value.status}</p>
            <p>Bloco: {value.bloco}</p>
          </div>
        ))}
      </div>
    )
  }
}

export default Content;