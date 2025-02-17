import React, {useContext, useEffect, useState} from 'react';
import {Route, Routes} from "react-router-dom";

import styled, {ThemeContext} from "styled-components";
import SpaLayout from 'src/components/layout/SpaLayout';

import Main from "src/pages/Main";
import About from "src/pages/help/About";
import Profile from "src/pages/member/Profile";
import AxiosTest from "src/pages/axios/Axios";



export interface ParentProps {
}

interface Props extends ParentProps {
}
//
// interface Props {
//     navigate: NavigateFunction;
//     t: TFunction;
//     theme : DefaultTheme;
// }
//
// type activeType = {
//     active : boolean;
// }
//
// class AppComponent extends Component<Props> {
//     render() {
//     }
// };

// function App 안쪽에 작성하면 hook 함수 내에 또 다른 hook 함수를 중첩작성한것으로 인식해서 inputfield에 글자를 입력하려고 하면 새로 랜더링 되면서 연속으로 입력이 안되는 문제가 발생함.
// styled-component는 바깥쪽에 작성해야함.
const AppContainer = styled.div`
          background : ${props => { return props.theme.main.background; }};
          color: ${props => { return props.theme.main.color; }};
        `;

function App(props: Props) {
    const {theme} = useContext(ThemeContext);
    // const [isLogin , setIsLogin] = useState(false);
    // useEffect(()=>{
    // },[]);

    return (
        <AppContainer>
            <SpaLayout>
                <Routes>
                    <Route path="/" element={<Main/>}/>
                    <Route path="/help/about" element={<About/>}/>
                    <Route path="/member/profile">
                        <Route path=":username" element={<Profile/>}/>
                    </Route>
                    <Route path="/axios/axios" element={<AxiosTest />}/>
                </Routes>
            </SpaLayout>
        </AppContainer>
    );
}

export default App;