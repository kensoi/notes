import {
    nanoid
} from "nanoid"

import {
    useToolKit
} from "@webx-ui/toolkit"

import {
    TextField
} from "@webx-ui/forms"

export default function Quote({ item, index }) {
    const toolkit = useToolKit()

    const QuoteField = () => {
        function setText(text) {
            const newItem = { ...item }
            newItem.text = text
            toolkit.editor.update(index, newItem)
        }
        
        if (toolkit.notes.itemMode === 0) {
            return <TextField 
                key={nanoid()}
                className="quote-field"
                field={item.text} setField={setText}
                placeholder="просто начните писать"
            />
        }
        
        return <div className="quote-field">
            <div className="x-text-field blocked">
                <div className="x-text-field-input">
                    {item.text || "просто начните писать"}
                </div>
            </div>
        </div>
    }

    const AuthorField = () => {
        const setField = (text) => {
            const newItem = { ...item }
            newItem.author = text
            toolkit.editor.update(index, newItem)
        }

        if (toolkit.notes.itemMode === 0) {
            return <TextField 
                key={nanoid()}
                className="quote-author"
                field={item.text} setField={setField}
                placeholder="Клавдий Харитонович"
            />
        }

        return <div className="quote-author">
            <div className="x-text-field blocked">
                <div className="x-text-field-input">
                    {item.author || "Клавдий Харитонович"}
                </div>
            </div>
        </div>
    }

    <div className="note-citata">
        <QuoteField />
        <AuthorField />
    </div>
}
