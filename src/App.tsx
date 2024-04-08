import { type Component } from 'solid-js';
import { Input } from './components/input';

const App: Component = () => {
    return (
        <div class='bg-dark h-100vh font-code flex justify-center items-center'>
            <Input />
        </div>
    )
};

export default App;
