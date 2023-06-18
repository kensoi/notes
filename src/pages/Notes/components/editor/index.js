import { 
    useToolKit
} from "@webx-ui/toolkit"

import {
    CardBlock
} from "@webx-ui/forms"

import Toolbar from "./components/Toolbar"
import NoItems from "./components/NoItems"
import Item from "./components/Item"

function NoteContent() {
    const toolkit = useToolKit()
    const targetNote = toolkit.notes.getTarget()

    if (targetNote.items.length === 0) {
        return <NoItems />
    }

    return <CardBlock className="editor-x-block">
        {targetNote.items.map(
            (item, index) => <Item key={item.id} item={item} index={index} />
        )}
    </CardBlock>
}   

export default function Editor() {
    return <>
        <Toolbar />
        <NoteContent />
    </>
}