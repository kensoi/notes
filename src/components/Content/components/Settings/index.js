import React from "react";

/* WEB-X-UI components */

import { XHorizontal } from "../../../XBlock";
import { FormBlock } from "./components/FormBlock";
import { MenuPage } from "./components/MenuPage";
import "./scss/stylesheet.scss"
import { SettingsPage } from "./components/SettingsPage";
import { AboutPage } from "./components/AboutPage";

function Resolver (props) {
  switch (props.toolkit.settings.page) {
    case 2:
      return AboutPage (props)
    default:
      return SettingsPage (props)
  }
}

function DesktopTemplate (props) {
    let desktopSX = [
        {   
            flex: "1 1 auto",
            maxWidth: "256px"
        },
        {
            flex: "1 1 auto",
            maxWidth: "760px",
        }
    ]
    return <XHorizontal 
        className="index"
        xstyle={{maxWidth: "1024px", margin: "auto"}}
        sx={desktopSX}>
      {MenuPage (props)}
      <FormBlock toolkit={props.toolkit}>
        {Resolver (props)}
      </FormBlock>
    </XHorizontal>
}

function MobileTemplate (props) {
  let resolve = (props) => {
    switch (props.toolkit.settings.page) {
      case 0:
        return MenuPage (props)
      default:
        return Resolver (props)
    }
  }
  console.log(props.toolkit.settings.page)
  return <FormBlock toolkit={props.toolkit}>
    {resolve(props)}
  </FormBlock>
}

export default function Settings (props) {
    if (props.toolkit.windowSize.width >= 768) {
        return DesktopTemplate (props)
    }

    else {
        return MobileTemplate (props)
    }
}