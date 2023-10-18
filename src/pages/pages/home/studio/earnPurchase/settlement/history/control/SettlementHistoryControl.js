import React from 'react';
import Search from "../../../../../search/Search";
import CommonSelect from "../../../../filter/CommonSelect";
import Calendar from "../../../../calendar/Calendar";

//공통 css
import {AlignCenter, ControlBox} from "../../../styles/ControlStyle";

function SettlementHistoryControl(props) {
    const [filter, setFilter] = React.useState(0);
    const menuList = [
        {text: 'All Roles'},
        {text: 'Channel Owner'},
        {text: 'Streamer'},
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

                <Search  width={385} placeholder={'Search for nickname, Stream title, channel ID'}/>
            </AlignCenter>

            <Calendar/>
        </ControlBox>
    );
}

export default SettlementHistoryControl;