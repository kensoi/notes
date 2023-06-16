import {
    useToolKit
} from "@web-cross-ui/toolkit"

import {
    Button
} from "@web-cross-ui/forms"

import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown'

export default function MoveDown({ index }) {
    const toolkit = useToolKit()

    const onClick = () => {
        toolkit.notes.items.moveDown(index)
    }

    return <Button
            theme="white"
            onClick={onClick}
            icon={<ArrowDropDownIcon />} 
    />
}