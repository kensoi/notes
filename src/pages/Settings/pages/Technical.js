import {
    CardBlock,
    Button,
    Tumbler
} from "@web-cross-ui/forms"

import {
    useToolKit
} from "@web-cross-ui/toolkit"

import {
    BrowserUpdatedIcon
} from "icons/settings/technical"

import Headline from "pages/Settings/components/Headline"
import * as serviceWorkerRegistration from 'serviceWorkerRegistration'

function ErrorCard () {
    const toolkit = useToolKit()

    const OK = () => {
        const action = () => {
            toolkit.card.return()
        }

        return <Button 
            title="OK"
            onClick={action}
        />
    }

    return <CardBlock className="cart-calc-message">
        <h1>
            Ошибка выполнения задачи
        </h1>
        <p>
            Данная функция работает только при включённом офлайн-режиме (т.е. есть кеш приложения)
        </p>
        <OK />
    </CardBlock>
}

export default function Technical () {
    const toolkit = useToolKit()

    const CheckForUpdatesButton = () => {
        const CheckForUpdates = () => {
            if (toolkit.settings.cacheApp) {
                serviceWorkerRegistration.unregister()
                window.location.href = process.env.PUBLIC_URL
            }
            else {
                toolkit.card.show(<ErrorCard />)
            }
        }

        return <Button 
                className="settings-block"
                icon={<BrowserUpdatedIcon/>}
                title="Обновить offline версию" 
                onClick={CheckForUpdates}
        />
    }

    const CacheApp = () => {
        const setState = (state) => {
            if (!state) {
                serviceWorkerRegistration.unregister()
            }
            else {
                serviceWorkerRegistration.register()
            }
            
            toolkit.settings.cacheApp = state
        }

        return <Tumbler
                state={toolkit.settings.cacheApp}
                setState={setState}
        />
    }

    return <div className="settings-wrapper">
        <Headline title="Дополнительное" />
        <CardBlock className="settings-page options">
            <div className="options-grid-list settings-block">
                <div className="options-grid-item">
                    Offline режим
                </div>
                <div className="options-grid-item">
                    <CacheApp />
                </div>
                <div className="options-grid-item">
                    <CheckForUpdatesButton />
                </div>
            </div>
        </CardBlock>
    </div>
}