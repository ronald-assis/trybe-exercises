import React from "react";
import sound from "../assets/bip.mp3";

class Timer extends React.Component {
  constructor() {
    super();
    this.state = {
      seconds: 1,
      phases: ["🫁 Inspire...", "😑 Segure...", "😮‍💨 Expire..."],
      phaseIndex: 0,
    };
  }

  componentDidMount() {
    const ONE_SECOND = 1000;
    const audio = new Audio(sound);
    
    this.intervalId = setInterval(() => {
      this.setState((prevState) => ({ seconds: prevState.seconds + 1 }));
      audio.play();
    }, ONE_SECOND);
  }

  // shouldComponentUpdate(_nextProps, nextState) {
  //   console.log(nextState)
  //   return false;
  // }

  componentDidUpdate() {
    const TIME_LIMIT = 6;
    const { seconds } = this.state;
    if (seconds === TIME_LIMIT) {
      this.setState({ seconds: 1 });
      this.setState((prevState) => ({
        phaseIndex: prevState.phaseIndex === 2 ? 0 : prevState.phaseIndex + 1
      }));
    }
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  render() {
    const { seconds, phases, phaseIndex } = this.state;
    return (
      <section className="timer">
        <h1>{phases[phaseIndex]}</h1>
        <h2>{seconds}</h2>
      </section>
    );
  }
}

export default Timer;
