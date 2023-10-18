import React from 'react';
import Search from "../../../search/Search";
import MyChannelsTable from "./table/MyChannelsTable";
import {Tab} from "@mui/material";
// 공통 css
import {BoxStyle, TabBox} from "../../../main/styles/MainStyle";
import CommonTitle from "../../title/CommonTitle";

function MyChannels() {
    const [tabValue, setTabValue] = React.useState('channels');

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
            </BoxStyle>

            <Search  width={340} placeholder={'Search for channel ID, stream title'}/>
            <MyChannelsTable/>
        </div>
    );
}

export default MyChannels;