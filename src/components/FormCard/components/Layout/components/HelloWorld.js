import React from "react";
import Sticker2 from './17.png';
import { XHorizontal } from "../../../../XBlock";

export default class HelloWorld extends React.Component {
  render() {
    return (
      <>
        <h1>Привет, мир!</h1>
        <p>
          Это приложение создано по личной необходимости как удобный инструмент при походе в магазин.
        </p>
        <p>
          Приложение не требует никаких платежей (как бы часто не мелькали рубли у вас на глазах). Калькулятором можно пользоваться совершенно бесплатно.
        </p>
        <p>
          Поддержать автора можно закинув денюшки на его карту: <b>2200 7007 9962 2518</b>
        </p>
        <XHorizontal>
          <a href="https://t.me/addstickers/nasyka_lineye8">
            <img src={Sticker2} alt="miuruwa sticker" style={{width:"128px", height: "128px"}}/>
          </a>
        </XHorizontal>
      </>
    );
  }
}
