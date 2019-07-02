import React, { Component } from "react";

class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date()
    };
  }

  componentDidMount() {
    console.log("did mount");
    // There is a bug in this component, where this.timer is not cleared if the
    // component is unmounted. It will continue to try to render if even the
    // component is no longer in the DOM.
    this.timer = setInterval(this.tick, 1000);
  }

  componentWillUnmount() {
    console.log("will unmount");
    clearInterval(this.timer);
  }

  tick = () => {
    this.setState({
      date: new Date()
    });
  };

  render() {
    return <div>{this.state.date.toLocaleTimeString()}</div>;
  }
}

export default Clock;
