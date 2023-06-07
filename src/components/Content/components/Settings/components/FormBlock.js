import React from "react";

export function FormBlock(props) {
  const ClassList = ["form-block"];
  if (props.toolkit.settings.loaded) {
    ClassList.push("visible");
  }

  if (props.toolkit.settings.mounted) {
    return <div className={ClassList.join(" ")}>
      {props.children}
    </div>;
  }

  return <></>;
}
