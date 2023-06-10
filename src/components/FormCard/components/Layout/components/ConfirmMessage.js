import { useContext } from "react";
import { XList } from "../../../../XBlock";
import { XButton } from "../../../../XForms";

import { Toolkit } from "../../../../../contexts";

import DoneIcon from '@mui/icons-material/Done';
import ClearIcon from '@mui/icons-material/Clear';

export default function ConfirmMessage () {
  const toolkit = useContext(Toolkit)

  const returnYes = () => {
    toolkit.notes.remove(toolkit.card.props.note_deletion_index, true)
  }

  const returnNo = () => {
    toolkit.card.return({
      hideReason: "notes removing canceled with enabled warnings"
    })
  }

  return <>
      <h1>Вы действительно хотите удалить эту заметку?</h1>
      <p>
        Это действие будет невозможно отменить.
      </p>
      <XList sx={[{flex: "1 1 auto", width: "100%"}, {flex: "1 1 auto", width: "100%"}]}>
        <XButton 
          icon={<DoneIcon />}
          onClick={returnYes} accent="transparent">
          Да
        </XButton>
        <XButton 
          icon={<ClearIcon />} onClick={returnNo}>
          Нет
        </XButton>
      </XList>
    </>
}
