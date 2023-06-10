/* Color Schema Menu Selector */
import { useContext } from "react";
import { nanoid } from "nanoid";

/* WEB-X-UI components */
import { XButton, XDropdown } from "../XForms";
import { Toolkit } from "../../contexts";

/* Material UI icons */
import LightModeIcon from "@mui/icons-material/LightMode";
import NightlightIcon from "@mui/icons-material/Nightlight";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import TuneIcon from "@mui/icons-material/Tune";

export default function ColorSchemaChanger (props) {
  const toolkit = useContext(Toolkit);

  const icons = {
    light: <LightModeIcon />,
    dark: <NightlightIcon />,
    auto: <AutoAwesomeIcon />,
    custom: <TuneIcon />,
  }

  const titles = {
    light: "Светлая",
    dark: "Тёмная",
    auto: "Системная",
    custom: "Кастомная",
  }

  const dropdown = [
    {
      icon: icons["light"],
      title: "Светлая",
      action: () => {
        toolkit.colorSchema.set("light")
      },
    },
    {
      icon: icons["dark"],
      title: "Тёмная",
      action: () => {
        toolkit.colorSchema.set("dark")
      },
    },
    {
      icon: icons["auto"],
      title: "Системная",
      action: () => {
        toolkit.colorSchema.set("auto")
      },
    }
  ]

  const getSchemaButton = (item) => {
    if (item["x-dropdown"] !== undefined) {
      const dropdown = item["x-dropdown"]

      return (
        <XDropdown
          key={nanoid()}
          dropdown={dropdownContent(dropdown)}
          contentPosition={props.contentPosition || "bottom-left"}
        >
          <XButton icon={item["icon"]}>{item["title"]}</XButton>
        </XDropdown>
      )
    } else {
      return (
        <XButton key={nanoid()} icon={item["icon"]} onClick={item["action"]}>
          {item["title"]}
        </XButton>
      )
    }
  }

  const dropdownContent = (dropdown) => {
    return <> {dropdown.map(getSchemaButton)} </>
  }

  const actualSchema = toolkit.colorSchema.state;
  const actualSchemaIcon = icons[actualSchema];
  const actualSchemaTitle = titles[actualSchema];

  return <XDropdown
      dropdown={dropdownContent(dropdown)}
      contentPosition={props.contentPosition || "bottom-right"}
      listDirection="row"
    >
      <XButton icon={actualSchemaIcon} title={actualSchemaTitle} isDropdown={true} />
    </XDropdown>
}
