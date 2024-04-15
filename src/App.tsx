import { Input } from './components/input';
import { Language } from './components/language';
import { Results } from './components/results'
import { Index, Show, type Component } from 'solid-js';
import { createStore } from 'solid-js/store'

import {Motion, Presence} from "solid-motionone"

const App: Component = () => {
    const [store, setStore] = createStore([]);

    return (
        <div class='bg-dark h-100vh font-code flex flex-col justify-center items-center'>
            <div class='w-35vw rounded-lg shadow-xl'>
                <Input getter={store} setter={setStore}/>
                <Results>
                    <div class='flex flex-col mx-auto w-50% gap-.2rem'>
                        <Index each={store}>
                        {(input, index) => (
                            <Presence>
                                <Show when={input()[0]}>
                                    <Motion.div
                                        initial={{ scale: 0 }}
                                        animate={{ scale: 1 }}
                                        exit={{ scale: 0, opacity: 0 }}
                                        transition={{ duration: 0.1, easing: "ease-in-out", delay: index * 0.02 }}
                                    >
                                        <Language language={input()[1]} />
                                    </Motion.div>
                                </Show>
                            </Presence>
                        )}
                        </Index>
                    </div>
                </Results>
            </div>
        </div>
    )
};

export default App;
