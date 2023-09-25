import "./App.css";
import React from "react";
import { useMediaQuery } from "react-responsive";
import X375px from "./components/X375px/index";
import X900px from "./components/X900px/index";
import X1440px from "./components/X1440px/index";
import LgHandsPhone012x3 from "./assets/img/lg-hands-phone-01-2x-3@1x.png";
import IcSberProfile3 from "./assets/img/ic-sber-profile-3@2x.svg";
import Private211 from "./assets/img/private-2-1-1@1x.png";
import IcSberSigned3 from "./assets/img/ic-sber-signed-3@2x.svg";
import IconSberSend3 from "./assets/img/icon-sber-send-3@2x.svg";
import IconSberStorage3 from "./assets/img/icon-sber-storage-1@2x.svg";
import HandsHeart3 from "./assets/img/hands-heart-3@1x.png";
import LgHandsPhone012 from "./assets/img/lg-hands-phone-01-2x@2x.png";
import Img from "./assets/img/img@2x.png";
import Private21 from "./assets/img/private-2-1-1@2x.png";
import LgHandsPhone012x2 from "./assets/img/lg-hands-phone-01-2x-2@2x.png";
import IcSberProfile2 from "./assets/img/ic-sber-profile-2@2x.svg";
import IcSberWallet from "./assets/img/ic-sber-wallet@2x.svg";
import IcSberSecurity from "./assets/img/ic-sber-secure@2x.svg";
import IcSberTime from "./assets/img/icon-sber-time@2x.svg";
import IcSberSuccess from "./assets/img/ic-sber-success@2x.svg";
import IcSberProfile from "./assets/img/ic-sber-profile@2x.svg";
import IcSberSigned from "./assets/img/ic-sber-signed@2x.svg";
import IconSberSend from "./assets/img/icon-sber-send@2x.svg";

// const mainUrl = `https://${window.location.hostname}`;
// const mainUrl = `https://demo.podpis.sber.ru`;

function App() {
  console.log("version 1.1.51");
  const sm = useMediaQuery({ maxWidth: 900 });
  const xl = useMediaQuery({ minWidth: 900, maxWidth: 1439 });
  const xll = useMediaQuery({ minWidth: 1440 });

  return (
    <>
      {sm && <X375px {...x375pxData} />}
      {xl && <X900px {...x900pxData} />}
      {xll && <X1440px {...x1440pxData} />}
    </>
  );
}

export default App;

const maleLaptop081Data = {
  src: Private211,
};

const container1Data = {
  src: IcSberWallet,
  title: "Экономьте",
  subtitle: (
    <React.Fragment>
      Экономия до 90% <br />
      на подписании в сравнении <br />с выпуском квалифицированной подписи.
    </React.Fragment>
  ),
  className: "",
};

const menuLinkWaApp = {
  signatureVerification: `/wa/#/signatureVerification-all`,
  signUp: `/wa/#/sign_up`,
  signIn: `/wa/#/sign_in`,
  // mainUrl: mainUrl,
};

const advantageItem1Data = {
  containerProps: container1Data,
};

const container2Data = {
  src: IcSberSecurity,
  title: "Используйте в суде",
  subtitle: "Налоговая и суд примут подписанные в нашем приложении документы.",
  className: "container-5",
};

const advantageItem2Data = {
  className: "advantage-item",
  containerProps: container2Data,
};

const container3Data = {
  src: IcSberTime,
  title: "Регистрируйтесь быстро",
  subtitle: (
    <React.Fragment>
      Получите УНЭП с помощью регистрации через Сбер ID. <br />
      Не нужно ждать выпуска токена или тратить время на поездку <br />в офис.
    </React.Fragment>
  ),
  className: "container-5",
};

const advantageItem22Data = {
  containerProps: container3Data,
};

const container4Data = {
  src: IcSberSuccess,
  title: "Попробуйте бесплатно",
  subtitle: (
    <React.Fragment>
      Выпуск УНЭП и первое <br /> подписание в нашем сервисе
      <br />
      бесплатно.
    </React.Fragment>
  ),
  className: "container-5",
};

const advantageItem3Data = {
  className: "advantage-item",
  containerProps: container4Data,
};

