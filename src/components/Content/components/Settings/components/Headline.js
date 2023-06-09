import React from "react";
import { XButton } from "../../../../XForms";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

function BackButtonMobile(props) {
  return <XButton icon={<ArrowBackIcon/>} accent="transparent"
    hideEmptyPaddings={true} hideEmptyPaddingsAtMobile={true}
    onClick={() => { props.toolkit.settings.setPage(0); }} />;
}

export function Headline(props) {
  if (props.toolkit.windowSize.width >= 768) {
    return <div className="settings-headline">
      {props.children}
    </div>;
  }

  else {
    return <div className="settings-headline">
      <BackButtonMobile toolkit={props.toolkit} />
      {props.children}
    </div>
  }
}
