import {
    Dropdown
} from "@webx-ui/forms"

import ChildrenButton from "./ChildrenButton"
import Menu from "./Menu"

export default function Sorter() {
    return <Dropdown
        dropdown={<Menu />}
        contentPosition={"top-left"}
        listDirection="row">
        <ChildrenButton />
    </Dropdown>
}
