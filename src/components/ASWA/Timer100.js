
import React from 'react';

export default class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { tickk: props.spin*100 }; // suggested 1000
    console.log('partenza timer con:',props.spin)
  }

  tick() {
    let start = 0
    // if loop set...
    if (this.props.loop && this.state.tickk < 1) {
      console.log('arrivato a zero')
      start = 1000
      return null
    } else {
      start = this.state.tickk
    }
    this.setState(state => ({
      tickk: start - 1
    }))
  }

  componentDidMount() {
    this.interval = setInterval(() => this.tick(this.props.loop), 28);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <>
        {/* <div>             */}
        {/* <h1 className="text-2xl font-bold mb-3"> */}
        {(this.state.tickk / 100).toFixed(1)}
        {/* </h1> */}
        {/* </div> */}
      </>
    );
  }
}
