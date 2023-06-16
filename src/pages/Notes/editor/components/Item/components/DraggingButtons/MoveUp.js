import {
    useToolKit
} from "@web-cross-ui/toolkit"

import {
    Button
} from "@web-cross-ui/forms"

import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp'

export default function MoveUp({ index }) {
    const toolkit = useToolKit()

    const onClick = () => {
        toolkit.notes.items.moveUp(index)
    };

    return <Button
            theme="transparent"
            onClick={onClick}
            icon={<ArrowDropUpIcon />}
    />
}
