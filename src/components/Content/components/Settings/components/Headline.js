import { useContext } from "react";
import { XButton } from "../../../../XForms";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Toolkit } from "../../../../../contexts";

function BackButtonMobile() {
  const toolkit = useContext(Toolkit)

  const returnToMenu = () => toolkit.settings.setPage(0)
  return <XButton 
    icon={<ArrowBackIcon/>} accent="transparent"
    hideEmptyPaddings={true} hideEmptyPaddingsAtMobile={true}
    onClick={returnToMenu} />
}

export default function Headline({ title }) {
  const toolkit = useContext(Toolkit)

  if (toolkit.windowSize.width >= 768) {
    return <div className="settings-headline">
      { title }
    </div>
  }

  else {
    return <div className="settings-headline">
      <BackButtonMobile />
      { title }
    </div>
  }
}
