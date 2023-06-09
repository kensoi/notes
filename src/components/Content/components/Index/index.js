import { SortedList } from "./SortedList";
import { Resolver } from "./Resolver";
import { FormBlock } from "./FormBlock";

function DesktopTemplate (props) {
    return <div className="index desktop">
        {SortedList(props)}
        <FormBlock toolkit={props.toolkit}>
            {Resolver(props)}
        </FormBlock>
    </div>
}

function MobileTemplate (props) {
    if (props.toolkit.notes.target_index === null) {
        return SortedList (props)
    }
    else {
        return Resolver (props)
    }
}

export default function Index (props) {
    if (props.toolkit.windowSize.width >= 768) {
        return DesktopTemplate (props)
    }

    else {
        return <div className="index">
            <FormBlock toolkit={props.toolkit}>
                {MobileTemplate (props)}
            </FormBlock>
        </div>
    }
}