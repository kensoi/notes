import XBlock, {FormLabel, XList, XVertical} from "../../XBlock";
import { XButton } from "../../XForms";
import PersonIcon from '@mui/icons-material/Person';
import LoginIcon from "@mui/icons-material/Login";

export default function Index(props) {
    let Panels = () => {
      return <>
        <h3>Карточки с авторизацией</h3>
        <XBlock>
          <XList>
            <XButton icon={<PersonIcon />} title={"Создать аккаунт"} onClick={() => {
              props.toolkit.showCard("register")
            }}/>
            <XButton icon={<LoginIcon />} title={"Войти"} onClick={() => {
              props.toolkit.showCard("login")
            }}/>
          </XList>
        </XBlock>
        <h3>Тестовые компоненты</h3>
        <XBlock>
            <XList>
              <XButton onClick={() => props.toolkit.showCard("slider")}>
                XSlider & XField
              </XButton>
              <XButton onClick={() => props.toolkit.showCard("tumbler")}>
                XTumbler
              </XButton>
            </XList>
          </XBlock>
      </>
    }

    let CardResponseBlock = () => {
      if (props.toolkit.cardResponse.response) {
        return (
          <>
            <h3>Обратная связь карточки</h3>
            <XBlock>
              <XList>
                <FormLabel>
                  <b>
                    Префикс карточки:
                  </b>
                </FormLabel>
                {props.toolkit.cardResponse.layout}
              </XList>
              <XVertical>
                <FormLabel>
                  <b>
                    Ответ:
                  </b>
                </FormLabel>
                {JSON.stringify(props.toolkit.cardResponse.response)}
              </XVertical>
            </XBlock>
          </>
        );
      }
    }

    let PCTemplate = () => {
      return <XList sx={[{flex: "1 1 auto", maxWidth: "640px"}, {flex: "1 1 auto", maxWidth: "376px"}]}>
        <Panels />
        <CardResponseBlock/>
      </XList>
    }

    let MobileTemplate = () => {
      return <XVertical>
        <Panels />
        <CardResponseBlock/>
      </XVertical>
    }
    let Resolver = () => {
      if (document.body.clientWidth >= 1024) {
        return PCTemplate()
      }
      return MobileTemplate()
    }
    return (
      <>
        <XVertical 
            xstyle={{maxWidth: "1024px", margin: "auto"}}>
          <XBlock>
            <h1>Главная</h1>
          </XBlock>
          <Resolver />
        </XVertical>
      </>
    );
  }