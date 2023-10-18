import * as React from 'react';
import {Link} from "react-router-dom";
import {Container, Contents} from "./styles/HomeStyle";
import Header from "./header/Header";
import SideBar from "./side/SideBar";
import Main from "./main/Main";
import Notifications from "./notifications/Notifications";
import {Typography} from "@mui/material";
import {ReactComponent as AlertCircleIcon} from "../common/images/AlertCircleIcon.svg";
import DialogComponent from "./dialog/DialogComponent";

function HomePage(props) {
    const [sideBarOpen, setSideBarOpen] = React.useState(true);
    const [menu, setMenu] = React.useState('foryou');
    const [login, setLogin] = React.useState(false);
    const [inviteToStreamDialogOpen, setInviteToStreamDialogOpen] = React.useState(false);
    const [acceptDeclineDialogOpen, setAcceptDeclineDialogOpen] = React.useState(false);

    // 공지
    const [notificationsOpen, setNotificationsOpen] = React.useState(false);
    const [noticeDialogOpen, setNoticeDialogOpen] = React.useState(false);

    // 토스트 팝업
    const [toastOpen, setToastOpen] = React.useState(false);

    const [changePassword, setChangePassword] = React.useState(false);
    const [deactivateAccount, setDeactivateAccount] = React.useState(false);
    const [deleteAccount, setDeleteAccount] = React.useState(false);

    const [join, setJoin] = React.useState(false);

    const toggleSideBarOpen = () => {
        setSideBarOpen(!sideBarOpen);
    };

    const handleClickMenu = (value) => {
        setMenu(value);
    };

    const handleClickTag = (value) => {
        setMenu(value);
    };

    const handleClickProfile = () => {
        setMenu('profile');
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

    const handleClickChangePassword = () => {
        setChangePassword(true);
    };

    const handleClickDeactivateAccount = () => {
        setDeactivateAccount(true);
    };

    const handleClickDeleteAccount = () => {
        setDeleteAccount(true);
    };

    const handleClickJoin = () => {
        setJoin(true);
    };


    //start stream
    const handleCloseDialog = () => {
        setNoticeDialogOpen(false);
        setInviteToStreamDialogOpen(false);
        setAcceptDeclineDialogOpen(false);
        setToastOpen(false);
        setChangePassword(false);
        setDeactivateAccount(false);
        setDeleteAccount(false);
        setJoin(false);
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

    return (

        <Container>
            <Header
                toggleSideBarOpen={toggleSideBarOpen}
                handleClickNotificationsOpen={handleClickNotificationsOpen}
                handleClickLogIn={handleClickLogIn}
                handleClickProfile={handleClickProfile}
                login={login}
                handleClickJoin={handleClickJoin}
            />
            <Contents>
                <SideBar
                    open={sideBarOpen}
                    menu={menu}
                    handleClickMenu={handleClickMenu}
                    toggleSideBarOpen={toggleSideBarOpen}
                    handleClickTag={handleClickTag}
                />
                <Main
                    open={sideBarOpen}
                    login={login}
                    menu={menu}
                    handleClickLogIn={handleClickLogIn}
                    handleClickChangePassword={handleClickChangePassword}
                    handleClickDeactivateAccount={handleClickDeactivateAccount}
                    handleClickDeleteAccount={handleClickDeleteAccount}
                />
                <Notifications
                    notificationsOpen={notificationsOpen}
                    handleClickInviteToStreamDialogOpen={handleClickInviteToStreamDialogOpen}
                    handleClickNotificationsOpen={handleClickNotificationsOpen}
                    handleCloseNotifications={handleCloseNotifications}
                    handleClickNoticeDialog={handleClickNoticeDialog}
                />
            </Contents>
            {/*<Link to={'sample'}>Sample Page</Link>*/}

            {/* dialog  */}
            <DialogComponent
                inviteToStreamDialogOpen={inviteToStreamDialogOpen}
                handleClickAcceptDeclineDialogOpen={handleClickAcceptDeclineDialogOpen}
                acceptDeclineDialogOpen={acceptDeclineDialogOpen}
                toastOpen={toastOpen}
                noticeDialogOpen={noticeDialogOpen}
                changePassword={changePassword}
                deactivateAccount={deactivateAccount}
                deleteAccount={deleteAccount}
                join={join}
                handleCloseDialog={handleCloseDialog}
            />

        </Container>
    );
}

export default HomePage;