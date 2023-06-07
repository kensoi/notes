import { XHorizontal, XVertical } from "../../../XBlock";
import { XButton, XField } from "../../../XForms";
import { Toolbar } from "./Toolbar";
import XBlock from "../../../XBlock";
import { nanoid } from "nanoid";

import CropFreeIcon from '@mui/icons-material/CropFree';
import ShortTextIcon from '@mui/icons-material/ShortText';
import NotesIcon from '@mui/icons-material/Notes';
import DoneIcon from '@mui/icons-material/Done';
import ClearIcon from '@mui/icons-material/Clear';
import React from "react";

function NoteTitle (toolkit, item, index) {
    let setText = (text) => {
        let newItem = {...item}
        newItem.text = text
        toolkit.notes.items.update(index, newItem)
    }

    return <XField key={nanoid()}
            className="note-title"
            icon={<ShortTextIcon/>}
            field={item.text} setField={setText} >
        заголовок
    </XField>
}

function NoteParagraph (toolkit, item, index) {
    let setText = (text) => {
        let newItem = {...item}
        newItem.text = text
        toolkit.notes.items.update(index, newItem)
    }

    return <XField key={nanoid()}
            className="note-paragraph"
            icon={<NotesIcon/>}
            field={item.text} setField={setText} >
        просто начните писать
    </XField>
}

function NoteTask (toolkit, item, index) {
    let setText = (text) => {
        let newItem = {...item}
        newItem.text = text
        toolkit.notes.items.update(index, newItem)
    }
    let setStatus = () => {
        let newItem = {...item}
        newItem.status = !item.status
        toolkit.notes.items.update(index, newItem)
    }
    let ButtonIcon = () => {
        return item.status ? <DoneIcon /> : <CropFreeIcon />
    }
    let CheckButton = () => {
        
        return <XButton accent="transparent"
            icon={<ButtonIcon />}
            hideEmptyPaddings={true} hideEmptyPaddingsAtMobile={true}
            onClick={setStatus} />
    }

    return <XHorizontal className="note-task" sx={[{}, {flex: "1 1 auto"}]} disablePaddings={true}>
        <CheckButton />
        <XField key={nanoid()}
                field={item.text} setField={setText} >
            название задачи
        </XField>
    </XHorizontal>
}

function NoteCitata (toolkit, item, index) {
    let setText = (text) => {
        let newItem = {...item}
        newItem.text = text
        toolkit.notes.items.update(index, newItem)
    }
    let setAuthor = (text) => {
        let newItem = {...item}
        newItem.author = text
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

function Item (props) {
    switch (props.item.type) {
        case 2: 
            return NoteParagraph (props.toolkit, props.item, props.index)

        case 3: 
            return NoteCitata (props.toolkit, props.item, props.index)

        case 4: 
            return NoteTask (props.toolkit, props.item, props.index)

        default: 
            return NoteTitle (props.toolkit, props.item, props.index)
    }
}

const ItemKit = (props) => {
    const removeItem = () => {
        props.toolkit.notes.items.remove(props.index)
    }

    const removeButton = () => {
        return <XButton accent="transparent"
            icon={<ClearIcon />}
            hideEmptyPaddings={true} hideEmptyPaddingsAtMobile={true}
            onClick={removeItem} />
    }

    return removeButton()
}

function ItemWrapper (props) {
    return <XHorizontal sx={[{flex: "1 1 auto"}]} className="note-item-block">
        {props.children}
        <ItemKit index={props.index} toolkit={props.toolkit} item={props.item}/>
    </XHorizontal>
}

function ItemList (props) {
    const targetNote = props.toolkit.notes.list[props.toolkit.notes.target_index]

    if (targetNote.items.length === 0) {
        return <NoItems />
    }

    return <XBlock>
        <XVertical>
            {
                targetNote.items.map(
                    (item, index) => <ItemWrapper key={item.id} index={index} toolkit={props.toolkit} item={item}>
                        <Item toolkit={props.toolkit} index={index} item={item}/>
                    </ItemWrapper>
                )
            }
        </XVertical>
    </XBlock>
}

function NoItems () {
    return <XBlock className="editor-state">
        Чтобы начать, воспользуйтесь верхней панелью
    </XBlock>
}

export function Wrapper(props) {
    return <XVertical>
        <Toolbar toolkit={props.toolkit} />
        <ItemList toolkit={props.toolkit} />
    </XVertical>
}
