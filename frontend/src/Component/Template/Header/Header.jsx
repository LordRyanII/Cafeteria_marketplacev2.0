import React from "react";
import Style from './Header.module.css'


function header() {
  return (
    <header className={Style.header}>
      {/* <div className="icons">
      
      </div> */}
      <h1 className={Style.headerTop}>
        Le Renata
        <span><i>Cafeteria</i></span>
      </h1>
    </header>
  );
}

export default header
