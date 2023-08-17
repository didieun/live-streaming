import * as React from 'react';
import {SnackbarBox} from "../styles/HomeStyle";
import HomeCommonDialog from "../dialog/HomeCommonDialog";
import EditStreamInfo from "../studio/startStream/dialog/EditStreamInfo";
import NotificationsDialog from "../notifications/dialog/NotificationsDialog";
import InviteToStreamDialog from "../dialog/InviteToStreamDialog";
import AlertDialog from "./AlertDialog";
import {Typography} from "@mui/material";
import {ReactComponent as AlertCircleIcon} from "../../common/images/AlertCircleIcon.svg";
import EditChannelInfo from "../studio/channelsManager/dialog/EditChannelInfo";
import ExtendChannelPeriod from "../studio/channelsManager/dialog/ExtendChannelPeriod";
import StreamInfo from "../studio/channelsManager/dialog/StreamInfo";
import ChangeStreamer from "../studio/channelsManager/dialog/ChangeStreamer";
import BuyANewChannel from "../studio/channelsManager/dialog/BuyANewChannel";
import TooltipBottomArrowBlue from "../../common/images/TooltipBottomArrowBlue.svg";
import BuyPoints from "../studio/earnPurchase/points/dialog/BuyPoints";
import ExchangeSettlementDialog from "../studio/earnPurchase/exchange/dialog/ExchangeSettlementDialog";
import SettlementDialog from "../studio/earnPurchase/settlement/dialog/SettlementDialog";

