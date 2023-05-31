import React from "react";
import "./scss/x-button.scss";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

class XButton extends React.Component {
  icon = () => {
    if (!this.hideEmptyPaddings || this.props.icon) {
      return <div className="x-button-icon">
          {this.props.icon || " "}
        </div>
    }
  };

  title = () => {
    let title = this.props.title || this.props.children
    if (!this.hideEmptyPaddings || title) {
      return (
        <div className="x-button-title">
          {title || " "}
        </div>
      )
    }
  }

  dropdown = () => {
    this.classList = ["x-button-dropdown-icon"];

    if (this.props.isDropdown) {
      this.classList.push("visible");
    }
    
    if (!this.hideEmptyPaddings || this.props.isDropdown) {
      return (
        <div className={this.classList.join(" ")}>
          <KeyboardArrowDownIcon />
        </div>
      )
    }
  }

  render() {
    
    if (document.body.classList.contains("screen-device-mobile")) {
      this.hideEmptyPaddings = this.props.hideEmptyPaddingsAtMobile
    }

    else {
      this.hideEmptyPaddings = this.props.hideEmptyPaddings || false;
    }

    return (
      <div className="x-button" onClick={this.props.onClick} style={this.props.style}>
        {this.icon()}
        {this.title()}
        {this.dropdown()}
      </div>
    )
  }
}

export {XButton};
