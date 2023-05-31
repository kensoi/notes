import "./scss/stylesheet.scss";
import { Children } from "react";

function getSXbyArr(sx, i) {
  if (sx) {
    if (i > sx.length) {
      return {}
    }
    return sx[i]
  }
  else {
    return {}
  }
}

function XVertical(props) {
  let classList = ["x-vertical"]
  return <div className={classList.join(" ")} style={props.xstyle}>
    {Children.map(props.children, (child, i) => {
        return <div className="x-vertical-children" style={getSXbyArr(props.sx, i)}>
            {child}
          </div>
        }
      )
    }
  </div>
}

export {XVertical};
