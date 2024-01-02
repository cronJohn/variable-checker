import { createSignal } from 'solid-js';

import "./input.css"

function VariableInput(props: any) {
    const [value, _] = createSignal('');

    return (
        <input
        type="text"
        value={value()}
        class="w-30vw lc rounded-lg border-none"
        placeholder={props.placeholder}
        />
    );
}

export default VariableInput;
