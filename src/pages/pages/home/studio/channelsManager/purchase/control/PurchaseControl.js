import React from 'react';
import {Container, FormControlLabelBox, PurchaseControlBox,} from "./styles/PurchaseControlStyle";
import Search from "../../../../search/Search";
import {Checkbox} from "@mui/material";
import {ReactComponent as UnChecked} from "../../../../../common/images/UnChecked.svg";
import {ReactComponent as Checked} from "../../../../../common/images/Checked.svg";
import CommonSelect from "../../../filter/CommonSelect";

function PurchaseControl(props) {
    const [filter, setFilter] = React.useState(0);
    const menuList = [
        {text: 'All Status'},
        {text: 'Activated'},
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
        <PurchaseControlBox>
            <CommonSelect
                filter={filter}
                handleChangeFilter={handleChangeFilter}
                menuList={menuList}
            />

            <Search  width={234} placeholder={'Search for channel ID'}/>

            <FormControlLabelBox control={<Checkbox checkedIcon={<Checked />} icon={<UnChecked />}/>} label="Only unread Notes" />
        </PurchaseControlBox>
    );
}

export default PurchaseControl;