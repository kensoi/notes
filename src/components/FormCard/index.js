import React from "react";
import "./scss/form-card.scss";
import { Layout, getCardType } from "./components/Layout";
import { CloseButton } from "./components/CloseButton";

export default function FormCard (props) {
  const offsetStyle = {
    top: props.toolkit.cardTopOffset + "px",
    display: props.toolkit.cardMounted ? "block" : "none"
  }

  const WrapperClassArray = ["form-card-wrapper"]
  const CardClassArray = ["form-card"]

  if (props.toolkit.cardLoaded) {
    WrapperClassArray.push("visible")
  }

  CardClassArray.push(
    getCardType(props.toolkit)
  )

  if (props.toolkit.cardMounted) {
    return <div className={WrapperClassArray.join(" ")} style={offsetStyle}>
      <div className={CardClassArray.join(" ")}>
        <CloseButton toolkit={props.toolkit}/>
        <div className="form-card-layout">
          <Layout toolkit={props.toolkit} />
        </div>
      </div>
    </div>
  }

  else {
    return <div style={offsetStyle}></div>
  }
}