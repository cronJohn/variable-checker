import { Input } from './components/input';
import { Results } from './components/results'
import { Index, Show, type Component } from 'solid-js';
import { createStore } from 'solid-js/store'

const App: Component = () => {
    const [store, setStore] = createStore([]);

    return (
        <div class='bg-dark h-100vh font-code flex flex-col justify-center items-center'>
            <div class='w-35vw rounded-lg shadow-xl'>
                <Input getter={store} setter={setStore}/>
                <Results>
                    <Index each={store}>
                    {(input) => (
                        <Show when={input()[0]}>
                            <p>{input()[1]}</p>
                        </Show>
                    )}
                    </Index>
                </Results>
            </div>
        </div>
    )
};

export default App;
