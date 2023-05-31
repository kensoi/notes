import React from "react";
import "./scss/x-field.scss";
import CloseIcon from '@mui/icons-material/Close';

class XField extends React.Component {
  state = {
    field: this.props.field,
    valueCheckMark: this.props.field,
    focus: false,
  };

  icon = () => {
    if (this.props.icon) {
      return <div className="x-field-icon">
        <div className="x-field-icon-wrap">
          {this.props.icon}
        </div>
      </div>
    }
  }

  value = () => {
    if (this.props.fieldValue && this.state.valueCheckMark !== "") {
      return <div className="x-field-value-wrap">
          {this.props.fieldValue}
        </div>
    }
  }

  clear = () => {
    if (this.props.cleanable && this.state.valueCheckMark !== "") {
      return <div className="x-field-clear" onClick={() => {
          this.textField.innerHTML = ""
          this.setState({
            valueCheckMark: ""
          })}}>
        <div className="x-field-clear-wrap">
          <CloseIcon />
        </div>
      </div>
    }
  }
  input = (e) => {
    this.setState({
      valueCheckMark: e.target.innerHTML
    })
  }

  field = () => {
    let text = this.props.fieldValue ? this.props.children + " (" + this.props.fieldValue + ")" : this.props.children
    return (
      <div
        className="x-field-input"
        ref={(input) => {
          this.textField = input;
        }}
        onFocus={this.onFocusIn}
        onBlur={this.onFocusOut}
        contentEditable="true"
        suppressContentEditableWarning={true}
        onInput={this.input}
        data-placeholder={text}
      >
        {this.state.field}
      </div>
    )
  }

  focusField = () => {
    this.textField.focus();
  };

  onFocusIn = () => {
    this.setState({focus: true})
  }

  onFocusOut = () => {
    this.props.setField(this.textField.innerHTML);
    this.setState({focus: false})
  }

  componentDidMount() {
    this.setState({
      field: this.props.field,
    })
  }

  componentWillUnmount() {
    this.setState({
      field: "",
    })
  }

  render() {
    this.classList = ["x-field"]
    if (this.state.focus) {
      this.classList.push("selected")
    }
    if (this.props.flexlist) {
      this.classList.push("max-list")
    }
    if (this.props.noWrap) {
      this.classList.push("no-wrap")
    }
    return (
      <div className={this.classList.join(" ")} onClick={this.focusField}>
        {this.icon()}
        {this.field()}
        {this.value()}
        {this.clear()}
      </div>
    );
  }
}

export {XField};
