import React from "react";
import "./scss/overflow-bg.scss";

export default class FormCard extends React.Component {
  render = () => {
    const ClassList = ["overflow-bg"];
    ClassList.push(this.props.toolkit.card.loaded ? "visible" : "invisible");

    if (this.props.toolkit.card.mounted) {
      return (
        <div
          className={ClassList.join(" ")}
          onClick={() => {
            this.props.toolkit.card.return(null);
          }}
        ></div>
      );
    }
  };
}
