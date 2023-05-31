import "./scss/stylesheet.scss";
import ProfileButton from "./components/ProfileButton";

function HeaderLogo(props) {
  return <div className="header-logo">WebCrossUI</div>;
}

function DevButton(props) {
  return <a href="https://github.com/kensoi">
    <div className="header-dev"></div>
  </a>
}

function Header(props) {
  if (props.toolkit.enableHeader) {
    return (
      <div className="header">
        <div className="header-content">
          <DevButton />
          <HeaderLogo />
          <ProfileButton toolkit = {props.toolkit}/>
        </div>
      </div>
    );
  }
}

export default Header;
