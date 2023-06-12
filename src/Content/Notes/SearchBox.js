import { useContext } from "react";

import XBlock from "WebXUI/XBlock";
import { XField, XButton } from "WebXUI/XForms";

import { ToolKitContext } from "shared/tools"

import SearchIcon from '@mui/icons-material/Search';
import AddIcon from '@mui/icons-material/Add';

function SearchField ({title}) {
    const toolkit = useContext(ToolKitContext)
    
    return <XField
        icon={<SearchIcon />}
        field={toolkit.notes.query} cleanable={true}
        setField={(query) => {
            toolkit.notes.query = query
        }}
    >
        {title}
    </XField>
}

function AddNote () {
    const toolkit = useContext(ToolKitContext)

    return <XButton accent="transparent"
        icon={<AddIcon />}
        hideEmptyPaddings={true} hideEmptyPaddingsAtMobile={true}
        onClick={toolkit.notes.create.bind(toolkit.notes)} />
}

export function SearchBox() {
    return <div className="search-box">
        <XBlock>
            <SearchField title="заголовок" />
            <AddNote />
        </XBlock>
    </div>
}