const otherchandsPhone1Data = {
  src: LgHandsPhone012x3,
  className: "",
};

const imageHands1Data = {
  otherchandsPhoneProps: otherchandsPhone1Data,
};

const imageSm1Data = {
  src: IcSberProfile3,
  className: "",
};

const column1Data = {
  src: IcSberProfile,
  title: "1 шаг",
  caption: "Зарегистрируйтесь",
  subtitle: (
    <React.Fragment>
      Зарегистрируйтесь <br />с помощью Сбер ID
    </React.Fragment>
  ),
  imageSmProps: imageSm1Data,
};

const imageSm2Data = {
  src: IcSberSigned3,
  className: "",
};

const column2Data = {
  src: IcSberSigned,
  title: "2 шаг",
  caption: "Подпишите",
  subtitle: "Загрузите документ и подпишите его по одной кнопке",
  imageSmProps: imageSm2Data,
};

const imageSm3Data = {
  src: IconSberSend3,
  className: "image-sm",
};

const column3Data = {
  src: IconSberSend,
  title: "3 шаг",
  caption: "Отправьте",
  subtitle: (
    <React.Fragment>
      Отправьте ссылку контрагенту <br />
      на подписание
    </React.Fragment>
  ),
  imageSmProps: imageSm3Data,
};

const imageSm44Data = {
  src: IconSberStorage3,
  className: "image-sm",
};

const column4Data = {
  src: IconSberStorage3,
  title: "4 шаг",
  caption: "Храните под рукой",
  subtitle: (
    <React.Fragment>
      Все ваши файлы в одном месте и доступны в любой момент
    </React.Fragment>
  ),
  imageSmProps: imageSm44Data,
};

const handsHeart1Data = {
  src: HandsHeart3,
  className: "",
};

const imageHands21Data = {
  handsHeartProps: handsHeart1Data,
};

const bannerContactsDesktopData = {
  title: (
    <React.Fragment>
      Проверьте электронную <br />
      подпись в нашем сервисе
    </React.Fragment>
  ),
  subtitle: (
    <React.Fragment>
      Загрузите подписанный у нас документ и подпись контрагента. Мы проверим
      наличие изменений в файле и принадлежность подписи пользователю.
    </React.Fragment>
  ),

  imageHands2Props: imageHands21Data,
};

const qAItem1Data = {
  title: (
    <React.Fragment>
      Какой тип электронной подписи используется <br />в сервисе?
    </React.Fragment>
  ),
  subtitle:
    "Усиленная неквалифицированная электронная подпись. Криптографические средства защиты гарантируют неизменность подписанных документов.",
};

const qAItem2Data = {
  title: (
    <React.Fragment>
      Можно ли пойти с документами, подписанными <br />в вашем сервисе в суд или
      налоговую?
    </React.Fragment>
  ),
  subtitle:
    "Да, мы разработали сервис с учетом всех требований законодательства, поэтому государственные органы примут документы, подписанные в нашем сервисе.",
};

const qAItem3Data = {
  title: "Какую поддержку может оказать сервис в случае судебных споров?",
  subtitle:
    "По запросу мы предоставим дополнительный протокол подписания документа с информацией о всех подписавших.",
};

const qAItem41Data = {
  title:
    "Нужно ли мне что-то устанавливать на свой компьютер? Как это работает?",
  subtitle: (
    <React.Fragment>
      Нет, на компьютер ничего устанавливать не нужно, электронная подпись
      создается и хранится в облачном хранилище. Таким образом, подписать
      документ сможете с любого устройства <br />и платите только за исходящие
      документы.
    </React.Fragment>
  ),
};

const footerData = {
  text1: (
    <React.Fragment>
      ОГРН 1187746905004 ИНН 9705124940
      <br />
      Адрес: 121170, г. Москва, ул. Поклонная,
      <br />
      д. 3, офис 209, этаж 2<br />© ООО «СБЕР ЛИГАЛ». Все права защищены.
      <br />
      При копировании необходимо упоминание.
    </React.Fragment>
  ),
  phone: "+7 (499) 404-10-37",
  podpisSberRu: "podpis@sber.ru",
};

