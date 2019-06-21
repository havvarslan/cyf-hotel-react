import React, { Component } from "react";
import RestaurantButton from "./RestaurantButton";

class Orders extends Component {
  constructor(props) {
    super(props);
    this.state = {
      orders: 0
    };
  }
  addOrder = () => {
    console.log("Add order");
    this.setState(current => {
      return { orders: current.orders + 1 };
    });
  };
  render() {
    return (
      <div>
        <ul>
          <li>
            {this.props.orderType}: {this.state.orders}
          </li>
          {/* //whatever the value is of orders then render it next to pizza.  */}
        </ul>
        <RestaurantButton addOrder={this.addOrder} />
      </div>
    );
  }
}

export default Orders;
