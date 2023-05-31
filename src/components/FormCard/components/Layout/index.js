import GreetingsMessage from "./components/GreetingsMessage";
import HelloWorld from "./components/HelloWorld";
import SettingsMessage from "./components/SettingsMessage";
import RegisterForm from "./components/RegisterForm";
import LoginForm from "./components/LoginForm";
import SliderTest from "./components/SliderTest";
import TumbletTest from "./components/TumbletTest";
import NotFoundMessage from "./components/NotFoundMessage";

import React from "react";
import { nanoid } from "nanoid";

export default class Layout extends React.Component {
  layoutList = [
    {
      name: "hello",
      layout: <GreetingsMessage key={nanoid()} toolkit={this.props.toolkit} />,
    },
    {
      name: "hello-world",
      layout: <HelloWorld key={nanoid()} toolkit={this.props.toolkit} />,
    },
    {
      name: "settings",
      layout: <SettingsMessage key={nanoid()} toolkit={this.props.toolkit} />,
    },
    {
      name: "register",
      layout: <RegisterForm key={nanoid()} toolkit={this.props.toolkit} />,
    },
    {
      name: "tumbler",
      layout: <TumbletTest key={nanoid()} toolkit={this.props.toolkit} />,
    },
    {
      name: "login",
      layout: <LoginForm key={nanoid()} toolkit={this.props.toolkit} />,
    },
    {
      name: "slider",
      layout: <SliderTest key={nanoid()} toolkit={this.props.toolkit} />,
    },
  ];

  getLayout = (layout) => {
    const loadedLayout = layout;
    if (loadedLayout.name === this.props.toolkit.cardLayout) {
      return loadedLayout.layout;
    }
  };

  render() {
    return (
      <>
        {this.layoutList.map(this.getLayout) || (
          <NotFoundMessage toolkit={this.props.toolkit} />
        )}
      </>
    );
  }
}
