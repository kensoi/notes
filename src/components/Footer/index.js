import "./scss/stylesheet.scss";
import {FooterButton} from "./footerButton";

import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { XList, XVertical } from "../XBlock";

function Footer(props) {
  if (props.toolkit.footer.state) {
    return (
      <div className="footer">
        <div className="footer-content">
          <p>
            Заметки, версия 0.0.2 <br />
            Copyright kensoi 2023 <FavoriteBorderIcon fontSize="small" sx={{color: "red", transform: "translateY(4px)"}}/>
          </p>
          <XList sx={[{minWidth:"128px"}, {minWidth:"128px"}]}>
            <XVertical>
              <FooterButton onClick={() => {window.open("https://github.com/kensoi")}}>
                Github
              </FooterButton>
              <FooterButton onClick={() => {window.open("https://vk.com/kensoi")}}>
                ВКонтакте
              </FooterButton>
            </XVertical>
            <XVertical>
              <FooterButton onClick={() => {window.open("https://kensoi.github.io/cart-calc")}}>
                Калькулятор покупок
              </FooterButton>
              <FooterButton onClick={() => {window.open("https://kensoi.github.io/notes")}}>
                Заметки
              </FooterButton>
            </XVertical>
          </XList>
        </div>
      </div>
    );
  }
}

export default Footer;
