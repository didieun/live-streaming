import * as React from 'react';
import ChannelPurchaseRequest from "./ChannelPurchaseRequest";
import AdminCommonDialog from "./AdminCommonDialog";
import ChannelCheckpointBeforeApproval from "./ChannelCheckpointBeforeApproval";
import AdminAlertDialog from "./AdminAlertDialog";
import AddANewChannelProduct from "./AddANewChannelProduct";
import ChannelProduct from "./ChannelProduct";
import AddANewAdministrator from "./AddANewAdministrator";
import AdministratorDialog from "./AdministratorDialog";
import ExchangeRequest from "./ExchangeRequest";
import ExchangeCheckpointBeforeApproval from "./ExchangeCheckpointBeforeApproval";
import PointPurchaseRequest from "./PointPurchaseRequest";
import PointCheckpointBeforeApproval from "./PointCheckpointBeforeApproval";
import AddANewPointProduct from "./AddANewPointProduct";
import PointProduct from "./PointProduct";
import AddANewFAQ from "./AddANewFAQ";
import FAQDialog from "./FAQDialog";
import AddANewNotification from "./AddANewNotification";
import NotificationDialog from "./NotificationDialog";

function AdminDialogComponent(props) {
    const {
        channelPurchaseRequestDialog,
        handleCloseDialog,
        checkpointBeforeApprovalDialog,
        alertDialog,
        handleClickAlertDialog,
        handleCloseAlertDialog,
        addANewChannelProductDialog,
        channelProductDialog,
        addANewAdministratorDialog,
        administratorInfoDialog,
        administratorEdit,
        handleClickAdministratorEdit,
        handleCloseAdministratorEdit,
        exchangeRequestDialog,
        exchangeCheckpointBeforeApprovalDialog,
        pointPurchaseRequestDialog,
        pointCheckpointBeforeApprovalDialog,
        addANewPointProductDialog,
        pointProductDialog,
        addANewFaqDialog,
        faqEdit,
        handleClickFaqEdit,
        handleCloseFaqEdit,
        faqDialog,
        addANewNotificationDialog,
        notificationDialog,
        notificationEdit,
        handleClickNotificationEdit,
        handleCloseNotificationEdit,
        activateAccountDialog,
    } = props;

    return (
        <div>
            <AdminCommonDialog
                open={channelPurchaseRequestDialog}
                title={'Channel Purchase Request'}
                children={<ChannelPurchaseRequest handleCloseDialog={handleCloseDialog}/>}
                onClose={handleCloseDialog}
            />

            <AdminCommonDialog
                open={checkpointBeforeApprovalDialog}
                title={'Checkpoint before Approval'}
                children={<ChannelCheckpointBeforeApproval handleClickAlertDialog={handleClickAlertDialog}/>}
                onClose={handleCloseDialog}
            />

            <AdminCommonDialog
                open={alertDialog}
                title={''}
                children={
                            <AdminAlertDialog
                                children={'Please check all required items.'}
                                onClick={handleCloseAlertDialog}
                            />
                          }
                onClose={handleCloseAlertDialog}
            />

            <AdminCommonDialog
                open={addANewChannelProductDialog}
                title={'Add a New Channel Product'}
                children={<AddANewChannelProduct handleCloseDialog={handleCloseDialog}/>}
                onClose={handleCloseDialog}
            />

            <AdminCommonDialog
                open={channelProductDialog}
                title={'Channel Product'}
                children={<ChannelProduct handleCloseDialog={handleCloseDialog}/>}
                onClose={handleCloseDialog}
            />

            <AdminCommonDialog
                open={addANewAdministratorDialog}
                title={'Add a New Administrator'}
                children={<AddANewAdministrator handleCloseDialog={handleCloseDialog}/>}
                onClose={handleCloseDialog}
            />

            <AdminCommonDialog
                open={administratorInfoDialog}
                title={administratorEdit ? 'Edit Administrator Info' : 'Administrator Info'}
                children={
                    <AdministratorDialog
                        edit={administratorEdit}
                        handleClickAdministratorEdit={handleClickAdministratorEdit}
                        handleCloseAdministratorEdit={handleCloseAdministratorEdit}
                        handleCloseDialog={handleCloseDialog}
                    />
                }
                onClose={handleCloseDialog}
            />

            <AdminCommonDialog
                open={pointPurchaseRequestDialog}
                title={'Point Purchase Request'}
                children={<PointPurchaseRequest handleCloseDialog={handleCloseDialog}/>}
                onClose={handleCloseDialog}
            />

            <AdminCommonDialog
                open={pointCheckpointBeforeApprovalDialog}
                title={'Checkpoint before Approval'}
                children={<PointCheckpointBeforeApproval handleClickAlertDialog={handleClickAlertDialog}/>}
                onClose={handleCloseDialog}
            />

            <AdminCommonDialog
                open={addANewPointProductDialog}
                title={'Add a New Point Product'}
                children={<AddANewPointProduct handleCloseDialog={handleCloseDialog}/>}
                onClose={handleCloseDialog}
            />

            <AdminCommonDialog
                open={pointProductDialog}
                title={'Point Product'}
                children={<PointProduct handleCloseDialog={handleCloseDialog}/>}
                onClose={handleCloseDialog}
            />

            <AdminCommonDialog
                open={exchangeRequestDialog}
                title={'Exchange Request'}
                children={<ExchangeRequest handleCloseDialog={handleCloseDialog}/>}
                onClose={handleCloseDialog}
            />

            <AdminCommonDialog
                open={exchangeCheckpointBeforeApprovalDialog}
                title={'Checkpoint before Approval'}
                children={<ExchangeCheckpointBeforeApproval handleClickAlertDialog={handleClickAlertDialog}/>}
                onClose={handleCloseDialog}
            />

            <AdminCommonDialog
                open={addANewFaqDialog}
                title={'Add a New FAQ'}
                children={<AddANewFAQ handleCloseDialog={handleCloseDialog}/>}
                onClose={handleCloseDialog}
            />

            <AdminCommonDialog
                open={faqDialog}
                title={faqEdit ? 'Edit a FAQ' : 'FAQ'}
                children={
                    <FAQDialog
                        edit={faqEdit}
                        handleClickFaqEdit={handleClickFaqEdit}
                        handleCloseFaqEdit={handleCloseFaqEdit}
                        handleCloseDialog={handleCloseDialog}
                    />
                }
                onClose={handleCloseDialog}
            />

            <AdminCommonDialog
                open={addANewNotificationDialog}
                title={'Add a New Notification'}
                children={<AddANewNotification handleCloseDialog={handleCloseDialog}/>}
                onClose={handleCloseDialog}
            />

            <AdminCommonDialog
                open={notificationDialog}
                title={notificationEdit ? 'Edit a Notification' : 'Notification'}
                children={
                    <NotificationDialog
                        edit={notificationEdit}
                        handleClickNotificationEdit={handleClickNotificationEdit}
                        handleCloseNotificationEdit={handleCloseNotificationEdit}
                        handleCloseDialog={handleCloseDialog}
                    />
                }
                onClose={handleCloseDialog}
            />

            <AdminCommonDialog
                open={activateAccountDialog}
                title={''}
                children={
                    <AdminAlertDialog
                        children={'Activate {User Name}’s account.'}
                        actionCancel={true}
                        submitText={'Activate'}
                        onClose={handleCloseDialog}
                        onClick={handleCloseDialog}
                    />
                }
                onClose={handleCloseDialog}
            />

        </div>
    );
}

export default AdminDialogComponent;