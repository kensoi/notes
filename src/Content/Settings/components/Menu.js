import React, { useContext } from "react";

import XBlock from "WebXUI/XBlock";
import { XButton } from "WebXUI/XForms";

import { ToolKitContext } from "shared/tools"

import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import InfoIcon from '@mui/icons-material/Info';
import ContrastIcon from '@mui/icons-material/Contrast';
import PersonIcon from '@mui/icons-material/Person';

import { PageMountBlockContext } from "shared/utils";

function MenuButton (props) {
  return <XButton accent="transparent" icon={props.icon} style={{width: "100%"}} title={props.title} onClick={props.onClick}/>
}

export default function Menu() {
  const toolkit = useContext(ToolKitContext);

  const Header = () => {
    const MainMountBlock = useContext(PageMountBlockContext)

    const buttonAction = () => {
      MainMountBlock.hide()
      setTimeout(() => {
        window.location.href=process.env.PUBLIC_URL
      }, 190)
    }

    return <div className="settings-headline settings-block">
      <XButton 
        accent="transparent" icon={<ArrowBackIcon/>} 
        hideEmptyPaddings={true} hideEmptyPaddingsAtMobile={true}
        onClick={buttonAction} 
      />
      Настройки
    </div>
  }

  return <div className="settings-menu">
    <Header />
    <XBlock className="settings-block">
      <MenuButton icon={<ContrastIcon/>} title="Основные" onClick={() => {
        toolkit.settings.page = 1
      }} />
    </XBlock>
    <XBlock className="settings-block">
      <MenuButton icon={<InfoIcon/>} title="О программе" onClick={() => {
        toolkit.settings.page = 2
      }} />
      <MenuButton icon={<PersonIcon/>} title="О разработчике" onClick={() => {
        toolkit.settings.page = 3
      }} />
    </XBlock>
  </div>;
}
