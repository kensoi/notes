import XBlock from "../../../XBlock";
import { Wrapper } from "./Editor";

function SelectNote () {
    return <XBlock className="editor-state">
        <p>
            Чтобы начать,<br /><b>выберите</b> заметку<br />или <b>создайте</b> новую
        </p>
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
