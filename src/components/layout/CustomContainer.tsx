import React, {MouseEventHandler} from 'react';
import styled from 'styled-components';

interface Props {
    children?: JSX.Element|JSX.Element[];
}

const StyledContainer = styled.div`
    display : flex;
    flex-grow: 1;
    width:100%;
`;

function CustomContainer({children} : Props) {
    return (
        <StyledContainer>
            {children}
        </StyledContainer>
    );
}

export default CustomContainer;