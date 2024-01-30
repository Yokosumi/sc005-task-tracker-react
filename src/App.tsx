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
            state.count++
            break
        case ActionType.decrement:
            state.count--
            break
    }
    return { ...state }
}

function App() {
    const [state, dispatch] = useReducer(reducer, intialState)
    return (
        <div>
            <h1>Counter</h1>
            <p>Count: {state.count} </p>
        </div>
    )
}

export default App
