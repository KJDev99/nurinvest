import React from "react";
import headerImg from "./Imgs/bg/oq.png";
import MovingComponent from 'react-moving-text'

function Header(props) {
  return (
    <div id="home" className="header_content">
      <div className="container">
        <div className="inner_container">
          <div className="col-lg-6 col-md-6 mx-auto col-sm-12 header__content-left">
            <img src={headerImg} alt="" />
          </div>
          <div className="col-lg-6 col-md-6 mx-auto col-sm-12 header__content-right">
            <MovingComponent
              type="slideInFromBottom"
              duration="2000ms"
              delay="0s"
              direction="normal"
              timing="ease-in-out"
              iteration="1"
              fillMode="forwards"
              className="title_header">
              Halol Investitsiya
            </MovingComponent>
            {/* <h2 className="title_header">Halol Investitsiya</h2> */}
            <p className="text_header">
              Pul o'zi uchun ishlashini istaydiganlar uchun kurs!
            </p>
            <button className="header__content-btn">Online kurs</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
