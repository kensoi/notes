import {
    useToolKit
} from "@web-cross-ui/toolkit"

import MoveUp from "./MoveUp"
import MoveDown from "./MoveDown"

export default function DraggingButtons({ index }) {
    const toolkit = useToolKit()
    
    switch (index) {
        case 0:
            return <div className="dragging-buttons latest">
                <MoveDown index={index} />
            </div>

        case toolkit.notes.getTarget().items.length - 1:
            return <div className="dragging-buttons latest">
                <MoveUp index={index} />
            </div>

        default:
            return <div className="dragging-buttons">
                <MoveUp index={index} />
                <MoveDown index={index} />
            </div>
    }
}
