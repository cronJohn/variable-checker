import { JSXElement } from "solid-js";

export function Results(props: any): JSXElement{
    return (
        <div class="bg-dark text-light p-4 w-35vw">
            {props.children}
        </div>
    )
}
