import React from "react";
import '../../assets/css/Header.css'


function header() {
  return (
    <header>
      <div className="icons">
        <li className="login-icons"></li>
      </div>
      <h1 className="header-top">
        <strong> Le Renata</strong>
        <span><i>Cafeteria</i></span>
      </h1>
    </header>
  );
}

export default header
