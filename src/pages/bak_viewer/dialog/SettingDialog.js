import React from 'react';
import {
    AsideBox, AsideTitle,
    ButtonIcon,
    Contents,
    DialogBox,
    DialogHeader,
    MenuBox, MenuButton,
    MenuTitle, TextStyle,
    TitleText,
    FormControlBox,
    Menu, ProgressBox, AlignBottom, VideoBox
} from "./styles/SettingDialogStyle";
import {Box, Select, Typography} from "@mui/material";
import {ReactComponent as SettingDialogCloseIcon} from "../../common/images/SettingDialogCloseIcon.svg";
import {ReactComponent as StreamingMicOnIcon} from "../../common/images/StreamingMicOnIcon.svg";
import {ReactComponent as StreamingVideoOnIcon} from "../../common/images/StreamingVideoOnIcon.svg";
import {ReactComponent as ArrowDownIcon} from "../../common/images/ArrowDownIcon.svg";

function SettingDialog(props) {
    const { onClose, open } = props;
    const [menu, setMenu] = React.useState('mic');
    const [micFilter, setMicFilter] = React.useState(1);
    const [cameraFilter, setCameraFilter] = React.useState(1);
    const [qualityFilter, setQualityFilter] = React.useState(1);
    const [progress, setProgress] = React.useState(40);

    const handleClickMenu = (value) => {
        setMenu(value);
    };

    const handleChangeMicFilter = (event) => {
        setMicFilter(event.target.value);
    };

    const handleChangeCameraFilter = (event) => {
        setCameraFilter(event.target.value);
    };

    const handleChangeQualityFilter = (event) => {
        setQualityFilter(event.target.value);
    };

    return (
        <DialogBox open={open}>
            <DialogHeader>
                <TitleText>
                    Channel Title
                </TitleText>
                <ButtonIcon onClick={onClose} disableRipple>
                    <SettingDialogCloseIcon/>
                </ButtonIcon>
            </DialogHeader>

            <Contents>
                <MenuBox>
                    <MenuTitle>
                        Setting
                    </MenuTitle>

                    <MenuButton select={menu === 'mic'} onClick={() => handleClickMenu('mic')} disableRipple>
                        <StreamingMicOnIcon/>
                        <Typography>Microphone</Typography>
                    </MenuButton>

                    <MenuButton select={menu === 'camera'} onClick={() => handleClickMenu('camera')} disableRipple>
                        <StreamingVideoOnIcon/>
                        <Typography>Camera</Typography>
                    </MenuButton>
                </MenuBox>

                {menu === 'mic' &&
                    <AsideBox>
                        <AsideTitle>Microphone</AsideTitle>
                        <TextStyle>Select the microphone you’ll use to stream.</TextStyle>

                        <FormControlBox variant="outlined">
                            <Select
                                id="filter"
                                value={micFilter}
                                onChange={handleChangeMicFilter}
                                IconComponent={(props) => (
                                    <Box>
                                        <ArrowDownIcon {...props}/>
                                    </Box>
                                )}
                                MenuProps={{
                                    anchorOrigin: {
                                        vertical: "bottom",
                                        horizontal: "center"
                                    },
                                    transformOrigin: {
                                        vertical: 'top',
                                        horizontal: 'center',
                                    },
                                    PaperProps: {
                                        sx: {
                                            '&.MuiPaper-root':{
                                                width: 240,
                                                boxShadow: 'none',
                                                border: '1px solid #6F6F6F',
                                                boxSizing:'border-box',
                                                background:'#212121',
                                                '& *': {
                                                    fontFamily: 'Inter !important',
                                                    letterSpacing: '-0.2px'
                                                },
                                                '& ul': {
                                                    padding: '6px 0'
                                                }
                                            },
                                        }
                                    }
                                }}
                            >
                                <Menu value={1} disableRipple>
                                    <Typography>MacBook Pro Microphone</Typography>
                                </Menu>
                            </Select>
                        </FormControlBox>

                        <ProgressBox variant="determinate" value={progress} />
                    </AsideBox>
                }

                {menu === 'camera' &&
                    <AsideBox>
                        <AlignBottom>
                            <div>
                                <AsideTitle>Camera</AsideTitle>

                                <FormControlBox variant="outlined">
                                    <Select
                                        id="filter"
                                        value={cameraFilter}
                                        onChange={handleChangeCameraFilter}
                                        IconComponent={(props) => (
                                            <Box>
                                                <ArrowDownIcon {...props}/>
                                            </Box>
                                        )}
                                        MenuProps={{
                                            anchorOrigin: {
                                                vertical: "bottom",
                                                horizontal: "center"
                                            },
                                            transformOrigin: {
                                                vertical: 'top',
                                                horizontal: 'center',
                                            },
                                            PaperProps: {
                                                sx: {
                                                    '&.MuiPaper-root':{
                                                        width: 240,
                                                        boxShadow: 'none',
                                                        border: '1px solid #6F6F6F',
                                                        boxSizing:'border-box',
                                                        background:'#212121',
                                                        '& *': {
                                                            fontFamily: 'Inter !important',
                                                            letterSpacing: '-0.2px'
                                                        },
                                                        '& ul': {
                                                            padding: '6px 0'
                                                        }
                                                    },
                                                }
                                            }
                                        }}
                                    >
                                        <Menu value={1} disableRipple>
                                            <Typography>CyberLink YouCam 9</Typography>
                                        </Menu>
                                    </Select>
                                </FormControlBox>
                            </div>

                            <VideoBox>

                            </VideoBox>
                        </AlignBottom>

                        <AsideTitle>Receive Quality</AsideTitle>

                        <FormControlBox variant="outlined">
                            <Select
                                id="filter"
                                value={qualityFilter}
                                onChange={handleChangeQualityFilter}
                                IconComponent={(props) => (
                                    <Box>
                                        <ArrowDownIcon {...props}/>
                                    </Box>
                                )}
                                MenuProps={{
                                    anchorOrigin: {
                                        vertical: "bottom",
                                        horizontal: "center"
                                    },
                                    transformOrigin: {
                                        vertical: 'top',
                                        horizontal: 'center',
                                    },
                                    PaperProps: {
                                        sx: {
                                            '&.MuiPaper-root':{
                                                width: 240,
                                                boxShadow: 'none',
                                                border: '1px solid #6F6F6F',
                                                boxSizing:'border-box',
                                                background:'#212121',
                                                '& *': {
                                                    fontFamily: 'Inter !important',
                                                    letterSpacing: '-0.2px'
                                                },
                                                '& ul': {
                                                    padding: '6px 0'
                                                }
                                            },
                                        }
                                    }
                                }}
                            >
                                <Menu value={1} disableRipple>
                                    <Typography>Auto</Typography>
                                </Menu>
                                <Menu value={2} disableRipple>
                                    <Typography>High-definition</Typography>
                                </Menu>
                            </Select>
                        </FormControlBox>

                    </AsideBox>
                }


            </Contents>

        </DialogBox>
    );
}

export default SettingDialog;