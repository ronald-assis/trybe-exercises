import React, { Component } from 'react';
import './App.css';

const Task = (value) => {
  return (
    <li key={value}>{value}</li>
  );
}
const arr = ['list 1', 'list 2', 'list 3', 'list 4', 'list 5']
class App extends Component {
   render() {
    return (
      <>
      <h1>Hello, World </h1>
      <ol>
        {arr.map((item) => (
         Task(item)
         ))}
      </ol>
      </>
    )
  }
}

export default App;
