import React from "react";

class Timer extends React.Component {
  constructor() {
    super();
    this.state = {
      seconds: 0,
    }
  }
  render() {
    const { seconds } = this.state;
    return (
      <section>
        <h2>{seconds}</h2>
      </section>
    );
  }
}

export default Timer;
