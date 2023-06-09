export function FormBlock({toolkit, children}) {
  const ClassList = ["form-block"]

  if (toolkit.notes.loaded) {
    ClassList.push("visible")
  }

  if (toolkit.notes.mounted) {
    return <div className={ClassList.join(" ")}>
      {children}
    </div>
  }

  return <></>
}
