import { 
    Dropdown
} from '@web-cross-ui/forms'

import ChildrenButton from './ChildrenButton'
import DropdownContent from './DropdownContent'

import TextFormatIcon from '@mui/icons-material/TextFormat'

export default function TextButton() {
    return <Dropdown
            dropdown={<DropdownContent />}
            contentPosition={"bottom-left"}
            listDirection="row"
    >
        <ChildrenButton icon={<TextFormatIcon />} />
    </Dropdown>
}
