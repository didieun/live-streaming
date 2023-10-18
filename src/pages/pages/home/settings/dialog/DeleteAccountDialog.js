import React from 'react';
import {
    Container,
    TitleText,
    Flex,
    TextStyle,
    SubText,
    TextStyle2,
    AlignCenter,
    ButtonIcon,
    StyledInput,
    FlexEnd2,
    StyledTextarea2,
    ContainerIn,
    ActionBox, ButtonStyle, ControlButton, FormControlLabelCheckBox, WarningButton, RedText, UnderlineText
} from './styles/AccountDialogStyle';
import {ReactComponent as EyeClosedIcon} from "../../../common/images/EyeClosedIcon.svg";
import {ReactComponent as EyeIcon} from "../../../common/images/EyeIcon.svg";
import {ReactComponent as Checked} from "../../../common/images/Checked.svg";
import {ReactComponent as UnChecked} from "../../../common/images/UnChecked.svg";
import {Checkbox} from "@mui/material";
import {MarginBottom20} from "../../../mobile/dialog/styles/MobileAccountDialogStyle";

function DeleteAccountDialog(props) {
    const [password, setPassword] = React.useState(false);
    const handleClickPassword = () => {
        setPassword(!password);
    };

    return (
        <Container>
            <ContainerIn>
                <MarginBottom20>
                    <TextStyle2>
                        <RedText>
                            Are you sure you'd like to delete your Aimm tv account?<br/>
                            This will permanently erase all your channel/content and profile information.<br/><br/>
                        </RedText>

                        If you are a channel owner, all data including channel information, streaming information and history, and point settlement/<br/>
                        exchange will be deleted. If you have points to settle with the streamer, proceed with the settlement, and if you have points to<br/>
                        exchange, cash them out.<br/><br/>

                        Once you've chosen to delete your account, it will be deactivated and your channel page will no longer be accessible.<br/>
                        Within 30 days of your request, Aimm tv will permanently erase all your content and close your account.<br/>
                        The deletion process will terminate if you log back into your account while we are still processing your deletion request.<br/><br/>

                        In some cases, Aimm tv may retain limited personal data for legal, security and other reasons permitted or required under<br/>
                        applicable law. For more information, please refer to our <UnderlineText>Privacy Policy.</UnderlineText>
                    </TextStyle2>
                </MarginBottom20>
                <MarginBottom20>
                    <TitleText>Account to delete</TitleText>
                    <TextStyle>taeyeon</TextStyle>
                </MarginBottom20>

                <MarginBottom20>
                    <TitleText>Tell us why you're deleting your account (optional)</TitleText>
                    <div>
                        <StyledTextarea2
                            minRows={4}
                            maxRows={4}
                            placeholder="Enter your reasons"
                        />
                        <FlexEnd2>
                            <SubText>
                                0 / 100
                            </SubText>
                        </FlexEnd2>
                    </div>
                </MarginBottom20>

                <MarginBottom20>
                    <TitleText>Password</TitleText>
                    <AlignCenter>
                        <StyledInput
                            type={password ? 'text' : 'password'}
                            placeholder="Password"
                            // error
                        />
                        <ButtonIcon onClick={handleClickPassword} disableRipple>
                            {password ?
                                <EyeIcon/>
                                :
                                <EyeClosedIcon/>
                            }
                        </ButtonIcon>
                    </AlignCenter>
                </MarginBottom20>

                <FormControlLabelCheckBox
                    control={<Checkbox checkedIcon={<Checked />} icon={<UnChecked />}/>}
                    label="I will DELETE my account from this service."
                />
            </ContainerIn>

            <ActionBox>
                <ButtonStyle disableRipple>
                    Cancel
                </ButtonStyle>

                <WarningButton disableRipple>
                    Delete Account
                </WarningButton>
            </ActionBox>

        </Container>
    );
}

export default DeleteAccountDialog;