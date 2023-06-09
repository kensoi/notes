import XBlock, { XHorizontal, XVertical } from "../../../XBlock";
import { XButton } from "../../../XForms";

import DynamicDiv from "../../../DynamicDiv"

import CloseIcon from '@mui/icons-material/Close';
import { SearchBox } from "./SearchBox";

function EmptyListStatus () {
    return <div className="no-notes">
        <p>
            Заметок нет!
        </p>
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
        if (props.toolkit.notes.deleteAsk.state) {
            props.toolkit.card.show("confirm-deletion", {note_deletion_index: props.index}, "notify")
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
    
    return <DynamicDiv>
        <XVertical>
            {
                response_list.map(
                    (note, index) => <Note key={note.id} toolkit={props.toolkit} note={note} index={index} />
                )
            }
        </XVertical>    
    </DynamicDiv>
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