const x1440pxData = {
  h1: (
    <React.Fragment>
      Подписывайте
      <br />
      документы онлайн
    </React.Fragment>
  ),

  subtitle1: "Договаривайтесь быстро и безопасно",
  h21: (
    <React.Fragment>
      Быстрое
      <br />и надёжное
      <br />
      подписание
    </React.Fragment>
  ),
  h22: (
    <React.Fragment>
      Подписывайте документы <br />
      юридически значимо
    </React.Fragment>
  ),
  h23: "Как это работает?",
  subtitle2: "Подпишите первый документ за 5 минут",
  title: (
    <React.Fragment>
      Отвечаем <br />
      на ваши вопросы
    </React.Fragment>
  ),
  maleLaptop08Props: maleLaptop081Data,
  advantageItem1Props: advantageItem1Data,
  advantageItem2Props: advantageItem2Data,
  advantageItem2Props2: advantageItem22Data,
  advantageItem3Props: advantageItem3Data,
  imageHandsProps: imageHands1Data,
  column1Props: column1Data,
  column2Props: column2Data,
  column3Props: column3Data,
  column4Props: column4Data,
  bannerContactsDesktopProps: bannerContactsDesktopData,
  qAItem1Props: qAItem1Data,
  qAItem2Props: qAItem2Data,
  qAItem3Props: qAItem3Data,
  qAItem4Props: qAItem41Data,
  footerProps: footerData,
  menuLinkWa: menuLinkWaApp,
};

const header2Data = {
  className: "header-1",
};

const blur3Data = {
  className: "blur-1",
};

const container22Data = {
  src: IcSberWallet,
  title: "Экономьте",
  subtitle: (
    <React.Fragment>
      Экономия до 90% <br />
      на подписании в сравнении <br />с выпуском квалифицированной подписи.
    </React.Fragment>
  ),
  className: "",
};

const advantageItem32Data = {
  container2Props: container22Data,
};

const container23Data = {
  src: IcSberSecurity,
  title: "Используйте в суде",
  subtitle: "Налоговая и суд примут подписанные в нашем приложении документы.",
  className: "container-5",
};

const advantageItem33Data = {
  className: "advantage-item-3",
  container2Props: container23Data,
};

const container24Data = {
  src: IcSberTime,
  title: "Регистрируйтесь быстро",
  subtitle: (
    <React.Fragment>
      Получите УНЭП с помощью регистрации через Сбер ID. <br />
      Не нужно ждать выпуска токена или тратить время на поездку <br />в офис.
    </React.Fragment>
  ),
  className: "container-5",
};

const advantageItem4Data = {
  container2Props: container24Data,
};

const container25Data = {
  src: IcSberSuccess,
  title: "Попробуйте бесплатно",
  subtitle: (
    <React.Fragment>
      Выпуск УНЭП и первое <br /> подписание в нашем сервисе
      <br />
      бесплатно.
    </React.Fragment>
  ),
  className: "container-5",
};

const advantageItem34Data = {
  className: "advantage-item-3",
  container2Props: container25Data,
};

const otherchandsPhone2Data = {
  src: LgHandsPhone012,
  className: "otherchands-phone-1",
};

const imageHands3Data = {
  className: "image-hands-1",
  otherchandsPhoneProps: otherchandsPhone2Data,
};

const imageSm4Data = {
  src: IcSberProfile,
  className: "",
};

const column22Data = {
  src: IcSberProfile,
  title: "1 шаг",
  caption: "Зарегистрируйтесь",
  subtitle: (
    <React.Fragment>
      Зарегистрируйтесь <br />с помощью Сбер ID
    </React.Fragment>
  ),
  imageSmProps: imageSm4Data,
};

const imageSm5Data = {
  src: IcSberSigned,
  className: "",
};

const column23Data = {
  src: IcSberSigned,
  title: "2 шаг",
  caption: "Подпишите",
  subtitle: (
    <React.Fragment>
      Загрузите документ <br />и подпишите его по одной кнопке
    </React.Fragment>
  ),
  imageSmProps: imageSm5Data,
};

const imageSm6Data = {
  src: IconSberSend,
  className: "image-sm",
};

