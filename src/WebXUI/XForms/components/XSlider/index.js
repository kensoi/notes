import React from "react";

import { handleChange } from "../../../../shared/utils";

class XSlider extends React.Component {
  state = {
    value: this.props.min,
  };

  setValue = (value) => {
    if (this.props.min <= value && value <= this.props.max) {
      this.props.setValue(value);
      this.setState({
        value: value,
      });
    }
  };
  input = () => {
    return <div className="x-slider-input">
      <input
        type="range"
        min={this.props.min}
        max={this.props.max}
        value={this.state.value}
        onChange={handleChange(this.setValue)}
      />
    </div>
  }

  output = () => {
    return <div className="x-slider-output">
      {this.state.value}
    </div>
  }

  render() {
    return (
      <div className="x-slider">
        {this.input()}
        {this.output()}
      </div>
    );
  }
}

export {XSlider};
