export const reducingState = {
    schema: localStorage.getItem("color-schema") || "auto",
    serviceWorker: JSON.parse(
        localStorage.getItem("service-worker")
    ) || false,
    windowWidth: document.body.clientWidth,
    windowHeight: document.body.clientHeight,
    mounted: false,
    loaded: false
}

export function Reducer(state, action) {
    var newState = { ...state }

    switch (action.type) {
        case "set-mount":
            newState.mounted = action.state

            break

        case "set-visiblity":
            newState.loaded = action.state

            break

        case "set-cache":
            newState.serviceWorker = action.state

            localStorage.setItem(
                "service-worker", 
                JSON.stringify(action.state)
            )

            break

        case "set-color-schema":
            newState.schema = action.state

            localStorage.setItem(
                "color-schema", 
                action.state
            )

            break

        case "set-client-width":
            newState.windowWidth = action.state

            break

        case "set-client-height":
            newState.windowHeight = action.state

            break

        default:
            throw Error('Unknown action.')
    }

    return newState
}
