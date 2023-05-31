import "./scss/stylesheet.scss";

export {FormGrid, FormLabel} from "./components/form-template";
export {XRaw} from "./components/x-raw";
export {XVertical} from "./components/x-vertical";
export {XHorizontal} from "./components/x-horizontal";
export {XList} from "./components/x-list";

export default function XBlock(props) {
  return <div className="x-block">{props.children}</div>;
}