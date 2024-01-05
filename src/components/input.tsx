import { createSignal } from 'solid-js';

function VariableInput() {
    const [value, _] = createSignal('');

    return (
        <input
        type="text"
        autofocus 
        value={value()}
        class="h-3rem font-size-2rem text-center c-tc-light rounded-lg border-none
               px-20px py-5px bg-#333a3b nm-bs"
        />
    );
}

export default VariableInput;
