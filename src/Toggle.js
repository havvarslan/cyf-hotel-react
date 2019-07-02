import React, { Component } from "react";
import Clock from "./Clock";

class Toggle extends Component {
  constructor() {
    super();
    this.state = {
      isVisible: true
    };
  }

  toggle = () => {
    this.setState({
      isVisible: !this.state.isVisible
    });
  };

  render() {
    return (
      <div>
        <button onClick={this.toggle}>Hide</button>
        {this.state.isVisible && <Clock />}
        {/* {this.state.isVisible ? <Clock/> : null} */}
      </div>
    );
  }
}

export default Toggle;
