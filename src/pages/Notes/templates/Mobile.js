import {
    useToolKit
} from "@web-cross-ui/toolkit"

import { 
    MountTransition
} from "@web-cross-ui/transitions/"

import {
    Editor
} from "../editor"

import BottomBar from "../BottomBar"

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