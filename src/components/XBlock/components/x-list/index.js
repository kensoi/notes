import "./scss/stylesheet.scss";
import { Children } from "react";
import { getSXbyArr } from "../../../../shared/utils";

function XList(props) {
  let classList = ["x-list", props.className]

  if (props.disablePaddings) {
    classList.push("x-sorter-disable-paddings")
  }
  
  return <div className={classList.join(" ")} style={props.xstyle} onClick={props.onClick}>
    {Children.map(props.children, (child, i) => {
        return <div className="x-list-children" style={getSXbyArr(props.sx, i)}>
            {child}
          </div>
        }
      )
    }
  </div>
}

export {XList};
