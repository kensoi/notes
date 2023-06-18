import {
    useToolKit
} from "@webx-ui/toolkit"

import {
    Button
} from "@webx-ui/forms"

import {
    ClearIcon
} from "icons/notes/editor/document"

export default function RemoveButton({ index }) {
    const toolkit = useToolKit()

    const onClick = () => {
        toolkit.editor.remove(index)
    }

    return <div>
        <Button
            theme="transparent"
            icon={<ClearIcon />}
            onClick={onClick}
        />
    </div>
}
