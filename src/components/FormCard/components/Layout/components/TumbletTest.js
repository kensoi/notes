import React from "react";

import { XList, XVertical, FormLabel } from "../../../../XBlock";
import { XTumbler } from "../../../../XForms";

export default class TumbletTest extends React.Component {
  contexts = [
    {
      name: "1",
      // type: "svg",
      context: "Пряники с орешками",
    },
    {
      name: "2",
      // type: "svg",
      context: "Мандарины без косточек",
    },
    {
      name: "3",
      // type: "svg",
      context: "Алишер и сыр",
    },
  ];
  state = {
    context: this.contexts[0].context,
  };

  setContext = (value) => {
    this.setState({
      context: value,
    });
  };

  xliststyle = {justifyContent:"space-between", width: "100%"}
  sx = [{}, {width: "100%", maxWidth: "256px"}]


  render() {
    return (
      <>
        <h1>Демонстрация переключателя XTumbler</h1>
        <XVertical>
          <XList xstyle={this.xliststyle}>
            <FormLabel>
              Переключатель
            </FormLabel>
            <XTumbler
              tumbleConfig={this.contexts}
              context={this.state.context}
              setContext={this.setContext}
            />
          </XList>
          <XList xstyle={this.xliststyle}>
            Выставленное значение: 
          {this.state.context}</XList>
        </XVertical>
      </>
    );
  }
}
