import {
    useToolKit
} from "@webx-ui/toolkit"

import { 
    MountTransition
} from "@webx-ui/transitions/"

import Editor from "../components/editor"
import BottomBar from "../components/BottomBar"
import SearchBox from "../components/SearchBox"
import SelectNote from "../components/SelectNote"
import NoteList from "../components/NoteList"

function Page() {
    const toolkit = useToolKit()

    if (toolkit.notes.isListEmpty()) {
        // список записок пустой
        return <div className="sorted-list">
            <SearchBox />
            <SelectNote />
            <BottomBar />
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
        <BottomBar />
    </div>
}

export function Template () {
    const toolkit = useToolKit()
    
    return <>
            <MountTransition 
                mountState={toolkit.notes.mounted}
                visibilityState={toolkit.notes.loaded}
            >
                <Page />
            </MountTransition>
        </>
}