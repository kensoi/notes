import React from "react";
import {nanoid} from "nanoid";

import "./css/stylesheet.css";
import "./scss/notes.scss";

import AppContent from "./components/Content";
import FormCard from "./components/FormCard";
import OverflowBG from "./components/OverflowBG";

import {getScreenDeviceType} from "./shared/";
import { Toolkit } from "./contexts";

function getList () {
  try {
    return JSON.parse(localStorage.getItem("note-list")) || []
  }
  catch (error) {
    console.log(error) 
    return []
  }
}

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      headerState: true,
      footerState: true,

      colorSchema: localStorage.getItem("colorSchema") || "auto",
      settingsPage: 0,
      settingsMounted: true,
      settingsLoaded: true,
      
      notesList: getList(),
      searchQuery: "",

      target_note_index: null,
      noteMounted: true,
      noteLoaded: true,

      notifyBeforeRemoving: JSON.parse(localStorage.getItem("notifyBeforeRemoving")) || false,

      windowWidth: document.body.clientWidth,
      windowHeight: document.body.windowHeight,

      cardProps: {},

      cardTopOffset: 0,
      cardMounted: false,
      cardLoaded: true,
      cardLayout: "settings",
      cardResponse: JSON.parse(localStorage.getItem("latestResponse")) || {
        layout: "settings",
        response: null,
      },
    };
  }

  createToolkit() {
    this.toolkit = {
      card: {
        mounted: this.state.cardMounted,
        props: this.state.cardProps,
        loaded: this.state.cardLoaded,
        layout: this.state.cardLayout,
        response: this.state.cardResponse,
        topOffset: this.state.cardTopOffset,

        show: (layout, props) => {
          var offset = 100;
          if (this.state.cardMounted) {
            this.toolkit.card.return(null);
            offset += 200;
          }
  
          setTimeout(() => {
            this.setState({
              cardProps: props,
              cardLayout: layout,
              cardTopOffset: window.scrollY,
              cardMounted: true,
            });
          }, offset);
  
          setTimeout(() => {
            this.setState({
              cardLoaded: true,
            });
          }, 100 + offset);
        },

        return: (response) => {
          this.setState({
            cardResponse: {
              layout: this.state.cardLayout + "",
              response: response,
            },
            cardLoaded: false,
          });
          localStorage.setItem(
            "latestResponse",
            JSON.stringify({
              layout: this.state.cardLayout + "",
              response: response,
            })
          );
          window.scrollTo(window.scrollX, this.toolkit.card.topOffset + 0);
          setTimeout(() => {
            this.setState({
              cardMounted: false,
            });
          }, 100);
        },
      },
      
      windowSize: {
        width: this.state.windowWidth,
        height: this.state.windowHeight
      },

      settings: {
        mounted: this.state.settingsMounted,
        loaded: this.state.settingsLoaded,
        page: this.state.settingsPage,

        setPage: (page) => {
          var offset = 100;
          if (page === this.state.settingsPage) {
            return
          }
          if (this.state.settingsMounted) {
            offset += 100;
            this.setState({
              settingsLoaded: false,
            })
            setTimeout(()=>{
              this.setState({
                settingsMounted: false,
              })
            }, 100)
          }

          setTimeout(()=>{
            this.setState({
              settingsPage: page,
              settingsMounted: true,
            })
          }, offset)

          setTimeout(()=>{
            this.setState({
              settingsLoaded: true,
            })
          }, 100 + offset)
        }
      },

      notes: {
        mounted: this.state.noteMounted,
        loaded: this.state.noteLoaded,

        list: this.state.notesList,
        target_index: this.state.target_note_index,

        isTarget: () => {
          return this.state.target_note_index !== null
        },

        getList: () => {
          // фильтры тоже тут работают.
          var responseList = this.state.notesList

          // здесь типа фильтр по поиску
          if (this.toolkit.notes.search.query !== "") {
            responseList = responseList.filter(
              note => note.items[0].text.includes(this.toolkit.searchQuery)
            )
          }

          // здесь сортировки по note toolbar
          // responseList = responseList.sort()

          return responseList
        },

        isListEmpty: () => {
          return this.state.notesList.length === 0
        },

        getTarget: () => {
          if (this.toolkit.notes.isTarget()) {
            return this.state.notesList[this.state.target_note_index]
          }
        },
        
        isNoteEmpty: () => {
          const targetNote = this.toolkit.notes.getTarget()

          return targetNote.items.lenght === 0
        },

        deleteAsk: {
          state: this.state.notifyBeforeRemoving,
          setState: (state) => {
            localStorage.setItem("notifyBeforeRemoving", state)
    
            this.setState({
              notifyBeforeRemoving: state
            })
          },
        },

        items: {
          add: (type) => {
            const target_note = this.toolkit.notes.list[
              this.toolkit.notes.target_index
            ]
            var newNote = {...target_note}
            var item = {}

            switch (type) {
              case 2: // paragraph
                item = {
                  id: nanoid(),
                  type: 2,
                  text: "",
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
            this.toolkit.notes.update(this.toolkit.notes.target_index, newNote)

          },

          remove: (item_index) => {
            const target_note = this.toolkit.notes.list[
              this.toolkit.notes.target_index
            ]
            if (target_note.items.lenght === 1 && item_index === 0) {
              this.toolkit.notes.remove(this.toolkit.notes.target_index)
            }
            else {
              var newNote = {...target_note}
            
              newNote.items.splice(item_index, 1)

              this.toolkit.notes.update(this.toolkit.notes.target_index, newNote)
            }
          },

          update: (item_index, newItem) => {
            const target_note = this.toolkit.notes.list[
              this.toolkit.notes.target_index
            ]
            var newNote = {...target_note}
            
            newNote.items[item_index] = newItem

            this.toolkit.notes.update(this.toolkit.notes.target_index, newNote)
          },
        },
        
        search: {
          query: this.state.searchQuery,
          setQuery: query => {
            this.setState({
              searchQuery: query
            })
          },
        },

        unmount: (offset) => { // total 200 ms + offset
          setTimeout( // mount = 100 ms
            () => {
              this.setState(
                {
                  noteLoaded: false
                }
              )
            }, offset)
          setTimeout(
            () => { // show = 100 ms
              this.setState(
                {
                  noteMounted: false
                }
              )
            }, offset + 100)
        },

        mount: (offset) => { // total 200 ms + offset
          setTimeout(
            () => { // mount = 100 ms
              this.setState(
                {
                  noteMounted: true
                }
              )
            }, offset)
          setTimeout( // show = 100 ms
            () => {
              this.setState(
                {
                  noteLoaded: true
                }
              )
            }, offset + 100)
        },

        create: () => { // create note = 200 or 400 ms
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
  
          const newNoteList = [note, ...this.state.notesList]
          var offset = 0
          

          if (this.toolkit.notes.loaded) { // unmount editor or "select note" message
            this.toolkit.notes.unmount(0)
            offset += 200
          }

          setTimeout( // load created note
            () => {
              this.setState({
                notesList: newNoteList,
              })

              localStorage.setItem(
                "note-list",
                JSON.stringify(newNoteList)
              );
    
              this.toolkit.notes.select(0)
            }, offset
          )
        },

        select: (note_index) => { // select note = 200 or 400 ms
          if (this.state.target_note_index) {
            if (note_index === this.state.target_note_index) {
              return
            }
          }

          var offset = 0;

          if (this.toolkit.notes.loaded) {
            offset += 200;
            this.toolkit.notes.unmount(0)
          }

          setTimeout(
            () => {
              this.setState({
                target_note_index: note_index,
              })
              this.toolkit.notes.mount(0)
            }, offset
          )
        },

        deselect: () => {
          this.toolkit.notes.unmount(0)

          setTimeout(
            () => {
              this.setState({
                target_note_index: null
              })
              this.toolkit.notes.mount(0)
            }, 200
          )
        },

        update: (note_index, newNote) => {
          newNote.editData = Math.floor(Date.now() / 1000);

          const note_list = [...this.state.notesList]
          note_list[note_index] = newNote

          this.setState({
            notesList: note_list
          })
          localStorage.setItem(
            "note-list",
            JSON.stringify(note_list)
          );
        },

        remove: (note_index, trusted=false) => {
          var offset = 0
          const note_list = [...this.state.notesList]

          if (this.state.notifyBeforeRemoving) {
            if (trusted) {
              this.toolkit.card.return({
                hideReason: "notes removed with enabled warnings"
              })
            }
            else {
              this.toolkit.card.show("confirm-deletion", { note_deletion_index: note_index }, "notify")
              return
            }
          }

          if (note_index < note_list.length) {
            if (this.toolkit.notes.target_index === note_index) {
              this.toolkit.notes.unmount(0)
              offset += 200
            }

            setTimeout(
              () => {
                if (this.state.target_note_index === note_index) {
                  this.setState({
                    target_note_index: null
                  })
                }

                note_list.splice(note_index, 1)

                if (this.state.target_note_index > note_index) {
                  this.setState({
                    target_note_index: this.state.target_note_index - 1
                  })
                }

                this.setState({
                  notesList: note_list
                })

                localStorage.setItem(
                  "note-list",
                  JSON.stringify(note_list)
                )
              }, offset
            )

            this.toolkit.notes.mount(offset + 200)
          }
        },
        
        removeAll: (trusted=false) => {
          if (trusted) {
            this.toolkit.card.return({
              hideReason: "all notes removed via settings"
            })
          }
          else {
            this.toolkit.card.show("confirm-deletion-all")
            return
          }
          this.setState({
            target_note_index: null,
            notesList: []
          })
          localStorage.setItem(
            "note-list",
            "[]"
          );
        }
      },

      colorSchema: {
        state: this.state.colorSchema,
        set: (schema) => {
          localStorage.setItem("colorSchema", schema);
          this.setState({
            colorSchema: schema,
          });
        }
      },

      header: {
        state: this.state.headerState,
        setState: (state) => {
          this.setState({
            headerState: state,
          });
          localStorage.setItem(
            "headerState",
            JSON.stringify(this.state.headerState)
          );
        },
      },

      footer: {
        state: this.state.footerState,
        setState: (state) => {
          this.setState({ footerState: state });
          localStorage.setItem(
            "footerState",
            JSON.stringify(this.state.footerState)
          );
        },
      }
    }
  }

  showHelloMessage = () => {
    let helloMessage =
      JSON.parse(localStorage.getItem("HelloMessage")) || false;

    if (!helloMessage) {
      localStorage.setItem("HelloMessage", JSON.stringify(true));
      this.toolkit.formCard.showLayout("hello");
    }
  }

  render() {
    this.createToolkit();

    this.layoutClassList = ["webx"]
    this.layoutClassList.push("color-schema-" + this.toolkit.colorSchema.state)
    this.layoutClassList.push(getScreenDeviceType())

    document.body.className = this.layoutClassList.join(" ");


    this.showHelloMessage();

    try {
      return (
        <Toolkit.Provider value={this.toolkit}>
          <AppContent/>
          <OverflowBG/>
          <FormCard/>
        </Toolkit.Provider>
      );
    } catch (error) {
      return (
        <>
          <h1>Error</h1>
          <p>{error}</p>
        </>
      );
    }
  }
}
