import React from "react";

const Footer = props => {
  return (
    <ul>
      {props.footer.map(name => {
        return <li key={name}> {name} </li>;
      })}
    </ul>
  );
};

export default Footer;
