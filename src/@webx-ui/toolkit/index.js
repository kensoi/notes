import {
    useToolKit, getToolKitContext
} from "./context"

import CardWrapper from "@webx-ui/card"
import useAppAPI from "./app"

import {
    MountTransition
} from "@webx-ui/transitions"

import {
    getScreenDeviceType
} from "./screen-device-type"

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

function Wrapper ({ children }) {
    const toolkit = useToolKit()
    return <MountTransition
        mountState={toolkit.app.mounted}
        visibilityState={toolkit.app.loaded}
        className="index"
    >
        { children }
        <CardWrapper />
    </MountTransition>

}

function ToolKitContext ({ children }) {
    const toolkit = new ToolKit()
    const app = useAppAPI()

    Object.defineProperty(toolkit, "app", {
        get: () => app
    })

    const layoutClassList = ["webx"]
    layoutClassList.push("theme-" + toolkit.app.theme)
    layoutClassList.push(getScreenDeviceType())

    document.body.className = layoutClassList.join(" ")

    window.addEventListener('load', function () {
        toolkit.app.show()
    })

    window.onbeforeunload = () => {
        toolkit.app.hide()
    }
    return <getToolKitContext.Provider value={toolkit}>
        <Wrapper>
            { children }
        </Wrapper>
    </getToolKitContext.Provider>
}

function usePartition (name, partition) {
    const toolkit = useToolKit()
    partition.setToolkit(toolkit)

    toolkit.setPartition(name, partition)
}

export {
    ToolKitContext, useToolKit, usePartition
}