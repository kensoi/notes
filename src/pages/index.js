import "./stylesheet.scss"

import useAppPartitions from "utils/useAppPartitions"

import Notes from "./Notes"
import Settings from "./Settings"

import {
    BrowserRouter, 
    Route,
    Routes
} from "react-router-dom"

export default function Router () {
    useAppPartitions()
    
    return <BrowserRouter>
        <Routes>
            <Route path="/notes/*" element={<Notes />} />
            <Route exact path="/notes/settings" element={<Settings />} />
        </Routes>
    </BrowserRouter>
}