import { Age } from "./age";

export function Welcome({name}) {
    return(
        <div>
            <p>welcome ,{name}</p>
            <Age age={23} />
        </div>
    )
}