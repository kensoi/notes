import { useContext } from "react";

import XBlock from "../../../XBlock";
import { XButton } from "../../../XForms";
import { Toolkit } from "../../../../contexts";

import { FormBlock } from "./FormBlock";
import { Editor } from "./Editor";
import { SearchBox } from "./SearchBox";
import { NoteList } from "./NoteList";

import SettingsIcon from '@mui/icons-material/Settings'


const SettingsButton = () => {
    return <XButton
        icon={<SettingsIcon />}
        accent="transparent"
        hideEmptyPaddings={true} hideEmptyPaddingsAtMobile={true}
        onClick={() => {
            window.location.href=process.env.PUBLIC_URL + "/settings"
        }}
    />
}

const NoteListToolbar = () => {
    return <div className="note-list-toolbar">
        <XBlock>
            <SettingsButton />
        </XBlock>
    </div>
}

function SelectNote () {
    return <XBlock className="editor-state">
        <p>
            Чтобы начать,<br /><b>выберите</b> заметку<br />или <b>создайте</b> новую
        </p>
    </XBlock>
}

function EmptyList () {
    return <div className="no-notes">
        <p>
            Заметок нет!
        </p>
    </div>
}

function DesktopTemplate () {
    const toolkit = useContext(Toolkit)
    
    const NoteBlock = () => {
        return toolkit.notes.isListEmpty() ? <EmptyList /> : <NoteList />
    }

    const Resolver = () => {
        return toolkit.notes.isTarget() ?  <Editor /> : <SelectNote />
    }
    
    return <div className="index desktop">
            <div className="sorted-list">
                <SearchBox />
                <NoteBlock />
                <NoteListToolbar />
            </div>
            <FormBlock >
                <Resolver />
            </FormBlock>
        </div>
}

function MobileTemplate () {
    const toolkit = useContext(Toolkit)

    const Page = () => {
        if (toolkit.notes.isListEmpty()) {
            // список записок пустой

            return <div className="sorted-list">
                <SearchBox />
                <SelectNote />
                <NoteListToolbar />
            </div>
        }

        else if (toolkit.notes.isTarget()) {
            // уже какая-то записка под редактированием

            return <Editor />
        }

        // список не пустует, но пользователь ещё не выбрал что редачить.

        return <div className="sorted-list">
            <SearchBox />
            <NoteList />
            <NoteListToolbar />
        </div>
    }
    
    return <div className="index">
            <FormBlock >
                <Page />
            </FormBlock>
        </div>
}

export default function Index () {
    const toolkit = useContext(Toolkit)

    if (toolkit.windowSize.width >= 768) {
        return <DesktopTemplate />
    }
    else {
        return <MobileTemplate />
    }
}