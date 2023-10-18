import React from 'react';
import {AbsoluteButton, BoxPosition, TitleText} from "../styles/AdminMainStyle";
import Tabs from "../common/tabs/Tabs";
import ChannelPurchaseApprovals from "./channelPurchaseApprovals /ChannelPurchaseApprovals";
import ChannelProducts from "./channelProducts/ChannelProducts";
import LiveChannel from "./liveChannel/LiveChannel";

function ChannelManagement(props) {
    const {handleClickAddANewChannelProductDialog, handleClickChannelProductDialog} = props;
    const [tabValue, setTabValue] = React.useState('Channel Purchase Approvals');
    const valueList =
        [
            {
                label: 'Channel Purchase Approvals ',
                value: 'Channel Purchase Approvals'
            },
            {
                label: 'Channel Products',
                value: 'Channel Products'
            },
            {
                label: 'Live Channel',
                value: 'Live Channel'
            },
        ]

    const handleChangeTab = (event, newValue) => {
        setTabValue(newValue);
    };

    return (
        <div>
            <TitleText>Channel Management</TitleText>
            <BoxPosition>
                <Tabs
                    tabValue={tabValue}
                    handleChangeTab={handleChangeTab}
                    valueList={valueList}
                />
                {tabValue === 'Channel Products' &&
                    <AbsoluteButton onClick={handleClickAddANewChannelProductDialog} disableRipple>
                        Add a New Channel Product
                    </AbsoluteButton>
                }
            </BoxPosition>

            {tabValue === 'Channel Purchase Approvals' &&
                <ChannelPurchaseApprovals/>
            }

            {tabValue === 'Channel Products' &&
                <ChannelProducts handleClickChannelProductDialog={handleClickChannelProductDialog}/>
            }

            {tabValue === 'Live Channel' &&
                <LiveChannel/>
            }

        </div>
    );

}

export default ChannelManagement;