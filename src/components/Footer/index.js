import "./scss/stylesheet.scss";
import {FooterButton} from "./footerButton";

import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

function Footer(props) {
  if (props.toolkit.enableFooter) {
    return (
      <div className="footer">
        <div className="footer-content">
          <p>
            WebCrossUI beta 2020-2023 <br />
            Copyright kensoi 2023 <FavoriteBorderIcon fontSize="small" sx={{color: "red", transform: "translateY(4px)"}}/>
          </p>
          <FooterButton onClick={() => {window.open("https://github.com/kensoi")}}>
            Разработчик
          </FooterButton>
          <FooterButton onClick={() => {window.open("https://github.com/kensoi/cart-calc")}}>
            Репозиторий
          </FooterButton>
        </div>
      </div>
    );
  }
}

export default Footer;
