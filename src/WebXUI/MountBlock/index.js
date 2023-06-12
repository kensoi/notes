export function MountBlock({mountState, visibilityState, children, className}) {
  const classList = ["mount-block", className]

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
