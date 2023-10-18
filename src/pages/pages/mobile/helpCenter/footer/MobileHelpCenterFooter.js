import * as React from 'react';
import {
    AlignCenter,
    Container, JustifySpace,
    LineStyle,
    TextMargin,
    TextOpacity,
    TextStyle
} from "./styles/MobileHelpCenterFooterStyle";
import {ReactComponent as FooterAimmLogo} from "../../../common/images/FooterAimmLogo.svg";

function MobileHelpCenterFooter(props) {
    return (
        <Container>
            <JustifySpace>
                <FooterAimmLogo style={{width: 100}}/>
                <AlignCenter>
                    <TextMargin>Terms</TextMargin>
                    <LineStyle/>
                    <TextStyle>Privacy Policy</TextStyle>
                </AlignCenter>
            </JustifySpace>

            <TextOpacity>© 2023 Aimm. All Rights Reserved.</TextOpacity>
        </Container>
    );
}

export default MobileHelpCenterFooter;