import React from 'react';
import Search from "../../../../../search/Search";
import Calendar from "../../../../calendar/Calendar";

//공통 css
import {AlignCenter, ControlBox, TextStyle} from "../../../styles/ControlStyle";

function SettlementControl(props) {
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
            <Search  width={379} placeholder={'Search for streamer, Stream title, channel ID'}/>
            <AlignCenter>
                <TextStyle>* Total Received Points :</TextStyle>
                <TextStyle><span>35.2K</span> points</TextStyle>
            </AlignCenter>
        </ControlBox>
    );
}

export default SettlementControl;