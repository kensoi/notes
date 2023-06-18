export class Partition {
    #state
    #dispatch
    
    constructor(dispatch, state) {
        this.#state = state
        this.#dispatch = dispatch


        Object.defineProperties(this, {
            mounted: {
                get: () => this.#state.mounted,
                set: (value) => {
                    if (typeof value == "boolean") {
                        this.#dispatch({
                            type: "set-mount",
                            state: value
                        })
                    }
                }
            },
            
            loaded: {
                get: () => this.#state.loaded,
                set: (value) => {
                    if (typeof value == "boolean") {
                        this.#dispatch({
                            type: "set-visiblity",
                            state: value
                        })
                    }
                }
            },
            
            path: {
                get: () => process.env.PUBLIC_URL,
            },
            
            cacheApp: {
                get: () => this.#state.serviceWorker,
                set: (value) => {
                    if (typeof value == "boolean") {
                            this.#dispatch({
                                type: "set-cache",
                                state: value
                            })
                        
                    }
                }
            },

            theme: {
                get: () => this.#state.schema,
                set: (value) => {
                    if (typeof value == "string") {
                        this.#dispatch({
                            type: "set-color-schema",
                            state: value
                        })
                    }
                }
            },

            windowWidth: {
                get: () => this.#state.windowWidth,
                set: (value) => {
                    if (typeof value == "number") {
                        this.#dispatch({
                            type: "set-client-width",
                            state: value
                        })
                    }
                }
            },

            windowHeight: {
                get: () => this.#state.windowHeight,
                set: (value) => {
                    if (typeof value == "number") {
                        this.#dispatch({
                            type: "set-client-height",
                            state: value
                        })
                    }
                }
            },
        })
    }
    
    show (offset=100) {
        setTimeout(
            () => {
                this.mounted = true
            }, offset
        )

        setTimeout(
            () => {
                this.loaded = true
            }, offset + 100
        )
    }

    hide (offset=100) {
        setTimeout(
            () => {
                this.loaded = false
            }, offset
        )

        setTimeout(
            () => {
                this.mounted = false
            }, offset + 100
        )
    }

    goTo (href) {
        if (this.card.loaded || this.card.mounted) {
            this.card.hide()
        }
        
        this.hide()

        setTimeout(
            () => {
                window.location.href = href
            },
            200
        )
    }
}