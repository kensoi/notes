import React from "react";
import { XList } from "../../../../XBlock";
import { XButton } from "../../../../XForms";

export default class ConfirmMessage extends React.Component {
  render() {
    return (
      <>
        <h2>Вы действительно хотите удалить эту заметку?</h2>
        <XList sx={[{flex: "1 1 auto", width: "100%"}, {flex: "1 1 auto", width: "100%"}]}>
          <XButton onClick={
            () => {
              this.props.toolkit.notes.remove(this.props.toolkit.cardProps.note_deletion_index)
              this.props.toolkit.returnCardResponse(null)
            }
          }>
            Да
          </XButton>
          <XButton onClick={
            () => {
              this.props.toolkit.returnCardResponse(null)
            }
          }>
            Нет
          </XButton>
        </XList>
      </>
    );
  }
}
