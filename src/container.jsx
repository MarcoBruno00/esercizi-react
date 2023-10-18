import "./index.css"

export function Container({children , title}) {
    return(
        <div className="container">
        <div className="container-content">{children}</div>
        <div className="container-title">{title}</div>
        </div>
    )
}