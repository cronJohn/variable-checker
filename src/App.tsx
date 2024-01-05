import VariableInput from './components/input'

function App() {
    return (
        <>
            <div class='container ma h-100dvh flex flex-col flex-justify-center flex-items-center
                        gap-lg'>
                <h1 class='c-tc-light font-main '>Variable name:</h1>
                <div>
                    <VariableInput />
                </div>
            </div>
        </>
    )
}

export default App
