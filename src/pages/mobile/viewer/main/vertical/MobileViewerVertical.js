import React from 'react';
import {ChatButton, Container, ContainerIn, DrawerBox} from "./styles/MobileViewerVerticalStyle";
import MobileViewerVideo from "../vertical/video/MobileViewerVideo";
import {Typography} from "@mui/material";
import MobileViewerInfo from "../info/MobileViewerInfo";
import {ReactComponent as ChatIcon} from "../../../../common/images/ChatIcon.svg";
import MobileViewerIntroduction from "../introduction/MobileViewerIntroduction";
import MobileViewerIntroductionDrawer from "../introduction/MobileViewerIntroductionDrawer";
import MobileViewerChatDrawer from "../chat/MobileViewerChatDrawer";

function MobileViewerVertical(props) {
    const {fullScreen, handleClickScreen, handleClickFullScreen, handleClickChannelInfoOpen, handleClickShareOpen, handleClickGiveAPointGiftOpen} = props;
    const [scroll, setScrollOpen] = React.useState(false);
    const [introductionOpen, setIntroductionOpen] = React.useState(false);
    const [chatOpen, setChatOpen] = React.useState(false);

    const handleClickIntroductionOpen = () => {
        setIntroductionOpen(true);
        setScrollOpen(true);
    };

    const handleClickChatOpen = () => {
        setChatOpen(true);
        setScrollOpen(true);
    };

    const handleClose = () => {
        setIntroductionOpen(false);
        setChatOpen(false);
        setScrollOpen(false);
    };


    return (
        <Container >
            <MobileViewerVideo handleClickScreen={handleClickScreen} handleClickFullScreen={handleClickFullScreen} fullScreen={fullScreen}/>

            <ContainerIn open={scroll}>
                <MobileViewerInfo handleClickChannelInfoOpen={handleClickChannelInfoOpen} handleClickShareOpen={handleClickShareOpen}/>
                <ChatButton onClick={handleClickChatOpen} disableRipple>
                    <ChatIcon/>
                    <Typography>Live Chat</Typography>
                </ChatButton>

                <MobileViewerIntroduction handleClickIntroductionOpen={handleClickIntroductionOpen}/>

                {introductionOpen &&
                    <DrawerBox open={introductionOpen}>
                        <MobileViewerIntroductionDrawer handleClose={handleClose}/>
                    </DrawerBox>
                }

                {chatOpen &&
                    <DrawerBox open={chatOpen}>
                        <MobileViewerChatDrawer handleClose={handleClose} handleClickGiveAPointGiftOpen={handleClickGiveAPointGiftOpen}/>
                    </DrawerBox>
                }
            </ContainerIn>
        </Container>
    );
}

export default MobileViewerVertical;