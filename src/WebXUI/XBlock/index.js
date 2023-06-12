export default function XBlock(props) {
  let classList = ["x-block", props.className]
  
  return <div className={classList.join(" ")} style={props.xstyle} ref={props.xref} onClick={props.onClick}>
    {props.children}
  </div>;
}