import {
    useToolKit
} from "@webx-ui/toolkit"

import {
    Button
} from "@webx-ui/forms"

import {
    ArrowDropUpIcon
} from "icons/notes/editor/document"

export default function MoveUp({ index }) {
    const toolkit = useToolKit()

    const onClick = () => {
        toolkit.editor.moveUp(index)
    };

    return <Button
            theme="white"
            onClick={onClick}
            icon={<ArrowDropUpIcon />}
    />
}
