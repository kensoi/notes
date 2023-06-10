import { useContext } from "react";

import XBlock, { XVertical } from "../../../../../XBlock";
import { XButton, XDropdown} from "../../../../../XForms";
import { Toolkit } from "../../../../../../contexts";

import HorizontalRuleIcon from '@mui/icons-material/HorizontalRule';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import TextFormatIcon from '@mui/icons-material/TextFormat';
import ShortTextIcon from '@mui/icons-material/ShortText';
import NotesIcon from '@mui/icons-material/Notes';
import DoneIcon from '@mui/icons-material/Done';
import RttIcon from '@mui/icons-material/Rtt';
import BrushIcon from '@mui/icons-material/Brush';

export default function Toolbar() {
    const toolkit = useContext(Toolkit)

    const TextMenu = () => {
        return <XVertical disablePaddings={true}>
            <XButton
                icon={<ShortTextIcon />}
                title="Заголовок"
                hideEmptyPaddings={true} hideEmptyPaddingsAtMobile={true}
                onClick={() => {
                    toolkit.notes.items.add(1)
                }} />
            <XButton
                icon={<NotesIcon />}
                title="Параграф"
                hideEmptyPaddings={true} hideEmptyPaddingsAtMobile={true}
                onClick={() => {
                    toolkit.notes.items.add(2)
                }} />
            <XButton
                icon={<RttIcon />}
                title="Цитата"
                hideEmptyPaddings={true} hideEmptyPaddingsAtMobile={true}
                onClick={() => {
                    toolkit.notes.items.add(3)
                }} />
            <XButton
                icon={<DoneIcon />}
                title="Задача"
                hideEmptyPaddings={true} hideEmptyPaddingsAtMobile={true}
                onClick={() => {
                    toolkit.notes.items.add(4)
                }} />
        </XVertical>
    }
    
    const DecorativeMenu = () => {
        return <XVertical disablePaddings={true}>
            <XButton
                icon={<MoreHorizIcon />}
                title="Троеточие"
                hideEmptyPaddings={true} hideEmptyPaddingsAtMobile={true}
                onClick={() => {
                    toolkit.notes.items.add(5)
                }} />
            <XButton
                icon={<HorizontalRuleIcon />}
                title="Полоса"
                hideEmptyPaddings={true} hideEmptyPaddingsAtMobile={true}
                onClick={() => {
                    toolkit.notes.items.add(6)
                }} />
        </XVertical>
    }
    
    const BackToList = () => {
        return <XButton accent="transparent"
            icon={<ArrowBackIcon />}
            hideEmptyPaddings={true} hideEmptyPaddingsAtMobile={true}
            onClick={toolkit.notes.deselect} />
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
    
    const DecorativeButton = () => <XDropdown
        dropdown={<DecorativeMenu/>}
        contentPosition={"bottom-left"}
        listDirection="row">
            <XButton accent="transparent"
                icon={<BrushIcon />}
                hideEmptyPaddings={true} hideEmptyPaddingsAtMobile={true}
                />
        </XDropdown>
    
    if (toolkit.windowSize.width < 768) {
        return <XBlock className="editor-toolbar">
            <BackToList />
            <TextButton />
            <DecorativeButton />
        </XBlock>
    }

    return <XBlock className="editor-toolbar">
        <TextButton />
        <DecorativeButton />
    </XBlock>
}
