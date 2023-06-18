import {
    nanoid
} from "nanoid"

import {
    useToolKit
} from "@webx-ui/toolkit"

import {
    TextField
} from "@webx-ui/forms"

export default function Title({ item, index }) {
    const toolkit = useToolKit()

    function setField(text) {
        const newItem = { ...item }
        newItem.text = text
        toolkit.editor.update(index, newItem)
    }

    const classList = []
    classList.push("note-title")
    
    if (toolkit.notes.itemMode === 0) {
        return <TextField 
            key={nanoid()}
            className={classList.join(" ")}
            field={item.text} setField={setField}
            placeholder="как бы называлась ваша заметка сегодня?"
        />
    }

    classList.push("x-text-field")
    classList.push("blocked")

    return <div className={classList.join(" ")}>
        <div className="x-field-input">
            {item.text || "как бы называлась ваша заметка сегодня?"}
        </div>
    </div>
}
