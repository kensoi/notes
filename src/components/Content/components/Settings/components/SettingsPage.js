import React from "react";

import { Headline } from "./Headline";
import XBlock, { XHorizontal, XVertical, FormLabel } from "../../../../XBlock";
import { XTumbler, XButton } from "../../../../XForms";
import ColorSchemaChanger from "../../../../ColorSchemaChanger";
import ClearIcon from '@mui/icons-material/Clear';

export function SettingsPage(props) {
  let contexts = [
    {
      name: "ВЫКЛ.",
      context: false,
    },
    {
      name: "ВКЛ.",
      context: true,
    },
  ]

  return <XBlock>
    <XVertical className="settings-page settings-block" sx={[{},{},{}, {width: "100%"}]}>
      <Headline toolkit={props.toolkit}>
        Основные
      </Headline>
      <XHorizontal xstyle={{justifyContent:"space-between"}}>
        <FormLabel>Цветовая схема</FormLabel>
        <ColorSchemaChanger align="right" toolkit={props.toolkit} />
      </XHorizontal>
      <XHorizontal xstyle={{justifyContent:"space-between"}}>
        <FormLabel>Спрашивать при удалении</FormLabel>
        <XTumbler
          tumbleConfig={contexts}
          context={props.toolkit.notifyBeforeRemoving}
          setContext={props.toolkit.setNotifyBeforeRemoving}
        />
      </XHorizontal>
      <XButton style={{width: "100%"}} icon={<ClearIcon/>} title="Стереть все заметки" onClick={() => props.toolkit.showCard("confirm-deletion-all")}/>
    </XVertical>
  </XBlock>;
}
