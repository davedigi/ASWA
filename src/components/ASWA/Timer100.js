
import React from 'react';

export default class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { tickk: 1000 }; // suggested 1000
  }

  tick() {
    let start = 0
    // if loop set...
    if (this.props.loop && this.state.tickk < 1) {
      console.log('arrivato a zero')
      start = 1000
    } else {
      start = this.state.tickk
    }
    this.setState(state => ({
      tickk: start - 1
    }))
  }

  componentDidMount() {
    this.interval = setInterval(() => this.tick(this.props.loop), 100);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <>
        {/* <div>             */}
        {/* <h1 className="text-2xl font-bold mb-3"> */}
        {this.state.tickk / 100}
        {/* </h1> */}
        {/* </div> */}
      </>
    );
  }
}
