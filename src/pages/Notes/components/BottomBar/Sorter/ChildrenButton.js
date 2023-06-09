import {
    useToolKit
} from "@webx-ui/toolkit"

import {
    Button
} from "@webx-ui/forms"

import {
    ImportExportIcon
} from 'icons/notes/bottom-menu'

export default function ChildrenButton() {
    const toolkit = useToolKit()
    var text

    switch (toolkit.notes.sortMode) {
        case 1:
            text = "по д. созд."
            break

        case 2:
            text = "по п. эл-ту"
            break

        default:
            text = "по д. ред."
    }

    return <Button
            icon={<ImportExportIcon />}
            className="sorter-button"
            theme="white"
            title={text}
            isDropdown={true}
    />
}
