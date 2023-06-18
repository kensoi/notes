import {
    useToolKit
} from '@webx-ui/toolkit'

import {
    ImportExportIcon,
    ModeEditIcon,
    DeleteSweepIcon
} from "icons/notes/editor/toolbar"

export default function useActualItemModeIcon() {
    const toolkit = useToolKit()

    switch (toolkit.notes.itemMode) {
        case 1:
            return <DeleteSweepIcon />

        case 2:
            return <ImportExportIcon />

        default:
            return <ModeEditIcon />
    }
}
