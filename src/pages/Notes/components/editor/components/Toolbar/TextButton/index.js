import { 
    Dropdown
} from '@web-cross-ui/forms'

import ChildrenButton from './ChildrenButton'
import DropdownContent from './DropdownContent'

import {
    TextFormatIcon
} from "icons/notes/editor/toolbar"

export default function TextButton() {
    return <Dropdown
            dropdown={<DropdownContent />}
            contentPosition={"bottom-left"}
            listDirection="row"
    >
        <ChildrenButton icon={<TextFormatIcon />} />
    </Dropdown>
}
