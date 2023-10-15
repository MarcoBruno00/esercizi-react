export function MultiButton({button1 ,button2, button3}) {
    function handleButton(event) {
        console.log(event.target.name);
    }
    
    return(
        <div>
            <button name={button1} onClick={handleButton}>button1</button>
            <button name={button2} onClick={handleButton}>button2</button>
            <button name={button3} onClick={handleButton}>button3</button>
        </div>
    )
}