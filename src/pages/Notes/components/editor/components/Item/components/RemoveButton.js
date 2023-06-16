import {
    useToolKit
} from "@web-cross-ui/toolkit"

import {
    Button
} from "@web-cross-ui/forms"

import ClearIcon from '@mui/icons-material/Clear'

export default function RemoveButton({ index }) {
    const toolkit = useToolKit()

    const onClick = () => {
        toolkit.notes.items.remove(index)
    }

    return <div>
        <Button
            theme="transparent"
            icon={<ClearIcon />}
            onClick={onClick}
        />
    </div>
}
