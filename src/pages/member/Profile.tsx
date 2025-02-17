import React from "react";
import { useParams } from "react-router-dom";

const data : {[key: string]: {name: string, description: string}} = {
    velopert : {
        name: "김민준",
        description: "리액트를 좋아하는 개발자",
    },
    gildong : {
        name: "홍길동",
        description: "고전 소설 홍길동전의 주인공",
    }
};

function Profile() {
    let params = useParams();
    const profile = data[params.username as string];

    if (!profile) {
        return <div>존재하지 않는 사용자입니다.</div>;
    } else {
        return (
            <div>
                <h3>{params.username}</h3>
                <p>{profile.description}</p>
            </div>
        );
    }
};

export default Profile;