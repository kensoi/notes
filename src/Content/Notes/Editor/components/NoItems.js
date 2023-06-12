import XBlock from "WebXUI/XBlock"

export default function NoItems() {
    return <XBlock className="empty-note">
        <p>
            Чтобы начать,<br /><b>воспользуйтесь</b><br />панелью инструментов
        </p>
    </XBlock>
}
