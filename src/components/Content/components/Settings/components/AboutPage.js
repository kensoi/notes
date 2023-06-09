import React from "react";
import XBlock from "../../../../XBlock";
import { Headline } from "./Headline";

export function AboutPage(props) {
  return <XBlock className="settings-page settings-block">
    <Headline toolkit={props.toolkit}>
      О программе
    </Headline>
    <div className="options-grid-list">
      <div className="options-grid-item">
        <b>Название:</b>
      </div>
      <div className="options-grid-item">
        {process.env.REACT_APP_FULL_NAME}
      </div>
      <div className="options-grid-item">
        <b>Версия:</b>
      </div>
      <div className="options-grid-item">
        {process.env.REACT_APP_VERSION}
      </div>
    </div>
    <div className="settings-text">
      Поддержать автора можно закинув денюшки на его карту: <br /> <b>2200 7007 9962 2518</b>
    </div>
  </XBlock>
}