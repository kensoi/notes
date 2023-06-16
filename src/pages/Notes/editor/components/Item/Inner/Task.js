import { nanoid } from "nanoid";
import { CheckBox, TextField } from "@web-cross-ui/forms";

export function NoteTask({ item, index }) {
    const toolkit = useToolkit();

    const CheckButton = () => {
        const setStatus = () => {
            const newItem = { ...item };
            newItem.status = !item.status;
            toolkit.notes.items.update(index, newItem);
        };

        return <CheckBox state={item.status} setState={setStatus} />;
    };

    const TextArea = ({ title }) => {
        const setText = (text) => {
            const newItem = { ...item };
            newItem.text = text;
            toolkit.notes.items.update(index, newItem);
        };
        return <TextField key={nanoid()}
            field={item.text} setField={setText}>
            {title}
        </TextField>;
    };

    if (toolkit.notes.itemMode === 0) {
        return <div className="note-task">
            <CheckButton />
            <TextArea title="что вам нужно выполнить?" />
        </div>;
    }
    else {
        return <div className="note-task">
            <CheckButton />
            <div className="x-field blocked">
                <div className="x-field-input">
                    {item.text || "что вам нужно выполнить?"}
                </div>
            </div>
        </div>;
    }

}
