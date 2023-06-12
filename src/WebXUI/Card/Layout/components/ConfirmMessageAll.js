import { useContext } from "react";
import { XButton } from "WebXUI/XForms";

import { ToolKitContext } from "shared/tools"

import DoneIcon from '@mui/icons-material/Done';
import ClearIcon from '@mui/icons-material/Clear';

export default function ConfirmMessageAll () {
    const UserResponse = () => {
      const toolkit = useContext(ToolKitContext);

      const returnYes = () => {
        toolkit.notes.removeAll(true)
      }
    
      const returnNo = () => {
        toolkit.card.return({
          hideReason: "all notes saved via warning"
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
        <h1>
          Вы действительно хотите удалить все заметки?
        </h1>
        <p>
          Это действие будет невозможно отменить.
        </p>
        <UserResponse />
      </>
}
