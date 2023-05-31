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

function XHorizontal(props) {
  let classList = ["x-horizontal"]
  return <div className={classList.join(" ")} style={props.xstyle}>
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
