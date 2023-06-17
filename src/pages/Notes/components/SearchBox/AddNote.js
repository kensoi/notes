import {
    useToolKit
} from '@web-cross-ui/toolkit'

import {
    Button
} from '@web-cross-ui/forms'

import {
    AddIcon
} from "icons/notes/search-box"

export function AddNote() {
    const toolkit = useToolKit()

    const createNote = () => {
        toolkit.notes.create()
    }

    return <Button 
            theme="white"
            icon={<AddIcon />}
            onClick={createNote}
    />
}
