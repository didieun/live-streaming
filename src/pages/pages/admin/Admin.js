import * as React from 'react';
import {Container, Contents} from "./styles/AdminStyle";
import AdminHeader from "./header/AdminHeader";
import AdminSideBar from "./side/AdminSideBar";
import AdminMain from "./main/AdminMain";
import AdminDialogComponent from "./dialog/AdminDialogComponent";

export const topBarHeight = 54;
export const drawerOpenWidth = 220;
export const drawerCloseWidth = 70;

function Admin(props) {
    const [sideBarOpen, setSideBarOpen] = React.useState(true);
    const [menu, setMenu] = React.useState('user');

    //dialog
    const [channelPurchaseRequestDialog, setChannelPurchaseRequestDialog] = React.useState(false);
    const [checkpointBeforeApprovalDialog, setCheckpointBeforeApprovalDialog] = React.useState(false);
    const [alertDialog, setAlertDialog] = React.useState(false);
    const [addANewChannelProductDialog, setAddANewChannelProductDialog] = React.useState(false);
    const [channelProductDialog, setChannelProductDialog] = React.useState(false);
    const [addANewAdministratorDialog, setAddANewAdministratorDialog] = React.useState(false);
    const [administratorInfoDialog, setAdministratorInfoDialog] = React.useState(false);
    const [administratorEdit, setAdministratorEdit] = React.useState(false);
    const [exchangeRequestDialog, setExchangeRequestDialog] = React.useState(false);
    const [exchangeCheckpointBeforeApprovalDialog, setExchangeCheckpointBeforeApprovalDialog] = React.useState(false);
    const [pointPurchaseRequestDialog, setPointPurchaseRequestDialog] = React.useState(false);
    const [pointCheckpointBeforeApprovalDialog, setPointCheckpointBeforeApprovalDialog] = React.useState(false);
    const [addANewPointProductDialog, setAddANewPointProductDialog] = React.useState(false);
    const [pointProductDialog, setPointProductDialog] = React.useState(false);
    const [addANewFaqDialog, setAddANewFaqDialog] = React.useState(false);
    const [faqEdit, setFaqEdit] = React.useState(false);
    const [faqDialog, setFaqDialog] = React.useState(false);
    const [addANewNotificationDialog, setAddANewNotificationDialog] = React.useState(false);
    const [notificationDialog, setNotificationDialog] = React.useState(false);
    const [notificationEdit, setNotificationEdit] = React.useState(false);
    const [activateAccountDialog, setActivateAccountDialog] = React.useState(false);

    const toggleSideBarOpen = () => {
        setSideBarOpen(!sideBarOpen);
    };

    const handleClickMenu = (value) => {
        setMenu(value);
    };

    //dialog
    const handleClickChannelPurchaseRequestDialog = () => {
        setChannelPurchaseRequestDialog(true);
    };

    const handleClickCheckpointBeforeApprovalDialog = () => {
        setCheckpointBeforeApprovalDialog(true);
    };

    const handleClickAlertDialog = () => {
        setAlertDialog(true);
    };

    const handleClickAddANewChannelProductDialog = () => {
        setAddANewChannelProductDialog(true);
    };

    const handleClickChannelProductDialog = () => {
        setChannelProductDialog(true);
    };

    const handleClickAddANewAdministratorDialog = () => {
        setAddANewAdministratorDialog(true);
    };

    const handleClickAdministratorInfoDialog = () => {
        setAdministratorInfoDialog(true);
    };

    const handleClickAdministratorEdit = () => {
        setAdministratorEdit(true);
    };

    const handleCloseAdministratorEdit = () => {
        setAdministratorEdit(false);
    };

    const handleClickExchangeRequestDialog = () => {
        setExchangeRequestDialog(true);
    };

    const handleClickExchangeCheckpointBeforeApprovalDialog = () => {
        setExchangeCheckpointBeforeApprovalDialog(true);
    };

    const handleClickPointPurchaseRequestDialog = () => {
        setPointPurchaseRequestDialog(true);
    };

    const handleClickPointCheckpointBeforeApprovalDialog = () => {
        setPointCheckpointBeforeApprovalDialog(true);
    };

    const handleClickAddANewPointProductDialog = () => {
        setAddANewPointProductDialog(true);
    };

    const handleClickPointProductDialog = () => {
        setPointProductDialog(true);
    };

    const handleClickAddANewFaqDialog = () => {
        setAddANewFaqDialog(true);
    };

    const handleClickFaqEdit = () => {
        setFaqEdit(true);
    };

    const handleCloseFaqEdit = () => {
        setFaqEdit(false);
    };

    const handleClickFaqDialog = () => {
        setFaqDialog(true);
    };

    const handleClickAddANewNotificationDialog = () => {
        setAddANewNotificationDialog(true);
    };

    const handleClickNotificationDialog = () => {
        setNotificationDialog(true);
    };

    const handleClickNotificationEdit = () => {
        setNotificationEdit(true);
    };

    const handleCloseNotificationEdit = () => {
        setNotificationEdit(false);
    };

    const handleClickActivateAccountDialog= () => {
        setActivateAccountDialog(true);
    };

    const handleCloseDialog = () => {
        setChannelPurchaseRequestDialog(false);
        setCheckpointBeforeApprovalDialog(false);
        setAddANewChannelProductDialog(false);
        setChannelProductDialog(false);
        setAddANewAdministratorDialog(false);
        setAdministratorInfoDialog(false);
        setExchangeRequestDialog(false);
        setExchangeCheckpointBeforeApprovalDialog(false);
        setPointPurchaseRequestDialog(false);
        setPointCheckpointBeforeApprovalDialog(false);
        setAddANewPointProductDialog(false);
        setPointProductDialog(false);
        setAddANewFaqDialog(false);
        setFaqDialog(false);
        setAddANewNotificationDialog(false);
        setNotificationDialog(false);
        setActivateAccountDialog(false);
    };

    const handleCloseAlertDialog = () => {
        setAlertDialog(false);
    };

    return (

        <Container>
            <AdminHeader toggleSideBarOpen={toggleSideBarOpen}/>
            <Contents>
                <AdminSideBar
                    open={sideBarOpen}
                    menu={menu}
                    handleClickMenu={handleClickMenu}
                />
                <AdminMain
                    open={sideBarOpen}
                    menu={menu}
                    //dialog
                    handleClickChannelPurchaseRequestDialog={handleClickChannelPurchaseRequestDialog}
                    handleClickCheckpointBeforeApprovalDialog={handleClickCheckpointBeforeApprovalDialog}
                    handleClickAddANewChannelProductDialog={handleClickAddANewChannelProductDialog}
                    handleClickChannelProductDialog={handleClickChannelProductDialog}
                    handleClickAddANewAdministratorDialog={handleClickAddANewAdministratorDialog}
                    handleClickAdministratorInfoDialog={handleClickAdministratorInfoDialog}
                    handleClickExchangeRequestDialog={handleClickExchangeRequestDialog}
                    handleClickExchangeCheckpointBeforeApprovalDialog={handleClickExchangeCheckpointBeforeApprovalDialog}
                    handleClickPointPurchaseRequestDialog={handleClickPointPurchaseRequestDialog}
                    handleClickPointCheckpointBeforeApprovalDialog={handleClickPointCheckpointBeforeApprovalDialog}
                    handleClickAddANewPointProductDialog={handleClickAddANewPointProductDialog}
                    handleClickPointProductDialog={handleClickPointProductDialog}
                    handleClickAddANewFaqDialog={handleClickAddANewFaqDialog}
                    handleClickFaqDialog={handleClickFaqDialog}
                    handleClickAddANewNotificationDialog={handleClickAddANewNotificationDialog}
                    handleClickNotificationDialog={handleClickNotificationDialog}
                    handleClickActivateAccountDialog={handleClickActivateAccountDialog}
                />
            </Contents>

            <AdminDialogComponent
                channelPurchaseRequestDialog={channelPurchaseRequestDialog}
                checkpointBeforeApprovalDialog={checkpointBeforeApprovalDialog}
                alertDialog={alertDialog}
                addANewChannelProductDialog={addANewChannelProductDialog}
                channelProductDialog={channelProductDialog}
                handleClickAlertDialog={handleClickAlertDialog}
                addANewAdministratorDialog={addANewAdministratorDialog}
                administratorInfoDialog={administratorInfoDialog}
                administratorEdit={administratorEdit}
                handleClickAdministratorEdit={handleClickAdministratorEdit}
                handleCloseAdministratorEdit={handleCloseAdministratorEdit}
                exchangeRequestDialog={exchangeRequestDialog}
                exchangeCheckpointBeforeApprovalDialog={exchangeCheckpointBeforeApprovalDialog}
                pointPurchaseRequestDialog={pointPurchaseRequestDialog}
                pointCheckpointBeforeApprovalDialog={pointCheckpointBeforeApprovalDialog}
                addANewPointProductDialog={addANewPointProductDialog}
                pointProductDialog={pointProductDialog}
                addANewFaqDialog={addANewFaqDialog}
                faqEdit={faqEdit}
                faqDialog={faqDialog}
                addANewNotificationDialog={addANewNotificationDialog}
                notificationDialog={notificationDialog}
                notificationEdit={notificationEdit}
                activateAccountDialog={activateAccountDialog}
                handleClickFaqEdit={handleClickFaqEdit}
                handleCloseFaqEdit={handleCloseFaqEdit}
                handleCloseDialog={handleCloseDialog}
                handleClickNotificationEdit={handleClickNotificationEdit}
                handleCloseNotificationEdit={handleCloseNotificationEdit}
                handleCloseAlertDialog={handleCloseAlertDialog}
            />
        </Container>
    );
}

export default Admin;