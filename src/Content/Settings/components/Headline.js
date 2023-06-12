import { useContext } from "react";

import { XButton } from "WebXUI/XForms";

import { ToolKitContext } from "shared/tools"

import ArrowBackIcon from '@mui/icons-material/ArrowBack';

function BackButtonMobile() {
  const toolkit = useContext(ToolKitContext)

  const returnToMenu = () => {
    toolkit.settings.page = 0
  }
  return <XButton 
    icon={<ArrowBackIcon/>} accent="transparent"
    hideEmptyPaddings={true} hideEmptyPaddingsAtMobile={true}
    onClick={returnToMenu} />
}

export default function Headline({ title }) {
  const toolkit = useContext(ToolKitContext)
  
  return <div className="settings-headline">
    {
      toolkit.settings.windowWidth < 768 ? <BackButtonMobile /> : <></>
    }
    { title }
  </div>
}
