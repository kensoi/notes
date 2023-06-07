import React from "react";
import XBlock, {XVertical} from "../../../../XBlock";
import { Headline } from "./Headline";

export function AboutPage(props) {
  return <XBlock>
    <XVertical className="settings-page settings-block">
      <Headline toolkit={props.toolkit}>
        О программе
      </Headline>
      <div className="settings-text">
        Это приложение создано в образовательных целях (автор на нём учил React)
      </div>
      <div className="settings-text">
        Чуть позже на нём вырос специальный UI шаблон называемый Web Cross UI.
      </div>
      <div className="settings-text">
        Поддержать автора можно закинув денюшки на его карту: <br /> <b>2200 7007 9962 2518</b>
      </div>
    </XVertical>
  </XBlock>
}