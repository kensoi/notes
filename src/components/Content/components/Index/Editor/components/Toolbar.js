import { useContext } from "react";

import XBlock, { XVertical } from "../../../../../XBlock";
import { XButton, XDropdown} from "../../../../../XForms";
import { Toolkit } from "../../../../../../contexts";

import ModeEditIcon from '@mui/icons-material/ModeEdit';
import DeleteSweepIcon from '@mui/icons-material/DeleteSweep';
import ImportExportIcon from '@mui/icons-material/ImportExport';
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
    
    const BackToList = () => {
        return <XButton accent="transparent"
            icon={<ArrowBackIcon />}
            hideEmptyPaddings={true} hideEmptyPaddingsAtMobile={true}
            onClick={toolkit.notes.deselect.bind(toolkit.notes)} />
    }
    
    const TextButton = () => {
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
                    icon={<NotesIcon />}
                    title="Жирный"
                    hideEmptyPaddings={true} hideEmptyPaddingsAtMobile={true}
                    onClick={() => {
                        toolkit.notes.items.add(2, "p-bold")
                    }} />
                <XButton
                    icon={<NotesIcon />}
                    title="Курсив"
                    hideEmptyPaddings={true} hideEmptyPaddingsAtMobile={true}
                    onClick={() => {
                        toolkit.notes.items.add(2, "p-italic")
                    }} />
            </XVertical>
        }

        const ChildrenButton = () => <XButton accent="transparent"
            icon={<TextFormatIcon />}
            hideEmptyPaddings={true} hideEmptyPaddingsAtMobile={true}
        />

        return <XDropdown
                dropdown={<TextMenu/>}
                contentPosition={"bottom-left"}
                listDirection="row">
            <ChildrenButton />
        </XDropdown>
    }
    
    const DecorativeButton = () => {
        const DecorativeMenu = () => {
            return <XVertical disablePaddings={true}>
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

        const ChildrenButton = () => <XButton accent="transparent"
                icon={<BrushIcon />}
                hideEmptyPaddings={true} hideEmptyPaddingsAtMobile={true}
            />

        return <XDropdown
                dropdown={<DecorativeMenu/>}
                contentPosition={"bottom-left"}
                listDirection="row">
            <ChildrenButton />
        </XDropdown>
    }

    const ActionModeMenu = () => {
        const ActionMenu = () => {
            const ToggleNormalArea = () => {
                const action = () => {
                    toolkit.notes.itemMode = 0
                }

                return <XButton
                    icon={<ModeEditIcon />}
                    title="Обычный"
                    hideEmptyPaddings={true} hideEmptyPaddingsAtMobile={true}
                    onClick={action}
                />
            }
            
            const ToggleDeletingArea = () => {
                const action = () => {
                    toolkit.notes.itemMode = 1
                }

                return <XButton
                    icon={<DeleteSweepIcon />}
                    title="Ремувер"
                    hideEmptyPaddings={true} hideEmptyPaddingsAtMobile={true}
                    onClick={action}
                />
            }

            const ToggleMovingArea = () => {
                const action = () => {
                    toolkit.notes.itemMode = 2
                }

                return <XButton
                    icon={<ImportExportIcon />}
                    title="Перетаскивание"
                    hideEmptyPaddings={true} hideEmptyPaddingsAtMobile={true}
                    onClick={action}
                />
            }
            
            
            return <XVertical disablePaddings={true}>
                <ToggleNormalArea />
                <ToggleDeletingArea />
                <ToggleMovingArea />
            </XVertical>
        }
        
        const ActualIcon = () => {
            switch (toolkit.notes.itemMode) {
                case 1: 
                    return <DeleteSweepIcon />

                case 2: 
                    return <ImportExportIcon />

                default:
                    return <ModeEditIcon />
            }
        }

        const ChildrenButton = () => <XButton accent="transparent"
                icon={<ActualIcon />}
                hideEmptyPaddings={true} hideEmptyPaddingsAtMobile={true}
            />

        return <XDropdown
                dropdown={<ActionMenu/>}
                contentPosition={"bottom-left"}
                listDirection="row">
            <ChildrenButton />
        </XDropdown>

    }
    
    if (toolkit.settings.windowWidth < 768) {
        return <XBlock className="editor-toolbar">
            <BackToList />
            <TextButton />
            <DecorativeButton />
            <ActionModeMenu />
        </XBlock>
    }

    return <XBlock className="editor-toolbar">
        <TextButton />
        <DecorativeButton />
        <ActionModeMenu />
    </XBlock>
}
