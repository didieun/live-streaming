import React from 'react';
import {
    Aside,
    ChatCloseBox,
    Container,
    Contents,
    ContentsTop,
    Section,
    ButtonIcon,
    TooltipStyle, AsideFullScreen, ContentsFullScreen
} from "./styles/WatchingStyle";
import WatchingHeader from "./header/WatchingHeader";
import WatchingVideo from "./video/WatchingVideo";
import WatchingChat from "./aside/WatchingChat";
import WatchingIntroduction from "./introduction/WatchingIntroduction";
import WatchingInfo from "./info/WatchingInfo";
import ViewerCommonDialog from "../dialog/ViewerCommonDialog";
import StreamingNotificationsDialog from "../streaming/notifications/dialog/StreamingNotificationsDialog";
import StreamingInviteToStreamDialog from "../streaming/notifications/dialog/StreamingInviteToStreamDialog";
import WatchingNotifications from "./notifications/WatchingNotifications";
import WatchingBuyPoints from "../dialog/WatchingBuyPoints";
import {Typography} from "@mui/material";
import TooltipBottomArrowBlue from "../../common/images/TooltipBottomArrowBlue.svg";

export const watchingHeaderHeight = 54;
export const watchingAsideWidth = 288;
export const smallAsideWidth = 300;

function Watching(props) {
    const [open, setOpen] = React.useState(true);
    const [fullScreen, setFullScreen] = React.useState(false);
    const [buyPointsDialog, setBuyPointsDialog] = React.useState(false);

    // 공지
    const [notificationsOpen, setNotificationsOpen] = React.useState(false);
    const [noticeDialogOpen, setNoticeDialogOpen] = React.useState(false);
    const [inviteToStreamDialogOpen, setInviteToStreamDialogOpen] = React.useState(false);

    const handleClickChat = () => {
        setOpen(!open);
    };

    const handleClickFullScreen= () => {
        setFullScreen(true);
        setOpen(false);
    };

    const handleClickExitFullScreen= () => {
        setFullScreen(false);
        setOpen(true);
    };

    const handleClickNotificationsOpen = () => {
        setNotificationsOpen(!notificationsOpen);
    };

    const handleCloseNotifications = () => {
        setNotificationsOpen(false);
    };

    const handleClickInviteToStreamDialogOpen = () => {
        setInviteToStreamDialogOpen(true);
    };

    const handleClickNoticeDialog = (event) => {
        event.stopPropagation();
        setNoticeDialogOpen(true);
    };

    const handleClickBuyPointsDialog = () => {
        setBuyPointsDialog(true)
    };

    const handleCloseDialog = () => {
        setNoticeDialogOpen(false);
        setInviteToStreamDialogOpen(false);
        setBuyPointsDialog(false)
    };

    return (
        <Container>
            {!fullScreen &&
                <WatchingHeader handleClickNotificationsOpen={handleClickNotificationsOpen} notificationsOpen={notificationsOpen} handleClickBuyPointsDialog={handleClickBuyPointsDialog}/>
            }

            {fullScreen ?
                <ContentsFullScreen>
                    <ContentsTop>
                        <Section open={open}>
                            <WatchingVideo handleClickFullScreen={handleClickFullScreen} handleClickExitFullScreen={handleClickExitFullScreen} fullScreen={fullScreen} open={open} handleClickChat={handleClickChat}/>
                        </Section>
                        <AsideFullScreen open={open}>
                            <WatchingChat handleClickChat={handleClickChat} open={open}/>
                        </AsideFullScreen>
                    </ContentsTop>
                    <WatchingNotifications
                        notificationsOpen={notificationsOpen}
                        handleClickInviteToStreamDialogOpen={handleClickInviteToStreamDialogOpen}
                        handleCloseNotifications={handleCloseNotifications}
                        handleClickNoticeDialog={handleClickNoticeDialog}
                    />
                </ContentsFullScreen>
                :
                <Contents>
                    <ContentsTop>
                        <Section open={open}>
                            <WatchingVideo handleClickFullScreen={handleClickFullScreen} handleClickExitFullScreen={handleClickExitFullScreen} fullScreen={fullScreen} open={open} handleClickChat={handleClickChat}/>
                            <WatchingInfo handleClickBuyPointsDialog={handleClickBuyPointsDialog}/>
                        </Section>
                        <Aside open={open}>
                            <WatchingChat handleClickChat={handleClickChat} open={open}/>
                        </Aside>
                    </ContentsTop>
                    <WatchingIntroduction open={open}/>
                    <WatchingNotifications
                        notificationsOpen={notificationsOpen}
                        handleClickInviteToStreamDialogOpen={handleClickInviteToStreamDialogOpen}
                        handleCloseNotifications={handleCloseNotifications}
                        handleClickNoticeDialog={handleClickNoticeDialog}
                    />
                </Contents>
            }

            {/* 공지 */}
            <ViewerCommonDialog
                open={noticeDialogOpen}
                title={'Notifications'}
                onClose={handleCloseDialog}
                actionBtn={false}
                children={<StreamingNotificationsDialog handleCloseDialog={handleCloseDialog}/>}
            />

            <ViewerCommonDialog
                open={inviteToStreamDialogOpen}
                title={'Invite to Stream'}
                actionBtn={false}
                onClose={handleCloseDialog}
                children={<StreamingInviteToStreamDialog/>}
            />

            <ViewerCommonDialog
                open={buyPointsDialog}
                title={'Buy Points'}
                submitText={'Request a Purchase'}
                onClose={handleCloseDialog}
                children={<WatchingBuyPoints/>}
                tooltipOpen={true}
                tooltipChildren={
                    <Typography>
                        Payments are valid for <span>7</span> days<br/> and will be automatically<br/> canceled if not paid.
                    </Typography>
                }
                tooltipBottom={'-33px'}
                tooltipRight={'10px'}
                triangle={TooltipBottomArrowBlue}
                tooltipPlacement={'top-end'}
            />
        </Container>
    );
}

export default Watching;