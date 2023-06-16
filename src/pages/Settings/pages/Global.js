import {
    useToolKit
} from "@web-cross-ui/toolkit"

import {
    CardBlock,
    Tumbler,
} from "@web-cross-ui/forms"

import ColorSchemaChanger from "pages/Settings/components/ColorSchemaChanger"
import Headline from "pages/Settings/components/Headline"

export default function Global () {
    const toolkit = useToolKit()

    const AskBeforeRemoving = () => {
        const setState = (state) => {
            toolkit.notes.askBeforeRemoving = state
        }

        return <Tumbler state={toolkit.notes.askBeforeRemoving}
            setState={setState}
        />
    }

    return <div className="settings-wrapper">
        <Headline title="Основные" />
        <CardBlock className="settings-page options">
            <div className="options-grid-list settings-block">
                <div className="options-grid-item">
                    Цветовая схема
                </div>
                <div className="options-grid-item">
                    <ColorSchemaChanger align="right" />
                </div>
                <div className="options-grid-item">
                    Спрашивать перед удалением
                </div>
                <div className="options-grid-item">
                    <AskBeforeRemoving />
                </div>
            </div>
      </CardBlock>
    </div>
}