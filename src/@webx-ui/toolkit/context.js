import {
    createContext, useContext
} from "react"

const getToolKitContext = createContext()

function useToolKit() {
    return useContext(getToolKitContext)
}

export {
    useToolKit, getToolKitContext
}