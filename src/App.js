import React from "react";
import {nanoid} from "nanoid";

import "./css/stylesheet.css";

import Header from "./components/Header";
import Footer from "./components/Footer";
import AppContent from "./components/Content";
import FormCard from "./components/FormCard";
import OverflowBG from "./components/OverflowBG";

import { XVertical } from "./components/XBlock";

import {getScreenDeviceType} from "./shared/";

function getList () {
  try {
    return JSON.parse(localStorage.getItem("note-list")) || []
  }
  catch (error) {
    console.log(error) 
    return []
  }
}

class App extends React.Component {
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
      cardMounted: this.state.cardMounted,
      cardLayout: this.state.cardLayout,
      cardResponse: this.state.cardResponse,
      cardTopOffset: this.state.cardTopOffset,
      cardLoaded: this.state.cardLoaded,
      cardProps: this.state.cardProps,
      
      windowSize: {
        width: this.state.windowWidth,
        height: this.state.windowHeight
      },

      notifyBeforeRemoving: this.state.notifyBeforeRemoving,

      setNotifyBeforeRemoving: (state) => {
        localStorage.setItem("notifyBeforeRemoving", state)

        this.setState({
          notifyBeforeRemoving: state
        })
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
            items: [{
              type: 1, id: nanoid(), arrayid: 0,
              text: "Новая заметка " + (this.state.notesList.length + 1)
            }],
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

        remove: (note_index) => {
          var offset = 0
          const note_list = [...this.state.notesList]

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
        
        removeAll: () => {
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

      showCard: (layout, props) => {
        var offset = 100;
        if (this.state.cardMounted) {
          this.toolkit.returnCardResponse(null);
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

      returnCardResponse: (response) => {
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
        window.scrollTo(window.scrollX, this.toolkit.cardTopOffset + 0);
        setTimeout(() => {
          this.setState({
            cardMounted: false,
          });
        }, 100);
      },

      colorSchema: this.state.colorSchema,
      setColorSchema: (schema) => {
        localStorage.setItem("colorSchema", schema);
        this.setState({
          colorSchema: schema,
        });
      },

      enableHeader: this.state.headerState,
      setHeaderState: (state) => {
        this.setState({
          headerState: state,
        });
        localStorage.setItem(
          "headerState",
          JSON.stringify(this.state.headerState)
        );
      },

      enableFooter: this.state.footerState,
      setFooterState: (state) => {
        this.setState({ footerState: state });
        localStorage.setItem(
          "footerState",
          JSON.stringify(this.state.footerState)
        );
      },
    };
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
    this.layoutClassList.push("color-schema-" + this.toolkit.colorSchema)
    this.layoutClassList.push(getScreenDeviceType())

    document.body.className = this.layoutClassList.join(" ");

    // window.addEventListener('resize', () => {
    //   this.setState({
    //     windowWidth: document.body.clientWidth,
    //     windowHeight: document.body.clientHeight
    //   })
    // })

    this.showHelloMessage();
    let globalXStyle = {padding: "8px", minHeight: "100vh", boxSizing: "border-box"}
    let globalSX = [{}, {flex: "1 1 auto", height: "100%"}]

    try {
      return (
        <>
          <XVertical xstyle={globalXStyle} sx={globalSX}>
            <Header toolkit={this.toolkit} />
            <AppContent toolkit={this.toolkit} />
            <Footer toolkit={this.toolkit} />
          </XVertical>
          <OverflowBG toolkit={this.toolkit} />
          <FormCard toolkit={this.toolkit} />
        </>
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

export default App;
