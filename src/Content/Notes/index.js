import { useContext } from "react";

import "./scss/stylesheet.scss";

import XBlock from "WebXUI/XBlock";
import { XButton, XDropdown} from "WebXUI/XForms";
import { MountBlock } from "WebXUI/MountBlock";

import { ToolKitContext } from "shared/tools"
import { PageMountBlockContext } from "shared/utils";

import { Editor } from "./Editor";
import { SearchBox } from "./SearchBox";
import { NoteList } from "./NoteList";

import SettingsIcon from '@mui/icons-material/Settings'

const Headline = () => {
    const toolkit = useContext(ToolKitContext)

    if (toolkit.settings.header) {
        return <div className="notes-headline">
            Заметки
        </div>
    }
    else {
        return <></>
    }
    
}

const SettingsButton = () => {
    const MainMountBlock = useContext(PageMountBlockContext)
    
    const buttonAction = () => {
        MainMountBlock.hide()
        setTimeout(() => {
            window.location.href=process.env.PUBLIC_URL + "/settings"
        }, 190)
    }

    return <XButton
        icon={<SettingsIcon />}
        accent="transparent"
        hideEmptyPaddings={true} hideEmptyPaddingsAtMobile={true}
        onClick={buttonAction}
    />
}

const NoteListToolbar = () => {
    const Sorter = () => {
        const toolkit = useContext(ToolKitContext)
        const Menu = () => {
            const SortByEdit = () => {
                const action = () => {
                    toolkit.notes.sortMode = 0 // по дате редактирования
                }

                return <XButton
                    title="по дате редактирования"
                    hideEmptyPaddings={true} hideEmptyPaddingsAtMobile={true}
                    onClick={action}
                />
            }
            
            const SortByCreate = () => {
                const action = () => {
                    toolkit.notes.sortMode = 1 // по дате создания
                }

                return <XButton
                    title="по дате создания"
                    hideEmptyPaddings={true} hideEmptyPaddingsAtMobile={true}
                    onClick={action}
                />
            }

            const SortByName = () => {
                const action = () => {
                    toolkit.notes.sortMode = 2 // по имени
                }
                return <XButton
                    title="по первому элементу"
                    hideEmptyPaddings={true} hideEmptyPaddingsAtMobile={true}
                    onClick={action}
                />
            }
            
            return <>
                <SortByEdit />
                <SortByCreate />
                <SortByName />
            </>
        }
        const ChildrenButton = () => {
            var text

            switch (toolkit.notes.sortMode) {
                case 1:
                    text = "по дате создания"
                    break;
                case 2:
                    text = "по первому элементу"
                    break;
                default:
                    text = "по дате редактирования"
                    break;
            }

            return <XButton title={text}
            hideEmptyPaddings={true} hideEmptyPaddingsAtMobile={true} isDropdown={true}/>
        }

        return <XDropdown
        dropdown={<Menu/>}
        contentPosition={"top-left"}
        listDirection="row">
            <ChildrenButton />
        </XDropdown>

    }
    return <XBlock className="note-list-toolbar">
            <Sorter />
            <SettingsButton />
        </XBlock>
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
    const toolkit = useContext(ToolKitContext)
    
    const NoteBlock = () => {
        return toolkit.notes.isListEmpty() ? <EmptyList /> : <NoteList />
    }

    const Resolver = () => {
        return toolkit.notes.isTarget() ?  <Editor /> : <SelectNote />
    }
    
    return <>
        <Headline />
        <div className="desktop">
            <div className="sorted-list">
                <SearchBox />
                <NoteBlock />
                <NoteListToolbar />
            </div>
            <MountBlock 
                mountState={toolkit.notes.mounted}
                visibilityState={toolkit.notes.loaded}
            >
                <Resolver />
            </MountBlock>
        </div>
    </>
}

function MobileTemplate () {
    const toolkit = useContext(ToolKitContext)

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
            <Headline />
            <SearchBox />
            <NoteList />
            <NoteListToolbar />
        </div>
    }
    
    return <>
            <MountBlock 
                mountState={toolkit.notes.mounted}
                visibilityState={toolkit.notes.loaded}
                className="ttt"
            >
                <Page />
            </MountBlock>
        </>
}

export default function Index () {
    const toolkit = useContext(ToolKitContext)

    if (toolkit.settings.windowWidth >= 768) {
        return <DesktopTemplate />
    }
    else {
        return <MobileTemplate />
    }
}