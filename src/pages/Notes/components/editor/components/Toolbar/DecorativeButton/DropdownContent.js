import {
    useToolKit
} from '@webx-ui/toolkit'

import {
    ButtonBlock
} from "@webx-ui/forms"

import ChildrenButton from './ChildrenButton'

import {
    HorizontalRuleIcon,
    MoreHorizIcon,
    DoneIcon,
    RttIcon
} from "icons/notes/editor/toolbar"

function Quote () {
    const toolkit = useToolKit()

    const onClick = () => {
        toolkit.editor.add(3)
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
        toolkit.editor.add(4)
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
        toolkit.editor.add(5)
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
        toolkit.editor.add(6)
    }

    return <ChildrenButton 
        icon={<HorizontalRuleIcon/>}
        title="Полоса"
        onClick={onClick}
    />
}

export default function DropdownContent() {
    return <ButtonBlock>
        <Quote />
        <Task />
        <Ellipsis />
        <HorizontalLine />
    </ButtonBlock>
}
