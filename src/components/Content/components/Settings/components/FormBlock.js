import { useContext } from "react";
import { Toolkit } from "../../../../../contexts";

export function FormBlock(props) {  
  const toolkit = useContext(Toolkit)

  const ClassList = ["form-block"]

  if (toolkit.settings.loaded) {
    ClassList.push("visible");
  }

  if (toolkit.settings.mounted) {
    return <div className={ClassList.join(" ")}>
      {props.children}
    </div>
  }

  return <></>
}
