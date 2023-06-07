import XBlock, { XHorizontal, XVertical } from "../../../XBlock";
import { XField, XButton } from "../../../XForms";

import SearchIcon from '@mui/icons-material/Search';
import AddIcon from '@mui/icons-material/Add';
import CloseIcon from '@mui/icons-material/Close';

function SearchBox (props) {
    const searchSX = [
        {
            flex: "1 1 auto",
        }
    ]

    return <XBlock className="search-box">
        <XHorizontal sx={searchSX} disablePaddings={true}>
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
        </XHorizontal>
    </XBlock>
}

function EmptyListStatus () {
    return <div className="no-notes">
        Заметок нет!
    </div>
}

function Note (props) {
    const editDate = new Date(props.note.editData * 1000);

    const mobileSX = [
        {
            flex: "1 1 auto"
        }
    ]

    const NoteName = () => {
        if (props.note.items.length === 0) {
            return "[Пустая заметка]"
        }
        if ('text' in props.note.items[0]) {
            if (props.note.items[0].text === "") {
                return "[Пустой элемент]"
            }
            return props.note.items[0].text
        }
        else {
            return "{Неизвестный объект}"
        }
    }

    const select = () => {
        props.toolkit.notes.select(props.index);
    }

    const remove = () => {
        props.toolkit.notes.remove(props.index)
    }

    const confirmDeletion = () => {
        if (props.toolkit.notifyBeforeRemoving) {
            props.toolkit.showCard("confirm-deletion", {note_deletion_index: props.index}, "notify")
        }
        else {
            remove()
        }
    }

    return <XBlock>
        <XHorizontal sx={mobileSX} disablePaddings={true}>
            <XVertical className="note-item"
                onClick={select}>
                <div className="note-item-name">
                    <NoteName/>
                </div>
                <div className="note-item-descr">
                    {editDate.toLocaleDateString()} {editDate.getHours()}:{editDate.getMinutes()}
                </div>
            </XVertical>
            {/* <XButton accent="transparent"
                icon={<VisibilityIcon />}
                hideEmptyPaddings={true} hideEmptyPaddingsAtMobile={true}/> */}
            <XButton accent="transparent"
                icon={<CloseIcon />}
                hideEmptyPaddings={true} hideEmptyPaddingsAtMobile={true}
                onClick={confirmDeletion} />
        </XHorizontal>
    </XBlock>
}

function NoteList (props) {
    var response_list;

    if (props.toolkit.notes.search.query === "") {
        response_list = props.toolkit.notes.list
    }
    
    else {
        response_list = props.toolkit.notes.list.filter(
            note => note.items[0].text.includes(props.toolkit.searchQuery)
        )
    }
    
    return <XVertical>
        {
            response_list.map(
                (note, index) => <Note key={note.id} toolkit={props.toolkit} note={note} index={index} />
            )
        }
    </XVertical>
}

function Resolver (props) {
    if (props.toolkit.notes.list.length === 0) {
        return <EmptyListStatus />
    }
    
    return <NoteList toolkit={props.toolkit} />
}

export function SortedList(props) {
    return <>
        <SearchBox toolkit={props.toolkit} />
        <Resolver toolkit={props.toolkit} />
    </>
}
