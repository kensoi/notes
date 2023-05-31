import React from "react";

import { FormLabel, XList, XVertical } from "../../../../XBlock";
import { XField, XButton } from "../../../../XForms";
import PersonIcon from "@mui/icons-material/Person";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";

import AddIcon from '@mui/icons-material/Add';
import LoginIcon from '@mui/icons-material/Login';

export default class RegisterForm extends React.Component {
  state = {
    name: "",
    username: "",
    email: "",
  };

  setName = (value) => {
    this.setState({
      name: value,
    });
  };

  setUsername = (value) => {
    this.setState({
      username: value,
    });
  };

  setEmail = (value) => {
    this.setState({
      email: value,
    });
  };

  sendResponse = () => {
    this.props.toolkit.returnCardResponse({
      name: this.state.name,
      username: this.state.username,
      email: this.state.email,
    });
  };

  clearForm = () => {
    this.props.toolkit.showCard("register");
  }

  goToLogin = () => {
    this.props.toolkit.showCard("login");
  };

  xliststyle = {justifyContent:"space-between", width: "100%"}
  sx = [{}, {width: "100%", maxWidth: "256px"}]
  render() {
    return (
      <>
        <h1>Создать аккаунт -- просто!</h1>
        <XVertical>
          <XList xstyle={this.xliststyle} sx={this.sx}>
            <FormLabel>Имя пользователя:</FormLabel>
            <XField
                icon={<PersonIcon />} cleanable={true}
                field={this.state.name}
                setField={this.setName}
                noWrap={true}
            >
              Имя пользователя
            </XField>
          </XList>
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
            <FormLabel>E-mail:</FormLabel>
            <XField
              icon={<EmailOutlinedIcon />} cleanable={true}
              field={this.state.email}
              setField={this.setEmail}
              noWrap={true}
            >
              E-mail
            </XField>
          </XList>
          <XList xstyle={this.xliststyle}>
            <XButton onClick={this.sendResponse} icon={<AddIcon/>} hideEmptyPaddings={true}>
              Создать
            </XButton>
            <XButton onClick={this.goToLogin} icon={<LoginIcon/>} hideEmptyPaddings={true}>
              Войти в аккаунт
            </XButton>
          </XList>
        </XVertical>
      </>
    );
  }
}
