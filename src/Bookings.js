import React, { Component } from "react";
import Search from "./Search.js";
import SearchResults from "./SearchResults.js";
import FakeBookings from "./data/fakeBookings.json";

class Bookings extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fakeBookings: FakeBookings
    };
  }

  search = searchVal => {
    const searchResult = !searchVal
      ? FakeBookings
      : FakeBookings.filter(customer => {
          return (
            customer.firstName
              .toLowerCase()
              .includes(searchVal.toLowerCase()) ||
            customer.surname.toLowerCase().includes(searchVal.toLowerCase()) ||
            customer.id === Number(searchVal)
          );
        });

    this.setState({
      fakeBookings: searchResult
    });
  };

  // componentDidMount() {
  //   fetch("https://cyf-react.glitch.me/error")
  //     .then(res => res.json())
  //     .then(data => {
  //       this.setState({
  //         isLoading: false,
  //         results: data
  //       });
  //     })
  //   }

  render() {
    if (this.state.isLoading) {
      return <span>Loading...</span>;
    } else if (this.state.error) {
      return <span>Something went wrong</span>;
    } else {
      return (
        <div className="App-content">
          <div className="container">
            <Search search={this.search} />
            <SearchResults results={this.state.fakeBookings} />
          </div>
        </div>
      );
    }
  }
}

export default Bookings;
