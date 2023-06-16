import {
    Button
} from "@web-cross-ui/forms"

import DragIndicatorIcon from '@mui/icons-material/DragIndicator'

export default function MoveButton() {
    return <Button
            theme="transparent"
            icon={<DragIndicatorIcon />} 
    />
}
