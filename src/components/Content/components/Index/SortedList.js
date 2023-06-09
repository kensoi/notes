import { SearchBox } from "./SearchBox";
import { NoteList } from "./NoteList";

function EmptyListStatus () {
    return <div className="no-notes">
        <p>
            Заметок нет!
        </p>
    </div>
}

function Resolver (props) {
    if (props.toolkit.notes.list.length === 0) {
        return <EmptyListStatus />
    }
    
    return <NoteList toolkit={props.toolkit} />
}

export function SortedList(props) {
    return <div className="sorted-list">
        <SearchBox toolkit={props.toolkit} />
        <Resolver toolkit={props.toolkit} />
    </div>
}
