import { createSignal } from 'solid-js';

function VariableInput(props: any) {
    const [value, _] = createSignal('');

    return (
        <input
        type="text"
        value={value()}
        class="w-30vw h-3rem font-size-2rem c-tc-light rounded-lg border-none
               px-20px py-5px bg-#333a3b nm-bs"
        placeholder={props.placeholder}
        />
    );
}

export default VariableInput;
