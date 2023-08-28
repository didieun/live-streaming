import React from 'react';
import {
    AlignCenter,
    BoxStyle,
    Container, CopyButton, SubText, SubVideoBox, TextStyle, TitleText, UrlText, VideoBox,
    ImageShareBox,
    SceneIconUser,
    SubVideoScreenShareBox,
    TextShareBox
} from "./styles/ReadyToGoLiveStyle";
import {Typography} from "@mui/material";
import TestImage from "../../common/images/TestImage.svg";
import TestVideoImage from "../../common/images/TestVideoImage.jpg";
import MainScreenImage from "../../common/images/MainScreenImage.png";
import {ReactComponent as SceneUserIcon} from "../../common/images/SceneUserIcon.svg";
import {ReactComponent as SceneChromecastIcon} from "../../common/images/SceneChromecastIcon.svg";

function ReadyToGoLive(props) {

    return (
        <Container>
            <VideoBox>
                <img src={MainScreenImage} alt='image'/>

                <SubVideoBox>
                    <SceneIconUser>
                        <SceneUserIcon/>
                    </SceneIconUser>
                </SubVideoBox>

                <SubVideoScreenShareBox>
                    <SceneChromecastIcon />
                    {/*<img src={TestVideoImage} alt='image'/>*/}
                </SubVideoScreenShareBox>
                <TextShareBox>
                    <Typography>abc</Typography>
                </TextShareBox>
                <ImageShareBox>
                    <img src={TestImage} alt='image' style={{width: 60}}/>
                </ImageShareBox>
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