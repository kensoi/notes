import {
    CardBlock
} from "@webx-ui/forms"

import Headline from "../components/Headline"
import Theme from "../components/Theme"
import CacheApp from "../components/CacheApp"
import CheckForUpdates from "../components/CheckForUpdates"

export default function Technical () {
    return <div className="settings-wrapper">
        <Headline title="Дополнительное" />
        <CardBlock className="settings-page options">
            <div className="options-grid-list settings-block">
                <div className="options-grid-item">
                    Тема оформления
                </div>
                <div className="options-grid-item">
                    <Theme />
                </div>
                <div className="options-grid-item">
                    Offline режим
                </div>
                <div className="options-grid-item">
                    <CacheApp />
                </div>
                <div className="options-grid-item">
                    Обновить offline версию
                </div>
                <div className="options-grid-item">
                    <CheckForUpdates />
                </div>
            </div>
        </CardBlock>
    </div>
}