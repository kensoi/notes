import React from "react";
import { XList } from "../../../../XBlock";
import { XButton } from "../../../../XForms";

export default class DeletionMessage extends React.Component {
  render() {
    return (
      <>
        <h2>Заметка удалена успешно</h2>
        <XList sx={[{flex: "1 1 auto", width: "100%"}, {flex: "1 1 auto", width: "100%"}]}>
          <XButton onClick={
            () => {
              this.props.toolkit.returnCardResponse(null)
            }
          }>
            ОК
          </XButton>
        </XList>
      </>
    );
  }
}
