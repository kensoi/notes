import React, { useContext } from "react";
import XBlock from "../../../../XBlock"
import Toolbar from "./components/Toolbar";
import NoItems from "./components/NoItems";
import Item from "./components/Item";
import { Toolkit } from "../../../../../contexts";

import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

let portal = document.createElement("div");
document.body.appendChild(portal);

export function Editor() {
    const toolkit = useContext(Toolkit);
    if (!toolkit.notes.isTarget()) {
        return <></>
    }
    const targetNote = toolkit.notes.getTarget()

    function onDragEnd (result) {
        const newItems = Array.from(targetNote.items)
        const [reorderedItem] = newItems.splice(result.source.index, 1);
        newItems.splice(result.destination.index, 0, reorderedItem)

        toolkit.notes.items.updateAll(newItems)
    }
    
    const NoteContent = () => {
        if (targetNote.items.length === 0) {
            return <NoItems />
        }
        else if (toolkit.settings.windowWidth < 768) {
            return targetNote.items.map(
                (item, index) => <Item key={item.id} item={item} index={index} />
            )
        }
        else {
            const ProvidedDraggable = ({item, index}) => {
                return (provided, snapshot) => {
                    const result = <div
                            {...provided.draggableProps} {...provided.dragHandleProps} 
                            ref={provided.innerRef}>
                        <Item key={item.id} item={item} index={index} />
                    </div>

                    if (snapshot.isDragging) {
                        // return createPortal(result, portal);
    
                        provided.draggableProps.style.left = provided.draggableProps.style.offsetLeft;
                        provided.draggableProps.style.top = provided.draggableProps.style.offsetTop;
                    }

                    return result
                }
            }

            const ProvidedDroppable = provided => <>
                <div ref={provided.innerRef}
                        {...provided.droppableProps}>
                    {
                        targetNote.items.map(
                            (item, index) => <Draggable key={item.id} draggableId={item.id} index={index}>
                                {ProvidedDraggable({item, index})}
                            </Draggable>
                        )
                    }
                </div>
                {provided.placeholder}
            </>

            return <DragDropContext onDragEnd={onDragEnd}>
                <Droppable droppableId="noteItemsList">
                    {ProvidedDroppable}
                </Droppable>
            </DragDropContext>
        }
    }   

    return <>
        <Toolbar />
        <XBlock className="editor-x-block">
            <NoteContent />
        </XBlock>
    </>
}
