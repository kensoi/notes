import React, { createRef } from "react";

import CloseIcon from '@mui/icons-material/Close';

class XField extends React.Component {
  state = {
    field: this.props.field,
    valueCheckMark: this.props.field,
    focus: false,
    mouseOver: false
  };

  icon = () => {
    if (this.props.icon) {
      return <div className="x-field-icon">
        {this.props.icon}
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
          this.textField.current.innerHTML = ""
          this.setState({
            valueCheckMark: ""
          })}}>
          <CloseIcon />
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
    const classList = ["x-field-input"]
    return (
      <div
        className={classList.join(" ")}
        ref={this.textField}
        onFocus={this.onFocusIn}
        onBlur={this.onFocusOut}
        onMouseEnter={
          () => {
            this.setState(
              {
                mouseOver: true
              }
            )
          }
        }
        onMouseLeave={
          () => {
            this.setState(
              {
                mouseOver: false
              }
            )
          }
        }
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
    this.textField.current?.focus();
  };


  enterEvent = () => {
    let focusOut = () => {
      this.textField.current?.blur()
      if (this.props.onEnter) {
        this.props.onEnter()
      }
    }

    return function(event) {
      if (event.key === "Enter") {
        focusOut()
      }

    }
  }

  clickEvent = () => {
    let focusOut = () => {
      this.textField.current?.blur() 
      if (this.props.onEnter) {
        this.props.onEnter()
      }
    }
    return (e) => {
      if (e.button === 0 && this.state.mouseOver === false) {
        focusOut()
      }
    }
  }

  onFocusOut = () => {
    if (typeof this.props.onBlur === 'function') {
      this.props.onBlur()
    }
    
    if (this.props.field !== this.textField.current?.innerHTML) {
      this.props.setField(this.textField.current?.innerHTML)
    }
    this.setState({
      focus: false,
      field: this.textField.current?.innerHTML
    })

    window.removeEventListener("keypress", this.enterEvent())
    window.removeEventListener("click", this.clickEvent())
  }

  onFocusIn = () => {
    if (typeof this.props.onFocus === 'function') {
      this.props.onFocus()
    }

    this.setState({focus: true})

    window.addEventListener("keypress", this.enterEvent())
    window.addEventListener("click", this.clickEvent())
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
    this.textField = createRef(null)

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
    if (this.props.cleanable) {
      this.classList.push("clearable")
      
    }
    this.classList.push(this.props.className)
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
