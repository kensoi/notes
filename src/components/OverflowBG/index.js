import React, { useContext } from "react";
import { Toolkit } from "../../contexts";
import "./scss/overflow-bg.scss";

export default function FormCard () {
  const toolkit = useContext(Toolkit);

  const ClassList = ["overflow-bg"];
  ClassList.push(toolkit.card.loaded ? "visible" : "invisible");

  if (toolkit.card.mounted) {
    return (
      <div
        className={ClassList.join(" ")}
        onClick={() => {
          toolkit.card.return(null);
        }}
      ></div>
    );
  }
}