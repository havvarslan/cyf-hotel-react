import React, { Component } from "react";
import Search from "./Search.js";
import SearchResults from "./SearchResults.js";
import FakeBookings from "./data/fakeBookings.json";
import { tsPropertySignature } from "@babel/types";

class Bookings extends Component {
  constructor(props) {
    super(props);
    this.state = {
      results: null
    };
  }

  search = searchVal => {
    console.info("TO DO!", searchVal);
    const checkDetails = customer => {
      return (
        customer.firstName === searchVal ||
        customer.surname === searchVal ||
        customer.id === searchVal
      );
    };
    const searchResult = FakeBookings.filter(checkDetails);
    this.setState({
      results: searchResult
    });
  };

  componentDidMount() {
    fetch("https://cyf-react.glitch.me/delayed")
      .then(res => res.json())
      .then(data => {
        this.setState({
          isLoading: false,
          results: data
        });
      });
  }

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
            <SearchResults results={FakeBookings} />
          </div>
        </div>
      );
    }
  }
}

export default Bookings;
