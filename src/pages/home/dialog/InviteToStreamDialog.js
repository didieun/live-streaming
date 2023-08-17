import React from 'react';
import {
    NoticeContainer,
    ImageText,
    NoImageBox,
    ImageBox,
    ActionBox, ButtonStyle, ControlButton, TextStyle,IdText
} from "./styles/InviteToStreamDialogStyle";
import {ReactComponent as BannerNoImageIcon} from "../../common/images/BannerNoImageIcon.svg";
import TestVideoImage from "../../common/images/TestVideoImage.jpg";

function InviteToStreamDialog(props) {
    const {acceptClick} = props;

    return (
        <NoticeContainer>
            <NoImageBox>
                <BannerNoImageIcon/>
                <ImageText>
                    Channel Banner Image
                </ImageText>
            </NoImageBox>

             {/*이미지 있는경우*/}
            {/*<ImageBox>*/}
            {/*    <img src={TestVideoImage} alt='image'/>*/}
            {/*</ImageBox>*/}

            <TextStyle>
                We are looking for streamers to broadcast live on<br/>
                various topics on our channel.
            </TextStyle>

            <IdText>Channel ID</IdText>

            <TextStyle>
                <span>Invitee Nickname</span> is the best streamer for live streaming on our channel.<br/>
                Please accept the invitation!
            </TextStyle>

            <ActionBox>
                <ButtonStyle disableRipple>
                    Decline
                </ButtonStyle>
                <ControlButton onClick={acceptClick} disableRipple>
                    Accept
                </ControlButton>
            </ActionBox>

        </NoticeContainer>
    );
}

export default InviteToStreamDialog;
