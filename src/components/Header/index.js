import "./scss/stylesheet.scss";
import SettingsIcon from '@mui/icons-material/Settings';
import { XButton } from "../XForms";

function HeaderLogo(props) {
  return <div className="header-logo">Заметки</div>;
}

function DevButton(props) {
  return <a href="https://github.com/kensoi">
    <div className="header-dev"></div>
  </a>;
}

function Settings(props) {
  return <XButton
  icon={<SettingsIcon />}
  accent="transparent"
  hideEmptyPaddings={true} hideEmptyPaddingsAtMobile={true}
  onClick={() => {
    window.location.href=process.env.PUBLIC_URL + "/settings"
  }} />
}

function Header(props) {
  if (props.toolkit.header.state) {
    return (
      <div className="header">
        <div className="header-content">
          <DevButton />
          <HeaderLogo />
          <Settings toolkit={props.toolkit} />
        </div>
      </div>
    );
  }
}

export default Header;
