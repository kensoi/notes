import {
    useToolKit
} from '@web-cross-ui/toolkit'

import ModeEditIcon from '@mui/icons-material/ModeEdit'
import DeleteSweepIcon from '@mui/icons-material/DeleteSweep'
import ImportExportIcon from '@mui/icons-material/ImportExport'

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
