import React from 'react';
import {BackButton, BoxMargin, TableTitleText} from "./styles/MyChannelsDetailStyle";
import {Typography} from "@mui/material";
import {ReactComponent as BackArrowIcon} from "../../../../../common/images/BackArrowIcon.svg";
import MyChannelsDetailInfo from "./info/MyChannelsDetailInfo";
import Search from "../../../../search/Search";
import MyChannelsDetailHistory from "./history/MyChannelsDetailHistory";
import CommonTitle from "../../../title/CommonTitle";

function MyChannelsDetail(props) {
    const {handleClickBack, handleClickEditChannelInfoDialogOpen, handleClickExtendChannelPeriodDialogOpen, handleClickChangeStreamerDialogOpen} = props;

    return (
        <div>
            <CommonTitle
                title={'Channels Manager'}
                subTitle={'View channels you own and change details. Manage streams distribution by channel.'}
            />

            <BackButton onClick={handleClickBack} disableRipple>
                <BackArrowIcon/>
                <Typography>My Channels List</Typography>
            </BackButton>

            <TableTitleText>Channel Info</TableTitleText>
            <MyChannelsDetailInfo
                handleClickEditChannelInfoDialogOpen={handleClickEditChannelInfoDialogOpen}
                handleClickExtendChannelPeriodDialogOpen={handleClickExtendChannelPeriodDialogOpen}
                handleClickChangeStreamerDialogOpen={handleClickChangeStreamerDialogOpen}
            />

            <TableTitleText>Streaming History</TableTitleText>
            <BoxMargin>
                <Search  width={340} placeholder={'Search for channel ID, stream title'}/>
            </BoxMargin>
            <MyChannelsDetailHistory/>
        </div>
    );
}

export default MyChannelsDetail;