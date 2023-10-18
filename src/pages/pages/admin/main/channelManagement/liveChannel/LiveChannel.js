import React from 'react';
import {AlignCenter, Container, JustifySpace, TextStyle} from "./styles/LiveChannelStyles";
import {ReactComponent as AdminVideoPlayListIcon} from "../../../../common/images/AdminVideoPlayListIcon.svg";
import AdminSearch from "../../common/search/AdminSearch";
import LiveChannelTable from "./table/LiveChannelTable";

function LiveChannel(props) {

    return (
        <Container>
            <JustifySpace>
                <AlignCenter>
                    <AdminVideoPlayListIcon/>
                    <TextStyle>
                        Channels <span>123</span>
                    </TextStyle>
                </AlignCenter>

                <AlignCenter>
                    <AdminSearch width={280} placeholder={'Search for channel ID, stream title '}/>
                </AlignCenter>
            </JustifySpace>

            <LiveChannelTable/>
        </Container>
    );

}

export default LiveChannel;