import {
    useToolKit
} from '@web-cross-ui/toolkit'

import {
    TextField
} from '@web-cross-ui/forms'

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
