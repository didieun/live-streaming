import React from 'react';
import {
    AlignCenter,
    ButtonIcon,
    Container,
    PreferenceButton,
    TabBox,
    ContainerList,
    ContainerListIn,
    EmptyBox,
    ContainerListScroll,
    SceneIconUser,
    BackgroundBasic,
} from "./styles/StreamingFooterStyle";
import {ReactComponent as StreamingSettingsIcon} from "../../../common/images/StreamingSettingsIcon.svg";
import {ReactComponent as TrashIcon} from "../../../common/images/TrashIcon.svg";
import {ReactComponent as SceneEmptyIcon} from "../../../common/images/SceneEmptyIcon.svg";
import {ReactComponent as SettingDialogCloseIcon} from "../../../common/images/SettingDialogCloseIcon.svg";
import {ReactComponent as SceneUserIcon} from "../../../common/images/SceneUserIcon.svg";
import {ReactComponent as SceneChromecastIcon} from "../../../common/images/SceneChromecastIcon.svg";
import {ReactComponent as SceneTextIcon} from "../../../common/images/SceneTextIcon.svg";
import {ReactComponent as SceneImageIcon} from "../../../common/images/SceneImageIcon.svg";
import TooltipArrowBlueBottom from "../../../common/images/TooltipArrowBlueBottom.svg";
import {Typography} from "@mui/material";
import StreamingControl from "./StreamingControl";
import ViewerCommonDialog from "../../dialog/ViewerCommonDialog";
import ViewerAlertDialog from "../../dialog/ViewerAlertDialog";
import {ArrowTooltipStyle} from "../styles/StreamingStyle";
import BackgroundImagePropertiesDialog from "../../dialog/BackgroundImagePropertiesDialog";
import ImagePropertiesDialog from "../../dialog/ImagePropertiesDialog";
import VideoCapturePropertiesDialog from "../../dialog/VideoCapturePropertiesDialog";
import TextPropertiesDialog from "../../dialog/TextPropertiesDialog";
import MainScreenImage from "../../../common/images/MainScreenImage.png";
import TestImage from "../../../common/images/TestImage.svg";

const Message = (
    <React.Fragment>
        <div style={{marginLeft: 10}}>
            <br/>
            <Typography><b>Changing Source Sort</b></Typography>
            <Typography>
                Sources can be reordered by dragging and dropping them.<br/>
                Sources are placed sequentially from top to bottom on the scene screen.
            </Typography>
        </div>
    </React.Fragment>
);

