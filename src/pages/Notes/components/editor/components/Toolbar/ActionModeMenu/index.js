import {
    Dropdown
} from '@webx-ui/forms'

import useActualItemModeIcon from './useActualItemModeIcon'
import DropdownContent from './DropdownContent'
import ChildrenButton from './ChildrenButton'

export default function ActionModeMenu() {
    return <Dropdown
        dropdown={<DropdownContent />}
        contentPosition={"bottom-left"}
        listDirection="row">
        <ChildrenButton
            icon={useActualItemModeIcon()}
        />
    </Dropdown>

}