function DialogComponent(props) {
    const {
        inviteToStreamDialogOpen,
        handleClickAcceptDeclineDialogOpen,
        acceptDeclineDialogOpen,
        toastOpen,
        editStreamInfo,
        noticeDialogOpen,
        handleCloseDialog,
        editChannelInfoDialogOpen,
        extendChannelPeriodDialogOpen,
        changeStreamerDialogOpen,
        buyANewChannelDialogOpen,
        buyPointsDialogOpen,
        exchangeSettlementDialogOpen,
        settlementDialogOpen,
    } = props;

    const [tabValue, setTabValue] = React.useState('inviteNow');

    const handleChangeTab = (event, newValue) => {
        setTabValue(newValue);
    };

    const message = (
        <React.Fragment>
            <AlertCircleIcon/>
            {/* 거절시 */}
            {/*<Typography>You declined an invitation to the <span>channel ID</span> channel.</Typography>*/}

            {/* 수락시 */}
            <Typography>You have accepted the <span>channel ID</span> channel's<br/> broadcast permission and can begin broadcasting.</Typography>
        </React.Fragment>
    );

    const inviteMessage = (
        <React.Fragment>
            <AlertCircleIcon/>
            <Typography>An invitation has been sent to <span>invitee user nickname</span> to host a live broadcast.</Typography>
        </React.Fragment>
    );

    const changeStreamerMessage = (
        <React.Fragment>
            <AlertCircleIcon/>
            <Typography><span>Selected users</span> can go live immediately.</Typography>
        </React.Fragment>
    );

    return (
        <div>
            <HomeCommonDialog
                open={inviteToStreamDialogOpen}
                title={'Invite to Stream'}
                actionBtn={false}
                onClose={handleCloseDialog}
                children={<InviteToStreamDialog acceptClick={handleClickAcceptDeclineDialogOpen}/>}
            />

            {/* 수락 or 거절 dialog */}
            <HomeCommonDialog
                open={acceptDeclineDialogOpen}
                title={'Invite to Stream'}
                actionBtn={false}
                onClose={handleCloseDialog}
                children={
                    <AlertDialog
                        //초대 보낸 사용자 (채널 소유자)
                        //거절 시 ->
                        children={<Typography><span>invite nickname</span> declined the channel invitation.</Typography>}
                        //수락 시 ->
                        // children={
                        //     <Typography>
                        //         <span>invite nickname</span> has accepted your channel invitation.<br/>
                        //         When the live broadcast starts, <br/>
                        //         you can check the information in Channel Manager.
                        //     </Typography>
                        // }
                        onClick={handleCloseDialog}
                    />
                }
            />

            {/* 토스트 팝업 초대 받은 사용자 */}
            <SnackbarBox
                anchorOrigin={{horizontal : 'center', vertical: 'top'}}
                open={toastOpen}
                autoHideDuration={6000}
                onClose={handleCloseDialog}
                message={message}
            />


            {/* start stream dialog */}
            <HomeCommonDialog
                open={editStreamInfo}
                title={'Edit Stream Info'}
                submitText={'Edit'}
                onClose={handleCloseDialog}
                children={<EditStreamInfo/>}
            />

            {/* notice dialog */}
            <HomeCommonDialog
                open={noticeDialogOpen}
                title={'Notifications'}
                onClose={handleCloseDialog}
                actionBtn={false}
                children={<NotificationsDialog/>}
            />

            {/* Channels Manager dialog */}
            <HomeCommonDialog
                open={editChannelInfoDialogOpen}
                title={'Edit Channel Info'}
                submitText={'Edit'}
                onClose={handleCloseDialog}
                children={<EditChannelInfo/>}
            />

            <HomeCommonDialog
                open={extendChannelPeriodDialogOpen}
                title={'Extend Channel Period'}
                submitText={'Request a Channel'}
                onClose={handleCloseDialog}
                children={<ExtendChannelPeriod/>}
            />

            <HomeCommonDialog
                open={false}
                title={'Stream Info'}
                submitText={'Edit'}
                cancelBtn={false}
                onClose={handleCloseDialog}
                children={<StreamInfo/>}
            />

            <HomeCommonDialog
                open={changeStreamerDialogOpen}
                title={'Change Streamer'}
                submitText={tabValue === 'inviteNow' ? 'Change Streamer' : 'Invite'}
                onClose={handleCloseDialog}
                children={<ChangeStreamer tabValue={tabValue} handleChangeTab={handleChangeTab}/>}
            />

            <HomeCommonDialog
                open={buyANewChannelDialogOpen}
                title={'Buy a New Channel'}
                submitText={'Request a Channel'}
                onClose={handleCloseDialog}
                children={<BuyANewChannel/>}
                tooltipOpen={true}
                tooltipChildren={
                    <Typography>
                        Payments are valid for <span>7</span> days,<br/>
                        after which the channel ID can<br/>
                        be used by other users.
                    </Typography>
                }
                tooltipBottom={'-33px'}
                tooltipRight={'10px'}
                triangle={TooltipBottomArrowBlue}
                tooltipPlacement={'top-end'}
            />

            <HomeCommonDialog
                open={false}
                title={''}
                actionBtn={false}
                onClose={handleCloseDialog}
                children={
                    <AlertDialog
                        children={<Typography style={{width: 300}}>Please enter a channel ID</Typography>}
                        // children={<Typography style={{width: 300}}>Choose a price plan.</Typography>}
                        // children={<Typography style={{width: 300}}>Please enter tags.</Typography>}
                        onClick={handleCloseDialog}
                    />
                }
            />

            <HomeCommonDialog
                open={false}
                title={''}
                actionBtn={false}
                onClose={handleCloseDialog}
                children={
                    <AlertDialog
                        children={<Typography style={{width: 300}}>Please add at least one tag.</Typography>}
                        onClick={handleCloseDialog}
                    />
                }
            />

            <HomeCommonDialog
                open={false}
                title={''}
                actionBtn={false}
                onClose={handleCloseDialog}
                children={
                    <AlertDialog
                        children={<Typography>The stream was forced to end by the channel operator</Typography>}
                        onClick={handleCloseDialog}
                    />
                }
            />

            {/* points dialog */}
            <HomeCommonDialog
                open={buyPointsDialogOpen}
                title={'Buy Points'}
                submitText={'Request a Purchase'}
                onClose={handleCloseDialog}
                children={<BuyPoints/>}
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

            {/* settlement dialog */}
            <HomeCommonDialog
                open={settlementDialogOpen}
                title={'Settlement to {Streamer nickname}'}
                submitText={'Settlement'}
                onClose={handleCloseDialog}
                children={<SettlementDialog/>}
            />

            {/* exchange dialog */}
            <HomeCommonDialog
                open={exchangeSettlementDialogOpen}
                title={'Settlement to {Streamer nickname}'}
                submitText={'Request a Exchange'}
                onClose={handleCloseDialog}
                children={<ExchangeSettlementDialog/>}
            />

            {/* */}
            <SnackbarBox
                anchorOrigin={{horizontal : 'center', vertical: 'top'}}
                open={false}
                autoHideDuration={6000}
                onClose={handleCloseDialog}
                message={inviteMessage}
            />

            <SnackbarBox
                anchorOrigin={{horizontal : 'center', vertical: 'top'}}
                open={false}
                autoHideDuration={6000}
                onClose={handleCloseDialog}
                message={changeStreamerMessage}
            />

            {/* alert 메시지 */}
            <HomeCommonDialog
                open={false}
                title={''}
                actionBtn={false}
                onClose={handleCloseDialog}
                children={
                    <AlertDialog
                        children={<Typography>Please revoke streaming permissions and change the streamer.</Typography>}
                        onClick={handleCloseDialog}
                        submitText={'Change Streamer'}
                        actionCancel={true}
                    />
                }
            />

            <HomeCommonDialog
                open={false}
                title={''}
                actionBtn={false}
                onClose={handleCloseDialog}
                children={
                    <AlertDialog
                        children={
                            <Typography>
                                Your channel <span>channel ID</span> has <span>7 days</span> left.<br/>
                                If you do not request a channel extension before then,<br/> you will not be able to use the channel.
                            </Typography>
                        }
                        onClick={handleCloseDialog}
                    />
                }
            />

            <HomeCommonDialog
                open={false}
                title={''}
                actionBtn={false}
                onClose={handleCloseDialog}
                children={
                    <AlertDialog
                        children={
                            <Typography>
                                Your channel <span>Channel ID</span> has expired for <span>7 days.</span><br/>
                                Channels cannot be used unless an extension is requested before 7 days.
                            </Typography>
                        }
                        onClick={handleCloseDialog}
                    />
                }
            />

        </div>
    );
}

export default DialogComponent;