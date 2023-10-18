import React from 'react';
import {Tab} from "@mui/material";
import CommonTitle from "../../../title/CommonTitle";
import PointsPurchaseControl from "./control/PointsPurchaseControl";
import PointsPurchaseBox from "./pointsBox/PointsPurchaseBox";

// 공통 css
import {BoxStyle, ButtonStyle, TabBox} from "../../../../main/styles/MainStyle";
import PointsPurchaseTable from "./table/PointsPurchaseTable";

function PointsPurchase(props) {
    const {handleClickBuyPointsDialogOpen} = props;
    const [tabValue, setTabValue] = React.useState('purchase');

    const handleChangeTab = (event, newValue) => {
        setTabValue(newValue);
    };


    return (
        <div>
            <CommonTitle
                title={'Points'}
                subTitle={'Check the points you’ve earned in your stream, the points you’ve given as gifts, and your purchase history.'}
            />

            <BoxStyle>
                <TabBox
                    value={tabValue}
                    onChange={handleChangeTab}
                    aria-label="wrapped label tabs example"
                >
                    <Tab value="points" label={'My Points'} disableRipple/>
                    <Tab value="purchase" label={'Purchase'} disableRipple/>
                </TabBox>

                <ButtonStyle onClick={handleClickBuyPointsDialogOpen} disableRipple>
                    Buy Points
                </ButtonStyle>
            </BoxStyle>

            <PointsPurchaseBox/>

            <PointsPurchaseControl/>

            <PointsPurchaseTable/>

        </div>
    );
}

export default PointsPurchase;