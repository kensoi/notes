export class CardBehaviour {
  #state
  #dispatch
  
  constructor(state, dispatch) {
    this.#state = state;
    this.#dispatch = dispatch;

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
          if (typeof value == "string") {
            this.#dispatch({
              type: "set-layout",
              state: value
            })
          }
        }
      },
      offset: {
        get: () => this.#state.topOffset,
        set: (value) => {
          if (typeof value == "number") {
            this.#dispatch({
              type: "set-top-offset",
              state: value
            })
          }
        }
      },
      response: {
        get: () => this.#state.response,
        set: (value) => {
          this.#dispatch({
            type: "set-top-offset",
            state: value
          })
        }
      },
      props: {
        get: () => this.#state.props,
        set: (value) => {
          this.#dispatch({
            type: "set-props",
            state: value
          })
        }
      },
    })
  }

  return(props) {
    this.loaded = false
    this.response = {
      layout: this.layout.repeat(1),
      response: props,
    }

    window.scrollTo(window.scrollX, this.offset)

    setTimeout(() => {
      this.mounted = false
    }, 100);
  }

  show (layout, props) {
    let offset = 100;

    if (this.mounted) {
      this.return(null);
      offset += 200;
    }

    setTimeout(() => {
      this.props = props
      this.layout = layout
      this.offset = window.scrollY
      this.mounted = true
    }, offset);

    setTimeout(() => {
      this.loaded = true
    }, 100 + offset);
  }
}
