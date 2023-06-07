import { nanoid } from "nanoid";

import GreetingsMessage from "./components/GreetingsMessage";
import NotFoundMessage from "./components/NotFoundMessage";
import ConfirmMessage from "./components/ConfirmMessage";
import ConfirmMessageAll from "./components/ConfirmMessageAll";


const layoutArray = [
  {
    name: "hello",
    id: nanoid(),
    layout: GreetingsMessage,
  },
  {
    name: "confirm-deletion",
    id: nanoid(),
    // type: "notification",
    layout: ConfirmMessage
  },
  {
    name: "confirm-deletion-all",
    id: nanoid(),
    // type: "notification",
    layout: ConfirmMessageAll
  },
]


export function Layout (toolkit) {
  let element

  for (let index = 0; index < layoutArray.length; index++) {
    element = layoutArray[index]

    if (element.name === toolkit.cardLayout) {
      break
    }
  }

  if (element) {
    return new element.layout({toolkit: toolkit})
  }
  
  return <NotFoundMessage toolkit={toolkit}/>
}


export function getCardType (toolkit) {
  let element

  for (let index = 0; index < layoutArray.length; index++) {
    element = layoutArray[index]

    if (element.name === toolkit.cardLayout) {
      break
    }
  }
  
  return element.type || "article"
}