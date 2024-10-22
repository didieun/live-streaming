import React from 'react';
import {
    BackButton, ButtonStyle, JustifyEnd, JustifySpace,
    TableTitleText,
    TitleText,
} from "./styles/ChannelPurchaseApprovalsDetailStyle";
import {Typography} from "@mui/material";
import {ReactComponent as BackArrowIcon} from "../../../../../common/images/BackArrowIcon.svg";
import ChannelPurchaseApprovalsDetailTable from "./table/ChannelPurchaseApprovalsDetailTable";
import AdminCommonSelect from "../../../common/select/AdminCommonSelect";
import AdminCalendar from "../../../common/calendar/AdminCalendar";
import ChannelPurchaseApprovalsHistoryTable from "./table/ChannelPurchaseApprovalsHistoryTable";

function ChannelPurchaseApprovalsDetail(props) {
    const {handleClickChannelPurchaseRequestDialog, handleClickCheckpointBeforeApprovalDialog} = props;
    const [filter, setFilter] = React.useState(0);
    const menuList = [
        {text: 'All Status '},
        {text: 'Upcoming'},
        {text: 'Rejected'},
        {text: 'Canceled'},
        {text: 'Approved'},
    ]

    const handleChangeFilter = (event) => {
        setFilter(event.target.value);
    };

    return (
        <div>
            <TitleText>Channel Management</TitleText>

            <BackButton disableRipple>
                <BackArrowIcon/>
                <Typography>User List</Typography>
            </BackButton>

            <TableTitleText>Channel Info</TableTitleText>

            <ChannelPurchaseApprovalsDetailTable handleClickChannelPurchaseRequestDialog={handleClickChannelPurchaseRequestDialog}/>

            <JustifyEnd>
                <ButtonStyle onClick={handleClickCheckpointBeforeApprovalDialog} disableRipple>Channel Purchase Approval</ButtonStyle>
            </JustifyEnd>

            <TableTitleText>Channel Extension History</TableTitleText>
            <JustifySpace>
                <AdminCommonSelect
                    filter={filter}
                    handleChangeFilter={handleChangeFilter}
                    menuList={menuList}
                />
                <AdminCalendar/>
            </JustifySpace>

            <ChannelPurchaseApprovalsHistoryTable/>
        </div>
    );
}

export default ChannelPurchaseApprovalsDetail;
