import React from 'react';
import {
    AlignCenter,
    Container,
    JustifySpace,
    TextStyle,
    FormControlLabelBox,
    CalendarBoxHidden, CalendarBox
} from "./styles/ExchangeApprovalsStyle";
import {ReactComponent as AdminExchangeIcon} from "../../../../common/images/AdminExchangeIcon.svg";
import {ReactComponent as UnChecked} from "../../../../common/images/UnChecked.svg";
import {ReactComponent as Checked} from "../../../../common/images/Checked.svg";
import AdminCommonSelect from "../../common/select/AdminCommonSelect";
import AdminSearch from "../../common/search/AdminSearch";
import {Checkbox} from "@mui/material";
import AdminCalendar from "../../common/calendar/AdminCalendar";
import ExchangeApprovalsTable from "./table/ExchangeApprovalsTable";

function ExchangeApprovals(props) {
    const {handleClickExchangeRequestDialog, handleClickExchangeCheckpointBeforeApprovalDialog} = props;
    const [filter, setFilter] = React.useState(0);
    const menuList = [
        {text: 'All Status'},
        {text: 'requesting'},
        {text: 'rejected'},
        {text: 'canceled'},
        {text: 'exchanged'},
    ]

    const handleChangeFilter = (event) => {
        setFilter(event.target.value);
    };

    return (
        <Container>
            <JustifySpace>
                <AlignCenter>
                    <AdminExchangeIcon/>
                    <TextStyle>
                        Total Count <span>123</span> (ea) | Total Exchange Money <span>1,234,567</span> (﹩)
                    </TextStyle>
                </AlignCenter>

                <AlignCenter>
                    <FormControlLabelBox control={<Checkbox checkedIcon={<Checked />} icon={<UnChecked />}/>} label="Only unauthorized requests" />
                    <AdminCommonSelect
                        filter={filter}
                        handleChangeFilter={handleChangeFilter}
                        menuList={menuList}
                    />
                    <AdminSearch width={280} placeholder={'Search for users'}/>
                    <CalendarBoxHidden>
                        <AdminCalendar/>
                    </CalendarBoxHidden>
                </AlignCenter>
            </JustifySpace>
            <CalendarBox>
                <AdminCalendar/>
            </CalendarBox>

            <ExchangeApprovalsTable
                handleClickExchangeRequestDialog={handleClickExchangeRequestDialog}
                handleClickExchangeCheckpointBeforeApprovalDialog={handleClickExchangeCheckpointBeforeApprovalDialog}
            />
        </Container>
    );

}

export default ExchangeApprovals;