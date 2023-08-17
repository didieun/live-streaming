import React from 'react';
import CommonSelect from "../../../../filter/CommonSelect";
import Calendar from "../../../../calendar/Calendar";

//공통 css
import {ControlBox} from "../../../styles/ControlStyle";

function PointsPurchaseControl(props) {
    const [filter, setFilter] = React.useState(0);
    const menuList = [
        {text: 'All Status'},
        {text: 'Charged'},
        {text: 'Requesting'},
        {text: 'Canceled'},
        {text: 'Rejected'},
    ]

    const handleChangeFilter = (event) => {
        setFilter(event.target.value);
    };

    return (
        <ControlBox>
            <CommonSelect
                filter={filter}
                handleChangeFilter={handleChangeFilter}
                menuList={menuList}
            />

            <Calendar/>
        </ControlBox>
    );
}

export default PointsPurchaseControl;