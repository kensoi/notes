import {
    useToolKit
} from '@web-cross-ui/toolkit'

import ChildrenButton from './ChildrenButton'

import HorizontalRuleIcon from '@mui/icons-material/HorizontalRule'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz'
import DoneIcon from '@mui/icons-material/Done'
import RttIcon from '@mui/icons-material/Rtt'

function Quote () {
    const toolkit = useToolKit()

    const onClick = () => {
        toolkit.notes.items.add(3)
    }

    return <ChildrenButton 
        icon={<RttIcon/>}
        title="Цитата"
        onClick={onClick}
    />
}

function Task () {
    const toolkit = useToolKit()

    const onClick = () => {
        toolkit.notes.items.add(4)
    }

    return <ChildrenButton 
        icon={<DoneIcon/>}
        title="Задача"
        onClick={onClick}
    />
}

function Ellipsis () {
    const toolkit = useToolKit()

    const onClick = () => {
        toolkit.notes.items.add(5)
    }

    return <ChildrenButton 
        icon={<MoreHorizIcon/>}
        title="Троеточие"
        onClick={onClick}
    />
}

function HorizontalLine () {
    const toolkit = useToolKit()

    const onClick = () => {
        toolkit.notes.items.add(6)
    }

    return <ChildrenButton 
        icon={<HorizontalRuleIcon/>}
        title="Полоса"
        onClick={onClick}
    />
}

export default function DropdownContent() {
    return <>
        <Quote />
        <Task />
        <Ellipsis />
        <HorizontalLine />
    </>
}
