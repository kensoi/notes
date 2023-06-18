export const reducingState = {
    mounted: true,
    loaded: true,

    list: JSON.parse(localStorage.getItem("note-list")) || [],
    targetIndex: null,

    query: "",
    sortMode: JSON.parse(localStorage.getItem("sortMode")) || 0,
    itemMode: 0,
    askBeforeRemoving: JSON.parse(localStorage.getItem("ask-before-removing")) || false,
}

export function Reducer(state, action) {
    var newState = { ...state };

    switch (action.type) {
        case "set-mount":
            newState.mounted = action.state;
            break;

        case "set-visiblity":
            newState.loaded = action.state;
            break;

        case "update-list":
            newState.list = action.state;
            break;

        case "set-target-index":
            newState.targetIndex = action.state;
            break;

        case "set-query":
            newState.query = action.state;
            break;

        case "set-sort-mode":
            newState.sortMode = action.state;
            break;

        case "set-item-mode":
            newState.itemMode = action.state;
            break;

        case "set-ask-before-remove":
            newState.askBeforeRemoving = action.state;
            localStorage.setItem("ask-before-removing", action.state)
            break;

        default:
            throw Error('Unknown action.');
    }

    return newState
}
