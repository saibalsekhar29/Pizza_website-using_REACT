import React from "react";
import Navbar from "./Navbar";
const Header = () => {
  return (
    <div className="banner">
      <Navbar />
      <div className="banner__content">
        <div className="container">
          <div className="banner__text">
            <h3>Ready in 60 Sec</h3>
            <h1>PIZZA STOP</h1>
            <p>
            When you think of comfort food one of the first dishes that comes to mind is Pizza. 
            There’s just something magical about Pizza that sets it above all other dishes in this regard.
            </p>
            <div className="banner__btn">
              <a href="" className="btn btn-smart">
                DEVLERY NOW
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
