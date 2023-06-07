import XBlock from "../../../XBlock";
import { Wrapper } from "./Editor";

function SelectNote () {
    return <XBlock className="editor-state">
        Чтобы начать, выберите заметку или создайте новую.
    </XBlock>
}

export function Resolver(props) {
    if (props.toolkit.notes.target_index === null) {
        return <SelectNote />
    }

    else {
        return <Wrapper toolkit={props.toolkit}/>
    }
}
