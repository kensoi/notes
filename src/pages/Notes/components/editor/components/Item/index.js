



import {
    useToolKit
} from "@web-cross-ui/toolkit"

import Inner from "./Inner"
import RemoveButton from "./components/RemoveButton"
import DraggingButtons from "./components/DraggingButtons"

export default function Item({ item, index }) {
    const toolkit = useToolKit()

    switch (toolkit.notes.itemMode) {
        case 1: // removing
            return <div className="note-item-block editing">
                <Inner item={item} index={index}/>
                <RemoveButton index={index}/>
            </div>

        case 2: // moving
            return <div className="note-item-block editing">
                <DraggingButtons index={index} />
                <Inner item={item} index={index} />
            </div>

        default:
            if (toolkit.settings.windowWidth > 768) {
                return <div className="note-item-block">
                    {/* <MoveButton /> */}
                    <Inner item={item} index={index} />
                    <RemoveButton index={index}/>
                </div>
            }

            return <div className="note-item-block">
                <Inner item={item} index={index} />
                <RemoveButton index={index}/>
            </div>
    }
}
