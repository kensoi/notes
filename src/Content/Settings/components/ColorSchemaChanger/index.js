/* Color Schema Menu Selector */
import { useContext } from "react";
import { nanoid } from "nanoid";

/* WEB-X-UI components */
import { XButton, XDropdown } from "WebXUI/XForms";
import { ToolKitContext } from "shared/tools"

/* Material UI icons */
import LightModeIcon from "@mui/icons-material/LightMode";
import NightlightIcon from "@mui/icons-material/Nightlight";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
// import TuneIcon from "@mui/icons-material/Tune";

export default function ColorSchemaChanger (props) {
  const toolkit = useContext(ToolKitContext);

  const schemas = [
    {
      schemaName: "light",
      icon: <LightModeIcon />,
      title: "Светлая",
    },
    {
      schemaName: "dark",
      icon: <NightlightIcon />,
      title: "Тёмная",
    },
    {
      schemaName: "auto",
      icon: <AutoAwesomeIcon />,
      title: "Системная",
    },
    // {
    //   schemaName: "",
    //   icon: <TuneIcon />,
    //   title: "Название схемы",
    // }
  ]

  const getSchemaButton = (item) => {
    const icon = item["icon"]
    const title = item["title"]
    const ID = nanoid()

    if (item["x-dropdown"] !== undefined) {
      const dropdownContent = getDropdownContent(item["x-dropdown"]);
      const contentPosition = props.contentPosition || "bottom-left"

      return (
        <XDropdown
          key={ID} dropdown={dropdownContent} contentPosition={contentPosition}
        >
          <XButton 
            icon={icon} title={title}
          />
        </XDropdown>
      )
    } else {
      const action = () => {
        toolkit.settings.colorSchema = item.schemaName
      }

      return (
        <XButton 
          key={ID} icon={icon} onClick={action} title={title}
        />
      )
    }
  }

  const getDropdownContent = (dropdown) => {
    return dropdown.map(getSchemaButton)
  }

  const actualSchema = schemas.filter(item => item.schemaName === toolkit.settings.colorSchema)[0] || "auto";
  const actualSchemaIcon = actualSchema.icon;
  const actualSchemaTitle = actualSchema.title;
  const dropdownContent = getDropdownContent(schemas);

  return <XDropdown
      dropdown={dropdownContent}
      contentPosition={props.contentPosition || "bottom-right"}
      listDirection="row"
    >
      <XButton icon={actualSchemaIcon} title={actualSchemaTitle} isDropdown={true} />
    </XDropdown>
}
