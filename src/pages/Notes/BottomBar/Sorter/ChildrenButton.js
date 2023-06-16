import { useToolKit } from "@web-cross-ui/toolkit";
import { Button } from "@web-cross-ui/forms";

export function ChildrenButton() {
    const toolkit = useToolKit();
    var text;

    switch (toolkit.notes.sortMode) {
        case 1:
            text = "по дате создания";
            break;
        case 2:
            text = "по первому элементу";
            break;
        default:
            text = "по дате редактирования";
            break;
    }

    return <Button title={text}
        isDropdown={true} />;
}
