import React from 'react';
import PurchaseControl from "./control/PurchaseControl";
import MyChannelsPurchaseTable from "./table/MyChannelsPurchaseTable";
import {Tab} from "@mui/material";

// 공통 css
import {BoxStyle, TabBox, ButtonStyle} from "../../../main/styles/MainStyle";
import CommonTitle from "../../title/CommonTitle";

function MyChannelsPurchase(props) {
    const {handleClickBuyANewChannelDialogOpen} = props;
    const [tabValue, setTabValue] = React.useState('purchase');

    const handleChangeTab = (event, newValue) => {
        setTabValue(newValue);
    };

    return (
        <div>
            <CommonTitle
                title={'Channels Manager'}
                subTitle={'View channels you own and change details. Manage streams distribution by channel.'}
            />

            <BoxStyle>
                <TabBox
                    value={tabValue}
                    onChange={handleChangeTab}
                    aria-label="wrapped label tabs example"
                >
                    <Tab value="channels" label={'My Channels'} disableRipple/>
                    <Tab value="purchase" label={'Purchase'} disableRipple/>
                </TabBox>

                <ButtonStyle onClick={handleClickBuyANewChannelDialogOpen} disableRipple>
                    Buy a New Channel
                </ButtonStyle>
            </BoxStyle>

            <PurchaseControl/>
            <MyChannelsPurchaseTable/>
        </div>
    );
}

export default MyChannelsPurchase;