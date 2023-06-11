import { 
  CardBehaviour, 
  NotesBehaviour, 
  SettingsBehaviour 
} from "./tools";

export function handleChange(setState) {
  return event => setState(event.target.value)
}

export function CheckValue(value, defaultOption, notDefaultOption) {
  switch (value) {
    case defaultOption:
      return defaultOption;

    default:
      return notDefaultOption;
  }
}

export function getSXbyArr(sx, i) {
  if (sx) {
    if (i > sx.length) {
      return {}
    }
    return sx[i]
  }
  else {
    return {}
  }
}

export const createToolkit = (
    cardState, cardDispatch,
    notesState, notesDispatch,
    settingsState, settingsDispatch
  ) => {
  
  const card = new CardBehaviour(cardState, cardDispatch)
  const notes = new NotesBehaviour(notesState, notesDispatch, card)
  const settings = new SettingsBehaviour(settingsState, settingsDispatch) 

  return {
      card: card,
      notes: notes,
      settings: settings 
    }
}
