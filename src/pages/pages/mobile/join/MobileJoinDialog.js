import React from 'react';
import {
    AlignCenter,
    AlignEnd,
    ButtonIcon, ButtonStyle, ChildrenBox, ChildrenBoxIn,
    DialogBox,
    DialogHeader, Flex, MarginBottom30, TextStyle,
    TitleText,
    ButtonStyle1,
    NumberText,
    StyledInput, SubText,
    WarningBox, AlignEnd2, CheckBox, FormControlLabelCheckBox, LoginText, LoginButton, JustifyCenter
} from "./styles/MobileJoinDialogStyle";
import {ReactComponent as SettingDialogCloseIcon} from "../../common/images/SettingDialogCloseIcon.svg";
import {ReactComponent as AimmLogo} from "../../common/images/AimmLogo.svg";
import {ReactComponent as InfoIcon} from "../../common/images/InfoIcon.svg";
import {ReactComponent as EyeIcon} from "../../common/images/EyeIcon.svg";
import {ReactComponent as EyeClosedIcon} from "../../common/images/EyeClosedIcon.svg";
import {ReactComponent as CheckBrokenIcon} from "../../common/images/CheckBrokenIcon.svg";
import {ReactComponent as Checked} from "../../common/images/Checked.svg";
import {ReactComponent as UnChecked} from "../../common/images/UnChecked.svg";
import {Checkbox, Slide, Typography} from "@mui/material";

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

function MobileJoinDialog(props) {
    const { onClose, open } = props;
    const [password, setPassword] = React.useState(false);
    const [confirmNewPassword, setConfirmNewPassword] = React.useState(false);

    const handleClickPassword = () => {
        setPassword(!password);
    };

    const handleClickConfirmNewPassword = () => {
        setConfirmNewPassword(!confirmNewPassword);
    };

    return (
        <DialogBox open={open} fullScreen TransitionComponent={Transition}>
            <DialogHeader>
                <AlignEnd>
                    <AimmLogo style={{width: 100}}/>
                    <TitleText>
                        Join
                    </TitleText>
                </AlignEnd>

                <ButtonIcon onClick={onClose} disableRipple>
                    <SettingDialogCloseIcon/>
                </ButtonIcon>
            </DialogHeader>

            <ChildrenBox>
                <ChildrenBoxIn>
                    <MarginBottom30>
                        <TextStyle>User Name</TextStyle>

                        <div>
                            <AlignCenter>
                                <StyledInput
                                    // error
                                    label=""
                                    variant="outlined"
                                    fullWidth
                                    placeholder=""
                                />

                                <ButtonStyle1 disableRipple>Duplicate Check</ButtonStyle1>
                            </AlignCenter>

                            <AlignEnd2>
                                <NumberText>
                                    0 / 50
                                </NumberText>
                            </AlignEnd2>

                            <WarningBox>
                                <InfoIcon/>
                                <Typography>Please check for duplicates.</Typography>
                                {/*<Typography>The same user name exists.</Typography>*/}
                                {/*<Typography>User Name must only contain alphanumeric characters.</Typography>*/}
                                {/*<Typography>User Name must be between 4 and 50 characters.</Typography>*/}
                                {/*<Typography>This User Name is unavailable.</Typography>*/}
                            </WarningBox>

                            <SubText>
                                * Enter max 50 characters using English letters, numbers, and<br/>
                                &nbsp;&nbsp;&nbsp;underscores without case sensitivity.
                            </SubText>
                        </div>
                    </MarginBottom30>

                    <MarginBottom30>
                        <TextStyle>Password</TextStyle>

                        <div>
                            <AlignCenter>
                                <StyledInput
                                    type={password ? 'text' : 'password'}
                                    placeholder=""
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
                    </MarginBottom30>

                    <MarginBottom30>
                        <TextStyle>Confirm <br/>New Password</TextStyle>

                        <div>
                            <AlignCenter>
                                <StyledInput
                                    type={confirmNewPassword ? 'text' : 'password'}
                                    placeholder=""
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

                            {/*<WarningBox>*/}
                            {/*    <InfoIcon/>*/}
                            {/*    <Typography>Please enter your ‘Confirm Password’ again.</Typography>*/}
                            {/*</WarningBox>*/}

                        </div>
                    </MarginBottom30>

                    <FormControlLabelCheckBox
                        control={<Checkbox checkedIcon={<Checked />} icon={<UnChecked />}/>}
                        label={<Typography>I agree to Aimm tv’s <span>Terms of Service</span>, <span>Privacy Policy</span></Typography>}
                    />

                </ChildrenBoxIn>
                <JustifyCenter>
                    <ButtonStyle disableRipple>
                        Sign Up
                    </ButtonStyle>

                    <AlignCenter>
                        <LoginText>
                            Already a Aimm tv user?
                        </LoginText>
                        <LoginButton disableRipple>
                            Log In
                        </LoginButton>
                    </AlignCenter>
                </JustifyCenter>

            </ChildrenBox>
        </DialogBox>
    );
}

export default MobileJoinDialog;