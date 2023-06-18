export class Partition {
    #state
    #dispatch
    #toolkit
    
    constructor(dispatch, state) {
        this.#state = state
        this.#dispatch = dispatch

        this.settings = {}

        Object.defineProperties(this.settings, {
            mounted: {
                get: () => this.#state.settings.mounted,
                set: value => {
                    if (typeof value == "boolean") {
                        this.#dispatch({
                            type: "set-page-mount",
                            page: "settings",
                            state: value
                        })
                    }
                }
            },

            loaded: {
                get: () => this.#state.settings.loaded,
                set: value => {
                    if (typeof value == "boolean") {
                        this.#dispatch({
                            type: "set-page-visiblity",
                            page: "settings",
                            state: value
                        })
                    }
                }
            },

            number: {
                get: () => this.#state.settings.number,
                set: value => {
                    if (typeof value == "number" && value !== this.#state.settings.number) {
                        this.settings.loaded = false

                        setTimeout(
                            () => {
                                    this.#dispatch({
                                        type: "set-page-number",
                                        page: "settings",
                                        state: value
                                    })
                                
                                this.settings.loaded = true
                            }, 100
                        )
                    }
                    
                }
            }
        })
    }

    setToolKit(toolkit) {
        this.#toolkit = toolkit
    }
}