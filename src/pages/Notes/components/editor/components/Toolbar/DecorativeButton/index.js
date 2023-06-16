import {
    Dropdown
} from '@web-cross-ui/forms'

import ChildrenButton from './ChildrenButton'
import DropdownContent from './DropdownContent'

import BrushIcon from '@mui/icons-material/Brush'

export default function DecorativeButton() {
    return <Dropdown
        dropdown={<DropdownContent />}
        contentPosition={"bottom-left"}
        listDirection="row">
        <ChildrenButton icon={<BrushIcon/>} />
    </Dropdown>
}
