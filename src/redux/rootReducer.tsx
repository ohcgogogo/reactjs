import { combineReducers } from "@reduxjs/toolkit";
import users from 'src/redux/slices/users';

/* 리듀서는 변화를 일으키는 함수로 액션을 전달받아 새로운 상태를 만들어 내는 역할을 수행한다 */
const reducer = combineReducers({
    users
});
export type ReducerType = ReturnType<typeof reducer>;
export default reducer;