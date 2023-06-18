import {
    useToolKit
} from "@webx-ui/toolkit"

import {
    CardBlock
} from "@webx-ui/forms"

import RemoveButton from "./RemoveButton"

export function Note({ note, index }) {
    const toolkit = useToolKit()
    const editDate = new Date(note.editData * 1000)

    const NoteName = () => {
        if (note.items.length === 0) {
            return "[Пустая заметка]"
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

    function onClick() {
        toolkit.notes.select(index)
    }

    return <CardBlock className="note-list-block">
        <div className="note-item"
            onClick={onClick}>
            <div className="note-item-name">
                <NoteName />
            </div>
            <div className="note-item-descr">
                {editDate.toLocaleDateString()} {editDate.getHours()}:{editDate.getMinutes()}
            </div>
        </div>
        <div>
            <RemoveButton index={index} />
        </div>
    </CardBlock>
}
