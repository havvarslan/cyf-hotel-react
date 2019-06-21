import React, { Component } from "react";
import Orders from "./Orders";

class Restaurant extends Component {
  render() {
    return (
      <div>
        <h3 className="restaurant">Restaurant Orders</h3>
        <Orders orderType="Pizzas" />
        <Orders orderType="Salads" />
      </div>
    );
  }
}

export default Restaurant;
