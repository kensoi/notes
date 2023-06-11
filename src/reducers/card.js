export const card = {
    mounted: false,
    loaded: false,

    layout: "hello",
    topOffset: 0,
    response: JSON.parse(localStorage.getItem("latestResponse")) || {
        layout: "settings",
        response: null,
    },
    props: {}
}

export function CardReducer(state, action) {
    var newState = { ...state };

    switch (action.type) {
        case "set-mount":
            newState.mounted = action.state;
            break;

        case "set-visiblity":
            newState.loaded = action.state;
            break;

        case "set-layout":
            newState.layout = action.state;
            break;

        case "set-top-offset":
            newState.topOffset = action.state;
            break;

        case "set-response":
            newState.response = action.state;
            localStorage.setItem(
                "latestResponse",
                JSON.stringify({
                  layout: state.layout,
                  response: action.state,
                })
              );
            break;

        case "set-props":
            newState.props = action.state;
            break;

        default:
            throw Error('Unknown action.')
    }

    return newState
}
