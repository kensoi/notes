import {
    useToolKit
} from '@web-cross-ui/toolkit'

import {
    Button
} from '@web-cross-ui/forms'

import ArrowBackIcon from '@mui/icons-material/ArrowBack'

export default function BackToList() {
    const toolkit = useToolKit()

    function onClick () {
        toolkit.notes.deselect()
    }

    return <Button 
        theme="transparent"
        icon={<ArrowBackIcon />}
        onClick={onClick}
    />
}
