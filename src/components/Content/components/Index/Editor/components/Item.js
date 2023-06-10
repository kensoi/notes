import React from "react";
import { nanoid } from "nanoid";

import { XButton, XCheckBox, XField } from "../../../../../XForms";

import ShortTextIcon from '@mui/icons-material/ShortText';
import NotesIcon from '@mui/icons-material/Notes';
import ClearIcon from '@mui/icons-material/Clear';

function NoteTitle({toolkit, item, index}) {
    const setText = (text) => {
        const newItem = { ...item };
        newItem.text = text;
        toolkit.notes.items.update(index, newItem)
    }

    return <XField key={nanoid()}
        className="note-title"
        icon={<ShortTextIcon />}
        field={item.text} setField={setText}>
        заголовок
    </XField>
}

function NoteParagraph({toolkit, item, index}) {
    const setText = (text) => {
        const newItem = { ...item };
        newItem.text = text;
        toolkit.notes.items.update(index, newItem)
    }

    return <XField key={nanoid()}
        className="note-paragraph"
        icon={<NotesIcon />}
        field={item.text} setField={setText}>
        просто начните писать
    </XField>
}

function NoteTask({toolkit, item, index}) {
    const setText = (text) => {
        const newItem = { ...item };
        newItem.text = text;
        toolkit.notes.items.update(index, newItem)
    }

    const setStatus = () => {
        const newItem = { ...item };
        newItem.status = !item.status;
        toolkit.notes.items.update(index, newItem)
    }
    
    const CheckButton = () => {
        return <XCheckBox state={item.status} setState={setStatus} />
    }

    return <div className="note-task">
        <CheckButton />
        <XField key={nanoid()}
            field={item.text} setField={setText}>
            название задачи
        </XField>
    </div>
}

function NoteCitata({toolkit, item, index}) {
    const setText = (text) => {
        const newItem = { ...item };
        newItem.text = text;
        toolkit.notes.items.update(index, newItem)
    }

    const setAuthor = (text) => {
        const newItem = { ...item };
        newItem.author = text;
        toolkit.notes.items.update(index, newItem)
    }

    return <div className="note-citata">
        <XField key={nanoid()}
            className="note-citata-text"
            field={item.text} setField={setText}>
            просто начните писать
        </XField>
        <XField key={nanoid()}
            className="note-citata-author"
            field={item.author} setField={setAuthor}>
            Клавдий Харитонович
        </XField>
    </div>
}

function NoteManyDots({}) {
    return <div className="note-many-dots">
        <div className="note-many-dots-dot" />
        <div className="note-many-dots-dot" />
        <div className="note-many-dots-dot" />
    </div>
}

function NoteHR({}) {
    return <div className="note-hr">
        <div />
    </div>
}

export function Item({toolkit, item, index}) {
    const RemoveButton = ({ toolkit, index }) => {
        const removeItem = () => {
            toolkit.notes.items.remove(index)
        }

        return <XButton accent="transparent"
            icon={<ClearIcon />}
            hideEmptyPaddings={true} hideEmptyPaddingsAtMobile={true}
            onClick={removeItem} />
    }

    const ItemInner = ({toolkit, item, index}) => {
        switch (item.type) {
            case 2:
                return <NoteParagraph toolkit={toolkit} item={item} index={index} />

            case 3:
                return <NoteCitata toolkit={toolkit} item={item} index={index} />

            case 4:
                return <NoteTask toolkit={toolkit} item={item} index={index} />

            case 5:
                return <NoteManyDots toolkit={toolkit} item={item} index={index} />

            case 6:
                return <NoteHR toolkit={toolkit} item={item} index={index} />

            default:
                return <NoteTitle toolkit={toolkit} item={item} index={index} />
        }
    }

    return <div className="note-item-block">
        <ItemInner toolkit={toolkit} item={item} index={index} />
        <RemoveButton toolkit={toolkit} index={index} />
    </div>
}
