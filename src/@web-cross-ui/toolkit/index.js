import "schema/index.scss"

import {
    createContext,
    useContext,
    useReducer,
    useState
} from "react"

import {
    card, CardReducer,
    settings, SettingsReducer
} from "./reducers"

import {
    CardBehaviour,
    SettingsBehaviour
} from "./behaviours"

import {
    getScreenDeviceType
} from "./screen-device-type"

import {
    MountTransition
} from "@web-cross-ui/transitions"
import CardWrapper from "@web-cross-ui/card"

const getToolKitContext = createContext()

const createPartition = (state, dispatch, Behaviour) => {
    return new Behaviour(state, dispatch)
}

class ToolKit {
    #card
    #settings
    #toolDict

    constructor (cardPartition, settingsPartition) {
        this.#card = cardPartition
        this.#settings = settingsPartition
        this.#toolDict = {}

        Object.defineProperties(this, {
            card: {
                get: () => this.#card
            },

            settings: {
                get: () => this.#settings
            }
        })
    }

    setPartition (name, partition) {
        this.#toolDict[name] = partition
        Object.defineProperty(
            this, name, {
                get: () => this.#toolDict[name],
                configurable: true
            }
        )
    }

    get () {
        return {
            card: this.#card,
            settings: this.#settings,
            ...this.#toolDict
        }
    }
}

function Wrapper ({children, mount, loaded}) {
    return <MountTransition
        mountState={mount}
        visibilityState={loaded}
        className="index"
    >
        {
            children
        }
    </MountTransition>
}

function ToolKitContext ({children}) {
    const [
        cardState, cardDispatch
    ] = useReducer(CardReducer, card)

    const [
        settingsState, settingsDispatch
    ] = useReducer(SettingsReducer, settings)
    
    const cardPartition = createPartition(
        cardState, cardDispatch, CardBehaviour
    )
    const settingsPartition = createPartition(
        settingsState, settingsDispatch, SettingsBehaviour
    )

    const toolkit = new ToolKit(
        cardPartition, settingsPartition
    )

    const layoutClassList = ["webx"]
    layoutClassList.push("color-schema-" + toolkit.settings.colorSchema)
    layoutClassList.push(getScreenDeviceType())

    document.body.className = layoutClassList.join(" ")

    
    const [
        mount, setMount
    ] = useState(false)

    const [
        loaded, setLoaded
    ] = useState(false)

    const MountTransitionData = {
        path: process.env.PUBLIC_URL,

        show: (offset=100) => {
            setTimeout(
                () => {
                    MountTransitionData.mount = true
                }, offset
            )

            setTimeout(
                () => {
                    MountTransitionData.loaded = true
                }, offset + 100
            )
        },
        
        hide: (offset=100) => {
            setTimeout(
                () => {
                    MountTransitionData.loaded = false
                }, offset
            )

            setTimeout(
                () => {
                    MountTransitionData.mount = false
                }, offset + 100
            )
        },

        goTo: (href) => {
            toolkit.card.return()
            toolkit.app.hide()
            setTimeout(
                () => {
                    window.location.href = href
                },
                200
            )
        }
    }

    Object.defineProperties(MountTransitionData, {
        mount: {
            get: () => mount,
            set: setMount
        },

        loaded: {
            get: () => loaded,
            set: setLoaded
        },
    })

    window.addEventListener('load', function () {
        MountTransitionData.show()
    })

    window.onbeforeunload = () => {
        MountTransitionData.hide()
    }

    Object.defineProperty(toolkit, "app", {
        get: () => MountTransitionData
    })
    
    return <getToolKitContext.Provider value={toolkit}>
        <Wrapper mount={toolkit.app.mount} loaded={toolkit.app.loaded}>
            {
                children
            }
        </Wrapper>
        <CardWrapper />
    </getToolKitContext.Provider>
}

function useToolKit() {
    return useContext(getToolKitContext)
}

function usePartition (name, partition) {
    const toolkit = useToolKit()

    toolkit.setPartition(name, partition)
}

export {
    ToolKitContext, useToolKit, usePartition
}