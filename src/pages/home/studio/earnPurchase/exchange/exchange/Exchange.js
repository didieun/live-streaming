import React from 'react';
import {Tab} from "@mui/material";
import CommonTitle from "../../../title/CommonTitle";
import ExchangeControl from "./control/ExchangeControl";
import ExchangeTable from "./table/ExchangeTable";

// 공통 css
import {BoxStyle, TabBox} from "../../../../main/styles/MainStyle";
import ExchangePointsBox from "./pointsBox/ExchangePointsBox";



function Exchange(props) {
    const {handleClickExchangeSettlementDialogOpen} = props;
    const [tabValue, setTabValue] = React.useState('exchange');

    const handleChangeTab = (event, newValue) => {
        setTabValue(newValue);
    };


    return (
        <div>
            <CommonTitle
                title={'Exchange'}
                subTitle={'View your points holdings and apply to cash exchange points.'}
            />

            <BoxStyle>
                <TabBox
                    value={tabValue}
                    onChange={handleChangeTab}
                    aria-label="wrapped label tabs example"
                >
                    <Tab value="exchange" label={'Request a Exchange'} disableRipple/>
                    <Tab value="history" label={'History'} disableRipple/>
                </TabBox>
            </BoxStyle>

            <ExchangePointsBox handleClickExchangeSettlementDialogOpen={handleClickExchangeSettlementDialogOpen}/>
            <ExchangeControl/>
            <ExchangeTable/>

        </div>
    );
}

export default Exchange;