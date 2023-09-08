import React from 'react';
import {Container, ContainerIn, LeftBox} from "./styles/MobileViewerLandscapeStyle";
import MobileViewerLandscapeVideo from "./video/MobileViewerLandscapeVideo";
import MobileViewerLandscapeInfo from "./info/MobileViewerLandscapeInfo";
import MobileViewerLandscapeChat from "./chat/MobileViewerLandscapeChat";

function MobileViewerLandscape(props) {
    const {handleClickLandscapeScreen, handleClickFullScreen, fullScreen, handleClickChannelInfoOpen, handleClickShareOpen, handleClickGiveAPointGiftOpen} = props;
    const [chatOpen, setChatOpen] = React.useState(false);

    const handleClickChatOpen = () => {
        setChatOpen(!chatOpen);
    };

    return (
        <Container >
            {fullScreen ?
                <MobileViewerLandscapeVideo
                    handleClickLandscapeScreen={handleClickLandscapeScreen}
                    handleClickFullScreen={handleClickFullScreen}
                    fullScreen={fullScreen}
                    handleClickGiveAPointGiftOpen={handleClickGiveAPointGiftOpen}
                    handleClickChatOpen={handleClickChatOpen}
                />
                :
                <ContainerIn>
                    <LeftBox>
                        <MobileViewerLandscapeVideo
                            handleClickLandscapeScreen={handleClickLandscapeScreen}
                            handleClickFullScreen={handleClickFullScreen}
                            fullScreen={fullScreen}
                            chatOpen={chatOpen}
                            handleClickGiveAPointGiftOpen={handleClickGiveAPointGiftOpen}
                            handleClickChatOpen={handleClickChatOpen}
                        />
                        <MobileViewerLandscapeInfo
                            handleClickChannelInfoOpen={handleClickChannelInfoOpen}
                            handleClickShareOpen={handleClickShareOpen}
                        />
                    </LeftBox>

                    {chatOpen &&
                        <MobileViewerLandscapeChat handleClickGiveAPointGiftOpen={handleClickGiveAPointGiftOpen}/>
                    }
                </ContainerIn>
            }
        </Container>
    );
}

export default MobileViewerLandscape;