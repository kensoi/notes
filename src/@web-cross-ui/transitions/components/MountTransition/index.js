export function MountTransition({
    visibilityState, children, className
}) {
    const classList = ["mount-transition", className]

    if (visibilityState) {
        classList.push("visible")
    }

    return <div className={classList.join(" ")}>
        {children}
    </div>
}
