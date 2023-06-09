import React from "react";
import "./scss/x-check-box.scss";
import DoneIcon from '@mui/icons-material/Done';

export class XCheckBox extends React.Component {
  state = {
    boxState: this.props.state
  }

  setBoxState = () => {
    this.setState({
      boxState: !this.state.boxState,
    })
    this.props.setState(this.state.boxState)
  }

  icon = () => {
    if (!this.hideEmptyPaddings || this.props.icon) {
      return <div className="x-check-box-element x-check-box-icon" onClick={this.setBoxState}>
          <DoneIcon />
        </div>
    }
  };

  title = () => {
    let title = this.props.title || this.props.children
    if (title) {
      return (
        <div className="x-check-box-element x-check-box-title">
          title
        </div>
      )
    }
  }

  render() {
    const ClassList = ["x-check-box"]

    if (this.state.boxState) {
      ClassList.push("marked")
    }

    return (
      <div className={ClassList.join(" ")} onClick={this.props.onClick} style={this.props.style}>
        {this.icon()}
        {this.title()}
      </div>
    )
  }
}