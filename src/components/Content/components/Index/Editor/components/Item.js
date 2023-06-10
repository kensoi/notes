import { useContext } from "react";
import { nanoid } from "nanoid";

import { XButton, XCheckBox, XField } from "../../../../../XForms";
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import DragIndicatorIcon from '@mui/icons-material/DragIndicator';
import ClearIcon from '@mui/icons-material/Clear';
import { Toolkit } from "../../../../../../contexts";

function NoteTitle({item, index}) {
    const toolkit = useContext(Toolkit)

    const TextField = ({ title }) => {
        const setText = (text) => {
            const newItem = { ...item };
            newItem.text = text;
            toolkit.notes.items.update(index, newItem)
        }
    
        return <XField key={nanoid()}
            className="note-title"
            field={item.text} setField={setText}>
            { title }
        </XField>
    }
    if (toolkit.notes.items.actualItemMode === 0) {
        return <TextField title="как бы называлась ваша заметка сегодня?" />
    }
    else {
        return <div className="x-field note-title blocked">
                <div className="x-field-input">
                    {item.text}
                </div>
            </div>
    }
}

function NoteParagraph({item, index}) {
    const toolkit = useContext(Toolkit)
    const classList = ['note-paragraph']
    if (item.style) {
        classList.push(item.style)
    }

    const TextField = ({ title }) => {
        const setText = (text) => {
            const newItem = { ...item };
            newItem.text = text;
            toolkit.notes.items.update(index, newItem)
        }

        return <XField key={nanoid()}
            className={classList.join(" ")}
            field={item.text} setField={setText}>
            { title }
        </XField>
    }
    
    if (toolkit.notes.items.actualItemMode === 0) {
        return <TextField title="просто начните писать" />
    }
    else {
        classList.push("x-field")
        classList.push("blocked")
        return <div className={classList.join(" ")}>
                <div className="x-field-input">
                    {item.text}
                </div>
            </div>
    }
}

function NoteTask({ item, index }) {
    const toolkit = useContext(Toolkit)

    const CheckButton = () => {
        const setStatus = () => {
            const newItem = { ...item };
            newItem.status = !item.status;
            toolkit.notes.items.update(index, newItem)
        }

        return <XCheckBox state={item.status} setState={setStatus} />
    }

    const TextField = ({ title }) => {
        const setText = (text) => {
            const newItem = { ...item };
            newItem.text = text;
            toolkit.notes.items.update(index, newItem)
        }
        return <XField key={nanoid()}
            field={item.text} setField={setText}>
            {title}
        </XField>
    }

    if (toolkit.notes.items.actualItemMode === 0) {
        return <div className="note-task">
            <CheckButton />
            <TextField title="название задачи" />
        </div>
    }
    else {
        return <div className="note-task">
            <CheckButton />
            <div className="x-field blocked">
                <div className="x-field-input">
                    {item.text}
                </div>
            </div>
        </div>
    }
    
}

function NoteCitata({ item, index }) {
    const toolkit = useContext(Toolkit)

    const TextField = ({ title }) => {
        const setText = (text) => {
            const newItem = { ...item };
            newItem.text = text;
            toolkit.notes.items.update(index, newItem)
        }

        return <XField key={nanoid()}
            className="note-citata-text"
            field={item.text} setField={setText}>
            { title }
        </XField>
    }

    const AuthorField = ({ name }) => {
        const setAuthor = (text) => {
            const newItem = { ...item };
            newItem.author = text;
            toolkit.notes.items.update(index, newItem)
        }

        return <XField key={nanoid()}
            className="note-citata-author"
            field={item.author} setField={setAuthor}>
            { name }
        </XField>
    }

    if (toolkit.notes.items.actualItemMode === 0) {
        return <div className="note-citata">
            <TextField title="просто начните писать" />
            <AuthorField name="Клавдий Харитонович" />
        </div>
    }

    else {
        return <div className="note-task">
            <div className="note-citata-text">
                <div className="x-field blocked">
                    <div className="x-field-input">
                        {item.text}
                    </div>
                </div>
            </div>
            <div className="note-citata-author">
                <div className="x-field blocked">
                    <div className="x-field-input">
                        {item.author}
                    </div>
                </div>
            </div>
            
        </div>
    }
}

function NoteManyDots() {
    return <div className="note-many-dots">
        <div className="note-many-dots-dot" />
        <div className="note-many-dots-dot" />
        <div className="note-many-dots-dot" />
    </div>
}

function NoteHR() {
    return <div className="note-hr">
        <div />
    </div>
}

export default function Item({ item, index }) {
    const toolkit = useContext(Toolkit)

    const RemoveButton = () => {
        const removeItem = () => {
            toolkit.notes.items.remove(index)
        }

        return <XButton accent="transparent"
                icon={<ClearIcon />}
                hideEmptyPaddings={true} hideEmptyPaddingsAtMobile={true}
                onClick={removeItem} />
    }

    const MoveButton = () => {
        return <XButton accent="transparent"
                icon={<DragIndicatorIcon />}
                hideEmptyPaddings={true} hideEmptyPaddingsAtMobile={true}
                />
    }

    const ItemInner = () => {
        switch (item.type) {
            case 2:
                return <NoteParagraph item={item} index={index} />

            case 3:
                return <NoteCitata item={item} index={index} />

            case 4:
                return <NoteTask item={item} index={index} />

            case 5:
                return <NoteManyDots item={item} index={index} />

            case 6:
                return <NoteHR item={item} index={index} />

            default:
                return <NoteTitle item={item} index={index} />
        }
    }

    const MoveUp = () => {
        const action = () => {
            toolkit.notes.items.moveUp(index)
        }

        return <XButton accent="transparent"
            onClick={action}
            icon = {<ArrowDropUpIcon/>}
            hideEmptyPaddings={true} hideEmptyPaddingsAtMobile={true}/>
    }

    const MoveDown = () => {
        const action = () => {
            toolkit.notes.items.moveDown(index)
        }

        return <XButton accent="transparent"
            onClick={action}
            icon = {<ArrowDropDownIcon/>}
            hideEmptyPaddings={true} hideEmptyPaddingsAtMobile={true}/>
    }

    const DraggingButtons = () => {
        switch (index) {
            case 0:
                return <div className="dragging-buttons">
                    <MoveDown />
                </div>
            
            case toolkit.notes.getTarget().items.length - 1:
                return <div className="dragging-buttons">
                    <MoveUp />
                </div>

            default:
                return <div className="dragging-buttons">
                    <MoveUp />
                    <MoveDown />
                </div>
        }
    }

    switch (toolkit.notes.items.actualItemMode) {
        case 1: // removing
            return <div className="note-item-block editing">
                <ItemInner />
                <RemoveButton />
            </div>

        case 2: // moving
            return <div className="note-item-block editing">
                <DraggingButtons />
                <ItemInner />
            </div>

        default:
            if (toolkit.windowSize.width > 768) {
                return <div className="note-item-block">
                    <MoveButton />
                    <ItemInner item={item} index={index} />
                    <RemoveButton />
                </div>
            }

            return <div className="note-item-block">
                <ItemInner />
                <RemoveButton />
            </div>
    }
}
