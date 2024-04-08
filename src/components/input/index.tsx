import { TextField } from "@kobalte/core";
import "./style.css";

export function Input() {
  return (
    <TextField.Root class="text-field font-size-2rem">
      <TextField.Label class="text-field__label text-primary bg-dark">Variable name</TextField.Label>
      <TextField.Input class="text-field__input font-size-1.5rem font-code focus-visible-b-second text-light bg-dark b-light" autofocus />
    </TextField.Root>
  );
}
