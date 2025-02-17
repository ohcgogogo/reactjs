import React, {FormEvent, useState} from 'react';
import LoginButton from "src/components/shared/buttons/Login";
import TopNavigationBar from "src/components/shared/navigate/TopNavigationBar";
import { useDispatch, useSelector } from "react-redux" // 액션을 발생 시키는 dispatch
import { ReducerType } from "src/redux/rootReducer"; // 리듀서
import { User, addUser } from "src/redux/slices/users";
import {ParentProps} from "src/App";

interface Props extends ParentProps {
}

function Main(props: Props) {
    // TODO https://redux-toolkit.js.org/tutorials/quick-start 를 useSelector와 useDispatch역할을 확인해야함
    const users = useSelector<ReducerType, User[]>(state=> state.users); // store에서 action types에 해당하는 상태를 가져온다.
    const dispatch = useDispatch(); // store.dispatch를 가져온다.
    const [ name, setName ] = useState('');
    const handleChangeName = (e: any) => {
        setName(e.target.value);
    }
    const handleAddUser = (e:FormEvent) => {
        e.preventDefault();
        dispatch(addUser({ name } as User)); // 액션을 발생시킨다.
        setName('');
    }

    return (
        <div>
            <h1>홈</h1>
            <TopNavigationBar/>
            <p>홈, 가장 먼저 보여지는 페이지</p>
            <LoginButton/>

            <form onSubmit={handleAddUser}>
                <input type='text' value={name} onChange={handleChangeName} />
                <button type='submit'>Add User</button>
            </form>

            {users.map(user=> (
                <div key={user.id}>{user.name}</div>
            ))}
        </div>
    );
};

export default Main;