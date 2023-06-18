import {
    useEffect
} from "react"

import {
    useToolKit
} from "@webx-ui/toolkit"

import {
    Note
} from "./Note"

export default function NoteList() {
    const toolkit = useToolKit()

    useEffect(() => {}, [toolkit.notes.list, toolkit.notes.sortMode])

    return <div className="note-list">
        {
            toolkit.notes.getFilteredList().map(
                note => <Note key={note.id} note={note} index={note.arrayid} />
            )
        }
    </div>
}
