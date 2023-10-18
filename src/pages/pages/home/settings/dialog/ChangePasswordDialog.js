import React from 'react';
import {
    AlignCenter,
    Container,
    TitleText,
    Flex,
    MarginBottom30,
    ButtonIcon, StyledInput, CheckBox, ContainerIn, ActionBox, ButtonStyle, ControlButton
} from './styles/ChangePasswordDialogStyle';
import {ReactComponent as EyeClosedIcon} from "../../../common/images/EyeClosedIcon.svg";
import {ReactComponent as EyeIcon} from "../../../common/images/EyeIcon.svg";
import {ReactComponent as CheckBrokenIcon} from "../../../common/images/CheckBrokenIcon.svg";
import {Typography} from "@mui/material";

function ChangePasswordDialog(props) {
    const [password, setPassword] = React.useState(false);
    const [newPassword, setNewPassword] = React.useState(false);
    const [confirmNewPassword, setConfirmNewPassword] = React.useState(false);

    const handleClickPassword = () => {
        setPassword(!password);
    };

    const handleClickNewPassword = () => {
        setNewPassword(!newPassword);
    };

    const handleClickConfirmNewPassword = () => {
        setConfirmNewPassword(!confirmNewPassword);
    };


    return (
        <Container>
            <ContainerIn>
                <MarginBottom30>
                    <AlignCenter>
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
                    </AlignCenter>
                </MarginBottom30>

                <MarginBottom30>
                    <AlignCenter>
                        <TitleText>New Password</TitleText>
                        <AlignCenter>
                            <StyledInput
                                type={newPassword ? 'text' : 'password'}
                                placeholder="Password"
                                // error
                            />
                            <ButtonIcon onClick={handleClickNewPassword} disableRipple>
                                {newPassword ?
                                    <EyeIcon/>
                                    :
                                    <EyeClosedIcon/>
                                }
                            </ButtonIcon>
                        </AlignCenter>
                    </AlignCenter>
                </MarginBottom30>

                <Flex>
                    <TitleText>Confirm <br/>New Password</TitleText>
                    <div>
                        <AlignCenter>
                            <StyledInput
                                type={confirmNewPassword ? 'text' : 'password'}
                                placeholder="Password"
                                // error
                            />
                            <ButtonIcon onClick={handleClickConfirmNewPassword} disableRipple>
                                {confirmNewPassword ?
                                    <EyeIcon/>
                                    :
                                    <EyeClosedIcon/>
                                }
                            </ButtonIcon>
                        </AlignCenter>

                        <CheckBox check={false}>
                            <CheckBrokenIcon/>
                            <Typography>
                                Combination of two or more English letters,<br/>
                                numbers, and special characters.
                            </Typography>
                        </CheckBox>
                        <CheckBox check={true}>
                            <CheckBrokenIcon/>
                            <Typography>
                                10 characters or more
                            </Typography>
                        </CheckBox>
                    </div>
                </Flex>
            </ContainerIn>

            <ActionBox>
                <ButtonStyle disableRipple>
                    Cancel
                </ButtonStyle>

                <ControlButton disableRipple>
                    Change Password
                </ControlButton>
            </ActionBox>

        </Container>
    );
}

export default ChangePasswordDialog;