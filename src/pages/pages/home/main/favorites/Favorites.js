import React from 'react';
import {Container, SelectBox} from "./styles/FavoritesStyle";
import CommonTitle from "../../studio/title/CommonTitle";
import {
    ActionBox, BackgroundColor,
    BoxStyle,
    EmptyButtonStyle,
    EmptySubText,
    EmptyTableBox,
    EmptyTitleText,
    TabBox
} from "../styles/MainStyle";
import {Tab} from "@mui/material";
import Offline from "./offline/Offline";
import CommonSelect from "../../studio/filter/CommonSelect";
import Live from "./live/Live";
import {ReactComponent as AdminEmptyIcon} from "../../../common/images/AdminEmptyIcon.svg";


function Favorites(props) {
    const [tabValue, setTabValue] = React.useState('Live');
    const [liveFilter, setLiveFilter] = React.useState(0);
    const [filter, setFilter] = React.useState(0);
    const LiveList = [
        {text: 'Recent Stream Date'},
        {text: 'View Count'},
        {text: 'Long Duration'},
        {text: 'Favorite Ranked'},

    ];
    const menuList = [
        {text: 'Recent Stream End Date'},
        {text: 'View Count'},
        {text: 'Favorite Ranked'},

    ];

    const handleChangeFilter = (event) => {
        setFilter(event.target.value);
    };

    const handleChangeLiveFilter = (event) => {
        setLiveFilter(event.target.value);
    };

    const handleChangeTab = (event, newValue) => {
        setTabValue(newValue);
    };

    return (
        <Container>
            <CommonTitle
                title={'Favorites'}
                subTitle={'0 Live Channels • 456 Views'}
            />

            <BoxStyle>
                <TabBox
                    value={tabValue}
                    onChange={handleChangeTab}
                    aria-label="wrapped label tabs example"
                >
                    <Tab value="Live" label={'Live'} disableRipple/>
                    <Tab value="Offline" label={'Offline'} disableRipple/>
                </TabBox>

                {tabValue === 'Live' &&
                    <SelectBox>
                        <CommonSelect
                            filter={liveFilter}
                            handleChangeFilter={handleChangeLiveFilter}
                            menuList={LiveList}
                        />
                    </SelectBox>

                }

                {tabValue === 'Offline' &&
                    <SelectBox>
                        <CommonSelect
                            filter={filter}
                            handleChangeFilter={handleChangeFilter}
                            menuList={menuList}
                        />
                    </SelectBox>

                }
            </BoxStyle>

            {tabValue === 'Live' &&
                <Live/>
            }

            {tabValue === 'Offline' &&
                <Offline/>
            }


            {/*/!* ‘Live & Offline’ 탭 공통 -> favorites 한 채널이 없는 경우*!/*/}
            {/*<BackgroundColor>*/}
            {/*    <EmptyTableBox>*/}
            {/*        <AdminEmptyIcon/>*/}
            {/*        <EmptyTitleText>*/}
            {/*            No channels in this favorite list yet*/}
            {/*        </EmptyTitleText>*/}
            {/*        <ActionBox>*/}
            {/*            <EmptyButtonStyle disableRipple>*/}
            {/*                Find Out More!*/}
            {/*            </EmptyButtonStyle>*/}
            {/*        </ActionBox>*/}
            {/*    </EmptyTableBox>*/}
            {/*</BackgroundColor>*/}


            {/*/!* Live 탭만 생방송 채놀이 없는 경우 상태 *!/*/}
            {/*<BackgroundColor>*/}
            {/*    <EmptyTableBox>*/}
            {/*        <AdminEmptyIcon/>*/}
            {/*        <EmptyTitleText>*/}
            {/*            No channels are live.*/}
            {/*        </EmptyTitleText>*/}
            {/*    </EmptyTableBox>*/}
            {/*</BackgroundColor>*/}

            {/*/!* 비로그인 상태 *!/*/}
            {/*<BackgroundColor>*/}
            {/*    <EmptyTableBox>*/}
            {/*        <AdminEmptyIcon/>*/}
            {/*        <EmptyTitleText>*/}
            {/*            Join the Aimm tv!*/}
            {/*        </EmptyTitleText>*/}
            {/*        <ActionBox>*/}
            {/*            <EmptyButtonStyle disableRipple>*/}
            {/*                Log In*/}
            {/*            </EmptyButtonStyle>*/}
            {/*        </ActionBox>*/}
            {/*    </EmptyTableBox>*/}
            {/*</BackgroundColor>*/}
        </Container>
    );
}

export default Favorites;