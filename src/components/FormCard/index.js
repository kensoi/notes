import { useContext } from "react";

import "./scss/form-card.scss";
import { Layout, getCardType } from "./components/Layout";
import { CloseButton } from "./components/CloseButton";
import { Toolkit } from "../../contexts";

export default function FormCard () {
  const toolkit = useContext(Toolkit);
  const offsetStyle = {
    top: toolkit.card.offset + "px",
    display: toolkit.card.mounted ? "block" : "none"
  }

  const WrapperClassArray = ["form-card-wrapper"]
  const CardClassArray = ["form-card"]

  if (toolkit.card.loaded) {
    WrapperClassArray.push("visible")
  }

  const type = getCardType(toolkit.card.layout)
  CardClassArray.push(type)

  if (toolkit.card.mounted) {
    return <div className={WrapperClassArray.join(" ")} style={offsetStyle}>
      <div className={CardClassArray.join(" ")}>
        <CloseButton/>
        <div className="form-card-layout">
          <Layout />
        </div>
      </div>
    </div>
  }

  else {
    return <div style={offsetStyle}></div>
  }
}