import React, { useReducer } from "react";

import "./css/stylesheet.css";

import Content from "Content";
import CardWrapper from "WebXUI/Card";

import {getScreenDeviceType} from "shared";

import { NotesBehaviour, ToolKit, ToolKitContext } from "shared/tools"

import {
  card, CardReducer,
  notes, NoteReducer,
  settings, SettingsReducer
} from "./shared/tools/reducers"

export default function App () {
  const [cardState, cardDispatch] = useReducer(CardReducer, card)
  const [settingsState, settingsDispatch] = useReducer(SettingsReducer, settings)
  const [notesState, notesDispatch] = useReducer(NoteReducer, notes)
  
  const toolkit = new ToolKit(
    cardState, cardDispatch,
    settingsState, settingsDispatch
  )

  toolkit.setProperty(
    "notes", NotesBehaviour, notesState, notesDispatch
  )

  const layoutClassList = ["webx"]
  layoutClassList.push("color-schema-" + toolkit.settings.colorSchema)
  layoutClassList.push(getScreenDeviceType())

  document.body.className = layoutClassList.join(" ");

  return <ToolKitContext.Provider value={toolkit}>
    <Content/>
    <CardWrapper/>
  </ToolKitContext.Provider>
}