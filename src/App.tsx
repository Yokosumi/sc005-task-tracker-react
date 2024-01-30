import { useReducer } from 'react'
import './index.scss'

type StateType = {
    count: number
}

enum ActionType {
    increment = 'increment',
    decrement = 'decrement',
}

type Action = {
    type: ActionType
    payload: number
}

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
            <div>
                <h1>Counter</h1>
                <p>Count: {state.count} </p>
            </div>
            <div>
                <button
                    onClick={() =>
                        dispatch({ type: ActionType.increment, payload: 0 })
                    }
                >
                    +
                </button>
                <button
                    onClick={() =>
                        dispatch({ type: ActionType.decrement, payload: 0 })
                    }
                >
                    -
                </button>
            </div>
        </>
    )
}

export default App
