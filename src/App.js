import React, { useReducer } from "react";

import "./css/stylesheet.css";
import "./scss/notes.scss";

import AppContent from "./components/Content";
import FormCard from "./components/FormCard";
import OverflowBG from "./components/OverflowBG";

import {getScreenDeviceType} from "./shared/";

import { Toolkit } from "./contexts";
import { createToolkit } from "./shared/utils"

import {
  card, CardReducer,
  notes, NoteReducer,
  settings, SettingsReducer
} from "./reducers"

// function getList () {
//   try {
//     return JSON.parse(localStorage.getItem("note-list")) || []
//   }
//   catch (error) {
//     console.log(error) 
//     return []
//   }
// }

// showHelloMessage = () => {
//   let helloMessage =
//     JSON.parse(localStorage.getItem("HelloMessage")) || false;

//   if (!helloMessage) {
//     localStorage.setItem("HelloMessage", JSON.stringify(true));
//     this.toolkit.formCard.showLayout("hello");
//   }
// }

export default function App () {
  const [cardState, cardDispatch] = useReducer(CardReducer, card)
  const [notesState, notesDispatch] = useReducer(NoteReducer, notes)
  const [settingsState, settingsDispatch] = useReducer(SettingsReducer, settings)
  
  const toolkit = createToolkit(
    cardState, cardDispatch,
    notesState, notesDispatch,
    settingsState, settingsDispatch
    )

  const layoutClassList = ["webx"]
  layoutClassList.push("color-schema-" + toolkit.settings.colorSchema)
  layoutClassList.push(getScreenDeviceType())

  document.body.className = layoutClassList.join(" ");

  return <Toolkit.Provider value={toolkit}>
    <AppContent/>
    <OverflowBG/>
    <FormCard/>
  </Toolkit.Provider>
}