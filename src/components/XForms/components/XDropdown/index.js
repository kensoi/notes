import React from "react";
import "./scss/x-dropdown.scss";
import { CheckValue } from "../../../../shared/utils";

class XDropdown extends React.Component {
  state = {
    isVisible: false,
    isMounted: false,
  };

  close = () => {
    this.setState({
      isVisible: false,
    });
    setTimeout(() => {
      this.setState({ isMounted: false });
    }, 100);
  };

  open = () => {
    this.setState({
      isMounted: true,
    });
    setTimeout(() => {
      this.setState({ isVisible: true });
    }, 100);
  };

  toggleClick = () => {
    this.state.isMounted ? this.close() : this.open();
  };

  Content = () => {
    const wrapperClassList = ["x-dropdown-wrapper"];
    const contentClassList = ["x-dropdown-content"];
    wrapperClassList.push(this.state.isVisible ? "visible" : "invisible");

    switch (this.props.contentPosition) {
      case "left-top":
        wrapperClassList.push("x-dropdown-pose-at-left-top");
        break;

      case "left-bottom":
        wrapperClassList.push("x-dropdown-pose-at-left-bottom");
        break;

      case "right-top":
        wrapperClassList.push("x-dropdown-pose-at-right-top");
        break;

      case "right-bottom":
        wrapperClassList.push("x-dropdown-pose-at-right-bottom");
        break;

      case "top-left":
        wrapperClassList.push("x-dropdown-pose-at-top-left");
        break;

      case "top-right":
        wrapperClassList.push("x-dropdown-pose-at-top-right");
        break;

      case "bottom-left":
        wrapperClassList.push("x-dropdown-pose-at-bottom-left");
        break;

      default:
        wrapperClassList.push("x-dropdown-pose-at-bottom-right");
        break;
    }

    contentClassList.push(
      `direction-${CheckValue(this.props.listDirection, "row", "column")}`
    );

    if (this.state.isMounted) {
      return (
        <div className={wrapperClassList.join(" ")}>
          <div className={contentClassList.join(" ")}>
            {this.props.dropdown}
          </div>
        </div>
      );
    }
  };

  Children = () => {
    const buttonClassList = ["x-dropdown-children"];
    buttonClassList.push(this.state.isVisible ? "visible" : "invisible");

    return (
      <div className={buttonClassList.join(" ")} onClick={this.toggleClick}>
        {this.props.children}
      </div>
    );
  };

  render() {
    const dropdownClassList = ["x-dropdown"];

    return (
      <div className={dropdownClassList.join(" ")}>
        {this.Children()}
        {this.Content()}
      </div>
    );
  }
}

export {XDropdown};
