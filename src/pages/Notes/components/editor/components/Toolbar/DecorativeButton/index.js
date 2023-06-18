import {
    Dropdown
} from '@webx-ui/forms'

import ChildrenButton from './ChildrenButton'
import DropdownContent from './DropdownContent'

import {
    BrushIcon
} from "icons/notes/editor/toolbar"

export default function DecorativeButton() {
    return <Dropdown
        dropdown={<DropdownContent />}
        contentPosition={"bottom-left"}
        listDirection="row">
        <ChildrenButton icon={<BrushIcon/>} />
    </Dropdown>
}
