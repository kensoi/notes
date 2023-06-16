
import ChildrenButton from "./ChildrenButton"
import Menu from "./Menu"

export default function Sorter() {
    return <XDropdown
        dropdown={<Menu />}
        contentPosition={"top-left"}
        listDirection="row">
        <ChildrenButton />
    </XDropdown>
}
