import React from 'react';
import {AbsoluteButton, BoxPosition, TitleText} from "../styles/AdminMainStyle";
import Tabs from "../common/tabs/Tabs";
import PointPurchaseApprovals from "./pointPurchaseApprovals/PointPurchaseApprovals";
import PointProduct from "./pointProduct/PointProduct";

function PointManagement(props) {
    const {handleClickPointPurchaseRequestDialog, handleClickPointCheckpointBeforeApprovalDialog, handleClickAddANewPointProductDialog, handleClickPointProductDialog} = props;
    const [tabValue, setTabValue] = React.useState('Point Purchase Approvals');
    const valueList =
        [
            {
                label: 'Point Purchase Approvals',
                value: 'Point Purchase Approvals'
            },
            {
                label: 'Point Product',
                value: 'Point Product'
            },
        ]

    const handleChangeTab = (event, newValue) => {
        setTabValue(newValue);
    };

    return (
        <div>
            <TitleText>Point Management</TitleText>
            <BoxPosition>
                <Tabs
                    tabValue={tabValue}
                    handleChangeTab={handleChangeTab}
                    valueList={valueList}
                />
                {tabValue === 'Point Product' &&
                    <AbsoluteButton onClick={handleClickAddANewPointProductDialog} disableRipple>
                        Add a New Point Gift
                    </AbsoluteButton>
                }
            </BoxPosition>

            {tabValue === 'Point Purchase Approvals' &&
                <PointPurchaseApprovals
                    handleClickPointPurchaseRequestDialog={handleClickPointPurchaseRequestDialog}
                    handleClickPointCheckpointBeforeApprovalDialog={handleClickPointCheckpointBeforeApprovalDialog}
                />
            }

            {tabValue === 'Point Product' &&
                <PointProduct handleClickPointProductDialog={handleClickPointProductDialog}/>
            }

        </div>
    );

}

export default PointManagement;