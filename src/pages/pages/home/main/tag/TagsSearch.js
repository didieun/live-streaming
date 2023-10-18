import React from 'react';
import {Container, SelectBox, TitleText} from "./styles/TagsSearchStyle";
import CommonTitle from "../../studio/title/CommonTitle";
import {
    BoxStyle,
    EmptySubText,
    EmptyTableBox,
    EmptyTitleText,
    TabBox,
    BackgroundColor
} from "../styles/MainStyle";
import {Tab} from "@mui/material";
import Offline from "./offline/Offline";
import CommonSelect from "../../studio/filter/CommonSelect";
import Live from "./live/Live";
import {ReactComponent as AdminEmptyIcon} from "../../../common/images/AdminEmptyIcon.svg";


function TagsSearch(props) {
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
                title={
                    tabValue === 'Live' ?
                        <TitleText>Search Results for: <span>#tag</span></TitleText>
                        :
                        '#tag123'
                }
                subTitle={'0 Live Channels • 0 Views'}
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


            {/* No results found */}
            {/*<BackgroundColor>*/}
            {/*    <EmptyTableBox>*/}
            {/*        <AdminEmptyIcon/>*/}
            {/*        <EmptyTitleText>*/}
            {/*            No results found*/}
            {/*        </EmptyTitleText>*/}
            {/*        <EmptySubText>*/}
            {/*            Make sure all words are spelled correctly or try using different tags.*/}
            {/*        </EmptySubText>*/}
            {/*    </EmptyTableBox>*/}
            {/*</BackgroundColor>*/}

        </Container>
    );
}

export default TagsSearch;