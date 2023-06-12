import { useContext } from "react";

/* WEB-X-UI components */

import "./scss/stylesheet.scss"

import { MountBlock } from "WebXUI/MountBlock";
import Menu from "./components/Menu";
import Global from "./components/Global";
import Author from "./components/Author";
import About from "./components/About";

import { ToolKitContext } from "shared/tools"

function Page () {
  const toolkit = useContext(ToolKitContext);

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
  const toolkit = useContext(ToolKitContext);
    return <div className="desktop">
      <Menu />
      <MountBlock
        mountState={toolkit.settings.mounted}
        visibilityState={toolkit.settings.loaded}
      >
        <Page />
      </MountBlock>
    </div>
}

function MobileTemplate () {
  const toolkit = useContext(ToolKitContext);

  const Content = () => {
    switch (toolkit.settings.page) {
      case 0:
        return <Menu />

      default:
        return <Page />
    }
  }
  
  return <MountBlock
      mountState={toolkit.settings.mounted}
      visibilityState={toolkit.settings.loaded}
    >
      <Content />
    </MountBlock>
}

export default function Settings () {
  const toolkit = useContext(ToolKitContext);

  if (toolkit.settings.windowWidth >= 768) {
    return <DesktopTemplate />
  }
  else {
    return <MobileTemplate />
  }
}