import {
    useReducer
} from "react"

import {
    reducingState,
    Reducer
} from "./reducer"

import {
    Partition
} from "./partition"

export default function useCardAPI () {
    const [
        state, dispatch
    ] = useReducer(Reducer, reducingState)

    const initedPartition = new Partition(dispatch, state)

    return initedPartition
}