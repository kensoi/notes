import {
    ToolKitContext
} from "@web-cross-ui/toolkit"

import Router from "pages"

export default function App () {
    return <ToolKitContext>
        <Router/>
    </ToolKitContext>
}