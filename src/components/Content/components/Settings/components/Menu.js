import React, { useContext } from "react";
import XBlock from "../../../../XBlock";
import { XButton } from "../../../../XForms";

import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import InfoIcon from '@mui/icons-material/Info';
import ContrastIcon from '@mui/icons-material/Contrast';
import PersonIcon from '@mui/icons-material/Person';
import { Toolkit } from "../../../../../contexts";

function MenuButton (props) {
  return <XButton accent="transparent" icon={props.icon} style={{width: "100%"}} title={props.title} onClick={props.onClick}/>
}

export default function Menu() {
  const toolkit = useContext(Toolkit);

  const Header = () => {
    return <div className="settings-headline">
      <XButton accent="transparent" icon={<ArrowBackIcon/>} 
        hideEmptyPaddings={true} hideEmptyPaddingsAtMobile={true}
        onClick={() => { window.location.href=process.env.PUBLIC_URL }} />
      Настройки
    </div>
  }

  return <div className="settings-menu">
    <Header />
    <XBlock>
      <MenuButton icon={<ContrastIcon/>} title="Основные" onClick={() => {
        toolkit.settings.page = 1
      }} />
    </XBlock>
    <XBlock>
      <MenuButton icon={<InfoIcon/>} title="О программе" onClick={() => {
        toolkit.settings.page = 2
      }} />
      <MenuButton icon={<PersonIcon/>} title="Об авторе" onClick={() => {
        toolkit.settings.page = 3
      }} />
    </XBlock>
  </div>;
}