function StreamingFooter(props) {
    const {empty} = props;
    const [tooltipOpen, setTooltipOpen] = React.useState(true);
    const [backgroundScenes, setBackgroundScenes] = React.useState(false);
    const [backgroundShow, setBackgroundShow] = React.useState(true);
    const [backgroundLock, setBackgroundLock] = React.useState(false);
    const [videoCaptureScenes, setVideoCaptureScenes] = React.useState(false);
    const [videoCaptureShow, setVideoCaptureShow] = React.useState(true);
    const [videoCaptureLock, setVideoCaptureLock] = React.useState(false);
    const [micValue, setMicValue] = React.useState(50);
    const [shareScenes, setShareScenes] = React.useState(false);
    const [shareShow, setShareShow] = React.useState(true);
    const [shareLock, setShareLock] = React.useState(false);
    const [textScenes, setTextScenes] = React.useState(false);
    const [textShow, setTextShow] = React.useState(true);
    const [textLock, setTextLock] = React.useState(false);
    const [imageScenes, setImageScenes] = React.useState(false);
    const [imageShow, setImageShow] = React.useState(true);
    const [imageLock, setImageLock] = React.useState(false);

    // dialog
    const [deleteDialogOpen, setDeleteDialogOpen] = React.useState(false);
    const [backgroundDialogOpen, setBackgroundDialogOpen] = React.useState(false);
    const [videoCaptureDialogOpen, setVideoCaptureDialogOpen] = React.useState(false);
    const [imageDialogOpen, setImageDialogOpen] = React.useState(false);
    const [textDialogOpen, setTextDialogOpen] = React.useState(false);

    const handleCloseTooltip = () => {
        setTooltipOpen(false);
    };

    const handleClickShareScenes = () => {
        setBackgroundScenes(false);
        setVideoCaptureScenes(false);
        setShareScenes(true);
        setTextScenes(false);
        setImageScenes(false);
    };

    const handleClickBackgroundShow = () => {
        setBackgroundShow(!backgroundShow);
    };

    const handleClickBackgroundLock = () => {
        setBackgroundLock(!backgroundLock);
    };

    const handleClickVideoCaptureShow = () => {
        setVideoCaptureShow(!videoCaptureShow);
    };

    const handleClickVideoCaptureLock = () => {
        setVideoCaptureLock(!videoCaptureLock);
    };

    const handleClickMicOn = () => {
        setMicValue(50);
    };

    const handleClickMicOff = () => {
        setMicValue(0);
    };

    const handleChangeMicSlider = (event, newValue) => {
        setMicValue(newValue);
    };

    const handleClickShareShow = () => {
        setShareShow(!shareShow);
    };

    const handleClickShareLock = () => {
        setShareLock(!shareLock);
    };

    const handleClickTextShow = () => {
        setTextShow(!textShow);
    };

    const handleClickTextLock = () => {
        setTextLock(!textLock);
    };

    const handleClickImageShow = () => {
        setImageShow(!imageShow);
    };

    const handleClickImageLock = () => {
        setImageLock(!imageLock);
    };


    // dialog
    const handleClickDeleteDialogOpen = () => {
        setDeleteDialogOpen(true);
    };

    const handleClickBackgroundDialogOpen = (event) => {
        switch (event.detail) {
            case 1: {
                setBackgroundScenes(true);
                setVideoCaptureScenes(false);
                setShareScenes(false);
                setTextScenes(false);
                setImageScenes(false);
                break;
            }
            case 2: {
                setBackgroundDialogOpen(true);

                setBackgroundScenes(true);
                setVideoCaptureScenes(false);
                setShareScenes(false);
                setTextScenes(false);
                setImageScenes(false);
                break;
            }
            default: {
                break;
            }
        }
    };

    const handleClickImageDialogOpen = (event) => {
        switch (event.detail) {
            case 1: {
                setBackgroundScenes(false);
                setVideoCaptureScenes(false);
                setShareScenes(false);
                setTextScenes(false);
                setImageScenes(true);
                break;
            }
            case 2: {
                setImageDialogOpen(true);

                setBackgroundScenes(false);
                setVideoCaptureScenes(false);
                setShareScenes(false);
                setTextScenes(false);
                setImageScenes(true);
                break;
            }
            default: {
                break;
            }
        }
    };

    const handleClickTextDialogOpen = (event) => {
        switch (event.detail) {
            case 1: {
                setBackgroundScenes(false);
                setVideoCaptureScenes(false);
                setShareScenes(false);
                setTextScenes(true);
                setImageScenes(false);
                break;
            }
            case 2: {
                setTextDialogOpen(true);

                setBackgroundScenes(false);
                setVideoCaptureScenes(false);
                setShareScenes(false);
                setTextScenes(true);
                setImageScenes(false);
                break;
            }
            default: {
                break;
            }
        }
    };

    const handleClickVideoCaptureDialogOpen = (event) => {
        switch (event.detail) {
            case 1: {
                setBackgroundScenes(false);
                setVideoCaptureScenes(true);
                setShareScenes(false);
                setTextScenes(false);
                setImageScenes(false);
                break;
            }
            case 2: {
                setVideoCaptureDialogOpen(true);

                setBackgroundScenes(false);
                setVideoCaptureScenes(true);
                setShareScenes(false);
                setTextScenes(false);
                setImageScenes(false);
                break;
            }
            default: {
                break;
            }
        }
    };

    const handleCloseDialog = () => {
        setDeleteDialogOpen(false);
        setBackgroundDialogOpen(false);
        setImageDialogOpen(false);
        setVideoCaptureDialogOpen(false);
        setTextDialogOpen(false);
    };

    return (
        <Container>
            <AlignCenter>
                <TabBox>
                    <Typography>scene1</Typography>
                </TabBox>

                <PreferenceButton disableRipple>
                    <StreamingSettingsIcon/>
                    <Typography>Preference</Typography>
                </PreferenceButton>
            </AlignCenter>

            <ArrowTooltipStyle
                open={tooltipOpen}
                title={
                    <div>
                        {Message}
                        <ButtonIcon onClick={handleCloseTooltip} disableRipple>
                            <SettingDialogCloseIcon style={{width: 16, height: 16}}/>
                        </ButtonIcon>
                    </div>
                }
                placement="top"
                bottom={'-35px'}
                left={'50%'}
                triangle={TooltipArrowBlueBottom}
            >
                <ContainerList>
                    {empty ?
                        <EmptyBox>
                            <SceneEmptyIcon/>
                            <Typography>
                                You don’t have any sources.<br/>
                                Style your stream content by adding video, screen share, text, and images from the left "Source" menu.
                            </Typography>
                        </EmptyBox>
                        :
                        <ContainerListIn>
                            <ContainerListScroll>
                                <StreamingControl
                                    title={'Background'}
                                    sceneIcon={
                                        <BackgroundBasic>
                                            <img src={MainScreenImage} alt='image'/>
                                        </BackgroundBasic>
                                    }
                                    scenes={backgroundScenes}
                                    handleClickShow={handleClickBackgroundShow}
                                    show={backgroundShow}
                                    handleClickLock={handleClickBackgroundLock}
                                    lock={backgroundLock}
                                    onClick={handleClickBackgroundDialogOpen}
                                />

                                <StreamingControl
                                    title={'Video Capture'}
                                    sceneIcon={
                                        <SceneIconUser>
                                            <SceneUserIcon/>
                                        </SceneIconUser>
                                    }
                                    scenes={videoCaptureScenes}
                                    handleClickShow={handleClickVideoCaptureShow}
                                    show={videoCaptureShow}
                                    handleClickLock={handleClickVideoCaptureLock}
                                    lock={videoCaptureLock}
                                    micValue={micValue}
                                    handleClickMicOff={handleClickMicOff}
                                    handleClickMicOn={handleClickMicOn}
                                    handleChangeMicSlider={handleChangeMicSlider}
                                    onClick={handleClickVideoCaptureDialogOpen}
                                />

                                <StreamingControl
                                    title={'Screen Share'}
                                    sceneIcon={
                                        <SceneChromecastIcon/>
                                    }
                                    handleClickScenes={handleClickShareScenes}
                                    scenes={shareScenes}
                                    handleClickShow={handleClickShareShow}
                                    show={shareShow}
                                    handleClickLock={handleClickShareLock}
                                    lock={shareLock}
                                />

                                <StreamingControl
                                    title={'Text'}
                                    sceneIcon={
                                        <SceneTextIcon/>
                                    }
                                    scenes={textScenes}
                                    handleClickShow={handleClickTextShow}
                                    show={textShow}
                                    handleClickLock={handleClickTextLock}
                                    lock={textLock}
                                    onClick={handleClickTextDialogOpen}
                                />

                                <StreamingControl
                                    title={'Image'}
                                    sceneIcon={
                                        <SceneImageIcon/>
                                        // <img src={TestImage} alt='image' style={{maxWidth: 130}}/>
                                    }
                                    scenes={imageScenes}
                                    handleClickShow={handleClickImageShow}
                                    show={imageShow}
                                    handleClickLock={handleClickImageLock}
                                    lock={imageLock}
                                    onClick={handleClickImageDialogOpen}
                                />

                            </ContainerListScroll>

                            <ButtonIcon onClick={handleClickDeleteDialogOpen} disableRipple>
                                <TrashIcon/>
                            </ButtonIcon>
                        </ContainerListIn>
                    }
                </ContainerList>
            </ArrowTooltipStyle>

            {/* dialog */}
            <ViewerCommonDialog
                open={deleteDialogOpen}
                actionBtn={false}
                onClose={handleCloseDialog}
                title={''}
                children={
                    <ViewerAlertDialog
                        children={<Typography>Are you sure you wish to remove source <span>scenes name</span> ?</Typography>}
                        submitText={'Delete'}
                        actionCancel={true}
                        onClose={handleCloseDialog}
                    />
                }
            />

            <ViewerCommonDialog
                open={backgroundDialogOpen}
                onClose={handleCloseDialog}
                title={'Background Image Properties'}
                children={<BackgroundImagePropertiesDialog/>}
            />

            <ViewerCommonDialog
                open={videoCaptureDialogOpen}
                onClose={handleCloseDialog}
                title={'Video Capture Properties'}
                children={<VideoCapturePropertiesDialog/>}
            />

            <ViewerCommonDialog
                open={imageDialogOpen}
                onClose={handleCloseDialog}
                title={'Image Properties'}
                children={<ImagePropertiesDialog/>}
            />

            <ViewerCommonDialog
                open={textDialogOpen}
                onClose={handleCloseDialog}
                title={'Text Properties'}
                children={<TextPropertiesDialog/>}
            />

        </Container>
    );
}

export default StreamingFooter;