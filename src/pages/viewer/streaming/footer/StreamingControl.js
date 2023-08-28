import React from 'react';
import {
    AlignCenter,
    ButtonIcon,
    TextStyle,
    JustifySpace,
    ScenesControlBox,
    ScenesVideo,
    SliderBox,
    ButtonIconMarginLeft, ScenesBoxIn, ScreenButton, EyeButtonIcon, PopoverBox,
} from "./styles/StreamingControlStyle";
import {ReactComponent as StreamingMicOnIcon} from "../../../common/images/StreamingMicOnIcon.svg";
import {ReactComponent as StreamingMicOffIcon} from "../../../common/images/StreamingMicOffIcon.svg";
import {ReactComponent as EyeOpenIcon} from "../../../common/images/EyeOpenIcon.svg";
import {ReactComponent as EyeClosedIcon} from "../../../common/images/EyeClosedIcon.svg";
import {ReactComponent as LockIcon} from "../../../common/images/LockIcon.svg";
import {ReactComponent as LockOpenIcon} from "../../../common/images/LockOpenIcon.svg";
import {ReactComponent as TurnLeftAndRightIcon} from "../../../common/images/TurnLeftAndRightIcon.svg";
import {ArrowTooltipStyleGray, TooltipStyle} from "../styles/StreamingStyle";
import {List, ListItem, Typography} from "@mui/material";
import TooltipArrowGrayBottom from "../../../common/images/TooltipArrowGrayBottom.svg";

function StreamingControl(props) {
    const {onClick, sceneIcon, title, scenes, handleClickShow, handleClickScenes, show, handleClickLock, lock, micValue, handleClickMicOff, handleClickMicOn, handleChangeMicSlider} = props;
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClickLayout = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleCloseLayout = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

    return (
        <ScenesBoxIn basic={title === 'Video Capture'}>
            {title === 'Video Capture' &&
                <JustifySpace>
                    {show ?
                        micValue > 0 ?
                            <TooltipStyle
                                title="Mute"
                                placement="bottom"
                            >
                                <ButtonIcon onClick={handleClickMicOff} disabled={!show} disableRipple>
                                    <StreamingMicOnIcon/>
                                </ButtonIcon>
                            </TooltipStyle>
                            :
                            <TooltipStyle
                                title="Unmute"
                                placement="bottom"
                            >
                                <ButtonIcon onClick={handleClickMicOn} disabled={!show} disableRipple>
                                    <StreamingMicOffIcon/>
                                </ButtonIcon>
                            </TooltipStyle>
                        :
                        <ButtonIcon onClick={handleClickMicOn} disabled={!show} disableRipple>
                            <StreamingMicOffIcon/>
                        </ButtonIcon>
                    }
                    <SliderBox value={show ? micValue : 0} disabled={!show} onChange={handleChangeMicSlider} aria-label="Default"/>
                </JustifySpace>
            }
            <ArrowTooltipStyleGray
                title={
                    <div>
                        <Typography>Sources can be reordered by dragging and dropping them.</Typography>
                    </div>
                }
                placement="top"
                bottom={'-30px'}
                left={title === 'Background' ? '100px' : '52%'}
                triangle={TooltipArrowGrayBottom}
            >
                <div>
                    <ScenesVideo
                        onClick={show ? title === 'Screen Share' ? handleClickScenes : onClick : undefined}
                        disabled={!show}
                        select={scenes}
                        disableRipple
                    >

                        {sceneIcon}

                        {title === 'Video Capture' &&
                            <TooltipStyle
                                title="Flip the screen"
                                placement="bottom"
                            >
                                <ScreenButton>
                                    <div aria-describedby={id} onClick={handleClickLayout}>
                                        <TurnLeftAndRightIcon/>
                                    </div>
                                </ScreenButton>
                            </TooltipStyle>
                        }
                    </ScenesVideo>
                </div>

            </ArrowTooltipStyleGray>
            <ScenesControlBox>
                <TextStyle show={show}>{title}</TextStyle>
                <AlignCenter>
                    <TooltipStyle
                        title={show ? "Hidden" : 'Show'}
                        placement="top"
                    >
                        <EyeButtonIcon onClick={handleClickShow} show={show} disableRipple>
                            {show ?
                                <EyeOpenIcon/>
                                :
                                <EyeClosedIcon/>
                            }
                        </EyeButtonIcon>
                    </TooltipStyle>

                    <ButtonIconMarginLeft disabled={!show} onClick={handleClickLock} disableRipple>
                        {lock ?
                            <LockIcon/>
                            :
                            <LockOpenIcon/>
                        }
                    </ButtonIconMarginLeft>
                </AlignCenter>
            </ScenesControlBox>

            <PopoverBox
                id={id}
                open={open}
                anchorEl={anchorEl}
                onClose={handleCloseLayout}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'center',
                }}
                transformOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center',
                }}
            >
                <List>
                    <ListItem onClick={handleCloseLayout}>Left/Right flip</ListItem>
                    <ListItem onClick={handleCloseLayout}>Up/Down flip</ListItem>
                </List>

            </PopoverBox>
        </ScenesBoxIn>
    );
}

export default StreamingControl;