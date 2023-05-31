import React from "react";
import "./scss/overflow-bg.scss";

export default class FormCard extends React.Component {
  render = () => {
    const ClassList = ["overflow-bg"];
    ClassList.push(this.props.toolkit.cardLoaded ? "visible" : "invisible");

    if (this.props.toolkit.cardMounted) {
      return (
        <div
          className={ClassList.join(" ")}
          onClick={() => {
            this.props.toolkit.returnCardResponse(null);
          }}
        ></div>
      );
    }
  };
}
