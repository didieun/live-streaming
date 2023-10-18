import React from 'react';
import {
    AlignCenter,
    ButtonIcon,
    ChannelImageBox,
    Container,
    TitleText,
    AvatarBox,
    JoinMeButton,
    StartStreamButton,
    PopoverBox,
    PopoverBoxIn,
    JustifyEnd,
    PopoverTitle,
    PopoverUrlText, CopyButton, BellButtonIcon, EndStreamButton, LiveBox, JustifySpace
} from "./styles/StreamingHeaderStyle";
import {ReactComponent as StreamingArrowIcon} from "../../../common/images/StreamingArrowIcon.svg";
import {ReactComponent as JoinMeIcon} from "../../../common/images/JoinMeIcon.svg";
import {ReactComponent as StreamingBellIcon} from "../../../common/images/StreamingBellIcon.svg";
import {ReactComponent as SettingDialogCloseIcon} from "../../../common/images/SettingDialogCloseIcon.svg";
import {ReactComponent as LiveIcon} from "../../../common/images/LiveIcon.svg";
import ChannelTestImage from "../../../common/images/ChannelTestImage.png";
import { ReactComponent as ProfileUserIcon } from "../../../common/images/ProfileUserIcon.svg";
import {Typography} from "@mui/material";
import TestProfileImage from "../../../common/images/TestProfileImage.jpeg";
import {TooltipStyle} from "../styles/StreamingStyle";
import ChannelInfo from "../../dialog/ChannelInfo";
import ViewerCommonDialog from "../../dialog/ViewerCommonDialog";
import ReadyToGoLive from "../../dialog/ReadyToGoLive";
import ViewerAlertDialog from "../../dialog/ViewerAlertDialog";

function StreamingHeader(props) {
    const {handleClickNotificationsOpen, notificationsOpen} = props;
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [joinMe, setJoinMe] = React.useState(false);
    const [channelInfo, setChannelInfo] = React.useState(false);
    const [edit, setEdit] = React.useState(false);
    const [liveDialogOpen, setLiveDialogOpen] = React.useState(false);
    const [goLive, setGoLive] = React.useState(false);
    const [goLiveDialogOpen, setGoLiveDialogOpen] = React.useState(false);

    const handleClickJoinMe = (event) => {
        setAnchorEl(event.currentTarget);
        setJoinMe(true);
    };

    const handleCloseJoinMe = () => {
        setAnchorEl(null);
    };

    const handleClickChannelInfo = () => {
        setChannelInfo(true);
    };

    const handleClickEdit = () => {
        setEdit(true);
    };

    const handleClickLiveDialogOpen = () => {
        setLiveDialogOpen(true);
    };

    const handleClickGoLive = () => {
        setGoLive(true);
        setLiveDialogOpen(false);
    };

    const handleClickStartStream = () => {
        setGoLive(false);
        setGoLiveDialogOpen(false);
    };

    const handleClickGoLiveDialogOpen = () => {
        setGoLiveDialogOpen(true);
    };

    const handleCloseGoLiveDialog = () => {
        setGoLiveDialogOpen(false);
    };

    const handleCloseDialog = () => {
        setChannelInfo(false);
        setEdit(false);
        setLiveDialogOpen(false);
        setGoLive(false);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

    return (
        <Container>
            <AlignCenter style={{width: 531}}>
                <ChannelImageBox>
                    <img src={ChannelTestImage} alt='channel image'/>
                </ChannelImageBox>
                <AlignCenter>
                    <TitleText>
                        Channel ID
                    </TitleText>
                    <ButtonIcon onClick={handleClickChannelInfo} disableRipple>
                        <StreamingArrowIcon />
                    </ButtonIcon>
                </AlignCenter>
            </AlignCenter>

            {goLive &&
                <LiveBox>
                    <LiveIcon/>
                    <Typography>LIVE</Typography>
                </LiveBox>
            }
            <AlignCenter>
                <JoinMeButton aria-describedby={id} onClick={handleClickJoinMe} select={open} disableRipple>
                    <JoinMeIcon/>
                    <Typography>Join Me</Typography>
                </JoinMeButton>

                <BellButtonIcon onClick={handleClickNotificationsOpen} select={notificationsOpen} disableRipple>
                    <StreamingBellIcon/>
                </BellButtonIcon>

                <TooltipStyle
                    title="nickname"
                    placement="bottom"
                >
                    <AvatarBox>
                        <img src={TestProfileImage} alt='image'/>
                        {/* 프로필 없을경우 */}
                        {/*<ProfileUserIcon />*/}
                    </AvatarBox>
                </TooltipStyle>

                {goLive ?
                    <EndStreamButton onClick={handleClickGoLiveDialogOpen} disableRipple>
                        End Stream
                    </EndStreamButton>
                    :
                    <StartStreamButton onClick={handleClickLiveDialogOpen} disableRipple>
                        StartStream
                    </StartStreamButton>
                }

            </AlignCenter>

            <PopoverBox
                id={id}
                open={open}
                anchorEl={anchorEl}
                onClose={handleCloseJoinMe}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'center',
                }}
            >

                <PopoverBoxIn>
                    <JustifySpace>
                        <PopoverTitle>
                            Copy the link to invite them to your stream.
                        </PopoverTitle>
                        <ButtonIcon onClick={handleCloseJoinMe} disableRipple>
                            <SettingDialogCloseIcon style={{width: 16, height: 16}}/>
                        </ButtonIcon>
                    </JustifySpace>


                    <AlignCenter>
                        {/* 툴팁은 드래그 하여 복사 하거나 copy 버튼 클릭 시*/}
                        <TooltipStyle
                            title="Link copied to clipboard"
                            placement="bottom"
                        >
                            <PopoverUrlText>http://www.pickl.tv/d9hWfc</PopoverUrlText>
                        </TooltipStyle>
                        <CopyButton disableRipple>Copy</CopyButton>
                    </AlignCenter>
                </PopoverBoxIn>
            </PopoverBox>

            {/* dialog */}
            <ViewerCommonDialog
                open={channelInfo}
                title={edit ? 'Edit Channel Info' : 'Channel Info'}
                cancelBtn={edit ? false : true}
                submitText={'Edit'}
                onClose={handleCloseDialog}
                onClick={edit ? handleCloseDialog : handleClickEdit}
                children={<ChannelInfo edit={edit}/>}
            />

            <ViewerCommonDialog
                open={liveDialogOpen}
                onClose={handleCloseDialog}
                title={'Ready to Go Live'}
                submitText={'Go Live'}
                onClick={handleClickGoLive}
                children={<ReadyToGoLive/>}
            />

            <ViewerCommonDialog
                open={goLiveDialogOpen}
                actionBtn={false}
                onClose={handleCloseGoLiveDialog}
                title={'Go Offline?'}
                children={
                    <ViewerAlertDialog
                        children={<Typography>This stream will end.</Typography>}
                        submitText={'End Stream'}
                        submitColor={true}
                        actionCancel={true}
                        onClose={handleCloseGoLiveDialog}
                        onClick={handleClickStartStream}
                    />
                }
            />

        </Container>
    );
}

export default StreamingHeader;