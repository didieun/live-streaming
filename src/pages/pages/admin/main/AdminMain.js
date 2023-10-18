import React from 'react';
import {Container} from "./styles/AdminMainStyle";
import UserManagement from "./userManagement/UserManagement";
import UserDetail from "./userManagement/user/detail/UserDetail";
import ChannelPurchaseApprovalsDetail
    from "./channelManagement/channelPurchaseApprovals /detail/ChannelPurchaseApprovalsDetail";
import ChannelManagement from "./channelManagement/ChannelManagement";
import ExchangeManagement from "./exchangeManagement/ExchangeManagement";
import PointManagement from "./pointManagement/PointManagement";
import ContentManagement from "./contentManagement/ContentManagement";
import DisplayManagement from "./contentManagement/banner/detail/DisplayManagement";
import ExclusionManagement from "./contentManagement/tags/detail/ExclusionManagement";
import Support from "./support/Support";
import FAQDisplayManagement from "./support/FAQ/detail/FAQDisplayManagement";

function AdminMain(props) {
    const {
        open,
        menu,
        handleClickChannelPurchaseRequestDialog,
        handleClickCheckpointBeforeApprovalDialog,
        handleClickAddANewChannelProductDialog,
        handleClickChannelProductDialog,
        handleClickAddANewAdministratorDialog,
        handleClickAdministratorInfoDialog,
        handleClickExchangeRequestDialog,
        handleClickExchangeCheckpointBeforeApprovalDialog,
        handleClickPointPurchaseRequestDialog,
        handleClickPointCheckpointBeforeApprovalDialog,
        handleClickAddANewPointProductDialog,
        handleClickPointProductDialog,
        handleClickAddANewFaqDialog,
        handleClickFaqDialog,
        handleClickAddANewNotificationDialog,
        handleClickNotificationDialog,
        handleClickActivateAccountDialog,
    } = props;
    return (
        <Container open={open}>
            {menu === 'user' &&
                // <UserManagement
                //     handleClickAddANewAdministratorDialog={handleClickAddANewAdministratorDialog}
                //     handleClickAdministratorInfoDialog={handleClickAdministratorInfoDialog}
                // />
                <UserDetail handleClickActivateAccountDialog={handleClickActivateAccountDialog}/>
            }

            {menu === 'channel' &&
                <ChannelManagement
                    handleClickAddANewChannelProductDialog={handleClickAddANewChannelProductDialog}
                    handleClickChannelProductDialog={handleClickChannelProductDialog}
                />
                // <ChannelPurchaseApprovalsDetail
                //     handleClickChannelPurchaseRequestDialog={handleClickChannelPurchaseRequestDialog}
                //     handleClickCheckpointBeforeApprovalDialog={handleClickCheckpointBeforeApprovalDialog}
                // />
            }

            {menu === 'point' &&
                <PointManagement
                    handleClickPointPurchaseRequestDialog={handleClickPointPurchaseRequestDialog}
                    handleClickPointCheckpointBeforeApprovalDialog={handleClickPointCheckpointBeforeApprovalDialog}
                    handleClickAddANewPointProductDialog={handleClickAddANewPointProductDialog}
                    handleClickPointProductDialog={handleClickPointProductDialog}
                />
            }

            {menu === 'exchange' &&
                <ExchangeManagement
                    handleClickExchangeRequestDialog={handleClickExchangeRequestDialog}
                    handleClickExchangeCheckpointBeforeApprovalDialog={handleClickExchangeCheckpointBeforeApprovalDialog}
                />
            }

            {menu === 'content' &&
                <ContentManagement/>
                // <DisplayManagement/>
                // <ExclusionManagement/>
            }

            {menu === 'support' &&
                <Support
                    handleClickAddANewFaqDialog={handleClickAddANewFaqDialog}
                    handleClickFaqDialog={handleClickFaqDialog}
                    handleClickAddANewNotificationDialog={handleClickAddANewNotificationDialog}
                    handleClickNotificationDialog={handleClickNotificationDialog}
                />
                // <FAQDisplayManagement/>
            }

        </Container>
    );

}

export default AdminMain;