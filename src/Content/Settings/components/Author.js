import XBlock from "WebXUI/XBlock";
import Headline from "./Headline";

export default function Author () {
  return  <div className="settings-wrapper">
    <Headline title="О разработчике" />
    <XBlock className="settings-page">
      <div className="options-grid-list settings-block">
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
      <div className="settings-text settings-block">
        Поддержать автора можно закинув денюшки на его карту: <br /> <b>2200 7007 9962 2518</b>
      </div>
    </XBlock>
  </div>
}