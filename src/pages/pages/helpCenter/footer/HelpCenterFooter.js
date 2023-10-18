import * as React from 'react';
import {
    AlignCenter,
    Container,
    ContainerIn,
    LineStyle,
    TextMargin,
    TextOpacity,
    TextStyle
} from "./styles/HelpCenterFooterStyle";
import {ReactComponent as FooterAimmLogo} from "../../common/images/FooterAimmLogo.svg";

function HelpCenterFooter(props) {
    return (
        <Container>
            <ContainerIn>
                <AlignCenter>
                    <FooterAimmLogo/>
                    <TextMargin>Terms</TextMargin>
                    <LineStyle/>
                    <TextStyle>Privacy Policy</TextStyle>
                </AlignCenter>

                <TextOpacity>© 2023 Aimm. All Rights Reserved.</TextOpacity>
            </ContainerIn>
        </Container>
    );
}

export default HelpCenterFooter;