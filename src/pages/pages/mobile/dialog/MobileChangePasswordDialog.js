import React from 'react';
import {
    AlignCenter,
    Container,
    TitleText,
    Flex,
    MarginBottom20,
    ButtonIcon, StyledInput, CheckBox, ContainerIn, ActionBox, ButtonStyle, ControlButton
} from './styles/MobileChangePasswordDialogStyle';
import {ReactComponent as EyeClosedIcon} from "../../common/images/EyeClosedIcon.svg";
import {ReactComponent as EyeIcon} from "../../common/images/EyeIcon.svg";
import {ReactComponent as CheckBrokenIcon} from "../../common/images/CheckBrokenIcon.svg";
import {Typography} from "@mui/material";

function MobileChangePasswordDialog(props) {
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
                                <EyeIcon style={{width: 20, height: 20}}/>
                                :
                                <EyeClosedIcon style={{width: 20, height: 20}}/>
                            }
                        </ButtonIcon>
                    </AlignCenter>
                </MarginBottom20>

                <MarginBottom20>
                    <TitleText>New Password</TitleText>

                    <AlignCenter>
                        <StyledInput
                            type={newPassword ? 'text' : 'password'}
                            placeholder="Password"
                            // error
                        />
                        <ButtonIcon onClick={handleClickNewPassword} disableRipple>
                            {newPassword ?
                                <EyeIcon style={{width: 20, height: 20}}/>
                                :
                                <EyeClosedIcon style={{width: 20, height: 20}}/>
                            }
                        </ButtonIcon>
                    </AlignCenter>
                </MarginBottom20>

                <div>
                    <TitleText>Confirm New Password</TitleText>
                    <div>
                        <AlignCenter>
                            <StyledInput
                                type={confirmNewPassword ? 'text' : 'password'}
                                placeholder="Password"
                                // error
                            />
                            <ButtonIcon onClick={handleClickConfirmNewPassword} disableRipple>
                                {confirmNewPassword ?
                                    <EyeIcon style={{width: 20, height: 20}}/>
                                    :
                                    <EyeClosedIcon style={{width: 20, height: 20}}/>
                                }
                            </ButtonIcon>
                        </AlignCenter>

                        <CheckBox check={false}>
                            <CheckBrokenIcon style={{width: 15, height: 15}}/>
                            <Typography>
                                Combination of two or more English letters,<br/>
                                numbers, and special characters.
                            </Typography>
                        </CheckBox>
                        <CheckBox check={true}>
                            <CheckBrokenIcon style={{width: 15, height: 15}}/>
                            <Typography>
                                10 characters or more
                            </Typography>
                        </CheckBox>
                    </div>
                </div>
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

export default MobileChangePasswordDialog;