

export function Color({items}) {
    
    
    return(
        <>
        {items.map((item) => (<li key={item.id}>{item.name}</li>))}
            
        </>
    )
}