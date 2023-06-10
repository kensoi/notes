import XBlock, { XHorizontal, XVertical } from "../../../XBlock";
import { XButton } from "../../../XForms";
import CloseIcon from '@mui/icons-material/Close';
import { useContext, useLayoutEffect } from "react";
import { Toolkit } from "../../../../contexts";

function Note({note, index}) {
    const toolkit = useContext(Toolkit)
    const editDate = new Date(note.editData * 1000)

    const mobileSX = [
        {
            flex: "1 1 auto"
        }
    ]

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
        const remove = () => {
            toolkit.notes.remove(index)
        }

        return <XButton accent="transparent"
        icon={<CloseIcon />}
        hideEmptyPaddings={true} hideEmptyPaddingsAtMobile={true}
        onClick={remove} />
    }

    return <XBlock>
        <XHorizontal sx={mobileSX} disablePaddings={true}>
            <XVertical className="note-item"
                onClick={select}>
                <div className="note-item-name">
                    <NoteName />
                </div>
                <div className="note-item-descr">
                    {editDate.toLocaleDateString()} {editDate.getHours()}:{editDate.getMinutes()}
                </div>
            </XVertical>
            <RemoveButton />
        </XHorizontal>
    </XBlock>
}

export function NoteList() {
    const toolkit = useContext(Toolkit)

    useLayoutEffect(() => {}, [toolkit.notes.sortMode])

    return <div className="note-list">
        <XVertical>
            {toolkit.notes.getList().map(
                (note, index) => <Note key={note.id} note={note} index={index} />
            )}
        </XVertical>
    </div>
}
