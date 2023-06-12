import XBlock from "../../../XBlock";
import { XButton } from "../../../XForms";
import CloseIcon from '@mui/icons-material/Close';
import { useContext, useEffect } from "react";
import { Toolkit } from "../../../../contexts";

function Note({note, index}) {
    const toolkit = useContext(Toolkit)
    const editDate = new Date(note.editData * 1000)

    const NoteName = () => {
        if (note.items.length === 0) {
            return "[Пустая заметка]";
        }

        if ('text' in note.items[0]) {
            if (note.items[0].text === "") {
                return "[Пустой элемент]"
            }
            return note.items[0].text
        }
        else {
            return "{Неизвестный объект}"
        }
    }

    const select = () => {
        toolkit.notes.select(index)
    }

    const RemoveButton = () => {
        const remove = toolkit.notes.remove.bind(toolkit.notes, index)

        return <XButton
            accent="transparent" icon={<CloseIcon />}
            hideEmptyPaddings={true} hideEmptyPaddingsAtMobile={true}
            onClick={remove} 
        />
    }

    return <XBlock className="note-list-block">
        <div className="note-item"
            onClick={select}>
            <div className="note-item-name">
                <NoteName />
            </div>
            <div className="note-item-descr">
                {editDate.toLocaleDateString()} {editDate.getHours()}:{editDate.getMinutes()}
            </div>
        </div>
        <RemoveButton />
    </XBlock>
}

export function NoteList() {
    const toolkit = useContext(Toolkit)
    useEffect(() => {}, [toolkit.notes.list, toolkit.notes.sortMode])

    return <div className="note-list">
        {
            toolkit.notes.getFilteredList().map(
                note => <Note key={note.id} note={note} index={note.arrayid} />
            )
        }
    </div>
}
