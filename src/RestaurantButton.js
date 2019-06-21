import React, { Component } from "react";

class RestaurantButton extends Component {
  render() {
    return (
      <div>
        <button onClick={this.props.addOrder} className="btn btn-primary">
          Add
        </button>
      </div>
    );
  }
}

export default RestaurantButton;
