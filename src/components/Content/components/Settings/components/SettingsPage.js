import React from "react";

import { Headline } from "./Headline";
import XBlock from "../../../../XBlock";
import { XTumbler, XButton } from "../../../../XForms";
import ColorSchemaChanger from "../../../../ColorSchemaChanger";
import ClearIcon from '@mui/icons-material/Clear';
import BrowserUpdatedIcon from '@mui/icons-material/BrowserUpdated';
import * as serviceWorkerRegistration from './../../../../../serviceWorkerRegistration';

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

  return <XBlock className="settings-page settings-block">
      <Headline toolkit={props.toolkit}>
        Основные
      </Headline>
      <div className="options-grid-list">
        <div className="options-grid-item">
          Цветовая схема
        </div>
        <div className="options-grid-item">
          <ColorSchemaChanger align="right" toolkit={props.toolkit} />
        </div>
        <div className="options-grid-item">
          Спрашивать перед удалением заметки
        </div>
        <div className="options-grid-item">
          <XTumbler
            tumbleConfig={contexts}
            context={props.toolkit.notes.deleteAsk.state}
            setContext={props.toolkit.notes.deleteAsk.setState}
          />
        </div>
      </div>
      <XButton style={{width: "100%", marginBottom: "4px"}} icon={<ClearIcon/>} title="Стереть все заметки" onClick={() => props.toolkit.card.show("confirm-deletion-all")}/>
      <XButton style={{width: "100%"}} icon={<BrowserUpdatedIcon/>} title="Проверить обновления" onClick={
        () => {
          serviceWorkerRegistration.unregister()
          window.location.href = process.env.PUBLIC_URL
        }
      }/>
  </XBlock>
}
