import {
    nanoid
} from "nanoid"

export class Partition {
    #toolkit

    constructor () {
        Object.defineProperties(this, {
            targetNote: {
                get: () => {
                    return {...this.#toolkit.notes.getTarget()}
                },
                set: (value) => {
                    var newTargetNote = {...value}
                    var newList = [...this.#toolkit.notes.list]
                
                    newTargetNote.editData = Math.floor(Date.now() / 1000);
                
                    newList[this.#toolkit.notes.targetIndex] = newTargetNote
                    this.#toolkit.notes.list = newList
                }
            },
            targetNoteList: {
                get: () => {
                    if (this.targetNote) {
                        return Array.from(this.targetNote.items)
                    }
                    return []
                },
                set: (value) => {
                    this.#toolkit.notes.updateItems(value)
                }
            }
        })
    }

    setToolKit(toolkit) {
        this.#toolkit = toolkit
    }

    add (type, style=null) {
        var newNote = {...this.targetNote}
        var item = {}

        switch (type) {
            case 2: // paragraph
                item = {
                    id: nanoid(),
                    type: 2,
                    text: "",
                    style: style
                }
                break

            case 3: //citata
                item = {
                    id: nanoid(),
                    type: 3,
                    text: "",
                    author: "",
                }
                break

            case 4: // task
                item = {
                    id: nanoid(),
                    type: 4,
                    text: "",
                    done: false,  
                }
                break

            case 5:
                item = {
                    id: nanoid(),
                    type: 5,
                    text: "[Троеточие]",
                }
                break

            case 6:
                item = {
                    id: nanoid(),
                    type: 6,
                    text: "[Полоса]",
                }
                break
        
            default: // case 1: // title 
                item = {
                    id: nanoid(),
                    type: 1,
                    text: ""
                }
                break;
        }

        newNote.items.push(item)
        this.targetNote = newNote
    }

    remove (item_index) {
        const targetNote = this.targetNote

        if (targetNote.items.lenght === 1 && item_index === 0) {
            this.#toolkit.notes.remove(this.#toolkit.notes.targetIndex)
        }
        else {
            targetNote.items.splice(item_index, 1)
            this.targetNote = targetNote
        }
    }

    update (item_index, newItem) {
        const targetNoteList = [...this.targetNoteList]
        targetNoteList[item_index] = newItem

        this.targetNoteList = targetNoteList
    }

    updateAll (newList) {
        this.targetNoteList = newList
    }

    moveUp (item_index) {
        const targetNote = this.targetNote

        var items = this.targetNoteList
        const firstItem = targetNote.items[item_index]
        const secondItem = targetNote.items[item_index - 1]
        items[item_index - 1] = {...firstItem}
        items[item_index] = {...secondItem}

        this.targetNoteList = items
    }

    moveDown (item_index) {
        const targetNote = this.targetNote

        var items = this.targetNoteList
        const firstItem = targetNote.items[item_index]
        const secondItem = targetNote.items[item_index + 1]
        items[item_index + 1] = {...firstItem}
        items[item_index] = {...secondItem}

        this.targetNoteList = items
    }
}