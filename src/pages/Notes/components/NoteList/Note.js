import {
    useToolKit
} from "@web-cross-ui/toolkit"

import {
    CardBlock,
    Button
} from "@web-cross-ui/forms"

import CloseIcon from '@mui/icons-material/Close'

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

    const select = () => {
        toolkit.notes.select(index)
    }

    const RemoveButton = () => {
        const remove = toolkit.notes.remove.bind(toolkit.notes, index)

        return <Button
            theme="transparent"
            icon={<CloseIcon />}
            onClick={remove}
        />
    }

    return <CardBlock className="note-list-block">
        <div className="note-item"
            onClick={select}>
            <div className="note-item-name">
                <NoteName />
            </div>
            <div className="note-item-descr">
                {editDate.toLocaleDateString()} {editDate.getHours()}:{editDate.getMinutes()}
            </div>
        </div>
        <div>
            <RemoveButton />
        </div>
    </CardBlock>
}
