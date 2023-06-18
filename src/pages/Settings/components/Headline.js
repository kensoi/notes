import {
    ArrowBackIcon
} from 'icons/settings/menu/header'

import {
    Button
} from "@webx-ui/forms"

import {
    useToolKit
} from "@webx-ui/toolkit"

function BackButtonMobile() {
    const toolkit = useToolKit()

    const returnToMenu = () => {
        toolkit.pages.settings.number = 0
    }

    return <Button 
            icon={<ArrowBackIcon/>}
            theme="transparent"
            onClick={returnToMenu}
    />
}

export default function Headline({
  title
}) {
    const toolkit = useToolKit()
    
    return <div className="settings-headline">
        {
            toolkit.app.windowWidth < 768 ? <BackButtonMobile /> : <></>
        }
        { title }
    </div>
}
