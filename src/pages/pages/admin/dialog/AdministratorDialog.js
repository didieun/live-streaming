import * as React from 'react';
import {
    BoxStyle,
    Container,
    FlexMarginBottom,
    Flex,
    BoxText,
    StyledInput,
    SubText,
    ButtonStyle,
    ButtonStyle1,
    FlexEnd,
    StyledTextarea,
    NumberText,
    ColumnCenter,
    ProfileBox,
    JustifySpace,
    FlexMarginTop,
    LineButtonStyle,
    InputBox,
    WarningBox,
    BoxText3,
    LineButtonStyle2,
    AlignCenter,
    AlignCenterMargin,
    ButtonIcon,
    StyledPasswordInput,
    WarningBox2,
    RedText,
    ContainerIn,
    ActionBox, ControlButton, DeleteButton, ActionBoxStart, CheckText, CheckBox
} from "./styles/AdministratorDialogStyle";
import {ReactComponent as ProfileUserIcon} from "../../common/images/ProfileUserIcon.svg";
import {ReactComponent as InfoIcon} from "../../common/images/InfoIcon.svg";
import {ReactComponent as EyeClosedIcon} from "../../common/images/EyeClosedIcon.svg";
import {ReactComponent as EyeIcon} from "../../common/images/EyeIcon.svg";
import {ReactComponent as CheckBrokenIcon} from "../../common/images/CheckBrokenIcon.svg";
import TestProfileImage from "../../common/images/TestProfileImage.jpeg";
import {Typography} from "@mui/material";

function AdministratorDialog(props) {
    const {edit, handleClickAdministratorEdit, handleCloseAdministratorEdit, handleCloseDialog} = props;
    const [password, setPassword] = React.useState(false);
    const [newPassword, setNewPassword] = React.useState(false);
    const [confirmNewPassword, setConfirmNewPassword] = React.useState(false);
    //다른사용자일 경우
    const [user, setUser] = React.useState(false);
    const [resetPassword, setResetPassword] = React.useState(false);

    const handleClickPassword = () => {
        setPassword(!password);
    };

    const handleClickNewPassword = () => {
        setNewPassword(!newPassword);
    };

    const handleClickConfirmNewPassword = () => {
        setConfirmNewPassword(!confirmNewPassword);
    };

    const handleClickResetPassword = () => {
        setResetPassword(true);
    };

    return (
        <Container>
            <ContainerIn>
                <BoxStyle>
                    <Flex>
                        <ColumnCenter>
                            <ProfileBox>
                                <img src={TestProfileImage} alt='image'/>

                                {/* 프로필 없을 경우 */}
                                {/*<ProfileUserIcon />*/}
                            </ProfileBox>

                            <InputBox
                                accept=".jpg, .gif, .bmp, .png"
                                id="contained-button-file"
                                multiple
                                type="file"
                            />

                            {edit ?
                                <label htmlFor="contained-button-file">
                                    <LineButtonStyle component="span" disableRipple>
                                        Edit Profile Image
                                    </LineButtonStyle>
                                </label>
                                :
                                ''
                            }

                        </ColumnCenter>
                        <div>
                            <FlexMarginBottom>
                                <BoxText>User Name</BoxText>
                                {edit ?
                                    <div>
                                        <StyledInput
                                            // error
                                            label=""
                                            variant="outlined"
                                            fullWidth
                                            placeholder="Enter max 50 characters"
                                        />

                                        <JustifySpace>
                                            <div>
                                                <WarningBox>
                                                    <InfoIcon/>
                                                    <Typography>Please check for duplicates.</Typography>
                                                    {/*<Typography>The same user name exists.</Typography>*/}
                                                </WarningBox>
                                            </div>
                                            <NumberText>
                                                0 / 50
                                            </NumberText>
                                        </JustifySpace>

                                        <ButtonStyle1 disableRipple>Duplicate Check</ButtonStyle1>

                                        <SubText>
                                            * Enter max 50 characters using English<br/>
                                            &nbsp;&nbsp;&nbsp;letters, numbers, and underscores without<br/>
                                            &nbsp;&nbsp;&nbsp;case sensitivity.
                                        </SubText>
                                    </div>
                                    :
                                    <BoxText3>
                                        taeyeon
                                    </BoxText3>
                                }
                            </FlexMarginBottom>

                            {user ?
                                <FlexMarginBottom>
                                    <BoxText>Password</BoxText>
                                    <div>
                                        <LineButtonStyle2 onClick={handleClickResetPassword} disableRipple>
                                            Reset Password
                                        </LineButtonStyle2>
                                        {resetPassword &&
                                            <div>
                                                <RedText>abc1234def</RedText>
                                                <WarningBox2>
                                                    <InfoIcon/>
                                                    <Typography>Please forward the generated password<br/> to the User Name administrator.</Typography>
                                                </WarningBox2>
                                            </div>
                                        }
                                    </div>
                                </FlexMarginBottom>
                                :
                                <AlignCenterMargin>
                                    <BoxText>Password</BoxText>
                                    {edit ?
                                        <AlignCenter>
                                            <StyledPasswordInput
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
                                        :

                                        <LineButtonStyle2 onClick={handleClickAdministratorEdit} disableRipple>
                                            Change Password
                                        </LineButtonStyle2>
                                    }
                                </AlignCenterMargin>
                            }

                            {edit &&
                                <AlignCenterMargin>
                                    <BoxText>New Password</BoxText>
                                    <AlignCenter>
                                        <StyledPasswordInput
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
                                </AlignCenterMargin>
                            }
                            {edit &&
                                <AlignCenter>
                                    <BoxText>Confirm<br/>New Password</BoxText>
                                    <div>
                                        <AlignCenter>
                                            <StyledPasswordInput
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

                                </AlignCenter>
                            }
                        </div>
                    </Flex>

                    <FlexMarginTop>
                        <BoxText>Notes</BoxText>
                        <div>
                            <div>
                                <StyledTextarea
                                    minRows={3}
                                    maxRows={3}
                                    placeholder="There are no notes."
                                />
                                <FlexEnd>
                                    <NumberText>
                                        0 / 5,000
                                    </NumberText>
                                </FlexEnd>
                            </div>
                            <SubText>
                                * This note is visible to all administrators.
                            </SubText>
                        </div>
                    </FlexMarginTop>
                </BoxStyle>
            </ContainerIn>

            {user ?
                <ActionBoxStart>
                    <DeleteButton disableRipple>
                        Delete account
                    </DeleteButton>
                </ActionBoxStart>
                :
                <ActionBox>
                    <ButtonStyle onClick={edit ? handleCloseAdministratorEdit : handleCloseDialog} disableRipple>
                        Cancel
                    </ButtonStyle>

                    <ControlButton onClick={edit ? null : handleClickAdministratorEdit} disableRipple>
                        {edit ? 'Save' : 'Edit'}
                    </ControlButton>
                </ActionBox>
            }

        </Container>
    );
}

export default AdministratorDialog;