import React, {Component} from 'react';
import {
    CheckBoxLabel,
    Container,
    LoginButton,
    LogoText,
    SignUpButton,
    TextStyle,
    IdInput, PasswordInput, LineStyle, SignUpBox, ErrorBox, ErrorText
} from "./styles/LogInStyle";
import {Checkbox, OutlinedInput} from "@mui/material";
import {ReactComponent as UnChecked} from "../../common/images/UnChecked.svg";
import {ReactComponent as Checked} from "../../common/images/Checked.svg";
import {ReactComponent as ErrorIcon} from "../../common/images/ErrorIcon.svg";

class LogIn extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {

        return (
            <Container>
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
                        // error
                    />
                </PasswordInput>

                <ErrorBox>
                    <ErrorIcon/>
                    <ErrorText>
                        아이디나 비밀번호를 잘못 입력하셨습니다.
                    </ErrorText>
                </ErrorBox>

                <LoginButton>
                    Log in
                </LoginButton>

                <CheckBoxLabel
                    value='checked'
                    control={<Checkbox checkedIcon={<Checked />} icon={<UnChecked />} disableRipple/>}
                    label="로그인 상태 유지"
                    labelPlacement="end"
                />
                <SignUpBox>
                    <TextStyle>
                        회원이 아니신가요?
                    </TextStyle>
                    <SignUpButton disableRipple>
                        회원가입
                    </SignUpButton>
                </SignUpBox>
            </Container>
        );
    }
}

export default LogIn;