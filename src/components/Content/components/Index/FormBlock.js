import React from "react";

export function FormBlock(props) {
  const ClassList = ["form-block"];
  if (props.toolkit.notes.loaded) {
    ClassList.push("visible");
  }

  if (props.toolkit.notes.mounted) {
    return <div className={ClassList.join(" ")}>
      {props.children}
    </div>;
  }

  return <></>;
}
