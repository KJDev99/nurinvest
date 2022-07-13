import React from "react";
import headerImg from "./Imgs/bg/oq.png";

function Header(props) {
  return (
    <div className="header_content">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-10 col-sm-12 header__content-left">
            <img src={headerImg} alt="" />
          </div>
          <div className="col-lg-6 col-md-10 col-sm-12 header__content-right">
            <h2 className="title_header">Halol Investitsiya</h2>
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
