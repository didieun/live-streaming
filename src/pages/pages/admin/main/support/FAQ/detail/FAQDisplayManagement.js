import React from 'react';
import {
    AlignCenter,
    BackButton, ButtonStyle, JustifySpace,
    TableTitleText,
    TitleText,
    TextStyle, JustifyCenter
} from "./styles/FAQDisplayManagementStyle";
import {Typography} from "@mui/material";
import {ReactComponent as BackArrowIcon} from "../../../../../common/images/BackArrowIcon.svg";
import {ReactComponent as FAQIcon} from "../../../../../common/images/FAQIcon.svg";
import {ReactComponent as KeyboardArrowDownIcon} from "../../../../../common/images/KeyboardArrowDownIcon.svg";
import AdminCommonSelect from "../../../common/select/AdminCommonSelect";
import AdminSearch from "../../../common/search/AdminSearch";
import FAQExposeTable from "./table/FAQExposeTable";
import FAQListTable from "./table/FAQListTable";

function FAQDisplayManagement(props) {
    const [filter, setFilter] = React.useState(0);
    const menuList = [
        {text: 'Topics'},
        {text: 'Account'},
        {text: 'Broadcasting'},
        {text: 'Channel'},
        {text: 'Point'},
        {text: 'Channel Owner'},
        {text: 'Streamer'},
        {text: 'Troubleshooting'},
    ]

    const handleChangeFilter = (event) => {
        setFilter(event.target.value);
    };

    return (
        <div>
            <TitleText>Support</TitleText>

            <BackButton disableRipple>
                <BackArrowIcon/>
                <Typography>FAQ List</Typography>
            </BackButton>

            <JustifySpace>
                <TableTitleText>FAQs to Expose <span>12</span></TableTitleText>
                <ButtonStyle disableRipple>Save and Display</ButtonStyle>
            </JustifySpace>

            <FAQExposeTable/>

            <JustifyCenter>
                <TextStyle>If you enable FAQs display in the bottom live FAQ list, they will appear in the top list.</TextStyle>
                <KeyboardArrowDownIcon/>
            </JustifyCenter>

            <JustifySpace>
                <AlignCenter>
                    <FAQIcon style={{marginRight: 8}}/>
                    <TableTitleText>FAQs List</TableTitleText>
                </AlignCenter>
                <AlignCenter>
                    <AdminCommonSelect
                        filter={filter}
                        handleChangeFilter={handleChangeFilter}
                        menuList={menuList}
                    />
                    <AdminSearch width={280} placeholder={'Search for question, answer'}/>
                </AlignCenter>
            </JustifySpace>

            <FAQListTable/>

        </div>
    );
}

export default FAQDisplayManagement;