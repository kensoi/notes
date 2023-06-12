import { useContext } from "react"

import { ToolKitContext } from "shared/tools"

export function MountBlock({mountState, visibilityState, children}) {
  const classList = ["mount-block"]

  if (visibilityState) {
    classList.push("visible")
  }

  if (mountState) {
    return <div className={classList.join(" ")}>
      {children}
    </div>
  }

  return <></>
}
