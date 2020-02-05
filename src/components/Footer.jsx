import React from "react";

let year = new Date()
  .getFullYear();

const Footer = () => {
  return <footer>
    <p>
      {`Copyright Kazik Kluz ${year}`} 
    </p>
  </footer>;
};

export default Footer;
