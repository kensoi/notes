import { nanoid } from "nanoid";
import { useContext } from "react";

import { ToolKitContext } from "shared/tools"

import GreetingsMessage from "./components/GreetingsMessage";
import NotFoundMessage from "./components/NotFoundMessage";
import ConfirmMessage from "./components/ConfirmMessage";
import ConfirmMessageAll from "./components/ConfirmMessageAll";
import OnlyOnline from "./components/OnlyOnline";

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
  {
    name: "only-online",
    id: nanoid(),
    // type: "notification",
    layout: OnlyOnline
  },
]


export function Layout () {
  const toolkit = useContext(ToolKitContext);

  for (let index = 0; index < layoutArray.length; index++) {
    let element = layoutArray[index]

    if (element.name === toolkit.card.layout) {
      return new element.layout()
    }
  }
  
  return <NotFoundMessage/>
}


export function getCardType (layout) {
  for (let index = 0; index < layoutArray.length; index++) {
    if (layoutArray[index].name === layout) {
      return layoutArray[index].type || "article"
    }
  }

  return "article"
}