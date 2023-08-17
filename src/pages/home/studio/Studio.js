import React from 'react';
import {Container, Contents} from "./styles/StudioStyle";
import Header from "../header/Header";
import SideBar from "../side/SideBar";
import Main from "../main/Main";
import Notifications from "../notifications/Notifications";
import DialogComponent from "../dialog/DialogComponent";

function Studio(props) {
    const [sideBarOpen, setSideBarOpen] = React.useState(true);
    const [menu, setMenu] = React.useState('dashboard');
    const [login, setLogin] = React.useState(true);
    const [earnMenu, setEarnMenu] = React.useState(false);
    const [inviteToStreamDialogOpen, setInviteToStreamDialogOpen] = React.useState(false);
    const [acceptDeclineDialogOpen, setAcceptDeclineDialogOpen] = React.useState(false);

    // 공지
    const [notificationsOpen, setNotificationsOpen] = React.useState(false);
    const [noticeDialogOpen, setNoticeDialogOpen] = React.useState(false);

    //start stream
    const [editStreamInfo, setEditStreamInfo] = React.useState(false);
    const [editAnchorEl, setEditAnchorEl] = React.useState(null);
    const editOpen = Boolean(editAnchorEl);
    const editId = editOpen ? 'simple-popover' : undefined;

    // 토스트 팝업
    const [toastOpen, setToastOpen] = React.useState(true);

    //channels manager
    const [editChannelInfoDialogOpen, setEditChannelInfoDialogOpen] = React.useState(false);
    const [extendChannelPeriodDialogOpen, setExtendChannelPeriodDialogOpen] = React.useState(false);
    const [changeStreamerDialogOpen, setChangeStreamerDialogOpen] = React.useState(false);
    const [buyANewChannelDialogOpen, setBuyANewChannelDialogOpen] = React.useState(false);

    //points
    const [buyPointsDialogOpen, setBuyPointsDialogOpen] = React.useState(false);

    //settlement
    const [settlementDialogOpen, setSettlementDialogOpen] = React.useState(false);

    //exchange
    const [exchangeSettlementDialogOpen, setExchangeSettlementDialogOpen] = React.useState(false);


    const handleClickEarnMenu = () => {
        setEarnMenu(!earnMenu)
    };

    const handleClickEarnSubMenu = (value) => {
        setMenu(value);
        setEarnMenu(true)
    };

    const closeSideBarOpen = () => {
        setSideBarOpen(!sideBarOpen);
    };

    const toggleSideBarOpen = () => {
        setSideBarOpen(!sideBarOpen);
    };

    const handleClickMenu = (value) => {
        setMenu(value);
    };

    const handleClickLogIn = (value) => {
        setMenu(value);
    };

    const handleClickInviteToStreamDialogOpen = () => {
        setInviteToStreamDialogOpen(true);
    };

    const handleClickAcceptDeclineDialogOpen = () => {
        setAcceptDeclineDialogOpen(true);
    };

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

    //start stream
    const handleClickEditStreamInfoDialog = () => {
        setEditStreamInfo(true);
        setEditAnchorEl(null);
    };

    const handleClickEditPopoverOpen = (event) => {
        setEditAnchorEl(event.currentTarget);
    };

    const handleCloseEditPopover = () => {
        setEditAnchorEl(null);
    };


    //channels manager
    const handleClickEditChannelInfoDialogOpen = () => {
        setEditChannelInfoDialogOpen(true);
    };

    const handleClickExtendChannelPeriodDialogOpen= () => {
        setExtendChannelPeriodDialogOpen(true);
    };

    const handleClickChangeStreamerDialogOpen= () => {
        setChangeStreamerDialogOpen(true);
    };

    const handleClickBuyANewChannelDialogOpen= () => {
        setBuyANewChannelDialogOpen(true);
    };

    //points
    const handleClickBuyPointsDialogOpen= () => {
        setBuyPointsDialogOpen(true);
    };

    //settlement
    const handleClickSettlementDialogOpen= () => {
        setSettlementDialogOpen(true);
    };

    //exchange
    const handleClickExchangeSettlementDialogOpen= () => {
        setExchangeSettlementDialogOpen(true);
    };

    const handleCloseDialog = () => {
        setEditStreamInfo(false);
        setNoticeDialogOpen(false);
        setInviteToStreamDialogOpen(false);
        setAcceptDeclineDialogOpen(false);
        setToastOpen(false);
        setEditChannelInfoDialogOpen(false);
        setExtendChannelPeriodDialogOpen(false);
        setChangeStreamerDialogOpen(false);
        setBuyANewChannelDialogOpen(false);
        setBuyPointsDialogOpen(false);
        setSettlementDialogOpen(false);
        setExchangeSettlementDialogOpen(false);
    };

    return (
        <Container>
            <Header
                toggleSideBarOpen={toggleSideBarOpen}
                handleClickLogIn={handleClickLogIn}
                handleClickNotificationsOpen={handleClickNotificationsOpen}
                login={login}
            />
            <Contents>
                <SideBar
                    open={sideBarOpen}
                    menu={menu}
                    toggleSideBarOpen={toggleSideBarOpen}
                    handleClickMenu={handleClickMenu}
                    handleClickEarnMenu={handleClickEarnMenu}
                    handleClickEarnSubMenu={handleClickEarnSubMenu}
                    earnMenu={earnMenu}
                    closeSideBarOpen={closeSideBarOpen}
                />
                <Main
                    open={sideBarOpen}
                    login={login}
                    menu={menu}
                    handleClickLogIn={handleClickLogIn}
                    //start stream
                    handleClickEditStreamInfoDialog={handleClickEditStreamInfoDialog}
                    handleClickEditPopoverOpen={handleClickEditPopoverOpen}
                    handleCloseEditPopover={handleCloseEditPopover}
                    editOpen={editOpen}
                    editId={editId}
                    editAnchorEl={editAnchorEl}
                    //channels manager
                    handleClickEditChannelInfoDialogOpen={handleClickEditChannelInfoDialogOpen}
                    handleClickExtendChannelPeriodDialogOpen={handleClickExtendChannelPeriodDialogOpen}
                    handleClickChangeStreamerDialogOpen={handleClickChangeStreamerDialogOpen}
                    handleClickBuyANewChannelDialogOpen={handleClickBuyANewChannelDialogOpen}
                    //points
                    handleClickBuyPointsDialogOpen={handleClickBuyPointsDialogOpen}
                    //settlement
                    handleClickSettlementDialogOpen={handleClickSettlementDialogOpen}
                    //exchange
                    handleClickExchangeSettlementDialogOpen={handleClickExchangeSettlementDialogOpen}
                />
                <Notifications
                    notificationsOpen={notificationsOpen}
                    handleClickInviteToStreamDialogOpen={handleClickInviteToStreamDialogOpen}
                    handleClickNotificationsOpen={handleClickNotificationsOpen}
                    handleCloseNotifications={handleCloseNotifications}
                    handleClickNoticeDialog={handleClickNoticeDialog}
                />
            </Contents>

            {/* dialog  */}
            <DialogComponent
                inviteToStreamDialogOpen={inviteToStreamDialogOpen}
                handleClickAcceptDeclineDialogOpen={handleClickAcceptDeclineDialogOpen}
                acceptDeclineDialogOpen={acceptDeclineDialogOpen}
                toastOpen={toastOpen}
                editStreamInfo={editStreamInfo}
                noticeDialogOpen={noticeDialogOpen}
                handleCloseDialog={handleCloseDialog}
                editChannelInfoDialogOpen={editChannelInfoDialogOpen}
                extendChannelPeriodDialogOpen={extendChannelPeriodDialogOpen}
                changeStreamerDialogOpen={changeStreamerDialogOpen}
                buyANewChannelDialogOpen={buyANewChannelDialogOpen}
                buyPointsDialogOpen={buyPointsDialogOpen}
                settlementDialogOpen={settlementDialogOpen}
                exchangeSettlementDialogOpen={exchangeSettlementDialogOpen}
            />
        </Container>
    );
}

export default Studio;