const column24Data = {
  src: IconSberSend,
  title: "3 шаг",
  caption: "Отправьте",
  subtitle: (
    <React.Fragment>
      Отправьте ссылку контрагенту <br />
      на подписание
    </React.Fragment>
  ),
  imageSmProps: imageSm6Data,
};

const imageSm66Data = {
  src: IconSberStorage3,
  className: "image-sm",
};

const column244Data = {
  src: IconSberStorage3,
  title: "4 шаг",
  caption: "Храните под рукой",
  subtitle: (
    <React.Fragment>
      Все ваши файлы в одном месте и доступны в любой момент
    </React.Fragment>
  ),
  imageSmProps: imageSm66Data,
};

const blur4Data = {
  className: "blur-2",
};

const qAItem4Data = {
  title: (
    <React.Fragment>
      Какой тип электронной подписи используется <br />в сервисе?
    </React.Fragment>
  ),
  subtitle:
    "Усиленная неквалифицированная электронная подпись. Криптографические средства защиты гарантируют неизменность подписанных документов.",
};

const qAItem5Data = {
  title: (
    <React.Fragment>
      Можно ли пойти с документами, подписанными <br />в вашем сервисе в суд или
      налоговую?
    </React.Fragment>
  ),
  subtitle:
    "Да, мы разработали сервис с учетом всех требований законодательства, поэтому государственные органы примут документы, подписанные в нашем сервисе.",
};

const qAItem6Data = {
  title: "Какую поддержку может оказать сервис в случае судебных споров?",
  subtitle: (
    <React.Fragment>
      По запросу мы предоставим дополнительный протокол подписания документа{" "}
      <br />с информацией о всех подписавших.
    </React.Fragment>
  ),
};

const x900pxData = {
  h1: "Подписывайте\nдокументы онлайн",
  subtitle1: "Договаривайтесь быстро и безопасно",
  img: Img,
  h21: (
    <React.Fragment>
      Быстрое
      <br />и надёжное
      <br />
      подписание
    </React.Fragment>
  ),
  h22: (
    <React.Fragment>
      Подписывайте документы <br />
      юридически значимо
    </React.Fragment>
  ),
  h23: "Как это работает?",
  subtitle2: "Подпишите первый документ за 5 минут",
  title2: (
    <React.Fragment>
      Отвечаем <br />
      на ваши <br />
      вопросы
    </React.Fragment>
  ),
  headerProps: header2Data,
  blur1Props: blur3Data,
  advantageItem31Props: advantageItem32Data,
  advantageItem32Props: advantageItem33Data,
  advantageItem4Props: advantageItem4Data,
  advantageItem33Props: advantageItem34Data,
  imageHandsProps: imageHands3Data,
  column21Props: column22Data,
  column22Props: column23Data,
  column23Props: column24Data,
  column24Props: column244Data,
  blur2Props: blur4Data,
  qAItem1Props: qAItem4Data,
  qAItem2Props: qAItem5Data,
  qAItem3Props: qAItem6Data,
  qAItem4Props: qAItem41Data,
  bannerContactsDesktopProps: bannerContactsDesktopData,
  menuLinkWa: menuLinkWaApp,
  footerProps: footerData,
};

const maleLaptop082Data = {
  src: Private21,
  className: "male-laptop-08-1",
};

const maleLaptop1Data = {
  maleLaptop08Props: maleLaptop082Data,
};

const titleSubtitle1Data = {
  src: IcSberWallet,
  title: "Экономьте",
  subtitle: (
    <React.Fragment>
      Экономия до 90% <br />
      на подписании в сравнении <br />с выпуском квалифицированной подписи.
    </React.Fragment>
  ),
};

const advantageItem61Data = {
  titleSubtitleProps: titleSubtitle1Data,
};

const titleSubtitle2Data = {
  src: IcSberSecurity,
  title: "Используйте в суде",
  subtitle: "Налоговая и суд примут подписанные в нашем приложении документы.",
};

const advantageItem62Data = {
  className: "advantage-item-10",
  titleSubtitleProps: titleSubtitle2Data,
};

