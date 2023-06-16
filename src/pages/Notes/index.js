import {
    useToolKit
} from "@web-cross-ui/toolkit"

import "./scss/index.scss"

import { 
    DesktopTemplate, 
    MobileTemplate 
} from "./templates/"

export default function Settings () {
    const toolkit = useToolKit()

    if (toolkit.settings.windowWidth >= 768) {
        return <DesktopTemplate />
    }

    return <MobileTemplate />
}