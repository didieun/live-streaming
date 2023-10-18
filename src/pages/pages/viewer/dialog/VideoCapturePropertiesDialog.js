import React from 'react';
import {
    Container,
    Flex,
    NoImageBox,
    ImageBox,
    TitleText,
    SceneIconUser,
    FormControlBox, Menu, FlexColumn, TextStyle, ProgressBox
} from "./styles/VideoCapturePropertiesDialogStyle";
import {ReactComponent as SceneUserIcon} from "../../common/images/SceneUserIcon.svg";
import {ReactComponent as ArrowDownIcon} from "../../common/images/ArrowDownIcon.svg";
import TestVideoImage from "../../common/images/TestVideoImage.jpg";
import {Box, Select, Typography} from "@mui/material";

function VideoCapturePropertiesDialog(props) {
    const [cameraFilter, setCameraFilter] = React.useState(1);
    const [receiveQualityFilter, setReceiveQualityFilter] = React.useState(1);
    const [micFilter, setMicFilter] = React.useState(1);
    const [progress, setProgress] = React.useState(40);

    const handleChangeCameraFilter = (event) => {
        setCameraFilter(event.target.value);
    };

    const handleChangeReceiveQualityFilter = (event) => {
        setReceiveQualityFilter(event.target.value);
    };

    const handleChangeMicFilter = (event) => {
        setMicFilter(event.target.value);
    };

    return (
        <Container>
            <NoImageBox>
                <SceneIconUser>
                    <SceneUserIcon/>
                </SceneIconUser>
            </NoImageBox>

            {/*<ImageBox>*/}
            {/*    <img src={TestVideoImage} alt='image'/>*/}
            {/*</ImageBox>*/}

            <Flex>
                <TitleText>Camera</TitleText>
                <FlexColumn>
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
                                <Typography>Facetime HD Camera (Built-in)</Typography>
                            </Menu>
                        </Select>
                    </FormControlBox>

                    <TextStyle>Receive Quality</TextStyle>
                    <FormControlBox variant="outlined">
                        <Select
                            id="filter"
                            value={receiveQualityFilter}
                            onChange={handleChangeReceiveQualityFilter}
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
                        </Select>
                    </FormControlBox>
                </FlexColumn>
            </Flex>

            <Flex>
                <TitleText>Microphone</TitleText>
                <FlexColumn>
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
                                <Typography>Macbook Pro Microphone (Built-in)</Typography>
                            </Menu>
                        </Select>
                    </FormControlBox>

                    <ProgressBox variant="determinate" value={progress} />

                </FlexColumn>
            </Flex>
        </Container>
    );
}

export default VideoCapturePropertiesDialog;
