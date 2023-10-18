import React from 'react';
import {AlignCenter, Container, JustifySpace, TextStyle, FormControlLabelBox} from "./styles/NotificationsStyle";
import {ReactComponent as AdminNotificationsIcon} from "../../../../common/images/AdminNotificationsIcon.svg";
import {ReactComponent as UnChecked} from "../../../../common/images/UnChecked.svg";
import {ReactComponent as Checked} from "../../../../common/images/Checked.svg";
import AdminCommonSelect from "../../common/select/AdminCommonSelect";
import AdminSearch from "../../common/search/AdminSearch";
import {Checkbox} from "@mui/material";
import NotificationsTable from "./table/NotificationsTable";

function Notifications(props) {
    const {handleClickNotificationDialog} = props;
    const [filter, setFilter] = React.useState(0);
    const menuList = [
        {text: 'Type'},
        {text: 'Announcement'},
        {text: 'Notification'}
    ]

    const handleChangeFilter = (event) => {
        setFilter(event.target.value);
    };

    return (
        <Container>
            <JustifySpace>
                <AlignCenter>
                    <AdminNotificationsIcon/>
                    <TextStyle>
                        Displayed Notifications <span>9</span>
                    </TextStyle>
                </AlignCenter>

                <AlignCenter>
                    <FormControlLabelBox control={<Checkbox checkedIcon={<Checked />} icon={<UnChecked />}/>} label="Excluding displayed Noti." />
                    <AdminCommonSelect
                        filter={filter}
                        handleChangeFilter={handleChangeFilter}
                        menuList={menuList}
                    />
                    <AdminSearch width={280} placeholder={'Search for title, message'}/>
                </AlignCenter>
            </JustifySpace>

            <NotificationsTable handleClickNotificationDialog={handleClickNotificationDialog}/>

        </Container>
    );

}

export default Notifications;