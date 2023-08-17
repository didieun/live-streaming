import React from 'react';
import {
    AlignCenter,
    BoxStyle,
    Container, CopyButton, SubText, SubVideoBox, TextStyle, TitleText, UrlText, VideoBox,
} from "./styles/ReadyToGoLiveStyle";
import {Typography} from "@mui/material";

function ReadyToGoLive(props) {

    return (
        <Container>
            <VideoBox>
                <SubVideoBox>

                </SubVideoBox>
            </VideoBox>

            <BoxStyle>
                <TitleText>Stream Info</TitleText>
                <TextStyle>This is the title.</TextStyle>
                <SubText>
                    This is the explanation.
                </SubText>
            </BoxStyle>

            <BoxStyle>
                <TitleText>Live Notification</TitleText>
                <TextStyle>Display notification messages</TextStyle>
                <AlignCenter>
                    <UrlText disableRipple>
                        <Typography>
                            http://www.pickl.tv/d9hWfc
                        </Typography>
                    </UrlText>
                    <CopyButton disableRipple>Copy</CopyButton>
                </AlignCenter>
            </BoxStyle>
        </Container>
    );
}

export default ReadyToGoLive;