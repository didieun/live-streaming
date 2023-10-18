import React from 'react';
import {
    Container,
    BoxText, FlexMarginBottom, ButtonStyle, SubText
} from "./styles/SecurityAndPrivacyStyle";

function SecurityAndPrivacy(props) {
    const {handleClickChangePassword, handleClickDeactivateAccount} = props;

    return (
        <Container>
            <FlexMarginBottom>
                <BoxText>Password</BoxText>
                <ButtonStyle onClick={handleClickChangePassword} disableRipple>
                    Change Password
                </ButtonStyle>
            </FlexMarginBottom>

            <FlexMarginBottom>
                <BoxText>Deactivating<br/>your account</BoxText>
                <div>
                    <ButtonStyle onClick={handleClickDeactivateAccount} disableRipple>
                        Deactivate Account
                    </ButtonStyle>
                    <SubText>
                        * Want to take a break from streaming?<br/>
                        * Deactivating an account will prevent the account from appearing in results<br/>
                        &nbsp;&nbsp;&nbsp;when channel owners search for streamers.
                    </SubText>
                </div>
            </FlexMarginBottom>
        </Container>
    );
}

export default SecurityAndPrivacy;