import React from 'react';
import Search from "../../../../../search/Search";
import CommonSelect from "../../../../filter/CommonSelect";
import Calendar from "../../../../calendar/Calendar";

//공통 css
import {AlignCenter, ControlBox} from "../../../styles/ControlStyle";

function PointsControl(props) {
    const [filter, setFilter] = React.useState(0);
    const menuList = [
        {text: 'All Type'},
        {text: 'Points Received'},
        {text: 'Settlement Received'},
        {text: 'Points Settled'},
        {text: 'Points Sent'},

    ]

    const handleChangeFilter = (event) => {
        setFilter(event.target.value);
    };

    return (
        <ControlBox>
            <AlignCenter>
                <CommonSelect
                    filter={filter}
                    handleChangeFilter={handleChangeFilter}
                    menuList={menuList}
                />

                <Search  width={294} placeholder={'Search for channel ID , nickname'}/>
            </AlignCenter>

            <Calendar/>
        </ControlBox>
    );
}

export default PointsControl;