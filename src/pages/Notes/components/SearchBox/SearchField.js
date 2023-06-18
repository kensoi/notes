import {
    useToolKit
} from '@webx-ui/toolkit'

import {
    TextField
} from '@webx-ui/forms'

import {
    SearchIcon
} from "icons/notes/search-box"

export function SearchField() {
    const toolkit = useToolKit()

    const enterQuery = query => {
        toolkit.notes.query = query
    }

    return <TextField
            icon={<SearchIcon />}
            field={toolkit.notes.query}
            placeholder="заголовок"
            setField={enterQuery} 
    />
}
