import * as React from 'react';
import {
    Container, FlexMargin, BoxText, ButtonStyle, SubText, AlignCenter
} from "./styles/MobileSecurityAndPrivacyStyle";

function MobileSecurityAndPrivacy(props) {
    const {handleClickChangePassword, handleClickDeactivateAccount} = props;

    return (
        <Container>
            <FlexMargin>
                <BoxText>Password</BoxText>
                <ButtonStyle onClick={handleClickChangePassword} disableRipple>
                    Change Password
                </ButtonStyle>
            </FlexMargin>

            <div>
                <AlignCenter>
                    <BoxText>Deactivating<br/>your account</BoxText>
                    <ButtonStyle onClick={handleClickDeactivateAccount} disableRipple>
                        Deactivate Account
                    </ButtonStyle>
                </AlignCenter>

                <SubText>
                    * Want to take a break from streaming?<br/>
                    * Deactivating an account will prevent the account from appearing in results<br/>
                    &nbsp;&nbsp;&nbsp;when channel owners search for streamers.
                </SubText>
            </div>
        </Container>
    );
}

export default MobileSecurityAndPrivacy;