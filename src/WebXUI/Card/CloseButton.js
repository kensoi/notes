import { useContext } from "react";

import { ToolKitContext } from "shared/tools"

import CloseIcon from "@mui/icons-material/Close";

export function CloseButton() {
  const toolkit = useContext(ToolKitContext)

  const closeAction = () => {
    toolkit.card.return({
      hideReason: "closed by close button",
    })
  }

  return (
    <div className="card-close-wrapper">
      <div className="card-close-button" onClick={closeAction}>
        <CloseIcon />
      </div>
    </div>
  );
}
