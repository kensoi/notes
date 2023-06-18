import {
    nanoid
} from "nanoid"

import {
    useToolKit
} from "@webx-ui/toolkit"

import {
    CheckBox, 
    TextField
} from "@webx-ui/forms"

export default function Task({ item, index }) {
    const toolkit = useToolKit()

    const CheckButton = () => {
        const setStatus = () => {
            const newItem = { ...item }
            newItem.status = !item.status
            toolkit.editor.update(index, newItem)
        }

        return <CheckBox state={item.status} setState={setStatus} />
    }

    const TextArea = ({ title }) => {
        const setText = (text) => {
            const newItem = { ...item }
            newItem.text = text
            toolkit.editor.update(index, newItem)
        }
        return <TextField key={nanoid()}
            field={item.text} setField={setText}>
            {title}
        </TextField>
    }

    if (toolkit.notes.itemMode === 0) {
        return <div className="note-task">
            <CheckButton />
            <TextArea title="что вам нужно выполнить?" />
        </div>
    }
    else {
        return <div className="note-task">
            <CheckButton />
            <div className="x-field blocked">
                <div className="x-field-input">
                    {item.text || "что вам нужно выполнить?"}
                </div>
            </div>
        </div>
    }

}
