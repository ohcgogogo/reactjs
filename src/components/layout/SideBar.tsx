import React, {MouseEventHandler} from 'react';
import styled from 'styled-components';

interface Props {
    children?: JSX.Element|JSX.Element[];
}

const StyledCustomSideBar = styled.div`
    display : flex;
    min-width : 280px;
    width : 20%;
`;

function CustomSideBar({children} : Props) {
    return (
        <StyledCustomSideBar>
            {children}
        </StyledCustomSideBar>
    );
}

export default CustomSideBar;