import React from "react";

import { XVertical, FormLabel, XList } from "../../../../XBlock";
import { XField, XButton } from "../../../../XForms";
import ShortTextIcon from "@mui/icons-material/ShortText";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";

import AddIcon from '@mui/icons-material/Add';
import LoginIcon from '@mui/icons-material/Login';

export default class LoginForm extends React.Component {
  state = {
    username: "",
    password: "",
  };

  setUsername = (value) => {
    this.setState({
      username: value,
    });
  };

  setPassword = (value) => {
    this.setState({
      password: value,
    });
  };

  sendResponse = () => {
    this.props.toolkit.returnCardResponse({
      username: this.state.username,
      password: this.state.password,
    });
  };

  goToRegister = () => {
    this.props.toolkit.showCard("register");
  };

  clearForm = () => {
    this.props.toolkit.showCard("login");
  }

  xliststyle = {justifyContent:"space-between", width: "100%"}
  sx = [{}, {width: "100%", maxWidth: "256px"}]

  render() {
    return (
      <>
        <h1>Войти</h1>
        <XVertical>
          <XList xstyle={this.xliststyle} sx={this.sx}>
            <FormLabel>Никнейм:</FormLabel>
            <XField
                icon={<AlternateEmailIcon />} cleanable={true}
                field={this.state.username}
                setField={this.setUsername}
                noWrap={true}
            >
              Никнейм
            </XField>
          </XList>
          <XList xstyle={this.xliststyle} sx={this.sx}>
            <FormLabel>Пароль:</FormLabel>
            <XField
                icon={<ShortTextIcon />} cleanable={true}
                field={this.state.password}
                setField={this.setPassword}
            >
              Пароль
            </XField>
          </XList>
          <XList xstyle={this.xliststyle}>
            <XButton onClick={this.sendResponse} icon={<LoginIcon/>} hideEmptyPaddings={true}>
              Войти
            </XButton>
            <XButton onClick={this.goToLogin} icon={<AddIcon/>} hideEmptyPaddings={true}>
              Зарегистрироваться
            </XButton>
          </XList>
        </XVertical>
      </>
    )
  }
}
