import {
    Button
} from '@webx-ui/forms'

export default function ChildrenButton({ icon, title, onClick}) {
    return <Button
        theme="transparent"
        icon={icon}
        title={title}
        onClick={onClick}
    />
}
