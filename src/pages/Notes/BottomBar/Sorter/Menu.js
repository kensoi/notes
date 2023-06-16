import {
    useToolKit
} from "@web-cross-ui/toolkit"

import {
    Button
} from "@web-cross-ui/forms"

function SortByEdit() {
    const toolkit = useToolKit()

    const onClick = () => {
        toolkit.notes.sortMode = 0 // по дате редактирования
    }

    return <Button
        title="по дате редактирования"
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
        title="по дате создания"
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
        title="по первому элементу"
        theme="transparent"
        onClick={onClick}
    />
}

export default function Menu() {
    return <>
        <SortByEdit />
        <SortByCreate />
        <SortByName />
    </>
}
