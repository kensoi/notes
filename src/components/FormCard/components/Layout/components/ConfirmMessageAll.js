import React from "react";
import { XList } from "../../../../XBlock";
import { XButton } from "../../../../XForms";

export default class ConfirmMessageAll extends React.Component {
  render() {
    return (
      <>
        <h2>Вы действительно хотите удалить все заметки?</h2>
        <XList sx={[{flex: "1 1 auto", width: "100%"}, {flex: "1 1 auto", width: "100%"}]}>
          <XButton onClick={
            () => {
              this.props.toolkit.notes.removeAll()
              this.props.toolkit.card.return(null)
            }
          }>
            Да
          </XButton>
          <XButton onClick={
            () => {
              this.props.toolkit.card.return(null)
            }
          }>
            Нет
          </XButton>
        </XList>
      </>
    );
  }
}
