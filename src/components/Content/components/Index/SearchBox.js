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
            field={toolkit.notes.query} cleanable={true}
            setField={(query) => {
                toolkit.notes.query = query
            }}
        >
            {title}
        </XField>
    }

    const AddNote = () => {
        return <XButton accent="transparent"
            icon={<AddIcon />}
            hideEmptyPaddings={true} hideEmptyPaddingsAtMobile={true}
            onClick={()=>{
                toolkit.notes.create.bind(toolkit.notes)()
            }} />
    }
    
    return <div className="search-box">
        <XBlock>
            <SearchField title="заголовок" />
            <AddNote />
        </XBlock>
    </div>
}
