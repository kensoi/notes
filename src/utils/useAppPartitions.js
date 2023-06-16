import {
    useReducer
} from "react"

import {
    usePartition, useToolKit
} from "@web-cross-ui/toolkit"

import {
    notes,
    NotesPartition,
    NotesReducer,

    pages,
    PagesPartition,
    PagesReducer

} from "./toolkit"

function useNotesAPI () {
    const [
        state, dispatch
    ] = useReducer(NotesReducer, notes)

    usePartition(
        "notes", 
        new NotesPartition(
            state, dispatch, 
            useToolKit()
        )
    )
}

function usePagesAPI () {
    const [
        state, dispatch
    ] = useReducer(PagesReducer, pages)

    usePartition(
        "pages", 
        new PagesPartition(
            state, dispatch,
            useToolKit()
        )
    )
    
}

export default function useAppPartitions () {
    useNotesAPI()
    usePagesAPI()
}