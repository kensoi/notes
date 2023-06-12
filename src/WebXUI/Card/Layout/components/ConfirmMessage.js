import { useContext } from "react";
import { XButton } from "WebXUI/XForms";

import { ToolKitContext } from "shared/tools"

import DoneIcon from '@mui/icons-material/Done';
import ClearIcon from '@mui/icons-material/Clear';

export default function ConfirmMessage () {
  const UserResponse = () => {
    const toolkit = useContext(ToolKitContext)

    const returnYes = () => {
      toolkit.notes.remove(toolkit.card.props.note_deletion_index, true)
    }
  
    const returnNo = () => {
      toolkit.card.return({
        hideReason: "notes removing canceled with enabled warnings"
      })
    }
    
    return <>
      <XButton 
        icon={<DoneIcon />} accent="transparent" title="Да"
        onClick={returnYes} 
      />
      <XButton 
        icon={<ClearIcon />}  title="Нет"
        onClick={returnNo}
      />
    </>
  }

  return <>
      <h1>Вы действительно хотите удалить эту заметку?</h1>
      <p>
        Это действие будет невозможно отменить.
      </p>
      <UserResponse />
    </>
}
