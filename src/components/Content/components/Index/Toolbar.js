import XBlock, { XHorizontal, XVertical } from "../../../XBlock";
import { XButton, XDropdown} from "../../../XForms";

import AddIcon from '@mui/icons-material/Add';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import TextFormatIcon from '@mui/icons-material/TextFormat';
import ShortTextIcon from '@mui/icons-material/ShortText';
import NotesIcon from '@mui/icons-material/Notes';
import DoneIcon from '@mui/icons-material/Done';
import RttIcon from '@mui/icons-material/Rtt';

export function Toolbar(props) {
    let TextMenu = () => {
        return <XVertical>
            <XButton
                icon={<ShortTextIcon />}
                title="Заголовок"
                hideEmptyPaddings={true} hideEmptyPaddingsAtMobile={true}
                onClick={() => {
                    props.toolkit.notes.items.add(1)
                }} />
            <XButton
                icon={<NotesIcon />}
                title="Параграф"
                hideEmptyPaddings={true} hideEmptyPaddingsAtMobile={true}
                onClick={() => {
                    props.toolkit.notes.items.add(2)
                }} />
            <XButton
                icon={<RttIcon />}
                title="Цитата"
                hideEmptyPaddings={true} hideEmptyPaddingsAtMobile={true}
                onClick={() => {
                    props.toolkit.notes.items.add(3)
                }} />
            <XButton
                icon={<DoneIcon />}
                title="Задача"
                hideEmptyPaddings={true} hideEmptyPaddingsAtMobile={true}
                onClick={() => {
                    props.toolkit.notes.items.add(4)
                }} />
        </XVertical>
    }
    
    const BackToList = () => {
        return <XButton accent="transparent"
            icon={<ArrowBackIcon />}
            hideEmptyPaddings={true} hideEmptyPaddingsAtMobile={true}
            onClick={props.toolkit.notes.deselect} />
    }
    let TextButton = () => <XDropdown
                dropdown={<TextMenu/>}
                contentPosition={"bottom-left"}
                listDirection="row">
            <XButton
                    icon={<TextFormatIcon />}
                    title="Текст"
                    hideEmptyPaddings={true} hideEmptyPaddingsAtMobile={true}
                    />
        </XDropdown>

    if (props.toolkit.windowSize.width < 768) {
        return <XBlock>
            <XHorizontal>
                <BackToList />
                <TextButton />
            </XHorizontal>
        </XBlock>;
    }

    return <XBlock>
        <XHorizontal>
            <TextButton />
        </XHorizontal>
    </XBlock>;
}
