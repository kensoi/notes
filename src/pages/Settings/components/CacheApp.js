import {
    useToolKit
} from "@webx-ui/toolkit"

import {
    Tumbler
} from "@webx-ui/forms"

import * as serviceWorkerRegistration from 'serviceWorkerRegistration'

export default function CacheApp() {
    const toolkit = useToolKit()

    function setState(state) {
        if (!state) {
            serviceWorkerRegistration.unregister()
        }
        else {
            serviceWorkerRegistration.register()
        }

        toolkit.app.cacheApp = state
    }

    return <Tumbler
        state={toolkit.app.cacheApp}
        setState={setState}
    />
}