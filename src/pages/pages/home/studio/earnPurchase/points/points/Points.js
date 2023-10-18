import React from 'react';
import {Tab} from "@mui/material";
import CommonTitle from "../../../title/CommonTitle";
import PointsBox from "./pointsBox/PointsBox";
import PointsControl from "./control/PointsControl";
import PointsTable from "./table/PointsTable";

// 공통 css
import {BoxStyle, TabBox} from "../../../../main/styles/MainStyle";



function Points(props) {
    const [tabValue, setTabValue] = React.useState('points');

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
            </BoxStyle>

            <PointsBox/>

            <PointsControl/>

            <PointsTable/>

        </div>
    );
}

export default Points;