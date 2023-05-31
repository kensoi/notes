import React from "react";

import "./css/stylesheet.css";

import Footer from "./components/Footer";
import Header from "./components/Header";
import AppContent from "./components/Content";
import FormCard from "./components/FormCard";
import OverflowBG from "./components/OverflowBG";
import { XVertical } from "./components/XBlock";

import {getScreenDeviceType} from "./shared/";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      headerState: JSON.parse(localStorage.getItem("headerState")) || true,
      footerState: JSON.parse(localStorage.getItem("footerState")) || true,
      colorSchema: localStorage.getItem("colorSchema") || "auto",
      cardBG: true,

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
      cardBG: this.state.cardBG,

      setCardBG: (state) => {
        this.setState({
          cardBG: state
        })
      },

      showCard: (layout) => {
        var offset = 100;
        if (this.state.cardMounted) {
          this.toolkit.returnCardResponse(null);
          offset += 100;
        }

        setTimeout(() => {
          this.setState({
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


    this.showHelloMessage();

    try {
      return (
        <>
          <XVertical xstyle={{padding: "8px"}}>
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
