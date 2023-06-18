
import {
    CardBlock} from "@webx-ui/forms"

import Headline from "../components/Headline"
import LinkButton from "../components/LinkButton"

export default function Author () {
    return <div className="settings-wrapper">
        <Headline title="О разработчике" />
        <CardBlock className="settings-page">
            <div className="options-grid-list settings-block">
                <div className="options-grid-item">
                    ВКонтакте:
                </div>
                <div className="options-grid-item">
                    <LinkButton link="https://vk.com/kensoi">
                        @kensoi  
                    </LinkButton>
                </div>
                <div className="options-grid-item">
                    Github:
                </div>
                <div className="options-grid-item">
                    <LinkButton href="https://github.com/kensoi">
                        @kensoi  
                    </LinkButton>
                </div>
            </div>
        </CardBlock>
    </div>
}