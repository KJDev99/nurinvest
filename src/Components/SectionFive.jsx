import React from "react";
import Tilt from "react-parallax-tilt";
import { BsQuestionCircle } from "react-icons/bs";
function SectionFive(props) {
  return (
    <div className="section__one">
      <div className="container">
        <div className="row">
          <div className="section_title col-lg-12">
            <h2>Tez-tez beriladigan savollar</h2>
          </div>
          <div className="section__items col-lg-12">
            <div className="col-md-5 col-sm-10 mx-auto flip-card ">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <BsQuestionCircle className="question__icons" />
                  <p>Kurs qanday formatda bo'ladi?</p>
                </div>
                <div className="flip-card-back">
                  <p>
                    Ta'lim GetCourse platformasida toʻliq onlayn tarzda
                    oʻtkaziladi. Barcha darslar sizning shaxsiy kabinetingizda
                    yozuv holatida mavjud bo'ladi, shu sababli ularni o'zingiz
                    uchun qulay bo'lgan istalgan vaqtda, osongina olishingiz
                    mumkin. Shuningdek, biz sizni Telegramdagi umumiy chatga
                    qo‘shamiz, u yerda siz boshqa kurs ishtirokchilari bilan
                    muloqot qilishingiz mumkin.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-5 col-sm-10 mx-auto flip-card ">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <BsQuestionCircle className="question__icons" />
                  <p>Kursdan so'ng materiallarga kirish imkoni qanchagacha saqlanib qoladi?</p>
                </div>
                <div className="flip-card-back">
                  <p>
                    Ta'lim GetCourse platformasida toʻliq onlayn tarzda
                    oʻtkaziladi. Barcha darslar sizning shaxsiy kabinetingizda
                    yozuv holatida mavjud bo'ladi, shu sababli ularni o'zingiz
                    uchun qulay bo'lgan istalgan vaqtda, osongina olishingiz
                    mumkin. Shuningdek, biz sizni Telegramdagi umumiy chatga
                    qo‘shamiz, u yerda siz boshqa kurs ishtirokchilari bilan
                    muloqot qilishingiz mumkin.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-5 col-sm-10 mx-auto flip-card ">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <BsQuestionCircle className="question__icons" />
                  <p>Menda kompyuter yo'q, kursni qanday o'rganishim mumkin?</p>
                </div>
                <div className="flip-card-back">
                  <p>
                  Hattoki sizda faqatgina telefon yoki planshet bo'lsa ham, siz kursni xuddi kompyuterda bo'lgani kabi o'rganishingiz mumkin, u iOS yoki Android asosidagi barcha zamonaviy qurilmalar uchun mavjud bo'lgan maxsus platformada bo'ladi.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-5 col-sm-10 mx-auto flip-card ">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <BsQuestionCircle className="question__icons" />
                  <p>Uyga vazifalar bo'ladimi?</p>
                </div>
                <div className="flip-card-back">
                  <p>
                  Ha, amaliy mashg'ulotlardan so'ng siz uy vazifasini bajarishingiz kerak bo'ladi. Bu materialni mashq qilish va mustahkamlash uchun zarurdir. Masalan, siz o'zingizning shaxsiy hamyoningizni yaratishingiz kerak bo'ladi.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-5 col-sm-10 mx-auto flip-card ">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <BsQuestionCircle className="question__icons" />
                  <p>Kursni tugatganimdan so'ng sertifikat yoki diplom ola olamanmi? </p>
                </div>
                <div className="flip-card-back">
                  <p>
                  Har bir kurs ishtirokchisi barcha modullarni o’rganib, yakuniy testdan muvaffaqiyatli o‘tganidan so‘ng sertifikat olishi mumkin bo‘ladi

                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-5 col-sm-10 mx-auto flip-card ">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <BsQuestionCircle className="question__icons" />
                  <p>Kurs yangi boshlayotganlar uchun foydali bo'ladimi?</p>
                </div>
                <div className="flip-card-back">
                  <p>
                  Kurs oddiy tilda yozilgan bo'lib, hatto aksiyalar va moliya bozori haqida faqat tanishlari, do'stlaridan eshitganlar uchun ham tushunarli bo'ladi. Agar kurs sizga mos kelishiga shubhangiz bo'lsa, faqat bitta savolga javob bering - yana ko'p yillar talabda bo'ladigan va shu bilan birga yuqori daromad keltiradigan soha mutaxassisi bo'lishni xohlaysizmi?  Agar javobingiz ha bo'lsa, unda kurs siz uchun mos tushadi, siz barcha darslarni albatta eplaysiz va oxiriga borasiz!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SectionFive;
