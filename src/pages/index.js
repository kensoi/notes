import {
    BrowserRouter, 
    Route,
    Routes
} from "react-router-dom"

import "./stylesheet.scss"

import useToolkitPartitions from "utils/useToolkitPartitions"

import Notes from "./Notes"
import Settings from "./Settings"
import NotFound from "./NotFound"


export default function Router () {
    useToolkitPartitions()
    
    return <BrowserRouter>
        <Routes>
            <Route exact path="/notes/" element={<Notes />} />
            <Route exact path="/notes/settings" element={<Settings />} />
            <Route path="/*" element={<NotFound />} />
        </Routes>
    </BrowserRouter>
}