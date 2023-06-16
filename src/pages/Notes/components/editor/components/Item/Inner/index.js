import Title from "./Title"
import Paragraph from "./Paragraph"
import Task from "./Task"
import Quote from "./Quote"
import Ellipsis from "./Ellipsis"
import HorizontalLine from "./HorizontalLine"

export default function Inner({ item, index }) {
    switch (item.type) {
        case 2:
            return <Paragraph item={item} index={index} />

        case 3:
            return <Quote item={item} index={index} />

        case 4:
            return <Task item={item} index={index} />

        case 5:
            return <Ellipsis item={item} index={index} />

        case 6:
            return <HorizontalLine item={item} index={index} />

        default:
            return <Title item={item} index={index} />
    }
}