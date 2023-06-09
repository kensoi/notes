import { FormBlock } from "./FormBlock";
import XBlock from "../../../XBlock";
import { Editor } from "./Editor";
import { XButton } from "../../../XForms";

import { SearchBox } from "./SearchBox";
import { NoteList } from "./NoteList";
import SettingsIcon from '@mui/icons-material/Settings';

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

function DesktopTemplate ({toolkit}) {
    const NoteBlock = () => {
        if (toolkit.notes.list.length === 0) {
            return <div className="no-notes">
                <p>
                    Заметок нет!
                </p>
            </div>
        }
        
        return <NoteList toolkit={toolkit} />
    }

    const Resolver = () => {
        if (toolkit.notes.target_index === null) {
            return <SelectNote />
        }
    
        else {
            return <Editor toolkit={toolkit}/>
        }
    }
    
    return <>
        <div className="index desktop">
            <div className="sorted-list">
                <SearchBox toolkit={toolkit} />
                <NoteBlock />
                <NoteListToolbar />
            </div>
            <FormBlock toolkit={toolkit}>
                <Resolver toolkit={toolkit}/>
            </FormBlock>
        </div>
    </>
}

function MobileTemplate ({toolkit}) {
    const Resolver = () => {
        if (toolkit.notes.list.length === 0) {
            return <div className="sorted-list">
                <SearchBox toolkit={toolkit} />
                <SelectNote />
                <NoteListToolbar />
            </div>
        }

        else if (toolkit.notes.target_index === null) {
            return <div className="sorted-list">
                <SearchBox toolkit={toolkit} />
                <NoteList toolkit={toolkit}/>
                <NoteListToolbar />
            </div>
        }

        return <>
            <Editor toolkit={toolkit}/>
        </>
    }
    
    return <div className="index">
            <FormBlock toolkit={toolkit}>
                <Resolver />
            </FormBlock>
        </div>
}

export default function Index ({toolkit}) {
    if (toolkit.windowSize.width >= 768) {
        return  <DesktopTemplate toolkit={toolkit}/>
    }
    else {
        return <MobileTemplate toolkit={toolkit}/>
    }
}