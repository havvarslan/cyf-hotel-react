import React, { Component } from "react";
import moment from "moment";

class Highlights extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedCityId: false
    };
  }

  handleClick = () => {
    this.setState({
      selectedCityId: !this.state.selectedCityId
    });
    console.log(this.state.selectedCityId);
  };

  render() {
    return (
      <tr
        onClick={this.handleClick}
        className={this.state.selectedCityId ? "selected-city" : null}
      >
        <td>{this.props.result.id}</td>
        <td>{this.props.result.title}</td>
        <td>{this.props.result.firstName}</td>
        <td>{this.props.result.surname}</td>
        <td>{this.props.result.email}</td>
        <td>{this.props.result.roomId}</td>
        <td>{this.props.result.checkInDate}</td>
        <td>{this.props.result.checkOutDate}</td>
        <td>
          {" "}
          {moment(this.props.result.checkOutDate).diff(
            this.props.result.checkInDate,
            "days"
          )}{" "}
        </td>
      </tr>
    );
  }
}

export default Highlights;
