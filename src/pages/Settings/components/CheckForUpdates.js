import {
    useToolKit
} from "@webx-ui/toolkit"

import {
    Button,
    CardBlock
} from "@webx-ui/forms"

import {
    BrowserUpdatedIcon
} from "icons/settings/technical"

import * as serviceWorkerRegistration from 'serviceWorkerRegistration'

function CloseButton () {
    const toolkit = useToolKit()
    
    function onClick() {
        toolkit.app.card.hide()
    }

    return <Button
        title="OK"
        onClick={onClick} />
}

function ErrorCard () {
    return <CardBlock>
        <h1>
            Ошибка выполнения задачи
        </h1>
        <p>
            Данная функция работает только при включённом офлайн-режиме (т.е. есть кеш приложения)
        </p>
        <CloseButton />
    </CardBlock>
}

export default function CheckForUpdates() {
    const toolkit = useToolKit()

    function onClick() {
        if (toolkit.app.cacheApp) {
            serviceWorkerRegistration.unregister()

            toolkit.app.goTo(toolkit.app.path)
        }
        else {
            toolkit.app.card.show(<ErrorCard />)
        }
    }

    return <Button
        className="settings-block"
        icon={<BrowserUpdatedIcon />}
        title="Обновить"
        onClick={onClick}
    />
}