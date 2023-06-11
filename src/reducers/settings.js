export const settings = {
    mounted: true,
    loaded: true,
    page: 0,

    header: false,
    footer: false,
    schema: localStorage.getItem("colorSchema") || "auto",
    windowWidth: document.body.clientWidth,
    windowHeight: document.body.clientHeight,
}

export function SettingsReducer(state, action) {
    var newState = { ...state };

    switch (action.type) {
        case "set-mount":
            newState.mounted = action.state;
            break;

        case "set-visiblity":
            newState.loaded = action.state;
            break;

        case "set-page":
            newState.page = action.state;
            break;

        case "set-header-state":
            newState.header = action.state;
            break;
        
        case "set-footer-state":
            newState.footer = action.state;
            break;

        case "set-color-schema":
            newState.schema = action.state;
            break;

        case "set-client-width":
            newState.windowWidth = action.state;
            break;

        case "set-client-height":
            newState.windowHeight = action.state;
            break;

        default:
            throw Error('Unknown action.');
    }

    return newState;
}
