import { useContext } from "react";
import CloseIcon from "@mui/icons-material/Close";

import { Toolkit } from "../../../contexts";

export function CloseButton() {
  const toolkit = useContext(Toolkit)

  const closeAction = () => {
    toolkit.card.return({
      hideReason: "closed by close button",
    })
  }

  return (
    <div className="form-card-close-wrapper">
      <div className="form-card-close-button" onClick={closeAction}>
        <CloseIcon />
      </div>
    </div>
  );
}
