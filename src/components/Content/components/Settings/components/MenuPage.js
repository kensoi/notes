import React from "react";
import XBlock, { XHorizontal } from "../../../../XBlock";
import { XButton } from "../../../../XForms";

import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import InfoIcon from '@mui/icons-material/Info';
import ContrastIcon from '@mui/icons-material/Contrast';
// import LogoDevIcon from '@mui/icons-material/LogoDev';

function MenuButton (props) {
  return <XButton accent="transparent" icon={props.icon} style={{width: "100%"}} title={props.title} onClick={props.onClick}/>
}

export function MenuPage(props) {
  return <XBlock className="settings-menu">
    <div className="settings-block">
      <XHorizontal>
        <XButton accent="transparent" icon={<ArrowBackIcon/>} 
          hideEmptyPaddings={true} hideEmptyPaddingsAtMobile={true}
          onClick={() => { window.location.href=process.env.PUBLIC_URL }} />
        <div className="settings-headline">Настройки</div>
      </XHorizontal>
      <MenuButton icon={<ContrastIcon/>} title="Основные" onClick={() => {props.toolkit.settings.setPage(1)}} />
      <MenuButton icon={<InfoIcon/>} title="О программе" onClick={() => {props.toolkit.settings.setPage(2)}} />
    </div>
  </XBlock>;
}
