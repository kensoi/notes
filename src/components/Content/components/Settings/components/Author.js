import XBlock from "../../../../XBlock";
import Headline from "./Headline";

export default function Author () {
  return <XBlock className="settings-page settings-block">
    <Headline title="Об авторе" />
    <div className="options-grid-list">
      <div className="options-grid-item">
        <b>ВКонтакте:</b>
      </div>
      <div className="options-grid-item">
        <a href="https://vk.com/kensoi">
          @kensoi  
        </a>
      </div>
      <div className="options-grid-item">
        <b>Github:</b>
      </div>
      <div className="options-grid-item">
        <a href="https://githob.com/kensoi">
          @kensoi  
        </a>
      </div>
    </div>
    <div className="settings-text">
      Поддержать автора можно закинув денюшки на его карту: <br /> <b>2200 7007 9962 2518</b>
    </div>
  </XBlock>
}