import React, {MouseEventHandler} from 'react';
import styled from 'styled-components';

interface Props {
    children?: JSX.Element|JSX.Element[];
}

const StyledFooter = styled.div`
  display: flex;
`;

function Footer({children} : Props) {
    return (
        <StyledFooter>
            {children}
        </StyledFooter>
    );
}

export default Footer;