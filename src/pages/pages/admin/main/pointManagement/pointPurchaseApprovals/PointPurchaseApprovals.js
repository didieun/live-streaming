import React from 'react';
import {
    AlignCenter,
    Container,
    JustifySpace,
    TextStyle,
    FormControlLabelBox,
    CalendarBoxHidden, CalendarBox
} from "./styles/PointPurchaseApprovalsStyle";
import {ReactComponent as AdminPointIcon} from "../../../../common/images/AdminPointIcon.svg";
import {ReactComponent as UnChecked} from "../../../../common/images/UnChecked.svg";
import {ReactComponent as Checked} from "../../../../common/images/Checked.svg";
import AdminCommonSelect from "../../common/select/AdminCommonSelect";
import AdminSearch from "../../common/search/AdminSearch";
import {Checkbox} from "@mui/material";
import AdminCalendar from "../../common/calendar/AdminCalendar";
import PointPurchaseApprovalsTable from "./table/PointPurchaseApprovalsTable";

function PointPurchaseApprovals(props) {
    const {handleClickPointPurchaseRequestDialog, handleClickPointCheckpointBeforeApprovalDialog} = props;
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
                    <AdminPointIcon/>
                    <TextStyle>
                        Total Count <span>123</span> (ea) | Total Approved Points <span>1,234,567</span> (points)
                    </TextStyle>
                </AlignCenter>

                <AlignCenter>
                    <FormControlLabelBox control={<Checkbox checkedIcon={<Checked />} icon={<UnChecked />}/>} label="Only unauthorized requests" />
                    <AdminCommonSelect
                        filter={filter}
                        handleChangeFilter={handleChangeFilter}
                        menuList={menuList}
                    />
                    <AdminSearch width={280} placeholder={'Search for buyer'}/>
                    <CalendarBoxHidden>
                        <AdminCalendar/>
                    </CalendarBoxHidden>
                </AlignCenter>
            </JustifySpace>
            <CalendarBox>
                <AdminCalendar/>
            </CalendarBox>

            <PointPurchaseApprovalsTable
                handleClickPointPurchaseRequestDialog={handleClickPointPurchaseRequestDialog}
                handleClickPointCheckpointBeforeApprovalDialog={handleClickPointCheckpointBeforeApprovalDialog}
            />
        </Container>
    );

}

export default PointPurchaseApprovals;