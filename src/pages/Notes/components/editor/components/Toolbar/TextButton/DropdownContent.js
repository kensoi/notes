import {
    useToolKit
} from '@webx-ui/toolkit'

import {
    ButtonBlock
} from "@webx-ui/forms"

import ChildrenButton from './ChildrenButton'

import {
    ShortTextIcon,
    NotesIcon
} from "icons/notes/editor/toolbar"

function Title() {
    const toolkit = useToolKit()

    const onClick = () => {
        toolkit.editor.add(1)
    }

    return <ChildrenButton 
        icon={<ShortTextIcon />}
        title="Заголовок"
        onClick={onClick}
    />
}

function Paragraph() {
    const toolkit = useToolKit()

    const onClick = () => {
        toolkit.editor.add(2)
    }

    return <ChildrenButton 
        icon={<NotesIcon />}
        title="Параграф"
        onClick={onClick}
    />
}

function Bold() {
    const toolkit = useToolKit()

    const onClick = () => {
        toolkit.editor.add(2, "p-bold")
    }

    return <ChildrenButton 
        icon={<NotesIcon />}
        title="Жирный"
        onClick={onClick}
    />
}

function Italic() {
    const toolkit = useToolKit()

    const onClick = () => {
        toolkit.editor.add(2, "p-italic")
    }

    return <ChildrenButton 
        icon={<NotesIcon />}
        title="Курсив"
        onClick={onClick}
    />
}

export default function DropdownContent() {
    return <ButtonBlock>
        <Title />
        <Paragraph />
        <Bold />
        <Italic />
    </ButtonBlock>
}
