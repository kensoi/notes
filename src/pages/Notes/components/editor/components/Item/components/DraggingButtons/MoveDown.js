import {
    useToolKit
} from "@webx-ui/toolkit"

import {
    Button
} from "@webx-ui/forms"

import {
    ArrowDropDownIcon
} from "icons/notes/editor/document"

export default function MoveDown({ index }) {
    const toolkit = useToolKit()

    const onClick = () => {
        toolkit.editor.moveDown(index)
    }

    return <Button
            theme="white"
            onClick={onClick}
            icon={<ArrowDropDownIcon />} 
    />
}
