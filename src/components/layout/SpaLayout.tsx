import React from 'react';
import styled from 'styled-components';
import Header from "src/components/layout/Header";
import HeaderContent from "src/components/layout/HeaderContent";
import CustomContainer from "src/components/layout/CustomContainer";
import CustomSideBar from "src/components/layout/SideBar";
import SideBarContent from "src/components/layout/SideBarContent";
import Content from "src/components/layout/Content";
import Footer from "src/components/layout/Footer";
import FooterContent from "src/components/layout/FooterContent";
import Wrap from "src/components/layout/Wrap";

interface Props {
    children?: JSX.Element|JSX.Element[];
}

const StyledSpaLayout = styled.div`
`;

function SpaLayout({children} : Props) {
    return (
        <StyledSpaLayout>
            <Wrap>
                <Header>
                    <HeaderContent />
                </Header>
                <CustomContainer>
                    <CustomSideBar>
                        <SideBarContent />
                    </CustomSideBar>
                    <Content>
                        {children}
                    </Content>
                </CustomContainer>
                <Footer>
                    <FooterContent/>
                </Footer>
            </Wrap>
        </StyledSpaLayout>
    );
}

export default SpaLayout;