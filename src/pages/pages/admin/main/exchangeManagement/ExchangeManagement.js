import React from 'react';
import {BoxPosition, TitleText} from "../styles/AdminMainStyle";
import Tabs from "../common/tabs/Tabs";
import ExchangeApprovals from "./exchange/ExchangeApprovals";

function ExchangeManagement(props) {
    const {handleClickExchangeRequestDialog, handleClickExchangeCheckpointBeforeApprovalDialog} = props;
    const [tabValue, setTabValue] = React.useState('Exchange Approvals');
    const valueList =
        [
            {
                label: 'Exchange Approvals',
                value: 'Exchange Approvals'
            },
        ]

    const handleChangeTab = (event, newValue) => {
        setTabValue(newValue);
    };

    return (
        <div>
            <TitleText>Exchange Management</TitleText>
            <BoxPosition>
                <Tabs
                    tabValue={tabValue}
                    handleChangeTab={handleChangeTab}
                    valueList={valueList}
                />
            </BoxPosition>

            {tabValue === 'Exchange Approvals' &&
                <ExchangeApprovals
                    handleClickExchangeRequestDialog={handleClickExchangeRequestDialog}
                    handleClickExchangeCheckpointBeforeApprovalDialog={handleClickExchangeCheckpointBeforeApprovalDialog}
                />
            }

        </div>
    );

}

export default ExchangeManagement;