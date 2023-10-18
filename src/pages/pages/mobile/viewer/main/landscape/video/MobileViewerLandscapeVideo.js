import React from 'react';
import {
    AlignCenter,
    ButtonIcon,
    ButtonIconMargin, ChatBox,
    Container,
    ControlBox,
    PlayBox,
    TimeText
} from "./styles/MobileViewerLandscapeVideoStyle";
import {ReactComponent as MobileVideoLiveIcon} from "../../../../../common/images/MobileVideoLiveIcon.svg";
import {ReactComponent as VideoPlayIcon} from "../../../../../common/images/VideoPlayIcon.svg";
import {ReactComponent as MobilePauseIcon} from "../../../../../common/images/MobilePauseIcon.svg";
import {ReactComponent as MobileFullScreenIcon} from "../../../../../common/images/MobileFullScreenIcon.svg";
import {ReactComponent as MinimiseIcon} from "../../../../../common/images/MinimiseIcon.svg";
import {ReactComponent as MobileVolumeIcon} from "../../../../../common/images/MobileVolumeIcon.svg";
import {ReactComponent as MobileVolumeOffIcon} from "../../../../../common/images/MobileVolumeOffIcon.svg";
import {ReactComponent as ChatIcon} from "../../../../../common/images/ChatIcon.svg";
import {ReactComponent as ChatIOffcon} from "../../../../../common/images/ChatIOffcon.svg";
import {ReactComponent as MobileViewerGiftIcon} from "../../../../../common/images/MobileViewerGiftIcon.svg";

function MobileViewerLandscapeVideo(props) {
    const {handleClickLandscapeScreen, handleClickFullScreen, fullScreen, handleClickGiveAPointGiftOpen, handleClickChatOpen, chatOpen} = props;
    const [play, setPlay] = React.useState(true);
    const [volume, setVolume] = React.useState(true);
    const [screen, setScreen] = React.useState(true);

    const handleClickPlay = () => {
        setPlay(!play);
    };

    const handleClickVolume = () => {
        setVolume(!volume);
    };

    return (
        <Container fullScreen={fullScreen}>
            <PlayBox>
                <ButtonIcon onClick={handleClickPlay} disableRipple>
                    {play ?
                        <VideoPlayIcon/>
                        :
                        <MobilePauseIcon/>
                    }
                </ButtonIcon>
            </PlayBox>

            <ChatBox>
                <ButtonIcon onClick={handleClickChatOpen} disableRipple>
                    {chatOpen ?
                        <ChatIOffcon/>
                        :
                        <ChatIcon/>
                    }
                </ButtonIcon>
            </ChatBox>

            <ControlBox>
                <AlignCenter>
                    <MobileVideoLiveIcon/>
                    <TimeText>0:00:10</TimeText>
                </AlignCenter>

                <AlignCenter>
                    <ButtonIcon onClick={handleClickVolume} disableRipple>
                        {volume ?
                            <MobileVolumeIcon/>
                            :
                            <MobileVolumeOffIcon/>
                        }
                    </ButtonIcon>

                    <ButtonIconMargin onClick={handleClickGiveAPointGiftOpen} disableRipple>
                        <MobileViewerGiftIcon />
                    </ButtonIconMargin>

                    {fullScreen ?
                        <ButtonIcon onClick={handleClickLandscapeScreen} disableRipple>
                            <MinimiseIcon width='21' height='20'/>
                        </ButtonIcon>
                        :
                        <ButtonIcon onClick={handleClickFullScreen} disableRipple>
                            <MobileFullScreenIcon />
                        </ButtonIcon>
                    }
                </AlignCenter>
            </ControlBox>
        </Container>
    );
}

export default MobileViewerLandscapeVideo;