import {
    useToolKit
} from '@webx-ui/toolkit'

import {
    CardBlock
} from '@webx-ui/forms'

import ActionModeMenu from './ActionModeMenu'
import DecorativeButton from './DecorativeButton'
import TextButton from './TextButton'
import BackToList from './BackToList'

export default function Toolbar() {
    const toolkit = useToolKit()
    
    if (toolkit.app.windowWidth < 768) {
        return < CardBlock className="editor-toolbar">
            <BackToList />
            <TextButton />
            <DecorativeButton />
            <ActionModeMenu />
        </ CardBlock>
    }

    return <CardBlock className="editor-toolbar">
        <TextButton />
        <DecorativeButton />
        <ActionModeMenu />
    </ CardBlock>
}