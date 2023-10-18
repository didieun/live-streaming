import React from 'react';
import {
    Container,
    TitleText,
    Flex, TextStyle, MarginBottom30,
    FlexEnd, StyledTextarea, SubText, TextStyle2, ContainerIn, ActionBox, ButtonStyle, ControlButton
} from './styles/AccountDialogStyle';

function DeactivateAccountDialog(props) {

    return (
        <Container>
            <ContainerIn>
                <MarginBottom30>
                    <TextStyle2>
                        Want to take a break from streaming?<br/><br/>

                        Deactivating an account will prevent the account from appearing in results<br/>
                        when channel owners search for streamers.<br/>
                        User information is not deleted.<br/>
                        If you change your mind later, you can reactivate your profile.
                    </TextStyle2>
                </MarginBottom30>
                <MarginBottom30>
                    <TitleText>Account to deactivate</TitleText>
                    <TextStyle>taeyeon</TextStyle>
                </MarginBottom30>

                <Flex>
                    <TitleText>Tell us why you're deactivating your account (optional)</TitleText>
                    <div>
                        <StyledTextarea
                            minRows={4}
                            maxRows={4}
                            placeholder="Enter your reasons"
                        />
                        <FlexEnd>
                            <SubText>
                                0 / 100
                            </SubText>
                        </FlexEnd>
                    </div>
                </Flex>
            </ContainerIn>

            <ActionBox>
                <ButtonStyle disableRipple>
                    Cancel
                </ButtonStyle>

                <ControlButton disableRipple>
                    Deactivate Account
                </ControlButton>
            </ActionBox>
        </Container>
    );
}

export default DeactivateAccountDialog;