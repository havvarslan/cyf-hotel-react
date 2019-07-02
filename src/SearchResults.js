import React from "react";
import Highlights from "./Highlights";

const SearchResults = props => {
  return (
    <div>
      {props.results.length > 0 ? (
        <table className="table">
          <thead>
            <tr>
              <th>Id</th>
              <th>Title</th>
              <th>First name</th>
              <th>Last name</th>
              <th>E-mail</th>
              <th>Room Id</th>
              <th>Check-in</th>
              <th>Check-out</th>
              <th>Stay in Days</th>
              
              <th />
            </tr>
          </thead>
          <tbody>
            {props.results.map(result => (
              <Highlights result={result} />
            ))}
          </tbody>
        </table>
      ) : (
        "No Records"
      )}
    </div>
  );
};

export default SearchResults;
