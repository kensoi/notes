import {
    nanoid
} from "nanoid"

import {
    useToolKit
} from "@webx-ui/toolkit"

import {
    TextField
} from "@webx-ui/forms"

export default function Paragraph({ item, index }) {
    const toolkit = useToolKit()

    const classList = []
    classList.push("note-paragraph")

    if (item.style) {
        classList.push(item.style)
    }

    function setField(text) {
        const newItem = { ...item }
        newItem.text = text
        toolkit.editor.update(index, newItem)
    }
    
    if (toolkit.notes.itemMode === 0) {
        return <TextField 
            key={nanoid()}
            className={classList.join(" ")}
            field={item.text} setField={setField}
            placeholder="просто начните писать"
        />
    }

    classList.push("x-text-field")
    classList.push("blocked")

    return <div className={classList.join(" ")}>
        <div className="x-field-input">
            {item.text || "просто начните писать"}
        </div>
    </div>
}
