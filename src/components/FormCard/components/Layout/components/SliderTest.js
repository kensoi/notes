import React from "react";
import { XSlider, XField, XButton } from "../../../../XForms";
import { XList, XVertical, FormLabel } from "../../../../XBlock";
export default class SliderTest extends React.Component {
  state = {
    first: 0,
    second: 0,
    third: 0,
  };

  setFirst = (value) => {
    this.setState({
      first: value,
    });
  };
  setSecond = (value) => {
    this.setState({
      second: value,
    });
  };
  setThird = (value) => {
    this.setState({
      third: value,
    });
  };

  response = () => {
    this.props.toolkit.returnCardResponse({
      "first": this.state.first,
      "second": this.state.second,
      "third": this.state.third
    })
  }

  xliststyle = {justifyContent:"space-between", width: "100%"}
  sx = [{width: "100%", flex: "1 1 auto"}, {width: "100%", flex: "1 1 auto"}]

  render() {
    return (
      <>
        <h1>Пример ползунка</h1>
        <XVertical>
          <XList xstyle={this.xliststyle} sx={this.sx}>
            <FormLabel>
              Первое значение:
            </FormLabel>
            <XSlider
              min={0}
              max={10}
              setValue={this.setFirst}
            />
          </XList>
          <XList xstyle={this.xliststyle} sx={this.sx}>
            <FormLabel>
              Второе значение:
            </FormLabel>
            <XSlider
              min={0}
              max={10}
              setValue={this.setSecond}
            />
          </XList>
          <XList xstyle={this.xliststyle} sx={this.sx}>
            <FormLabel>
              Третье значение:
            </FormLabel>
            <XField
              field={this.state.third} cleanable={true}
              setField={this.setThird}>
                Третье значение
              </XField>
          </XList>
          {null}
          <XList>
            <XButton title="Ответить" onClick={this.response}/>
          </XList>
        </XVertical>
      </>
    );
  }
}
