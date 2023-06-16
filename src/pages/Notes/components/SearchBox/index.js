import {
    CardBlock
} from "@web-cross-ui/forms"

import {
    SearchField
} from "./SearchField"

import {
    AddNote
} from "./AddNote"

export function SearchBox() {
    return <div className="search-box">
        <CardBlock>
            <SearchField />
            <AddNote />
        </CardBlock>
    </div>
}
