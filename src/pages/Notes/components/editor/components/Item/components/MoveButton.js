import {
    Button
} from "@webx-ui/forms"

import {
    DragIndicatorIcon
} from "icons/notes/editor/document"

export default function MoveButton() {
    return <Button
            theme="transparent"
            icon={<DragIndicatorIcon />} 
    />
}
