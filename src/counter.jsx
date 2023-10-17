export function Colors({items}) {
    
    
    return(
        <ul>{items.map((name) => (<li>{name}</li>))}</ul>
    )
}