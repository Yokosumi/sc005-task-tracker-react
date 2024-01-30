import { useReducer } from 'react'
import { StateType, Action, ActionType } from './../types.ts'
import './index.scss'

const intialState: StateType = {
    count: 0,
}

const reducer = (state: StateType, action: Action) => {
    switch (action.type) {
        case ActionType.increment:
            return { ...state, count: state.count + 1 }

        case ActionType.decrement:
            return { ...state, count: Math.max(0, state.count - 1) }
    }
    return { ...state }
}

function App() {
    const [state, dispatch] = useReducer(reducer, intialState)
    return (
        <>
            <section className="flex gap-2 flex-col items-center m-6">
                <div className="text-white text-lg">
                    <h1>Counter</h1>
                    <p>
                        Count:{' '}
                        <span className="text-yellow-500">{state.count}</span>{' '}
                    </p>
                </div>
                <div className="flex gap-2">
                    <button
                        onClick={() =>
                            dispatch({ type: ActionType.decrement, payload: 0 })
                        }
                    >
                        -
                    </button>
                    <button
                        onClick={() =>
                            dispatch({ type: ActionType.increment, payload: 0 })
                        }
                    >
                        +
                    </button>
                </div>
            </section>
        </>
    )
}

export default App
