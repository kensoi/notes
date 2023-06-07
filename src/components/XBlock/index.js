import "./scss/stylesheet.scss";

export {FormGrid, FormLabel} from "./components/form-template";
export {XVertical} from "./components/x-vertical";
export {XHorizontal} from "./components/x-horizontal";
export {XList} from "./components/x-list";

export default function XBlock(props) {
  let classList = ["x-block", props.className]
  
  return <div className={classList.join(" ")} style={props.xstyle} ref={props.xref} onClick={props.onClick}>
    {props.children}
  </div>;
}