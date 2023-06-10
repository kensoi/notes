import { useContext } from "react";

import Headline from "./Headline";
import XBlock from "../../../../XBlock";
import { XTumbler, XButton } from "../../../../XForms";
import ColorSchemaChanger from "../../../../ColorSchemaChanger";
import { Toolkit } from "../../../../../contexts";

import ClearIcon from '@mui/icons-material/Clear';
import BrowserUpdatedIcon from '@mui/icons-material/BrowserUpdated';

import * as serviceWorkerRegistration from '../../../../../serviceWorkerRegistration';

export default function Global () {
  const toolkit = useContext(Toolkit)

  const ClearAllButton = () => {
    const clearAll = () => toolkit.notes.removeAll()
    
    return <XButton 
      style={{width: "100%", marginBottom: "4px"}} 
      icon={<ClearIcon/>} title="Стереть все заметки" 
      onClick={clearAll}/>
  }

  const CheckForUpdatesButton = () => {
    const CheckForUpdates = () => {
      serviceWorkerRegistration.unregister()
      window.location.href = process.env.PUBLIC_URL
    }

    return <XButton 
      style={{width: "100%"}} 
      icon={<BrowserUpdatedIcon/>} title="Проверить обновления" 
      onClick={CheckForUpdates}/>
  }

  const NotifyBeforeNoteDelete = () => {
    const contexts = [
      {
        name: "ВЫКЛ.",
        context: false,
      },
      {
        name: "ВКЛ.",
        context: true,
      },
    ]

    return <XTumbler
      tumbleConfig={contexts}
      context={toolkit.notes.deleteAsk.state}
      setContext={toolkit.notes.deleteAsk.setState}
    />
  }

  return <XBlock className="settings-page settings-block">
      <Headline title="Основные" />
      <div className="options-grid-list">
        <div className="options-grid-item">
          Цветовая схема
        </div>
        <div className="options-grid-item">
          <ColorSchemaChanger align="right" />
        </div>
        <div className="options-grid-item">
          Спрашивать перед удалением заметки
        </div>
        <div className="options-grid-item">
          <NotifyBeforeNoteDelete />
        </div>
      </div>
      <ClearAllButton />
      <CheckForUpdatesButton />
  </XBlock>
}
