import * as React from 'react';
import {
    ButtonStyle,
    Container,
    ContainerImage,
    ContainerIn,
    TextStyle,
    TitleText
} from "./styles/HelpCenterContactStyle";

function HelpCenterContact(props) {
    return (
        <Container>
            <ContainerImage>
                <ContainerIn>
                    <TitleText>Need more help?</TitleText>
                    <TextStyle>Send feedback and report a service issue.</TextStyle>
                    <ButtonStyle disableRipple>
                        Contact Support
                    </ButtonStyle>
                </ContainerIn>
            </ContainerImage>
        </Container>
    );
}

export default HelpCenterContact;