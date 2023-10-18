import React from 'react';
import {AlignCenter, Container, JustifySpace, TextStyle, LiveBox} from "./styles/MainBannerDisplayStyles";
import {ReactComponent as LiveIcon} from "../../../../common/images/LiveIcon.svg";
import AdminSearch from "../../common/search/AdminSearch";
import MainBannerDisplayTable from "./table/MainBannerDisplayTable";
import {Typography} from "@mui/material";

function MainBannerDisplay(props) {

    return (
        <Container>
            <JustifySpace>
                <AlignCenter>
                    <LiveBox>
                        <LiveIcon/>
                        <Typography>LIVE</Typography>
                    </LiveBox>
                    <TextStyle>
                        Displayed Channels <span>12</span>
                    </TextStyle>
                </AlignCenter>

                <AlignCenter>
                    <AdminSearch width={280} placeholder={'Search for channel ID, stream title'}/>
                </AlignCenter>
            </JustifySpace>

            <MainBannerDisplayTable/>
        </Container>
    );

}

export default MainBannerDisplay;