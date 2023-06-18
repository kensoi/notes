import {
    useToolKit
} from "@webx-ui/toolkit"

import {
    Button,
    ButtonBlock
} from "@webx-ui/forms"

import {
    ImportExportIcon
} from 'icons/notes/bottom-menu'

function SortByEdit() {
    const toolkit = useToolKit()

    const onClick = () => {
        toolkit.notes.sortMode = 0 // по дате редактирования
    }

    return <Button
        icon={<ImportExportIcon />}
        title="по дате ред."
        theme="transparent"
        onClick={onClick}
    />
}

function SortByCreate() {
    const toolkit = useToolKit()

    const onClick = () => {
        toolkit.notes.sortMode = 1 // по дате создания
    }

    return <Button
        icon={<ImportExportIcon />}
        title="по дате созд."
        theme="transparent"
        onClick={onClick}
    />
}

function SortByName() {
    const toolkit = useToolKit()

    const onClick = () => {
        toolkit.notes.sortMode = 2 // по имени
    }
    
    return <Button
        icon={<ImportExportIcon />}
        title="по первому эл."
        theme="transparent"
        onClick={onClick}
    />
}

export default function Menu() {
    return <ButtonBlock>
        <SortByEdit />
        <SortByCreate />
        <SortByName />
    </ButtonBlock>
}
