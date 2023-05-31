import React from "react";
import "./scss/panel.scss";

class Panel extends React.Component {
  icon = () => {
    if (this.props.icon) {
      return <div className="x-icon-icon">{this.props.icon}</div>;
    }
  };

  title = () => {
    if (this.props.title) {
      return <div className="x-icon-title">{this.props.title}</div>;
    }
  };

  render() {
    return (
      <div className="x-icon" onClick={this.props.onClick}>
        <this.icon />
        <this.title />
      </div>
    );
  }
}

export default Panel;
