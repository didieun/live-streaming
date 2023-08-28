import React from 'react';
import {
    AlignCenter,
    ButtonIcon,
    Container,
    SubVideoBox, TimeText,
    VideoBox,
    ChatCloseBox,
    VideoControlBox,
    MarginLeft,
    SoundSliderBox, FullScreenInfoBox,
    AvatarBox, UserName, TitleText, TextBox, AlignStart,
    IconColorSize,
    LiveBox,
    ViewersText, VideoBoxTop
} from "./styles/WatchingVideoStyle";
import {ReactComponent as VideoPlayIcon} from "../../../common/images/VideoPlayIcon.svg";
import {ReactComponent as PauseIcon} from "../../../common/images/PauseIcon.svg";
import {ReactComponent as FullScreenIcon} from "../../../common/images/FullScreenIcon.svg";
import {ReactComponent as StreamingVolumeIcon} from "../../../common/images/StreamingVolumeIcon.svg";
import {ReactComponent as StreamingVolumeOffIcon} from "../../../common/images/StreamingVolumeOffIcon.svg";
import {ReactComponent as MinimiseIcon} from "../../../common/images/MinimiseIcon.svg";
import {ReactComponent as AsideCloseArrowIcon} from "../../../common/images/AsideCloseArrowIcon.svg";
import {ReactComponent as ProfileUserIcon} from "../../../common/images/ProfileUserIcon.svg";
import {ReactComponent as ViewersUserIcon} from "../../../common/images/ViewersUserIcon.svg";
import {ReactComponent as LiveIcon} from "../../../common/images/LiveIcon.svg";
import {TooltipStyle} from "../../streaming/styles/StreamingStyle";
import {Typography} from "@mui/material";

function WatchingVideo(props) {
    const {handleClickFullScreen, fullScreen, open, handleClickChat, handleClickExitFullScreen} = props;
    const [isHovering, setIsHovering] = React.useState(false);
    const [volume, setVolume] = React.useState(true);
    const [play, setPlay] = React.useState(true);
    const [volumeValue, setVolumeValue] = React.useState(50);

    const handleMouseOver = () => {
        setIsHovering(true);
    };

    const handleMouseOut = () => {
        setIsHovering(false);
    };

    const handleClickVolumeOn = () => {
        setVolume(true);
        setVolumeValue(50);
    };

    const handleClickVolumeOff = () => {
        setVolume(false);
        setVolumeValue(0);
    };

    const handleClickPlay = () => {
        setPlay(!play);
    };

    const handleChangeVolumeSlider = (event, newValue) => {
        setVolumeValue(newValue);
    };

    return (
        <Container
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
            fullScreen={fullScreen}
        >
            <VideoBox>
                {fullScreen &&
                    <VideoBoxTop>
                        <FullScreenInfoBox>
                            <AvatarBox>
                                {/*<img src={TestProfileImage} alt='image'/>*/}

                                {/* 프로필 없을경우 */}
                                <ProfileUserIcon />
                            </AvatarBox>
                            <TextBox>
                                <AlignStart>
                                    <UserName>kingaaa</UserName>
                                    <TitleText>방송명 - OF SOLO VS SQUAD | BGMI UBG MOBILE LIVEOF SOLO VS SQUAD | BGMI UBG MOBILE LIVEOF SOLO VS SQUAD | BGMI UBG MOBILE LIVEOF SOLO VS SQUAD | BGMI</TitleText>
                                </AlignStart>

                                <AlignCenter>
                                    <LiveBox>
                                        <LiveIcon/>
                                        <Typography>LIVE</Typography>
                                    </LiveBox>
                                    <TimeText>0:00:10</TimeText>

                                    <IconColorSize>
                                        <ViewersUserIcon/>
                                    </IconColorSize>

                                    <ViewersText><span>5.5K</span> views</ViewersText>
                                </AlignCenter>
                            </TextBox>
                        </FullScreenInfoBox>
                        {!open &&
                            <ChatCloseBox>
                                <TooltipStyle
                                    title="Expand"
                                    placement="bottom"
                                >
                                    <ButtonIcon onClick={handleClickChat} disableRipple>
                                        <AsideCloseArrowIcon style={{transform: 'scaleX(-1)'}}/>
                                    </ButtonIcon>
                                </TooltipStyle>
                            </ChatCloseBox>
                        }
                    </VideoBoxTop>
                }

                {!open &&
                    <ChatCloseBox>
                        <TooltipStyle
                            title="Expand"
                            placement="bottom"
                        >
                            <ButtonIcon onClick={handleClickChat} disableRipple>
                                <AsideCloseArrowIcon style={{transform: 'scaleX(-1)'}}/>
                            </ButtonIcon>
                        </TooltipStyle>
                    </ChatCloseBox>
                }

                <SubVideoBox>

                </SubVideoBox>
                {isHovering &&
                    <VideoControlBox>
                        <AlignCenter>
                            {play ?
                                <TooltipStyle
                                    title="Pause"
                                    placement="bottom"
                                >
                                    <ButtonIcon onClick={handleClickPlay} disableRipple>
                                        <VideoPlayIcon/>
                                    </ButtonIcon>
                                </TooltipStyle>
                                :
                                <TooltipStyle
                                    title="Play"
                                    placement="bottom"
                                >
                                    <ButtonIcon onClick={handleClickPlay} disableRipple>
                                        <PauseIcon/>
                                    </ButtonIcon>
                                </TooltipStyle>
                            }


                            <MarginLeft>
                                {volume ?
                                    <TooltipStyle
                                        title="unmute"
                                        placement="bottom"
                                    >
                                        <ButtonIcon onClick={handleClickVolumeOff} disableRipple>
                                            <StreamingVolumeIcon/>
                                        </ButtonIcon>
                                    </TooltipStyle>
                                    :
                                    <TooltipStyle
                                        title="mute"
                                        placement="bottom"
                                    >
                                        <ButtonIcon onClick={handleClickVolumeOn} disableRipple>
                                            <StreamingVolumeOffIcon/>
                                        </ButtonIcon>
                                    </TooltipStyle>
                                }
                                <SoundSliderBox value={volumeValue} onChange={handleChangeVolumeSlider} aria-label="Default"/>
                            </MarginLeft>

                            <TimeText>0:00:10</TimeText>
                        </AlignCenter>

                        {fullScreen ?
                            <TooltipStyle
                                title="Exit Fullscreen"
                                placement="bottom"
                            >
                                <ButtonIcon onClick={handleClickExitFullScreen} disableRipple>
                                    <MinimiseIcon/>
                                </ButtonIcon>
                            </TooltipStyle>
                            :
                            <TooltipStyle
                                title="Fullscreen"
                                placement="bottom"
                            >
                                <ButtonIcon onClick={handleClickFullScreen} disableRipple>
                                    <FullScreenIcon/>
                                </ButtonIcon>
                            </TooltipStyle>
                        }


                    </VideoControlBox>
                }
            </VideoBox>
        </Container>
    );
}

export default WatchingVideo;