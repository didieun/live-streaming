import React from 'react';
import {
    AlignCenter,
    ButtonIcon, ButtonStyle,
    Container, MarginLeft, MicSliderBox, ScreenButton, SoundSliderBox, TextStyle,
} from "./styles/StreamingFooterStyle";
import {ReactComponent as StreamingSettingsIcon} from "../../../common/images/StreamingSettingsIcon.svg";
import {ReactComponent as StreamingScreenIcon} from "../../../common/images/StreamingScreenIcon.svg";
import {ReactComponent as StreamingVideoOnIcon} from "../../../common/images/StreamingVideoOnIcon.svg";
import {ReactComponent as StreamingVideoOffIcon} from "../../../common/images/StreamingVideoOffIcon.svg";
import {ReactComponent as StreamingMicOnIcon} from "../../../common/images/StreamingMicOnIcon.svg";
import {ReactComponent as StreamingMicOffIcon} from "../../../common/images/StreamingMicOffIcon.svg";
import {ReactComponent as StreamingVolumeIcon} from "../../../common/images/StreamingVolumeIcon.svg";
import {ReactComponent as StreamingVolumeOffIcon} from "../../../common/images/StreamingVolumeOffIcon.svg";
import {Typography} from "@mui/material";
import {TooltipStyle} from "../styles/StreamingStyle";

function StreamingFooter({handleClickLiveDialogOpen}) {
    const [video, setVideo] = React.useState(true);
    const [mic, setMic] = React.useState(true);
    const [volume, setVolume] = React.useState(true);
    const [micValue, setMicValue] = React.useState(50);
    const [volumeValue, setVolumeValue] = React.useState(50);

    const handleClickVideo = () => {
        setVideo(!video);
    };

    const handleClickMicOn = () => {
        setMic(true);
        setMicValue(50);
    };

    const handleClickMicOff = () => {
        setMic(false);
        setMicValue(0);
    };

    const handleClickVolumeOn = () => {
        setVolume(true);
        setVolumeValue(50);
    };

    const handleClickVolumeOff = () => {
        setVolume(false);
        setVolumeValue(0);
    };

    const handleChangeMicSlider = (event, newValue) => {
        setMicValue(newValue);
    };

    const handleChangeVolumeSlider = (event, newValue) => {
        setVolumeValue(newValue);
    };

    return (
        <Container>
            <AlignCenter>
                <ButtonIcon disableRipple>
                    <StreamingSettingsIcon/>
                </ButtonIcon>
                <ScreenButton disableRipple>
                    <StreamingScreenIcon/>
                    <Typography>Main Screen Share</Typography>
                </ScreenButton>
            </AlignCenter>

            <AlignCenter>
                <ButtonIcon onClick={handleClickVideo} disableRipple>
                    {video ?
                        <StreamingVideoOnIcon/>
                        :
                        <StreamingVideoOffIcon/>
                    }
                </ButtonIcon>

                <MarginLeft>
                    {mic ?
                        <TooltipStyle
                            title="mute"
                            placement="top"
                        >
                            <ButtonIcon onClick={handleClickMicOff} disableRipple>
                                <StreamingMicOnIcon/>
                            </ButtonIcon>
                        </TooltipStyle>
                        :
                        <TooltipStyle
                            title="unmute"
                            placement="top"
                        >
                            <ButtonIcon onClick={handleClickMicOn} disableRipple>
                                <StreamingMicOffIcon/>
                            </ButtonIcon>
                        </TooltipStyle>
                    }
                    <MicSliderBox value={micValue} onChange={handleChangeMicSlider} aria-label="Default"/>
                </MarginLeft>

                <MarginLeft>
                    {volume ?
                        <TooltipStyle
                            title="mute"
                            placement="top"
                        >
                            <ButtonIcon onClick={handleClickVolumeOff} disableRipple>
                                <StreamingVolumeIcon/>
                            </ButtonIcon>
                        </TooltipStyle>
                        :
                        <TooltipStyle
                            title="unmute"
                            placement="top"
                        >
                            <ButtonIcon onClick={handleClickVolumeOn} disableRipple>
                                <StreamingVolumeOffIcon/>
                            </ButtonIcon>
                        </TooltipStyle>
                    }
                    <SoundSliderBox value={volumeValue} onChange={handleChangeVolumeSlider} aria-label="Default"/>
                </MarginLeft>
            </AlignCenter>

            <AlignCenter>
                <TextStyle>
                    Off Line
                </TextStyle>
                <ButtonStyle onClick={handleClickLiveDialogOpen} disableRipple>
                    Start Stream
                </ButtonStyle>
            </AlignCenter>
        </Container>
    );
}

export default StreamingFooter;