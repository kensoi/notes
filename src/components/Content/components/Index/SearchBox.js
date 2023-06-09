import XBlock from "../../../XBlock";
import { XField, XButton } from "../../../XForms";
import SearchIcon from '@mui/icons-material/Search';
import AddIcon from '@mui/icons-material/Add';

export function SearchBox(props) {
    return <div className="search-box">
        <XBlock>
            <XField
                icon={<SearchIcon />}
                field={props.toolkit.notes.search.query} cleanable={true}
                setField={props.toolkit.notes.search.setQuery}
            >
                Заголовок
            </XField>
            <XButton accent="transparent"
                icon={<AddIcon />}
                hideEmptyPaddings={true} hideEmptyPaddingsAtMobile={true}
                onClick={props.toolkit.notes.create} />
        </XBlock>
    </div>
}
