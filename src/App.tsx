import { createSignal, type Component } from 'solid-js';
import { LangSelect } from './components/select';

const App: Component = () => {
    return (
        <div class='bg-dark h-100vh font-code flex justify-center items-center'>
            <p class="text-size-5xl m-0 text-primary">Hello World!</p>
            <LangSelect />
        </div>
    )
};

export default App;
