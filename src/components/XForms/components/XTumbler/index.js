import React from "react";
import "./scss/x-tumbler.scss";
import { nanoid } from "nanoid";

class XTumbler extends React.Component {
  state = {
    context: this.props.context,
  };

  setContext = (value) => {
    this.props.setContext(value);
    this.setState({
      context: value,
    });
  };

  getContextButton = (item) => {
    var classList = ["x-tumbler-item"];
    if (this.state.context === item.context) {
      classList.push("x-tumbler-selected");
    }
    if (item.type) {
      classList.push("svg");
    }

    return (
      <div
        className={classList.join(" ")}
        key={nanoid()}
        onClick={() => {
          this.setContext(item.context);
        }}
      >
        {item.name}
      </div>
    );
  };
  render() {
    return (
      <div className="x-tumbler">
        <div className="x-tumbler-wrapper">
          {this.props.tumbleConfig.map(this.getContextButton)}
        </div>
      </div>
    );
  }
}

export {XTumbler};
