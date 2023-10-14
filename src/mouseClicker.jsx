export function MouseClicker({name}) {
    function handleClick(event) {
        console.log(event.currentTarget.name);
    }



    return(
        <button name={name} onClick={handleClick}>
            <img src="" alt="" width={24} height={24} />
            click me!
            </button>
    )
}