import { 
    useToolKit
} from '@web-cross-ui/toolkit'

import ChildrenButton from './ChildrenButton'

import ModeEditIcon from '@mui/icons-material/ModeEdit'
import DeleteSweepIcon from '@mui/icons-material/DeleteSweep'
import ImportExportIcon from '@mui/icons-material/ImportExport'
import { ButtonBlock } from '@web-cross-ui/forms'

function ToggleNormalArea() {
    const toolkit = useToolKit()

    const onClick = () => {
        toolkit.notes.itemMode = 0
    }

    return <ChildrenButton
        icon={<ModeEditIcon />}
        title="Обычный"
        onClick={onClick}
    />
}

function ToggleDeletingArea() {
    const toolkit = useToolKit()

    const onClick = () => {
        toolkit.notes.itemMode = 1
    }

    return <ChildrenButton
        icon={<DeleteSweepIcon />}
        title="Ремувер"
        onClick={onClick}
    />
}

function ToggleMovingArea() {
    const toolkit = useToolKit()

    const onClick = () => {
        toolkit.notes.itemMode = 2
    }

    return <ChildrenButton
        icon={<ImportExportIcon />}
        title="Перетаскивание"
        onClick={onClick}
    />
}


export default function DropdownContent() {
    return <ButtonBlock>
        <ToggleNormalArea />
        <ToggleDeletingArea />
        <ToggleMovingArea />
    </ButtonBlock>
}
