import React, {MouseEventHandler} from 'react';
import styled from 'styled-components';

interface Props {
    children?: JSX.Element|JSX.Element[];
}

const StyledWrap = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
`;

function Wrap({children} : Props) {
    return (
        <StyledWrap>
            {children}
        </StyledWrap>
    );
}

export default Wrap;