const titleSubtitle3Data = {
  src: IcSberTime,
  title: "Регистрируйтесь быстро",
  subtitle: (
    <React.Fragment>
      Получите УНЭП с помощью регистрации через Сбер ID. <br />
      Не нужно ждать выпуска токена или тратить время на поездку <br />в офис.
    </React.Fragment>
  ),
  className: "container-5",
};

const advantageItemtitleSubtitle3Data = {
  className: "advantage-item-10",
  titleSubtitleProps: titleSubtitle3Data,
};

const titleSubtitle4Data = {
  src: IcSberSuccess,
  title: "Попробуйте бесплатно",
  subtitle: (
    <React.Fragment>
      Выпуск УНЭП и первое <br /> подписание в нашем сервисе
      <br />
      бесплатно.
    </React.Fragment>
  ),
};

const advantageItem63Data = {
  className: "advantage-item-10",
  titleSubtitleProps: titleSubtitle4Data,
};

const handsHeart3Data = {
  src: LgHandsPhone012x2,
  className: "otherchands-phone-3",
};

const imageHands42Data = {
  handsHeartProps: handsHeart3Data,
};

const imageSm10Data = {
  src: IcSberProfile2,
};

const qAItem10Data = {
  title: (
    <React.Fragment>
      Какой тип электронной подписи используется <br />в сервисе?
    </React.Fragment>
  ),
  subtitle: (
    <React.Fragment>
      Усиленная неквалифицированная электронная подпись. Криптографические
      средства защиты гарантируют неизменность подписанных документов. По
      запросу мы предоставим дополнительный протокол подписания документа с
      информацией <br />о всех подписавших.
    </React.Fragment>
  ),
};

const qAItem11Data = {
  title: (
    <React.Fragment>
      Можно ли пойти <br />с документами, подписанными <br />в вашем сервисе, в
      суд или налоговую?
    </React.Fragment>
  ),
  subtitle: (
    <React.Fragment>
      Да, мы разработали сервис <br />с учетом всех требований законодательства,
      поэтому государственные органы примут документы, подписанные в нашем
      сервисе.
    </React.Fragment>
  ),
};

const qAItem12Data = {
  title: (
    <React.Fragment>
      Какую поддержку может оказать сервис в случае судебных споров?
    </React.Fragment>
  ),
  subtitle: (
    <React.Fragment>
      По запросу мы предоставим дополнительный протокол подписания документа{" "}
      <br />с информацией о всех подписавших.
    </React.Fragment>
  ),
};

const x375pxData = {
  h1: (
    <React.Fragment>
      Подписывайте <br />
      документы
      <br /> онлайн
    </React.Fragment>
  ),
  subtitle1: (
    <React.Fragment>
      Договаривайтесь <br /> быстро и безопасно
    </React.Fragment>
  ),
  h21: (
    <React.Fragment>
      Быстрое
      <br />и надёжное
      <br />
      подписание
    </React.Fragment>
  ),
  h22: (
    <React.Fragment>
      Подписывайте документы <br />
      юридически значимо
    </React.Fragment>
  ),
  h23: "Как это работает?",
  subtitle2: "Подпишите первый документ за 5 минут",
  subtitle3: (
    <React.Fragment>
      Зарегистрируйтесь <br />с помощью Сбер ID
    </React.Fragment>
  ),
  heroBannerMobile: Img,
  title2: (
    <React.Fragment>
      Отвечаем <br />
      на ваши <br />
      вопросы
    </React.Fragment>
  ),
  maleLaptopProps: maleLaptop1Data,
  advantageItem61Props: advantageItem61Data,
  advantageItem62Props: advantageItem62Data,
  titleSubtitleProps: advantageItemtitleSubtitle3Data,
  advantageItem63Props: advantageItem63Data,
  imageHands4Props: imageHands42Data,
  imageSmProps: imageSm10Data,
  column50Props: column1Data,
  column51Props: column2Data,
  column52Props: column3Data,
  column53Props: column4Data,
  qAItem1Props: qAItem10Data,
  qAItem2Props: qAItem11Data,
  qAItem3Props: qAItem12Data,
  footerProps: footerData,
  qAItem4Props: qAItem41Data,
  bannerContactsDesktopProps: bannerContactsDesktopData,
  menuLinkWa: menuLinkWaApp,
};
