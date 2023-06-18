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

import useCardAPI from "../card"

export default function useAppAPI () {
    const [
        state, dispatch
    ] = useReducer(Reducer, reducingState)

    const initedPartition = new Partition(dispatch, state)
    const card = useCardAPI()

    Object.defineProperty(initedPartition, "card", {
        get: () => card
    })

    return initedPartition
}