import { TextField } from "@kobalte/core";
import "./style.css";
import { RegexChecker } from "../../regex/RegexChecker";

export function Input(props: any) {
    async function handleInput(event: Event){
        const input = (event.target as HTMLInputElement).value
        props.setter(await RegexChecker.test(input))
    }

    return (
        <TextField.Root class="text-field font-size-2rem items-center">
            <TextField.Label class="text-field__label text-primary bg-dark">Enter variable name...</TextField.Label>
            <TextField.Input onInput={handleInput} class="w-70% text-field__input font-size-1.5rem font-code focus-visible-b-second text-light bg-dark b-light" autofocus />
        </TextField.Root>
   );
}
