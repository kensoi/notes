import "./scss/stylesheet.scss";
import { Children } from "react";
import { getSXbyArr } from "../../../../shared/utils";

function XHorizontal(props) {
  let classList = ["x-horizontal", props.className]

  if (props.disablePaddings) {
    classList.push("x-sorter-disable-paddings")
  }
  
  return <div className={classList.join(" ")} style={props.xstyle} onClick={props.onClick}>
    {Children.map(props.children, (child, i) => {
          return <div className="x-horizontal-children" style={getSXbyArr(props.sx, i)}>
            {child}
          </div>
        }
      )
    }
  </div>
}

export {XHorizontal};
