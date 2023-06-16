import { 
    useToolKit
} from "@web-cross-ui/toolkit"

import {
    CardBlock
} from "@web-cross-ui/forms"

import Toolbar from "./components/Toolbar"
import NoItems from "./components/NoItems"
import Item from "./components/Item"

export default function Editor() {
    const toolkit = useToolKit()
    
    if (!toolkit.notes.isTarget()) {
        return <></>
    }
    const targetNote = toolkit.notes.getTarget()
    
    const NoteContent = () => {
        if (targetNote.items.length === 0) {
            return <NoItems />
        }

        return targetNote.items.map(
            (item, index) => <Item key={item.id} item={item} index={index} />
        )
    }   

    return <>
        <Toolbar />
        <CardBlock className="editor-x-block">
            <NoteContent />
        </CardBlock>
    </>
}