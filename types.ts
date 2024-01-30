export type StateType = {
    count: number
}

export enum ActionType {
    increment = 'increment',
    decrement = 'decrement',
}

export type Action = {
    type: ActionType
    payload: number
}
