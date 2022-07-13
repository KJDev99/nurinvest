import React from "react";
import Tilt from "react-parallax-tilt";
import { BsQuestionCircle } from "react-icons/bs";
import { AiFillSliders } from "react-icons/ai";
function SectionOne(props) {
  return (
    <div className="section__one">
      <div className="container">
        <div className="row">
          <div className="section_title col-lg-12">
            <h2>Halol investitsiyalarni 60 kun ichida o'rganing!</h2>
          </div>
          <div className="section__items col-lg-12">
            <Tilt className="col-lg-3 col-md-5 col-sm-10 mx-auto section__item">
              <BsQuestionCircle className="question__icons" />
              <p>
                Qanday qilib bozor yetakchisi bo'lish va moliyaviy Everest
                cho'qqisida qolish mumkin?
              </p>
            </Tilt>
            <Tilt className="col-lg-3 col-md-5 col-sm-10 mx-auto section__item">
              <BsQuestionCircle className="question__icons" />
              <p>Halol foyda olish uchun nima qilish kerak? </p>
            </Tilt>
            <Tilt className="col-lg-3 col-md-5 col-sm-10 mx-auto section__item">
              <BsQuestionCircle className="question__icons" />
              <p>
                Ilk muvaffaqiyatsizlikdan so'ng qanday qilib taslim bo'lmaslik
                mumkin?
              </p>
            </Tilt>
            <Tilt className="col-lg-8 col-md-10 mx-auto section_other-item">
              <AiFillSliders className="question__icons" />
              <p>
                Shu va shu kabi boshqa savollarga javobni kurs orqali olishingiz
                mumkin!
              </p>
            </Tilt>
            <div className="col-lg-12 parent_btn">
                <button className="section__button"><a href="#">Kurs dasturini bilish</a></button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SectionOne;
