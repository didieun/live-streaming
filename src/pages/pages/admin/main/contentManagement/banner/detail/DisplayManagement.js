import React from 'react';
import {
    AlignCenter,
    BackButton, ButtonStyle, JustifySpace,
    TableTitleText,
    TitleText,
    LiveBox, TextStyle, JustifyCenter
} from "./styles/DisplayManagementStyle";
import {Typography} from "@mui/material";
import {ReactComponent as BackArrowIcon} from "../../../../../common/images/BackArrowIcon.svg";
import {ReactComponent as LiveIcon} from "../../../../../common/images/LiveIcon.svg";
import {ReactComponent as KeyboardArrowDownIcon} from "../../../../../common/images/KeyboardArrowDownIcon.svg";
import AdminCalendar from "../../../common/calendar/AdminCalendar";
import DisplayManagementExposeTable from "./table/DisplayManagementExposeTable";
import DisplayManagementListTable from "./table/DisplayManagementListTable";

function DisplayManagement(props) {

    return (
        <div>
            <TitleText>Content Management</TitleText>

            <BackButton disableRipple>
                <BackArrowIcon/>
                <Typography>Main Banner List</Typography>
            </BackButton>

            <JustifySpace>
                <TableTitleText>Channels to Expose <span>12</span></TableTitleText>
                <ButtonStyle disableRipple>Save and Display</ButtonStyle>
            </JustifySpace>

            <DisplayManagementExposeTable/>

            <JustifyCenter>
                <TextStyle>If you enable channel display in the bottom live channel list, they will appear in the top list.</TextStyle>
                <KeyboardArrowDownIcon/>
            </JustifyCenter>

            <JustifySpace>
                <AlignCenter>
                    <LiveBox>
                        <LiveIcon/>
                        <Typography>LIVE</Typography>
                    </LiveBox>
                    <TableTitleText>Channels List</TableTitleText>
                </AlignCenter>

                <AdminCalendar/>
            </JustifySpace>

            <DisplayManagementListTable/>

        </div>
    );
}

export default DisplayManagement;