import React from "react";

import { XList, FormLabel, XVertical } from "../../../../XBlock";
import { XTumbler } from "../../../../XForms";

import ColorSchemaChanger from "../../../../ColorSchemaChanger";

export default class SettingsMessage extends React.Component {
  contexts = [
    {
      name: "ВЫКЛ",
      context: false,
    },
    {
      name: "ВКЛ",
      context: true,
    },
  ];

  xliststyle = {justifyContent:"space-between", width: "100%"}

  render() {
    return (
      <>
        <h1>Настройки</h1>
        <XVertical>
          <XList xstyle={this.xliststyle}>
            <FormLabel>
              Включить Header
            </FormLabel>
            <XTumbler
              tumbleConfig={this.contexts}
              context={this.props.toolkit.enableHeader}
              setContext={this.props.toolkit.setHeaderState}
            />
          </XList>
          <XList xstyle={this.xliststyle}>
            <FormLabel>Включить Footer</FormLabel>
            <XTumbler
              tumbleConfig={this.contexts}
              context={this.props.toolkit.enableFooter}
              setContext={this.props.toolkit.setFooterState}
            />
          </XList>
          <XList xstyle={this.xliststyle}>
            <FormLabel>Цветовая схема</FormLabel>
            <ColorSchemaChanger align="right" toolkit={this.props.toolkit} />
          </XList>
        </XVertical>
      </>
    );
  }
}
