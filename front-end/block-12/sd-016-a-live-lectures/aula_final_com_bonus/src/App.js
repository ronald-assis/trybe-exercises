import React, { Component } from "react";
import logo from "./assets/trybemestar.png";
import "./App.css";
import Timer from "./components/Timer";

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
          <img src={logo} alt="logo" />
        </header>
        <main>
          {showTimer && <Timer />}
          <button type="button" onClick={this.toggleTimer}>
            {showTimer ? "Desligar Timer" : "Ligar Timer"}
          </button>
        </main>
      </div>
    );
  }
}

export default App;
