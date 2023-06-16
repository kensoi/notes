import {
    useToolKit
} from '@web-cross-ui/toolkit'

import {
    Button
} from '@web-cross-ui/forms'

import AddIcon from '@mui/icons-material/Add'

export function AddNote() {
    const toolkit = useToolKit()

    const createNote = () => {
        toolkit.notes.create()
    }

    return <Button accent="transparent"
        icon={<AddIcon />}
        onClick={createNote}
    />
}
