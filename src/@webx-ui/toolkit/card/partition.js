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
      layout: {
        get: () => this.#state.layout,
        set: (value) => {
          this.#dispatch({
            type: "set-layout",
            state: value
          })
        }
      },
      offset: {
        get: () => this.#state.topOffset + "px",
        set: (value) => {
          if (typeof value == "number") {
            this.#dispatch({
              type: "set-top-offset",
              state: value
            })
          }
        }
      },
    })
  }

  hide() {
    this.loaded = false

    window.scrollTo(window.scrollX, this.offset)

    setTimeout(() => {
      this.mounted = false
    }, 100)
  }

  show (layout) {
    let offset = 100

    if (this.mounted) {
      this.return()
      offset += 200
    }

    setTimeout(() => {
      this.layout = layout
      this.offset = window.scrollY
      this.mounted = true
    }, offset)

    setTimeout(() => {
      this.loaded = true
    }, 100 + offset)
  }
}
