/*
    상태 변경을 위환 액션을 정의한다.
*/
/*
step 1) original
const INCREMENT = 'counter/increment'
function increment(amount: number) {
    return {
        type: INCREMENT,
        payload: amount,
    }
}
const action = increment(3) // // { type: 'counter/increment', payload: 3 }
*/
/*
step 2) use create Action
import { createAction } from '@reduxjs/toolkit'
const increment = createAction<number | undefined>('counter/increment')
let action = increment() // { type: 'counter/increment' }
action = increment(3) // returns { type: 'counter/increment', payload: 3 }
*/
/*
step 3) Using Prepare Callbacks to Customize Action Contents
import { createAction, nanoid } from '@reduxjs/toolkit'
const addTodo = createAction('todos/add', function prepare(text: string) {
  return {
    payload: {
      text,
      id: nanoid(),
      createdAt: new Date().toISOString(),
    },
  }
})
addTodo('Write more docs') // {type: 'todos/add',payload: {text: 'Write more docs',id: '4AJvwMSWEHCchcWYga3dj',createdAt: '2019-10-03T07:53:36.581Z'}}s
*/