import { useContext } from "react";
import { nanoid } from "nanoid";

import { XButton, XCheckBox, XField } from "../../../../../XForms";

import ShortTextIcon from '@mui/icons-material/ShortText';
import NotesIcon from '@mui/icons-material/Notes';
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
            icon={<ShortTextIcon />}
            field={item.text} setField={setText}>
            { title }
        </XField>
    }
    
    return <TextField title="как бы называлась ваша заметка сегодня?" />
}

function NoteParagraph({item, index}) {
    const toolkit = useContext(Toolkit)

    const TextField = ({ title }) => {
        const setText = (text) => {
            const newItem = { ...item };
            newItem.text = text;
            toolkit.notes.items.update(index, newItem)
        }

        return <XField key={nanoid()}
            className="note-paragraph"
            icon={<NotesIcon />}
            field={item.text} setField={setText}>
            { title }
        </XField>
    }
    
    return <TextField title="просто начните писать" />
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

    return <div className="note-task">
        <CheckButton />
        <TextField title="название задачи" />
    </div>
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

    return <div className="note-citata">
        <TextField title="просто начните писать" />
        <AuthorField name="Клавдий Харитонович" />
    </div>
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

    const RemoveButton = ({ index }) => {
        const removeItem = () => {
            toolkit.notes.items.remove(index)
        }

        return <XButton accent="transparent"
            icon={<ClearIcon />}
            hideEmptyPaddings={true} hideEmptyPaddingsAtMobile={true}
            onClick={removeItem} />
    }

    const ItemInner = ({ item, index }) => {
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

    return <div className="note-item-block">
        <ItemInner item={item} index={index} />
        <RemoveButton index={index} />
    </div>
}
