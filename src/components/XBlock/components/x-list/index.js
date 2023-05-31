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

function XList(props) {
  let classList = ["x-list"]
  if (props.horListAtMobile) {
    classList.push("mobile-horizontal")
  }
  
  return <div className={classList.join(" ")} style={props.xstyle}>
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
