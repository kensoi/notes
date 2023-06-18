import {
    CardBlock
} from "@webx-ui/forms"

import {
    SearchField
} from "./SearchField"

import {
    AddNote
} from "./AddNote"

export default function SearchBox() {
    return <div className="search-box">
        <CardBlock>
            <SearchField />
            <AddNote />
        </CardBlock>
    </div>
}
