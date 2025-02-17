/* 리듀서는 변화를 일으키는 함수로 액션을 전달받아 새로운 상태를 만들어 내는 역할을 수행한다 */
/* step 1) original
const initialState = { value: 0 }
function counterReducer(state = initialState, action) {
    switch (action.type) {
        case 'increment':
            return { ...state, value: state.value + 1 }
        case 'decrement':
            return { ...state, value: state.value - 1 }
        case 'incrementByAmount':
            return { ...state, value: state.value + action.payload }
        default:
            return state
    }
}
*/
/*
step 2) use create Reduceer
import { createAction, createReducer } from '@reduxjs/toolkit'
interface CounterState {
  value: number
}
const increment = createAction('counter/increment')
const decrement = createAction('counter/decrement')
const incrementByAmount = createAction<number>('counter/incrementByAmount')
const initialState = { value: 0 } as CounterState

const counterReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(increment, (state, action) => {
      state.value++
    })
    .addCase(decrement, (state, action) => {
      state.value--
    })
    .addCase(incrementByAmount, (state, action) => {
      state.value += action.payload
    })
})
*/