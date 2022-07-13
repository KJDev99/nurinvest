import React from "react";
import  Accordion  from "./Accordion";

function SectionThree(props) {
  return (
    <div className="section__three">
      <div className="container">
        <div className="row">
          <div className="section_title col-lg-12">
            <h2>Kurs Dasturi</h2>
          </div>
          <div className="section__acardion col-lg-10 mx-auto col-md-12">
            <Accordion />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SectionThree;
