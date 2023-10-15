import faviconImage from "./assets/favicon-16x16.png";


export function MouseClicker({name}) {
    function handleClick(event) {
        console.log(event.currentTarget.name);
    }

     function handleImage  (event) {
        console.log(event.currentTarget.src);
    }


       //vengono eseguiti insieme a causa dell'effetto bubble di html dato che l'immagine si trova all'interno del bottone


    return(
        <button name={name} onClick={handleClick}>
            <img src={faviconImage} alt="" width={24} height={24} onClick={handleImage}/>
            click me!
            </button>
    )
}