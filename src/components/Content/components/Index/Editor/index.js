import React, { useContext } from "react";

import XBlock from "../../../../XBlock"
import Toolbar from "./components/Toolbar";
import NoItems from "./components/NoItems";
import Item from "./components/Item";
import { Toolkit } from "../../../../../contexts";

export function Editor() {
    const toolkit = useContext(Toolkit);

    const targetNoteIndex = toolkit.notes.target_index
    const targetNote = toolkit.notes.list[targetNoteIndex]

    const NoteContent = () => {
        if (targetNote.items.length === 0) {
            return <NoItems />
        }
        else {
            return targetNote.items.map(
                (item, index) => <Item key={item.id} item={item} index={index} />
            )
        }
    }

    return <>
        <Toolbar />
        <XBlock className="editor-x-block">
            <NoteContent />
        </XBlock>
    </>
}
