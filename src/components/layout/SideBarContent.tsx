import React, {useContext} from 'react';
import styled, {ThemeContext} from 'styled-components';
import oc from 'open-color';
import StyledButton from "../shared/buttons/StyledButton";
import LanguageSwitchButton from "../shared/buttons/LanguageSwitcher";
import {Link, NavLink, useNavigate} from "react-router-dom";
import {useTranslation} from "react-i18next";

const StyledSideBarContent = styled.div`
    display: flex;
    background : papayawhip;
    width:100%;
`;


function SideBarContent() {
    const navigate = useNavigate();
    const {t} = useTranslation(['common', 'pageMain']);

    const handleGoBack = () => {
        navigate(-1);
    }
    const handleGoHome = () => {
        navigate('/');
    }
    return (
        <StyledSideBarContent>
            <ul>
                <li>
                    <button name="back" onClick={handleGoBack}>뒤로</button>
                    <StyledButton name="go" onClick={handleGoHome}>홈으로</StyledButton>
                    <LanguageSwitchButton/>
                </li>
                <li>
                    <NavLink to="/help/about"
                             style={({isActive}) => ({color: isActive ? 'green' : 'blue'})}>소개{t("Hello")}</NavLink>
                </li>
                <li>
                    <Link to="/member/profile/velopert">velopert 프로필</Link>
                </li>
                <li>
                    <Link to="/member/profile/gildong">gildong 프로필</Link>
                </li>
                <li>
                    <Link to="/axios/axios">Axios Test</Link>
                </li>
            </ul>
        </StyledSideBarContent>
    );
}

export default SideBarContent;