import { nanoid } from "nanoid";

import GreetingsMessage from "./components/GreetingsMessage";
import HelloWorld from "./components/HelloWorld";
import SettingsMessage from "./components/SettingsMessage";
import RegisterForm from "./components/RegisterForm";
import LoginForm from "./components/LoginForm";
import SliderTest from "./components/SliderTest";
import TumbletTest from "./components/TumbletTest";
import NotFoundMessage from "./components/NotFoundMessage";
import ConfirmMessage from "./components/ConfirmMessage";


const layoutArray = [
  {
    name: "hello",
    id: nanoid(),
    layout: GreetingsMessage,
  },
  {
    name: "hello-world",
    id: nanoid(),
    layout: HelloWorld,
  },
  {
    name: "settings",
    id: nanoid(),
    layout: SettingsMessage,
  },
  {
    name: "register",
    id: nanoid(),
    layout: RegisterForm,
  },
  {
    name: "tumbler",
    id: nanoid(),
    layout: TumbletTest,
  },
  {
    name: "login",
    id: nanoid(),
    layout: LoginForm,
  },
  {
    name: "slider",
    id: nanoid(),
    layout: SliderTest,
  },
  {
    name: "confirm-deletion",
    id: nanoid(),
    type: "notification",
    layout: ConfirmMessage
  }
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