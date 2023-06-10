import { useContext } from "react";
import { XList } from "../../../../XBlock";
import { XButton } from "../../../../XForms";

import { Toolkit } from "../../../../../contexts";

import DoneIcon from '@mui/icons-material/Done';
import ClearIcon from '@mui/icons-material/Clear';

export default function ConfirmMessageAll () {
    const toolkit = useContext(Toolkit)

    const returnYes = () => {
      toolkit.notes.removeAll(true)
    }
  
    const returnNo = () => {
      toolkit.card.return({
        hideReason: "all notes saved via warning"
      })
    }
  
    return <>
        <h1>
          Вы действительно хотите удалить все заметки?
        </h1>
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
