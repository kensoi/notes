import {
    ToolKitContext
} from "@webx-ui/toolkit"

import "themes/stylesheet.scss"

import Router from "pages"

export default function App () {
    return <ToolKitContext>
        <Router/>
    </ToolKitContext>
}