import React from "react";
import Tilt from "react-parallax-tilt";
import { BsQuestionCircle } from "react-icons/bs";
import { AiFillSliders } from "react-icons/ai";
function SectionTwo(props) {
  return (
    <div className="section__one">
      <div className="container">
        <div className="row">
          <div className="section_title col-lg-12">
            <h2>Kurs kimlar uchun?</h2>
          </div>
          <div className="section__items col-lg-12">
            <Tilt className="col-lg-3 col-md-5 col-sm-10 mx-auto section__item">
              <AiFillSliders className="question__icons" />
              <p>
                Yangi boshlayotganlar. Aksiyalar sotib olishni va shu orqali
                halol pul topishni o'rganish istagida bo'lganlar uchun.
              </p>
            </Tilt>
            <Tilt className="col-lg-3 col-md-5 col-sm-10 mx-auto section__item">
              <AiFillSliders className="question__icons" />
              <p>
                Ishbilarmonlar. Bir necha qo'ngiroq yoki tugmani bosish orqali
                qimmatli qog'ozlarni sotib olish va sotish yo'li bilan passiv
                daromad yaratishga intiluvchilar uchun.{" "}
              </p>
            </Tilt>
            <Tilt className="col-lg-3 col-md-5 col-sm-10 mx-auto section__item">
              <AiFillSliders className="question__icons" />
              <p>
                Kelishuv asosidagi ishchilar . Maoshdan maoshgacha ishlashdan
                charchaganlar hech kimga qaram bo'lmagan holda doimiy daromad
                topishga intiluvchilar uchun.
              </p>
            </Tilt>
            <div className="col-lg-12 parent_btn">
              <button className="section__button">
                <a href="#">Tariflarga o'tish</a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SectionTwo;
