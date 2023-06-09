/* Color Schema Menu Selector */
import React from "react";
import { nanoid } from "nanoid";

/* WEB-X-UI components */
import { XButton, XDropdown } from "../XForms";

/* Material UI icons */
import LightModeIcon from "@mui/icons-material/LightMode";
import NightlightIcon from "@mui/icons-material/Nightlight";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import TuneIcon from "@mui/icons-material/Tune";

class ColorSchemaChanger extends React.Component {
  constructor(props) {
    super(props);
    this.actualSchema = this.props.toolkit.colorSchema.state;
    this.icons = {
      light: <LightModeIcon />,
      dark: <NightlightIcon />,
      auto: <AutoAwesomeIcon />,
      custom: <TuneIcon />,
    };
    this.titles = {
      light: "Светлая",
      dark: "Тёмная",
      auto: "Системная",
      custom: "Кастомная",
    };
    this.dropdown = [
      {
        icon: this.icons["light"],
        title: "Светлая",
        action: () => {
          this.props.toolkit.colorSchema.set("light");
        },
      },
      {
        icon: this.icons["dark"],
        title: "Тёмная",
        action: () => {
          this.props.toolkit.colorSchema.set("dark");
        },
      },
      {
        icon: this.icons["auto"],
        title: "Системная",
        action: () => {
          this.props.toolkit.colorSchema.set("auto");
        },
      }
    ];
    this.actualSchemaIcon = this.icons[this.actualSchema];
    this.actualSchemaTitle = this.titles[this.actualSchema];
  }

  getSchemaButton = (item) => {
    if (item["x-dropdown"] !== undefined) {
      const dropdown = item["x-dropdown"];
      return (
        <XDropdown
          key={nanoid()}
          dropdown={this.dropdownContent(dropdown)}
          contentPosition={this.props.contentPosition || "bottom-left"}
        >
          <XButton icon={item["icon"]}>{item["title"]}</XButton>
        </XDropdown>
      );
    } else {
      return (
        <XButton key={nanoid()} icon={item["icon"]} onClick={item["action"]}>
          {item["title"]}
        </XButton>
      );
    }
  };

  dropdownContent = (dropdown) => {
    return <> {dropdown.map(this.getSchemaButton)} </>;
  };

  render() {
    return (
      <XDropdown
        dropdown={this.dropdownContent(this.dropdown)}
        contentPosition={this.props.contentPosition || "bottom-right"}
        listDirection="row"
      >
        <XButton icon={this.actualSchemaIcon} title={this.actualSchemaTitle} isDropdown={true} />
      </XDropdown>
    );
  }
}

export default ColorSchemaChanger;
