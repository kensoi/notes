export const card = {
    mounted: false,
    loaded: false,

    layout: null,
    topOffset: 0,
}

export function CardReducer(state, action) {
    var newState = { ...state }

    switch (action.type) {
        case "set-mount":
            newState.mounted = action.state
            break

        case "set-visiblity":
            newState.loaded = action.state
            break

        case "set-layout":
            newState.layout = action.state
            break

        case "set-top-offset":
            newState.topOffset = action.state
            break

        default:
            throw Error('Unknown action.')
    }

    return newState
}
