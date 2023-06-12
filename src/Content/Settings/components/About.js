import XBlock from "WebXUI/XBlock";
import Headline from "./Headline";

export default function About () {
  return  <div className="settings-wrapper">
    <Headline title="О программе" />
    <XBlock className="settings-page">
    <div className="options-grid-list settings-block">
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
  </XBlock>
  </div>
}