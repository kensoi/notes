
import {
    CardBlock
} from "@web-cross-ui/forms"

import SettingsButton from "./SettingsButton"
import Sorter from "./Sorter"

export default function BottomBar() {
    return <CardBlock className="note-list-toolbar">
        <Sorter />
        <SettingsButton />
    </CardBlock>
}
