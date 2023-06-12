import { useContext } from "react";

import XBlock from "WebXUI/XBlock";
import { XTumbler, XButton } from "WebXUI/XForms";
import ColorSchemaChanger from "./ColorSchemaChanger";

import Headline from "./Headline";

import { ToolKitContext } from "shared/tools"
import * as serviceWorkerRegistration from 'serviceWorkerRegistration';

import ClearIcon from '@mui/icons-material/Clear';
import BrowserUpdatedIcon from '@mui/icons-material/BrowserUpdated';


export default function Global () {
  const toolkit = useContext(ToolKitContext)

  const ClearAllButton = () => {
    const clearAll = toolkit.notes.removeAll.bind(toolkit.notes, false)
    
    return <XButton
      className="settings-block"
      icon={<ClearIcon/>} title="Стереть все заметки" 
      onClick={clearAll}/>
  }

  const CheckForUpdatesButton = () => {
    const CheckForUpdates = () => {
      if (toolkit.settings.CacheApp) {
        serviceWorkerRegistration.unregister()
        window.location.href = process.env.PUBLIC_URL
      }
      else {
        toolkit.cards.show("only-online")
      }
    }

    return <XButton 
      className="settings-block"
      icon={<BrowserUpdatedIcon/>} title="Обновить offline версию" 
      onClick={CheckForUpdates}/>
  }

  const AskBeforeRemoving = () => {
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

    const setState = (state) => {
      toolkit.settings.askBeforeRemoving = state
    }

    return <XTumbler
      tumbleConfig={contexts}
      context={toolkit.settings.askBeforeRemoving}
      setContext={setState}
    />
  }

  const CacheApp = () => {
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

    const setState = (state) => {
      if (!state) {
        serviceWorkerRegistration.unregister()
      }
      else {
        serviceWorkerRegistration.register()
      }
      
      toolkit.settings.cacheApp = state
    }

    return <XTumbler
      tumbleConfig={contexts}
      context={toolkit.settings.cacheApp}
      setContext={setState}
    />
  }
  const HeaderState = () => {
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

    const setState = (state) => {
      toolkit.settings.header = state
    }

    return <XTumbler
      tumbleConfig={contexts}
      context={toolkit.settings.header}
      setContext={setState}
    />
  }

  return <div className="settings-wrapper">
      <Headline title="Основные" />
      <XBlock className="settings-page">
      <div className="options-grid-list settings-block">
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
          <AskBeforeRemoving />
        </div>
        <div className="options-grid-item">
          Offline режим
        </div>
        <div className="options-grid-item">
          <CacheApp />
        </div>
        <div className="options-grid-item">
          Заголовок "Заметки"
        </div>
        <div className="options-grid-item">
          <HeaderState />
        </div>
      </div>
      <ClearAllButton />
      <CheckForUpdatesButton />
    </XBlock>
  </div>
}
