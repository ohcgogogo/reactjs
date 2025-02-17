import React, {MouseEventHandler} from 'react';
import styled from 'styled-components';

interface Props {
    children?: JSX.Element|JSX.Element[];
}

const StyledHeader = styled.div`
    display: flex;
    padding-top: 60px; /* 헤더 높이 */
    width:100%;
`;

function Header({children} : Props) {
    return (
        <StyledHeader>
            {children}
        </StyledHeader>
    );
}

export default Header;