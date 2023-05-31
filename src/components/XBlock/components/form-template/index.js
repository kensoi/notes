import "./scss/stylesheet.scss";

function FormGrid (props) {
    return <div className="form-grid">
        { props.children }
    </div>
}

function FormLabel (props) {
    const classList = ["form-label"]
    if (props.disableAtMobile) {
        classList.push("disable-at-mobile")
    }
    return <div className={classList.join(" ")}>
        { props.children }
    </div>
}

export {FormGrid, FormLabel};