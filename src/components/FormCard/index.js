import React from "react";
import "./scss/form-card.scss";
import CloseIcon from "@mui/icons-material/Close";
import Layout from "./components/Layout";

export default class FormCard extends React.Component {
  closeButton = () => {
    return (
      <div className="form-card-close-wrapper">
        <div
          className="form-card-close-button"
          onClick={() => {
            this.props.toolkit.returnCardResponse(null);
          }}
        >
          <CloseIcon />
        </div>
      </div>
    );
  };

  render() {
    const ClassList = ["form-card-wrapper"];
    const CardClassList = ["form-card"];
    const offsetStyle = {
      top: this.props.toolkit.cardTopOffset + "px",
    };
    ClassList.push(this.props.toolkit.cardLoaded ? "visible" : "invisible");
    if (this.props.toolkit.cardBG) {
      CardClassList.push("with-bg")
    }
    if (this.props.toolkit.cardMounted) {
      return (
        <div className={ClassList.join(" ")} style={offsetStyle}>
          <div className={CardClassList.join(" ")}>
            {this.closeButton()}
            <div className="form-card-layout">
              <Layout toolkit={this.props.toolkit} />
            </div>
          </div>
        </div>
      );
    } else {
      return <></>;
    }
  }
}
