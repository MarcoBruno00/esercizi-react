import faviconImage from "./assets/favicon-16x16.png";


export function MouseClicker({name}) {
    function handleClick(event) {
        console.log(event.target.name);
    }

     function handleImage  (event) {
        console.log(event.currentTarget.src);
    }

   //togliendo il curren target dalla funzione handleclick


    return(
        <button name={name} onClick={handleClick}>
            <img src={faviconImage} alt="" width={24} height={24} onClick={handleImage}/>
            click me!
            </button>
    )
}