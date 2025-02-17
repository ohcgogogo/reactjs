import React, {useState} from 'react';
import { useLocation } from "react-router-dom";
import qs from "qs";
import TopNavigationBar from "src/components/shared/navigate/TopNavigationBar";
import Notice from "src/components/shared/etc/Notice";
import LayerPopup from "src/components/shared/layer/popup/LayerPopup";

function About() {
    const query = useLocation();
    const showDetail =
        qs.parse(query.search, {
            ignoreQueryPrefix: true,
        }).detail === "true";

    const [popup, setPopup] = useState(false);
    const onClick = () => {
        setPopup(true);
    }
    const onConfirm = () => {
        setPopup(false);
    }
    const onCancel = () => {
        setPopup(false);
    }
    return (
        <div>
            <h1>소개</h1>
            <p>
                이 프로젝트는 리액트 라우터 기초를 실습해 보는 예제 프로젝트 입니다.
            </p>
            {showDetail && <p>detail 값을 true로 설정하셨군요!</p>}
            <Notice onClick={onClick}/>
            <LayerPopup visible={popup} onCancel={onCancel} onConfirm={onConfirm}/>
        </div>
    );
};

export default About;