import React from 'react';
import {Tab} from "@mui/material";
import CommonTitle from "../../../title/CommonTitle";
import SettlementHistoryPointsBox from "./pointsBox/SettlementHistoryPointsBox";

// 공통 css
import {BoxStyle, TabBox} from "../../../../main/styles/MainStyle";
import SettlementHistoryControl from "./control/SettlementHistoryControl";
import SettlementHistoryTable from "./table/SettlementHistoryTable";

function SettlementHistory(props) {
    const [tabValue, setTabValue] = React.useState('history');

    const handleChangeTab = (event, newValue) => {
        setTabValue(newValue);
    };


    return (
        <div>
            <CommonTitle
                title={'Settlement'}
                subTitle={'Channel owners can settle the points their streamers receive from live broadcasts.'}
            />

            <BoxStyle>
                <TabBox
                    value={tabValue}
                    onChange={handleChangeTab}
                    aria-label="wrapped label tabs example"
                >
                    <Tab value="settlement" label={'Settlement to streamer'} disableRipple/>
                    <Tab value="history" label={'History'} disableRipple/>
                </TabBox>
            </BoxStyle>

            <SettlementHistoryPointsBox/>

            <SettlementHistoryControl/>

            <SettlementHistoryTable/>
        </div>
    );
}

export default SettlementHistory;