import {
    useToolKit
} from "@web-cross-ui/toolkit"

import {
    Button
} from "@web-cross-ui/forms"

import ImportExportIcon from '@mui/icons-material/ImportExport'

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
