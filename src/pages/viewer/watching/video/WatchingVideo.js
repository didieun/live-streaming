import React from 'react';
import {
    AlignCenter,
    ButtonIcon,
    Container,
    SubVideoBox, TimeText,
    VideoBox,
    VideoBoxIn,
    VideoControlBox,
    MarginLeft,
    SoundSliderBox
} from "./styles/WatchingVideoStyle";
import {ReactComponent as VideoPlayIcon} from "../../../common/images/VideoPlayIcon.svg";
import {ReactComponent as PauseIcon} from "../../../common/images/PauseIcon.svg";
import {ReactComponent as FullScreenIcon} from "../../../common/images/FullScreenIcon.svg";
import {ReactComponent as StreamingVolumeIcon} from "../../../common/images/StreamingVolumeIcon.svg";
import {ReactComponent as StreamingVolumeOffIcon} from "../../../common/images/StreamingVolumeOffIcon.svg";
import {ReactComponent as MinimiseIcon} from "../../../common/images/MinimiseIcon.svg";
import {TooltipStyle} from "../../streaming/styles/StreamingStyle";

function WatchingVideo(props) {
    const [isHovering, setIsHovering] = React.useState(false);
    const [volume, setVolume] = React.useState(true);
    const [play, setPlay] = React.useState(true);
    const [fullScreen, setFullScreen] = React.useState(true);
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
        setPlay(true);
    };

    const handleClickPause = () => {
        setPlay(false);
    };

    const handleClickFullScreen = () => {
        setFullScreen(true);
    };

    const handleClickSmallScreen = () => {
        setFullScreen(false);
    };

    const handleChangeVolumeSlider = (event, newValue) => {
        setVolumeValue(newValue);
    };

    return (
        <Container
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
        >
            <VideoBox>
                <VideoBoxIn/>
                <SubVideoBox>

                </SubVideoBox>
                {isHovering &&
                    <VideoControlBox>
                        <AlignCenter>
                            {play ?
                                <TooltipStyle
                                    title="Play"
                                    placement="bottom"
                                >
                                    <ButtonIcon onClick={handleClickPause} disableRipple>
                                        <VideoPlayIcon/>
                                    </ButtonIcon>
                                </TooltipStyle>
                                :
                                <TooltipStyle
                                    title="Pause"
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
                                        title="mute"
                                        placement="bottom"
                                    >
                                        <ButtonIcon onClick={handleClickVolumeOff} disableRipple>
                                            <StreamingVolumeIcon/>
                                        </ButtonIcon>
                                    </TooltipStyle>
                                    :
                                    <TooltipStyle
                                        title="unmute"
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
                                title="Full screen"
                                placement="bottom"
                            >
                                <ButtonIcon onClick={handleClickSmallScreen} disableRipple>
                                    <FullScreenIcon/>
                                </ButtonIcon>
                            </TooltipStyle>
                            :
                            <TooltipStyle
                                title="End of full screen"
                                placement="bottom"
                            >
                                <ButtonIcon onClick={handleClickFullScreen} disableRipple>
                                    <MinimiseIcon/>
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