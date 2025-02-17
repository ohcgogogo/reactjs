import React, {useEffect, useState} from 'react';
import axios, {AxiosError} from 'axios';
import {User} from "../../redux/slices/users";

interface Item {
    id: string;
    username: string;
    name : string
}

/*
    any : 모든타입을 허용한다. 컴파일시에 타입 체크를 하지 않는다.
    unknown : 타입을 모른다. 컴파일시에 알아서 타입을 체크한다. 타입 오류가 발생하지 않기 위해서 무조건 타입을 좁혀서 사용해야 하는 의무가 발생한다.
 */
function AxiosTest() {
    const [data, setData] = useState<Item[] | null>(null);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<AxiosError | null>(null);

    const fetchData = async () => {
        try {
            setError(null);
            setData(null);
            setLoading(true);

            const response = await axios.post(
                'url...',
                {
                }
            );
            setData(response.data);
        } catch (error: unknown) {
            if (error instanceof AxiosError) {
                setError(error);
            } else {}
        }
        setLoading(false);
    };

    // https://ko.reactjs.org/docs/hooks-effect.html
    useEffect(() => {
        fetchData().then(r => {});
    }, []);

    if (loading) return <div>로딩중..</div>;
    if (error) return <div>에러가 발생했습니다</div>;
    if (!data) return null;

    return (
        <>
            <ul>
                {data.map(item => (
                    <li key={item.id}>
                        {item.username} ({item.name})
                    </li>
                ))}
            </ul>
            // button을 클릭하면 API를 다시 불러와줍니다.
            <button onClick={ fetchData }>다시 불러오기</button>
        </>
    );
}

export default AxiosTest;