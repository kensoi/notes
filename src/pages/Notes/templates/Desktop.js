import {
    useToolKit
} from "@web-cross-ui/toolkit"

import {
    MountTransition
} from "@web-cross-ui/transitions"

import EmptyList from "../components/EmptyList"
import NoteList from "../components/NoteList"
import BottomBar from "../components/BottomBar"
import SearchBox from "../components/SearchBox"
import Editor from "../components/editor"
import SelectNote from "../components/SelectNote"

export function Template() {
    const toolkit = useToolKit()

    const NoteBlock = () => {
        return toolkit.notes.isListEmpty() ? <EmptyList /> : <NoteList />
    }

    const Resolver = () => {
        return toolkit.notes.isTarget() ?  <Editor /> : <SelectNote />
    }

    return <div className="desktop notes">
        <div className="sorted-list">
            <SearchBox />
            <NoteBlock />
            <BottomBar />
        </div>
        <MountTransition
            mountState={toolkit.notes.mounted}
            visibilityState={toolkit.notes.loaded}
        >
            <Resolver />
        </MountTransition>
    </div>
}
