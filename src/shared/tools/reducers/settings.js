export const settings = {
    mounted: true,
    loaded: true,
    page: parseInt(localStorage.getItem("settings-page")) || 0,

    header: localStorage.getItem("header") === "true" || false,
    footer: localStorage.getItem("footer") === "true" || false,
    schema: localStorage.getItem("color-schema") || "auto",
    serviceWorker: localStorage.getItem("service-worker") === "true" || false,
    windowWidth: document.body.clientWidth,
    windowHeight: document.body.clientHeight,
    askBeforeRemoving: localStorage.getItem("ask-before-removing") === "true" || false,
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

        case "set-cache":
            newState.serviceWorker = action.state;
            localStorage.setItem("service-worker", action.state)
            break;
            
        case "set-ask-before-remove":
            newState.askBeforeRemoving = action.state;
            localStorage.setItem("ask-before-removing", action.state)
            break;
            
        case "set-page":
            newState.page = action.state;
            localStorage.setItem("settings-page", action.state)
            break;

        case "set-header-state":
            newState.header = action.state;
            localStorage.setItem("header", action.state)
            break;
        
        case "set-footer-state":
            newState.footer = action.state;
            localStorage.setItem("footer", action.state)
            break;

        case "set-color-schema":
            newState.schema = action.state;
            localStorage.setItem("color-schema", action.state)
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
