import { useContext } from "react"
import { Toolkit } from "../../../../contexts"

export function FormBlock({children}) {
  const toolkit = useContext(Toolkit)
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
