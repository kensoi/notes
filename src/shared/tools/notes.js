import { ItemBehaviour } from "./items";
import {nanoid} from "nanoid";

export class NotesBehaviour {
  #state
  #dispatch
  #card
  #settings
  
  constructor(state, dispatch, card, settings) {
    this.#state = state;
    this.#dispatch = dispatch
    this.#card = card
    this.#settings = settings
    this.items = new ItemBehaviour(this)

    Object.defineProperties(this, {
      mounted: {
        get: () => this.#state.mounted,
        set: (value) => {
          if (typeof value == "boolean") {
            this.#dispatch({
              type: "set-mount",
              state: value
            })
          }
        }
      },

      loaded: {
        get: () => this.#state.loaded,
        set: (value) => {
          if (typeof value == "boolean") {
            this.#dispatch({
              type: "set-visiblity",
              state: value
            })
          }
        }
      },

      list: {
        get: () => {
          return this.#state.list.map(
            (item, index) => {
              return {...item, arrayid: index}
            }
          )
        },
        set: (value) => {
          if (typeof value == "object" && Array.isArray(value)) {
            localStorage.setItem(
              "note-list",
              JSON.stringify(value)
            );
            this.#dispatch({
              type: "update-list",
              state: value
            })
          }
        }
      },

      targetIndex: {
        get: () => this.#state.targetIndex,
        set: (value) => {
          if (typeof value == "number" || value === null) {
            this.#dispatch({
              type: "set-target-index",
              state: value
            })
          }
        }
      },

      query: {
        get: () => this.#state.query,
        set: (value) => {
          if (typeof value == "string") {
            this.#dispatch({
              type: "set-query",
              state: value
            })
          }
        }
      },

      sortMode: {
        get: () => this.#state.sortMode,
        set: (value) => {
          if (typeof value == "number") {
            this.#dispatch({
              type: "set-sort-mode",
              state: value
            })
          }
        }
      },

      itemMode: {
        get: () => this.#state.itemMode,
        set: (value) => {
          if (typeof value == "number") {
            this.#dispatch({
              type: "set-item-mode",
              state: value
            })
          }
        }
      },
    })
  }

  isListEmpty() {
    return this.list.length === 0
  }

  isTarget (index = null) {
    if (this.list.length === 0) {
      return false
    }
    if (index === null) {
      return this.targetIndex !== null
    }
    return index === this.targetIndex
  }

  getTarget () {
    if (this.isTarget()) {
      return this.list[this.targetIndex]
    }
    else {
      throw Error('no any targeted note.')
    }
  }

  getFilteredList () {
      // фильтры тоже тут работают.
      var responseList = this.list

      // здесь типа фильтр по поиску
      if (this.query !== "") {
        responseList = responseList.filter(
          note => note.items[0].text.includes(this.query)
        )
      }

      // здесь сортировки по note toolbar
      // toolkit.notes.sortMode = 0 // по дате редактирования
      // toolkit.notes.sortMode = 1 // по дате создания
      // toolkit.notes.sortMode = 2 // по имени
      switch (this.sortMode) {
        case 1:
          responseList = responseList.sort((a, b) => (a.createData > b.createData) ? -1 : 1)
          break;
        case 2:
          responseList = responseList.sort((a, b) => ('' + a.items[0].text).localeCompare(b.items[0].text))
          break;

        default: // case = 0
          // без сортировок, по дате последнего эдита
          responseList = responseList.sort((a, b) => (a.editData > b.editData) ? -1 : 1)
          break;
      }

      return responseList
  }

  isNoteEmpty (index = null) {
    if (index === null) {
      const targetNote = this.getTarget()
      return targetNote.items.length === 0
    }
    const Note = this.list[index]
    return Note.items.length === 0
  }

  updateItems (newList) { // update items in target note
    var newTargetNote = {...this.getTarget()}
    newTargetNote.editData = Math.floor(Date.now() / 1000);
    newTargetNote.items = newList

    var newNoteList = this.list
    newNoteList[this.targetIndex] = newTargetNote

    this.list = newNoteList
  }

  remove (note_index, trusted=false) {
    var offset = 0
    var newList = [...this.list]

    if (this.#settings.askBeforeRemoving) {
      if (trusted) {
        this.#card.return({
          hideReason: "notes removed with enabled warnings"
        })
      }
      else {
        this.#card.show("confirm-deletion", { note_deletion_index: note_index })
        return
      }
    }

    if (this.isTarget(note_index)) {
      this.deselect()
      offset += 200
    }

    setTimeout(
      () => {
        newList.splice(note_index, 1)

        if (this.targetIndex > note_index) {
          this.targetIndex = this.targetIndex - 1
        }

        this.list = newList
      }, offset
    )

    this.mount(offset + 200)
  }
  
  removeAll (trusted=false) {
    if (trusted) {
      this.#card.return({
        hideReason: "all notes removed via settings"
      })
    }
    else {
      this.#card.show("confirm-deletion-all")
      return
    }
    this.targetIndex = null
    this.list = []
  }

  unmount (offset) { // total 200 ms + offset
    setTimeout( // mount = 100 ms 
      () => {
        this.loaded = false
      }, offset)
    setTimeout(
      () => { // show = 100 ms
        this.mounted = false
      }, offset + 100)
  }

  mount (offset) { // total 200 ms + offset
    setTimeout(
      () => { // mount = 100 ms
        this.mounted = true
      }, offset)
    setTimeout( // show = 100 ms
      () => {
        this.loaded = true
      }, offset + 100)
  }

  create () { // create note = 200 or 400 ms
    const date = Math.floor(Date.now() / 1000);
    const note = {
      createData: date,
      editData: date,
      items: [
        {
          type: 1, id: nanoid(), arrayid: 0,
          text: ""
        },
        {
          type: 2, id: nanoid(), arrayid: 0,
          text: ""
        }
      ],
      id: nanoid()
    }

    const newNoteList = [note, ...this.list]
    var offset = 0
    
    if (this.loaded) { // unmount editor or "select note" message
      this.unmount(0)
      offset += 200
    }

    setTimeout( // load created note
    () => {
      this.list = newNoteList
      this.select(0)
    }, offset
  )
  }

  select (note_index) { // select note = 200 or 400 ms
    var offset = 0;

    if (this.loaded) {
      offset += 200;
      this.unmount(0)
    }

    setTimeout(
      () => {
        this.targetIndex = note_index
        this.mount(0)
      }, offset
    )
  }

  deselect () {
    this.unmount(0)

    setTimeout(
      () => {
        this.targetIndex = null
        this.mount(0)
      }, 200
    )
  }
}