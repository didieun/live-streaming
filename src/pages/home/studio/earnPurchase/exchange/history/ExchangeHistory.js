import React from 'react';
import {Tab} from "@mui/material";
import CommonTitle from "../../../title/CommonTitle";
import ExchangeHistoryControl from "./control/ExchangeHistoryControl";
import ExchangeHistoryPurchaseBox from "./pointsBox/ExchangeHistoryPurchaseBox";

// 공통 css
import {BoxStyle, ButtonStyle, TabBox} from "../../../../main/styles/MainStyle";
import ExchangeHistoryTable from "./table/ExchangeHistoryTable";

function ExchangeHistory(props) {
    const [tabValue, setTabValue] = React.useState('history');

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

                <ButtonStyle disableRipple>
                    Buy Points
                </ButtonStyle>
            </BoxStyle>

            <ExchangeHistoryPurchaseBox/>

            <ExchangeHistoryControl/>

            <ExchangeHistoryTable/>

        </div>
    );
}

export default ExchangeHistory;