import {
    useToolKit
} from '@webx-ui/toolkit'

import {
    Button
} from '@webx-ui/forms'

import {
    ArrowBackIcon
} from "icons/notes/editor/toolbar"

export default function BackToList() {
    const toolkit = useToolKit()

    function onClick () {
        toolkit.notes.deselect()
    }

    return <Button 
        theme="transparent"
        icon={<ArrowBackIcon />}
        onClick={onClick}
    />
}
