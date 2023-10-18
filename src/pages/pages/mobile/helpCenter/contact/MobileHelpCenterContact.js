import * as React from 'react';
import {
    ButtonStyle,
    Container,
    ContainerImage,
    TextStyle,
    TitleText
} from "./styles/MobileHelpCenterContactStyle";

function MobileHelpCenterContact(props) {
    return (
        <Container>
            <ContainerImage>
                <TitleText>Need more help?</TitleText>
                <TextStyle>Send feedback and report a service issue.</TextStyle>
                <ButtonStyle disableRipple>
                    Contact Support
                </ButtonStyle>
            </ContainerImage>
        </Container>
    );
}

export default MobileHelpCenterContact;