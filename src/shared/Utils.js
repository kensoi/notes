
export function handleChange (setState) {
    return event => setState(event.target.value)
}

export function CheckValue (value, defaultOption, notDefaultOption) {
    switch (value) {
        case defaultOption:
            return defaultOption;

        default:
            return notDefaultOption;
    }
}