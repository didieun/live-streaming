import React from 'react';
import {Tab} from "@mui/material";
import CommonTitle from "../../../title/CommonTitle";

// 공통 css
import {BoxStyle, TabBox} from "../../../../main/styles/MainStyle";
import SettlementPointsBox from "./pointsBox/SettlementPointsBox";
import SettlementControl from "./control/SettlementControl";
import SettlementTable from "./table/SettlementTable";



function Settlement(props) {
    const {handleClickSettlementDialogOpen} = props;
    const [tabValue, setTabValue] = React.useState('settlement');

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

            <SettlementPointsBox handleClickSettlementDialogOpen={handleClickSettlementDialogOpen}/>

            <SettlementControl/>

            <SettlementTable/>
        </div>
    );
}

export default Settlement;