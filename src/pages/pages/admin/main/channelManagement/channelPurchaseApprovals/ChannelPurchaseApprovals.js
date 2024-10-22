import React from 'react';
import {AlignCenter, Container, JustifySpace, TextStyle, FormControlLabelBox} from "./styles/ChannelPurchaseApprovalsStyle";
import {ReactComponent as AdminVideoPlayListIcon} from "../../../../common/images/AdminVideoPlayListIcon.svg";
import {ReactComponent as UnChecked} from "../../../../common/images/UnChecked.svg";
import {ReactComponent as Checked} from "../../../../common/images/Checked.svg";
import AdminCommonSelect from "../../common/select/AdminCommonSelect";
import AdminSearch from "../../common/search/AdminSearch";
import {Checkbox} from "@mui/material";
import ChannelPurchaseApprovalsTable from "./table/ChannelPurchaseApprovalsTable";
import AdminCalendar from "../../common/calendar/AdminCalendar";

function ChannelPurchaseApprovals(props) {
    const [filter, setFilter] = React.useState(0);
    const menuList = [
        {text: 'All Status'},
        {text: 'Approved'},
        {text: 'Requesting'},
        {text: 'Upcoming'},
        {text: 'Expired'},
        {text: 'Canceled'},
        {text: 'Rejected'},
    ]

    const handleChangeFilter = (event) => {
        setFilter(event.target.value);
    };

    return (
        <Container>
            <JustifySpace>
                <AlignCenter>
                    <AdminVideoPlayListIcon/>
                    <TextStyle>
                        <span>123 </span> Channels
                    </TextStyle>
                </AlignCenter>

                <AlignCenter>
                    <FormControlLabelBox control={<Checkbox checkedIcon={<Checked />} icon={<UnChecked />}/>} label="Only unread Notes" />
                    <AdminCommonSelect
                        filter={filter}
                        handleChangeFilter={handleChangeFilter}
                        menuList={menuList}
                    />
                    <AdminSearch width={280} placeholder={'Search for channel ID, buyer'}/>
                    <AdminCalendar/>
                </AlignCenter>
            </JustifySpace>
            <ChannelPurchaseApprovalsTable/>
        </Container>
    );

}

export default ChannelPurchaseApprovals;
