import { createReducer, on } from "@ngrx/store"
import { iCounterState, initialState } from "../state/counter.state"
import { changeName, customIncrement, decrement, increment, reset } from "../actions/counter.actions"
import { state } from "@angular/animations"


// One Way to Wirte
// const _counterReducer = createReducer(
//     initialState,
//     on(increment, (state) => {
//         return {
//             ...state,
//             counter: state.counter + 1
//         }
//     }),
//     on(decrement, (state) => {
//         return {
//             ...state,
//             counter: state.counter - 1
//         }
//     }),
//     on(reset, (state) => {
//         return {
//             ...state,
//             counter: 0
//         }
//     }),

// )

// export function counterReducer(state: iCounter, action: any) {
//     return _counterReducer(state, action)
// } 

// Other Way
export const counterReducer = createReducer(
    initialState,
    on(increment, (state) => {
        return {
            ...state,
            counter: state.counter + 1
        }
    }),
    on(decrement, (state) => {
        return {
            ...state,
            counter: state.counter - 1
        }
    }),
    on(reset, (state) => {
        return {
            ...state,
            counter: 0
        }
    }),
    on(customIncrement, (state, action) => {
        console.log(action)
        return {
            ...state,
            counter: state.counter + action.value
        }
    }),
    on(changeName, state => {
        return {
            ...state,
            name: 'Name Changed'
        }
    })

)