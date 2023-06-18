import {
    useReducer
} from "react"

import {
    usePartition
} from "@webx-ui/toolkit"

import { 
    Reducer, 
    reducingState
} from "./reducer"

import { 
    Partition
} from "./partition"

export default function useNotesAPI () {
    const [
        state, dispatch
    ] = useReducer(Reducer, reducingState)

    usePartition(
        "notes", 
        new Partition(
            dispatch, state
        )
    )
    
}