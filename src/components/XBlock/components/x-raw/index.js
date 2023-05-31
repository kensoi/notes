import "./scss/stylesheet.scss";
import { Children } from "react";

function XRaw(props) {
  return <div className="x-raw">
    {Children.map(props.children, child => <div className="x-raw-children">
      {child}
    </div>)}
  </div>;
}

export {XRaw};
