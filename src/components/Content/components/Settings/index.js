import { useContext } from "react";

/* WEB-X-UI components */

import "./scss/stylesheet.scss"

import { FormBlock } from "./components/FormBlock";
import Menu from "./components/Menu";
import Global from "./components/Global";
import Author from "./components/Author";
import About from "./components/About";

import { Toolkit } from "../../../../contexts";

function Page () {
  const toolkit = useContext(Toolkit)

  switch (toolkit.settings.page) {
    case 2:
      return <About />

    case 3:
      return <Author />
  
    default:
      return <Global />
  }
}

function DesktopTemplate () {
    return <div className="index desktop">
      <Menu />
      <FormBlock>
        <Page />
      </FormBlock>
    </div>
}

function MobileTemplate () {
  const toolkit = useContext(Toolkit)

  const Content = () => {
    switch (toolkit.settings.page) {
      case 0:
        return <Menu />

      default:
        return <Page />
    }
  }
  
  return <div className="index">
    <FormBlock>
      <Content />
    </FormBlock>
  </div>
}

export default function Settings () {
    const toolkit = useContext(Toolkit)

    if (toolkit.windowSize.width >= 768) {
        return <DesktopTemplate />
    }
    else {
        return <MobileTemplate />
    }
}