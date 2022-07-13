import Accordion from "react-bootstrap/Accordion";

function BasicExample() {
  return (
    <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header>Modul - 1 : Aksiya bozori</Accordion.Header>
        <Accordion.Body>
          <ul className="accordion_list">
            <li>Aksiya bozori anatomiyasi</li>
            <li>Bozor ishtirokchilari</li>
            <li>Treyding anatomiyasi</li>
            <li>Aksiya - Fundamental</li>
            <li>Terminologiya</li>
            <li>Birjada narxni kim boshqaradi?</li>
            <li>Savdo qilish uchun tayyorgarlik</li>
          </ul>
          <b>
            <span>Natija:</span> Modul orqali birja qanday ishlashi va
            strukturasini to’liq tushunasiz, birjada kimlar borligi, aksiya
            qanday ishlashi haqida ma'lumotga ega bo'lasiz.
          </b>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Modul - 2 : Treyding platformalari</Accordion.Header>
        <Accordion.Body>
          <ul className="accordion_list">
            <li>Treyding platformalari - Kirish</li>
            <li>Paper Trading - Demo account</li>
            <li>Margin va Cash akkauntlar</li>
            <li>PDT qoidasi</li>
            <li>TD Ameritrade platformasi</li>
            <li>Demoda summani o’zgartirish</li>
            <li>Trading orderlar</li>
            <li>TD Ameritradeda order berish</li>
            <li>Thinkorswim sozlash</li>
          </ul>
          <b>
            <span>Natija:</span> Modul orqali treyding bo’yicha to’liq
            tushunchalarga ega bo'lasiz, savdo qilish qoidalari, halol savdo
            qilish uchun kerakli ma'lumotlarni, brokerdan demo hisob raqami
            ochish va demoda ishlashni o'rganasiz.
          </b>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>
          Modul - 3: Aksiya narxining harakatlanishi
        </Accordion.Header>
        <Accordion.Body>
          <ul className="accordion_list">
            <li>Aksiya narxi - Kirish</li>
            <li>Grafikani o’qish</li>
            <li>Yapon shamtayoqlari anatomiyasi</li>
            <li>Volume tahlil</li>
            <li>Support va Resistance</li>
            <li>Trendlar</li>
            <li>Gaplar (Bo’shliq)</li>
            <li>Grafika tahlil</li>
            <li>Amaliy qo’llash</li>
            <li>Breakout va Breakdown</li>
            <li>Yolg’on qopqonlar</li>
            <li>Yapon shamtayoqlari (2-qism)</li>
            <li>Volume haqida haqiqatlar</li>
            <li>Tape Reading</li>
          </ul>
          <b>
            <span>Natija:</span> Modul orqali aksiya narxining harakatlanishini
            kerakli vositalar yordamida bemalol taxmin (prognoz) qila olish
            ko'nikmasiga ega bo'lasiz.{" "}
          </b>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3">
        <Accordion.Header>
          Modul - 4: Chart Pattern - Grafik figura
        </Accordion.Header>
        <Accordion.Body>
          <ul className="accordion_list">
            <li>Chart Pattern - Kirish</li>
            <li>Top va Bottom figura</li>
            <li>Bosh va yelka figura</li>
            <li>Uchburchak figura</li>
            <li>Bayroq figura</li>
            <li>Chashka figura</li>
            <li>Amalda qo’llash</li>
          </ul>
          <b>
            <span>Natija:</span> Modul orqali texnik tahlildagi kerakli
            figuralar bilan tanishib, ular orqali bemalol tahlil qilishni
            o'rganasiz, shuningdek ular ortidagi psixologiya va ma’noni
            anglaysiz.
          </b>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="4">
        <Accordion.Header>Modul - 5: Indikatorlar</Accordion.Header>
        <Accordion.Body>
          <ul className="accordion_list">
            <li>Indikator - Kirish</li>
            <li>RSI</li>
            <li>MACD</li>
            <li>ADX</li>
            <li>Fibonacci</li>
            <li>EMS</li>
          </ul>
          <b>
            <span>Natija:</span> Modul orqali texnik tahlildagi kerakli
            indikatorlar yordamida yana ham aniqroq tahlil qilish va savdoga
            kirish-chiqish nuqtalarini aniqroq bilish qobiliyatiga ega bo'lasiz,
            bu esa indikatorlar ortidagi psixologiyadir.
          </b>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="5">
        <Accordion.Header>Modul - 6 : Watchlist tuzish</Accordion.Header>
        <Accordion.Body>
          <ul className="accordion_list">
            <li>Watchlist tuzish</li>
            <li>Watchlist'dagi xilma-xillik</li>
            <li>Screening qilish</li>
          </ul>
          <b>
            <span>Natija:</span> Modul orqali bozorni, aksiyalarni kuzatib
            borishda va kerakli savdolarga kirishda qulay ro’yxatlarni tuzib,
            ularni tahlil qilishni o'rganasiz.
          </b>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="6">
        <Accordion.Header>Modul - 7: Investitsiya</Accordion.Header>
        <Accordion.Body>
          <ul className="accordion_list">
            <li>Fundamental tahlil</li>
            <li>Ekonomika asoslari</li>
            <li>Sektorlar</li>
            <li>SEC Filing</li>
            <li>Fundamental tahlil (1-qism)</li>
            <li>Fundamental tahlil (2-qism)</li>
          </ul>
          <b>
            <span>Natija:</span> Modul orqali birjadagi sektorlar, hujjatlar va
            shu kabi investitsion ma’lumotlar haqida kerakli bilimlarni olasiz,
            fundamental tahlil qilishni bemalol amalga oshirishni o'rganasiz.
          </b>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="7">
        <Accordion.Header>Modul - 8: Birjada investitsiya</Accordion.Header>
        <Accordion.Body>
          <ul className="accordion_list">
            <li>ETF</li>
            <li>Dividend</li>
            <li>Penny Stock</li>
            <li>Option'lar</li>
            <li>Short Squeeze</li>
          </ul>
          <b>
            <span>Natija:</span> Modul orqali birjada investitsiya qilish uchun
            kerakli barcha bilim va vositalarni olasiz.
          </b>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="8">
        <Accordion.Header>
          Modul - 9: Halol investitsiya platformalari
        </Accordion.Header>
        <Accordion.Body>
          <ul className="accordion_list">
            <li>Iman Invest</li>
            <li>Wahed Invest</li>
            <li>Investitsiya kelishuvlari</li>
            <li>Alternativ investitsiya platformalari </li>
          </ul>
          <b>
            <span>Natija: </span> Modul orqali passiv holatda investitsiya
            qilish va halol bo’lgan platformalar haqida to’liq tushunchalarga
            ega bo'lasiz.
          </b>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="9">
        <Accordion.Header>Modul - 10: Islom moliyasi</Accordion.Header>
        <Accordion.Body>
          <ul className="accordion_list">
            <li>Islom moliyasi - yangi sanoat</li>
            <li>Fatvo olishning to’g’ri yo’li</li>
            <li>Fatvo beruvchi tashkilotlar</li>
            <li>Savdo turlari</li>
            <li>Takaful</li>
            <li>Shartnomalar</li>
          </ul>
          <b>
            <span>Natija:</span>Modul orqali Islom moliyasi haqida boshlang’ich
            tushuncha va undagi yo’nalish, sohalar haqida ma’lumotlarga ega
            bo'lasiz.
          </b>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="10">
        <Accordion.Header>Modul - 11: Halol aksiya</Accordion.Header>
        <Accordion.Body>
          <ul className="accordion_list">
            <li>Aksiya savdosi halolmi?</li>
            <li>Halol aksiya nima?</li>
            <li>Moliyaviy holatni tekshirish</li>
            <li>Dividend Purification</li>
            <li>Birjada nojoiz savdolar (Forex, Shorts, Futures)</li>
            <li>Nojoiz savdolar (2- qism)</li>
            <li>Forex haqida</li>
          </ul>
          <b>
            <span>Natija:</span> Modul orqali treyding va investitsiya
            sohasidagi halol va harom savdolar haqida to’liq tushuncha, fatvolar
            bilan tanishasiz.
          </b>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="11">
        <Accordion.Header>
          Modul - 12: Halol aksiya platformalari
        </Accordion.Header>
        <Accordion.Body>
          <ul className="accordion_list">
            <li>Halol aksiyalarni tekshiruvchi dasturlar </li>
            <li>Islamicly Mobile</li>
            <li>Shukru, Sahih invest, Muslimxchange</li>
            <li>Islom moliyasiga qiziquvchilar uchun</li>
          </ul>
          <b>
            <span>Natija:</span> Modul orqali halol aksiyalar, tayyor tekshirib
            beruvchi arzon va tekin platformalar haqida to’liq tushuncha olasiz.
          </b>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="12">
        <Accordion.Header>
        Modul - 13: Bozorning oltin qoidalari
        </Accordion.Header>
        <Accordion.Body>
          <ul className="accordion_list">
            <li>1- qoida</li>
            <li>2- qoida</li>
            <li>3- qoida</li>
            <li>4- qoida</li>
            <li>Trade Management</li>
          </ul>
          <b><span>Natija</span> Modul orqali bozordagi eng kerakli oltin qoidalarni tushunish va intizom hosil qilish imkoniga ega bo'lasiz.</b>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="13">
        <Accordion.Header>
        Modul - 14: Savdo uchun g'oya
        </Accordion.Header>
        <Accordion.Body>
          <ul className="accordion_list">
            <li>Reddit, Twitter, Discord</li>
            <li>Trend va qiziqish</li>
            <li>Tayyor research - Report</li>
            <li>Bloomberg, Marketwatch</li>
            <li>1-2-strategiya</li>
            <li>3-4-strategiya</li>
            <li>5-strategiya</li>
          </ul>
          <b><span>Natija:</span> Modul orqali savdo qilish uchun strategiya va kerakli aksiyalarni topishni o'rganasiz.</b>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="14">
        <Accordion.Header>
        Modul - 15: Swing Trade - Shaxsiy uslubim
        </Accordion.Header>
        <Accordion.Body>
          <ul className="accordion_list">
            <li>Swing Trade - Social Arbitrage</li>
            <li>Trading - Telefonda</li>
            <li>Tayyor report'dan foydalanish</li>
          </ul>
          <b><span>Natija:</span> Modul orqali o’qituvchining shaxsiy uslubi va swing trading (treydingning yana bir uslubi) bilan tanishasiz.</b>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="15">
        <Accordion.Header>
        Modul - 16: Kichik byudjet bilan boshlash
        </Accordion.Header>
        <Accordion.Body>
          <ul className="accordion_list">
            <li>$100 byudjet</li>
            <li>$1000 byudjet</li>
            <li>Demo akkaunt amaliyot</li>
            <li>Penny stocks – Test</li>
          </ul>
          <b><span>Natija:</span> Modul orqali kichik summa bilan qanday uslubda ishlash haqida tavsiyalarga ega bo'lasiz.</b>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="16">
        <Accordion.Header>
        Modul - 17: TD Ameritrade - Real akkaunt
        </Accordion.Header>
        <Accordion.Body>
          <ul className="accordion_list">
            <li>TD Ameritrade - yangi akkaunt ochish</li>
            <li>W8-BEN formasi</li>
            <li>Bank Statement</li>
            <li>Depozit</li>
            <li>Bankda hisob raqami ochish - onlayn</li>
            <li>Rezidentlik olish - onlayn</li>
          </ul>
          <b><span>Natija:</span> Modul orqali TD Ameritrade brokerdan ro’yxatdan o’tish va kerakli hujjatlarni tayyorlashni o'rganasiz</b>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="17">
        <Accordion.Header>
        Modul - 18: Interactive Brokers – Real hisob raqam
        </Accordion.Header>
        <Accordion.Body>
          <ul className="accordion_list">
            <li>IBKR'dan akkaunt ochish</li>
            <li>Platformani to’g’rilash</li>
            <li>IBKR platformasini sozlash</li>
            <li>TradingView - demo va sozlash</li>
            <li>IBKR'ni TradingView'ga ulash</li>
            <li>Transferwise</li>
            <li>Broker va investitsiya platformalarini tanlash</li>
          </ul>
          <b><span>Natija:</span> Modul orqali Interactive brokers'dan ro’yxatdan o’tish, onlayn bepul treyding platformani ishlatish, yangi broker akkauntlarni tekshirish va tanlash haqida ma’lumotlarni olishingiz mumkin.</b>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="18">
        <Accordion.Header>
        Modul - 19: Kerakli ma’lumotlar
        </Accordion.Header>
        <Accordion.Body>
          <ul className="accordion_list">
            <li>Treyding uslubi</li>
            <li>SWOT tahlil</li>
            <li>Savdo uchun ro’yxat</li>
            <li>Treyding vositalar</li>
            <li>Treyder qachon investitsiya olishi kerak?</li>
          </ul>
          <b><span>Natija:</span> Modul orqali treyder uslublari, savdo uchun kerakli tavsiya va vositalar, shuningdek treyder qachon investordan pul olsa bo’lishi haqida tushunchalarga ega bo'lasiz.</b>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="19">
        <Accordion.Header>
        Modul - 20: Risk menejment
        </Accordion.Header>
        <Accordion.Body>
          <ul className="accordion_list">
            <li>Risk menejment - Kirish</li>
            <li>Risk ratio</li>
            <li>Pozitsiya olish</li>
            <li>Bank roll menejment</li>
            <li>Stop'ni qayerga qo’yish kerak?</li>
            <li>Risk menejment reja</li>
          </ul>
          <b><span>Natija:</span> Modul orqali savdodagi tavakkal (risk)ni aniqlash, boshqarish va unga yarasha foydani aniqlashni o'rganasiz.</b>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="20">
        <Accordion.Header>
        Modul - 21: Treyd menejment
        </Accordion.Header>
        <Accordion.Body>
          <ul className="accordion_list">
            <li>Treyd menejment - Kirish</li>
            <li>Scaling in va out</li>
            <li>Savdodan qachon chiqish kerak?</li>
            <li>Treyding uchun eng zo’r kitob</li>
            <li>KPI qo’yish</li>
          </ul>
          <b><span>Natija</span>Modul orqali savdolarni to’g’ri boshqarish, daromadni saqlab qolish va oshirish uchun kerakli bilimlarga ega bo'lasiz.</b>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="21">
        <Accordion.Header>
        Modul - 22: Ruhiy holat - Psixologiya
        </Accordion.Header>
        <Accordion.Body>
          <ul className="accordion_list">
            <li>Doim realistik bo’lish</li>
            <li>Zararni to’g’ri qabul qilish</li>
            <li>Foydani to’g’ri qabul qilish</li>
            <li>Intizom</li>
            <li>Depressiya va stressdan chiqib ketish</li>
            <li>Psixologik intizomlar</li>
            <li>Treyding psixologiyasi</li>
          </ul>
          <b><span>Natija:</span> Modul orqali savdolar vaqtida treyder o’zini hissiy jihatdan qanday ushlashi kerakligi haqida bilimlarga ega bo'lasiz.</b>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="22">
        <Accordion.Header>
        Modul - 23: Bonus
        </Accordion.Header>
        <Accordion.Body>
          <ul className="accordion_list">
            <li>Portfolio yaratish</li>
            <li>Halol aksiyani hisoblash</li>
            <li>Pozitsiya olish kalkulyatori</li>
          </ul>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

export default BasicExample;
