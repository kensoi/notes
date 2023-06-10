import XBlock from "../../../XBlock";
import { XField, XButton } from "../../../XForms";
import SearchIcon from '@mui/icons-material/Search';
import AddIcon from '@mui/icons-material/Add';
import { useContext } from "react";
import { Toolkit } from "../../../../contexts";

export function SearchBox() {
    const toolkit = useContext(Toolkit)

    const SearchField = ({title}) => {
        return <XField
            icon={<SearchIcon />}
            field={toolkit.notes.search.query} cleanable={true}
            setField={toolkit.notes.search.setQuery}
        >
            {title}
        </XField>
    }

    const AddNote = () => {
        return <XButton accent="transparent"
            icon={<AddIcon />}
            hideEmptyPaddings={true} hideEmptyPaddingsAtMobile={true}
            onClick={toolkit.notes.create} />
    }
    
    return <div className="search-box">
        <XBlock>
            <SearchField title="заголовок" />
            <AddNote />
        </XBlock>
    </div>
}
