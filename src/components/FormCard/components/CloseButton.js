import React from "react";
import CloseIcon from "@mui/icons-material/Close";

export function CloseButton(props) {
  return (
    <div className="form-card-close-wrapper">
      <div className="form-card-close-button"
        onClick={() => {
          props.toolkit.card.return(null);
        }}
      >
        <CloseIcon />
      </div>
    </div>
  );
}
