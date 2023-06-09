import React from "react";

import XBlock from "../../../../XBlock"
import Toolbar from "../Toolbar";

import { NoItems } from "./components/NoItems";
import { Item } from "./components/Item";

export function Editor({ toolkit }) {
    const targetNoteIndex = toolkit.notes.target_index
    const targetNote = toolkit.notes.list[targetNoteIndex]

    const NoteContent = () => {
        if (targetNote.items.length === 0) {
            return <NoItems />
        }
        else {
            return targetNote.items.map(
                (item, index) => <Item key={item.id} toolkit={toolkit} item={item} index={index} />
            )
        }
    }

    return <>
        <Toolbar toolkit={toolkit} />
        <XBlock className="editor-x-block">
            <NoteContent />
        </XBlock>
    </>
}
