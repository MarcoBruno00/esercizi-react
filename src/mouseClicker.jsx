export function MouseClicker({name}) {
    function handleClick(event) {
        console.log(event.target.name);
    }



    return(
        <button name={name} onClick={handleClick}>click me!</button>
    )
}