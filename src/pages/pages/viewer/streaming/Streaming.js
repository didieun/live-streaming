import React from 'react';
import {Aside, Container, Flex, Nav, Section} from "./styles/StreamingStyle";
import StreamingHeader from "./header/StreamingHeader";
import StreamingFooter from "./footer/StreamingFooter";
import StreamingContents from "./video/StreamingContents";
import Activity from "./aside/activity/Activity";
import Chat from "./aside/chat/Chat";
import ViewerCommonDialog from "../dialog/ViewerCommonDialog";
import Sources from "./nav/sources/Sources";
import Scenes from "./nav/scenes/Scenes";
import StreamingNotifications from "./notifications/StreamingNotifications";
import StreamingNotificationsDialog from "./notifications/dialog/StreamingNotificationsDialog";
import StreamingInviteToStreamDialog from "./notifications/dialog/StreamingInviteToStreamDialog";

export const headerHeight = 80;
export const footerHeight = 212;
export const asideWidth = 316;
export const navWidth = 153;

function Streaming(props) {
    const [scenesEmpty, setScenesEmpty] = React.useState(false);

    // 공지
    const [notificationsOpen, setNotificationsOpen] = React.useState(false);
    const [noticeDialogOpen, setNoticeDialogOpen] = React.useState(false);
    const [inviteToStreamDialogOpen, setInviteToStreamDialogOpen] = React.useState(false);

    // 공지
    const handleClickNotificationsOpen = () => {
        setNotificationsOpen(!notificationsOpen);
    };

    const handleCloseNotifications = () => {
        setNotificationsOpen(false);
    };

    const handleClickNoticeDialog = (event) => {
        event.stopPropagation();
        setNoticeDialogOpen(true);
    };

    const handleClickInviteToStreamDialogOpen = () => {
        setInviteToStreamDialogOpen(true);
    };

    //
    const handleCloseDialog = () => {
        setNoticeDialogOpen(false);
        setInviteToStreamDialogOpen(false);
    };

    return (
        <Container>
            <StreamingHeader handleClickNotificationsOpen={handleClickNotificationsOpen} notificationsOpen={notificationsOpen}/>

            <Flex>
                <Section>
                    <Flex>
                        <Nav empty={scenesEmpty}>
                            <Sources/>
                            <Scenes/>
                        </Nav>
                        <StreamingContents/>
                    </Flex>
                    <StreamingFooter empty={scenesEmpty}/>
                </Section>
                <Aside>
                    <Activity/>
                    <Chat/>
                </Aside>
                <StreamingNotifications
                    notificationsOpen={notificationsOpen}
                    handleClickInviteToStreamDialogOpen={handleClickInviteToStreamDialogOpen}
                    handleCloseNotifications={handleCloseNotifications}
                    handleClickNoticeDialog={handleClickNoticeDialog}
                />
            </Flex>

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

        </Container>
    );
}

export default Streaming;