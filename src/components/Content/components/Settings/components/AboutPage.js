import React from "react";
import XBlock, {XVertical} from "../../../../XBlock";
import { Headline } from "./Headline";

export function AboutPage(props) {
  return <XBlock>
    <XVertical className="settings-page settings-block">
      <Headline toolkit={props.toolkit}>
        О программе
      </Headline>
      <div className="options-grid-list">
        <div className="options-grid-item">
          <b>Название:</b>
        </div>
        <div className="options-grid-item">
          WebX Заметки
        </div>
        <div className="options-grid-item">
          <b>Версия:</b>
        </div>
        <div className="options-grid-item">
          1.2.0
        </div>
      </div>
      <div className="settings-text">
        Это приложение создано в образовательных целях
      </div>
      <div className="settings-text">
        Поддержать автора можно закинув денюшки на его карту: <br /> <b>2200 7007 9962 2518</b>
      </div>
    </XVertical>
  </XBlock>
}