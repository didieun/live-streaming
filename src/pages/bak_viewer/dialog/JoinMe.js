import React from 'react';
import {
    Container, Title, TextStyle, ButtonStyle, JustifyCenter, UrlBox, ButtonIcon
} from "./styles/JoinMeStyle";
import {ReactComponent as CopyIcon} from "../../common/images/CopyIcon.svg";
import {Typography} from "@mui/material";

function JoinMe(props) {

    return (
        <Container>
            <Title>URL</Title>

            <UrlBox>
                <Typography>https://play.dkjfkfj.com/kdjfl/dkjfoow24945</Typography>
                <ButtonIcon disableRipple>
                    <CopyIcon/>
                </ButtonIcon>
            </UrlBox>

            <TextStyle>
                Live broadcast is in progress on service name. <br/>
                Click the link below and join us!
            </TextStyle>

            <JustifyCenter>
                <ButtonStyle disableRipple>Cancel</ButtonStyle>
            </JustifyCenter>

        </Container>
    );
}

export default JoinMe;