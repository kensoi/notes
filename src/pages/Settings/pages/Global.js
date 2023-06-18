import {
    useToolKit
} from "@webx-ui/toolkit"

import {
    CardBlock,
    Tumbler,
} from "@webx-ui/forms"

import Headline from "../components/Headline"

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
                    Спрашивать перед удалением
                </div>
                <div className="options-grid-item">
                    <AskBeforeRemoving />
                </div>
            </div>
      </CardBlock>
    </div>
}