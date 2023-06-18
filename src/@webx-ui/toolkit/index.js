import {
    useToolKit, getToolKitContext
} from "./context"

import {
    KitWrapper
} from "./KitWrapper"

import CardWrapper from "@webx-ui/card"
import useAppAPI from "./app"

import {
    getScreenDeviceType
} from "./screen-device-type"

function ToolKitContext ({ children }) {
    const toolkit = new KitWrapper()
    const app = useAppAPI()

    Object.defineProperty(toolkit, "app", {
        get: () => app
    })

    const layoutClassList = []
    layoutClassList.push("webx")
    layoutClassList.push("theme-" + toolkit.app.theme)
    layoutClassList.push(getScreenDeviceType())
    layoutClassList.push("mount-transition")

    if (toolkit.app.loaded) {
        layoutClassList.push("visible")
    }

    document.body.className = layoutClassList.join(" ")

    window.addEventListener('load', function () {
        toolkit.app.show()
    })

    window.onbeforeunload = () => {
        toolkit.app.hide()
    }
    return <getToolKitContext.Provider value={toolkit}>
        { children }
        <CardWrapper />
    </getToolKitContext.Provider>
}

function usePartition (name, partition) {
    const toolkit = useToolKit()

    toolkit.setPartition(name, partition)
}

export {
    ToolKitContext, useToolKit, usePartition
}