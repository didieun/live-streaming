import React from 'react';
import {
    ButtonIcon, ChildrenBox,
    DialogBox,
    DialogHeader,
    CheckBoxLabel,
    ErrorBox,
    ErrorText,
    IdInput,
    LineStyle,
    LoginButton,
    LogoText,
    PasswordInput, SignUpBox, SignUpButton, TextStyle
} from "./styles/LogInDialogStyle";
import {ReactComponent as SettingDialogCloseIcon} from "../../common/images/SettingDialogCloseIcon.svg";
import {ReactComponent as ErrorIcon} from "../../common/images/ErrorIcon.svg";
import {ReactComponent as StreamingChecked} from "../../common/images/StreamingChecked.svg";
import {ReactComponent as StreamingUnChecked} from "../../common/images/StreamingUnChecked.svg";
import {Checkbox, OutlinedInput} from "@mui/material";

function LogInDialog(props) {
    const {open, onClose} = props;

    return (
        <DialogBox open={open}>
            <DialogHeader>
                <ButtonIcon onClick={onClose} disableRipple>
                    <SettingDialogCloseIcon/>
                </ButtonIcon>
            </DialogHeader>

            <ChildrenBox>
                <LogoText>
                    Logo
                </LogoText>

                <IdInput variant="outlined">
                    <OutlinedInput
                        placeholder="ID"
                        // error
                    />
                </IdInput>
                <LineStyle/>
                <PasswordInput variant="outlined">
                    <OutlinedInput
                        type='password'
                        placeholder="Password"
                        error
                    />
                </PasswordInput>

                <ErrorBox>
                    <ErrorIcon/>
                    <ErrorText>
                        You entered the wrong ID or password.
                    </ErrorText>
                </ErrorBox>

                <LoginButton>
                    Log in
                </LoginButton>

                <CheckBoxLabel
                    value='checked'
                    control={<Checkbox checkedIcon={<StreamingChecked />} icon={<StreamingUnChecked />} disableRipple/>}
                    label="Stay logged in"
                    labelPlacement="end"
                />
                <SignUpBox>
                    <TextStyle>
                        Aren't you a member?
                    </TextStyle>
                    <SignUpButton disableRipple>
                        Sign up
                    </SignUpButton>
                </SignUpBox>
            </ChildrenBox>
        </DialogBox>
    );
}

export default LogInDialog;