import XBlock, { XHorizontal, XVertical } from "../../../XBlock";
import { XButton, XDropdown} from "../../../XForms";

import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import TextFormatIcon from '@mui/icons-material/TextFormat';
import ShortTextIcon from '@mui/icons-material/ShortText';
import NotesIcon from '@mui/icons-material/Notes';
import DoneIcon from '@mui/icons-material/Done';
import RttIcon from '@mui/icons-material/Rtt';
// import BrushIcon from '@mui/icons-material/Brush';

export function Toolbar(props) {
    const TextMenu = () => {
        return <XVertical disablePaddings={true}>
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
    const TextButton = () => <XDropdown
                dropdown={<TextMenu/>}
                contentPosition={"bottom-left"}
                listDirection="row">
            <XButton accent="transparent"
                    icon={<TextFormatIcon />}
                    hideEmptyPaddings={true} hideEmptyPaddingsAtMobile={true}
                    />
        </XDropdown>

    // const DecorativeButton = () => <XButton accent="transparent"
    //     icon={<BrushIcon />}
    //     hideEmptyPaddings={true} hideEmptyPaddingsAtMobile={true}
    //     />

    if (props.toolkit.windowSize.width < 768) {
        return <XBlock>
            <XHorizontal disablePaddings={true}>
                <BackToList />
                <TextButton />
                {/* <DecorativeButton /> */}
            </XHorizontal>
        </XBlock>;
    }

    return <XBlock>
        <XHorizontal disablePaddings={true}>
            <TextButton />
            {/* <DecorativeButton /> */}
        </XHorizontal>
    </XBlock>;
}
