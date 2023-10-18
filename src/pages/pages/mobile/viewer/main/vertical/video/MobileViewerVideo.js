import React from 'react';
import {
    AlignCenter,
    ButtonIcon,
    ButtonIconMargin,
    Container,
    ControlBox,
    PlayBox,
    TimeText
} from "./styles/MobileViewerVideoStyle";
import {ReactComponent as MobileVideoLiveIcon} from "../../../../../common/images/MobileVideoLiveIcon.svg";
import {ReactComponent as VideoPlayIcon} from "../../../../../common/images/VideoPlayIcon.svg";
import {ReactComponent as MobilePauseIcon} from "../../../../../common/images/MobilePauseIcon.svg";
import {ReactComponent as MobileFullScreenIcon} from "../../../../../common/images/MobileFullScreenIcon.svg";
import {ReactComponent as MinimiseIcon} from "../../../../../common/images/MinimiseIcon.svg";
import {ReactComponent as MobileVolumeIcon} from "../../../../../common/images/MobileVolumeIcon.svg";
import {ReactComponent as MobileVolumeOffIcon} from "../../../../../common/images/MobileVolumeOffIcon.svg";

function MobileViewerVideo(props) {
    const {handleClickScreen, handleClickFullScreen , fullScreen} = props;
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
        <Container >
            <PlayBox>
                <ButtonIcon onClick={handleClickPlay} disableRipple>
                    {play ?
                        <VideoPlayIcon/>
                        :
                        <MobilePauseIcon/>
                    }
                </ButtonIcon>
            </PlayBox>

            <ControlBox>
                <AlignCenter>
                    <MobileVideoLiveIcon/>
                    <TimeText>0:00:10</TimeText>
                </AlignCenter>

                <AlignCenter>
                    <ButtonIconMargin onClick={handleClickVolume} disableRipple>
                        {volume ?
                            <MobileVolumeIcon/>
                            :
                            <MobileVolumeOffIcon/>
                        }

                    </ButtonIconMargin>

                    {fullScreen ?
                        <ButtonIcon onClick={handleClickScreen} disableRipple>
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

export default MobileViewerVideo;