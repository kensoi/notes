import {
    useToolKit
} from "@webx-ui/toolkit"

import {
    Button, CardBlock
} from "@webx-ui/forms"

import {
    CloseIcon
} from "icons/notes/notes-list"

function AskingCard ({ index }) {
    const toolkit = useToolKit()
    
    function Remover () {
        function onClick () {
            toolkit.notes.remove(index)
            toolkit.app.card.hide()
        }

        return <Button 
            title="Удалить"
            onClick={onClick}
        />
    }
    
    function Closer () {
        function onClick () {
            toolkit.app.card.hide()
        }

        return <Button 
            title="Отмена"
            onClick={onClick}
        />
    }

    return <CardBlock>
        <h1>
            Вы точно хотите удалить эту заметку?
        </h1>
        <div className="card-button-list">
            <Closer />
            <Remover />
        </div>
    </CardBlock>
}

export default function RemoveButton({ index }) {
    const toolkit = useToolKit()

    function onClick() {
        if (toolkit.notes.askBeforeRemoving) {
            toolkit.app.card.show(<AskingCard index={index} />)
        }
        else {
            toolkit.notes.remove(index)
        }
    }

    return <Button
        theme="white"
        icon={<CloseIcon />}
        onClick={onClick} />
}
