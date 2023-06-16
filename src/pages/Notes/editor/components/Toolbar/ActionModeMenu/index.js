import {
    Dropdown
} from '@web-cross-ui/forms'

import useActualItemModeIcon from './useActualItemModeIcon'
import DropdownContent from './DropdownContent'
import ChildrenButton from './ChildrenButton'

export function ActionModeMenu() {
    return <Dropdown
        dropdown={<DropdownContent />}
        contentPosition={"bottom-left"}
        listDirection="row">
        <ChildrenButton
            icon={useActualItemModeIcon()}
        />
    </Dropdown>

}
