

const FooterButton = (props) => {
    return <div className="footer-button" onClick={props.onClick}>
        {props.children}
    </div>
}

export {FooterButton}