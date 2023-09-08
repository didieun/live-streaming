import React from 'react';
import {
    ButtonStyle,
    ContentsBox, FlexColumn,
    TopBox,
    TextStyle, ButtonBox, DeclineButton,
    ImageText, NoImageBox, ButtonIcon, TextStyle2, IdText
} from "./styles/MobileViewerInviteToStreamStyle";
import {Dialog, Slide, Typography} from "@mui/material";
import {ReactComponent as MobileCloseIcon} from "../../../common/images/MobileCloseIcon.svg";
import {ReactComponent as BannerNoImageIcon} from "../../../common/images/BannerNoImageIcon.svg";
import TestVideoImage from "../../../common/images/TestVideoImage.jpg";

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

function MobileViewerInviteToStream(props) {
    const { open, handleClose, handleClickAlertDialogOpen } = props;

    return (
        <Dialog
            fullScreen
            open={open}
            onClose={handleClose}
            TransitionComponent={Transition}
        >
            <TopBox>
                <ButtonIcon onClick={handleClose} disableRipple>
                    <MobileCloseIcon/>
                </ButtonIcon>
                <Typography>Invite to Stream</Typography>
            </TopBox>

            <FlexColumn>
                <ContentsBox>
                    <NoImageBox>
                        <BannerNoImageIcon/>
                        <ImageText>
                            Channel Banner Image
                        </ImageText>
                    </NoImageBox>

                    {/*이미지 있는 경우*/}
                    {/*<ImageBox>*/}
                    {/*    <img src={TestVideoImage} alt='image'/>*/}
                    {/*</ImageBox>*/}

                    <TextStyle>
                        We are looking for streamers to broadcast live on
                        various topics on our channel.
                    </TextStyle>

                    <IdText>Channel ID</IdText>

                    <TextStyle2>
                        <span>Invitee Nickname</span> is the best streamer for live streaming on our channel.<br/>
                        Please accept the invitation!
                    </TextStyle2>

                </ContentsBox>

                <ButtonBox>
                    <DeclineButton onClick={handleClose} disableRipple>
                        Decline
                    </DeclineButton>

                    <ButtonStyle onClick={handleClickAlertDialogOpen} disableRipple>
                        Accept
                    </ButtonStyle>
                </ButtonBox>

            </FlexColumn>


        </Dialog>
    );
}

export default MobileViewerInviteToStream;
