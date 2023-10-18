import React from 'react';
import {Aside, Container, Contents, Section} from "./styles/StreamingStyle";
import StreamingHeader from "./header/StreamingHeader";
import StreamingFooter from "./footer/StreamingFooter";
import StreamingContents from "./video/StreamingContents";
import Activity from "./aside/activity/Activity";
import Chat from "./aside/chat/Chat";
import SettingDialog from "../dialog/SettingDialog";
import ViewerCommonDialog from "../dialog/ViewerCommonDialog";
import ReadyToGoLive from "../dialog/ReadyToGoLive";
import JoinMe from "../dialog/JoinMe";

export const headerHeight = 80;
export const footerHeight = 90;
export const asideWidth = 472;
export const smallHeaderHeight = 54;
export const smallFooterHeight = 63;
export const smallAsideWidth = 380;

function Streaming(props) {
    const [standby, setStandby] = React.useState(false);
    const [settingDialogOpen, setSettingDialogOpen] = React.useState(false);
    const [liveDialogOpen, setLiveDialogOpen] = React.useState(false);
    const [joinMeDialog, setJoinMeDialog] = React.useState(false);

    const handleClickSettingDialogOpen = () => {
        setSettingDialogOpen(true);
    };

    const handleClickLiveDialogOpen = () => {
        setLiveDialogOpen(true);
    };

    const handleClickJoinMeDialogOpen = () => {
        setJoinMeDialog(true);
    };

    const handleCloseDialog = (value) => {
        setSettingDialogOpen(false);
        setLiveDialogOpen(false);
        setJoinMeDialog(false);
    };

    return (
        <Container>
            <StreamingHeader standby={standby} handleClickJoinMeDialogOpen={handleClickJoinMeDialogOpen}/>

            {standby ?
                <div>

                </div>
                :
                <Contents>
                    <Section>
                        <StreamingContents/>
                        <StreamingFooter handleClickLiveDialogOpen={handleClickLiveDialogOpen}/>
                    </Section>
                    <Aside>
                        <Activity/>
                        <Chat/>
                    </Aside>
                </Contents>
            }

            {/*  dialog  */}
            <SettingDialog
                open={settingDialogOpen}
                onClose={handleCloseDialog}
            />

            <ViewerCommonDialog
                open={liveDialogOpen}
                onClose={handleCloseDialog}
                title={'Ready to Go Live'}
                submitText={'Go Live'}
                children={<ReadyToGoLive/>}
            />

            <ViewerCommonDialog
                open={joinMeDialog}
                onClose={handleCloseDialog}
                title={'Join Me'}
                submitText={'Go Live'}
                actionBtn={false}
                children={<JoinMe/>}
            />

        </Container>
    );
}

export default Streaming;