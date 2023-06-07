import { XHorizontal } from "../../../XBlock";
import { SortedList } from "./SortedList";
import { Resolver } from "./Resolver";
import { FormBlock } from "./FormBlock";

function DesktopTemplate (props) {
    let desktopSX = [
        {   
            flex: "1 1 auto",
            maxWidth: "376px"
        },
        {
            flex: "1 1 auto",
            maxWidth: "640px",
        }
    ]

    return <XHorizontal className="index" sx={desktopSX}>
        {SortedList(props)}
        <FormBlock toolkit={props.toolkit}>
            {Resolver(props)}
        </FormBlock>
    </XHorizontal>
}

function MobileTemplate (props) {
    if (props.toolkit.notes.target_index === null) {
        return <div className="index">
            {SortedList (props)}
        </div>
    }
    else {
        return <div className="index">
            {Resolver (props)}
        </div>
    }
}

export default function Index (props) {
    if (props.toolkit.windowSize.width >= 768) {
        return DesktopTemplate (props)
    }

    else {
        return <FormBlock toolkit={props.toolkit}>
            {MobileTemplate (props)}
        </FormBlock>
    }
}