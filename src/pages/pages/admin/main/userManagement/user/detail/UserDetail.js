import React from 'react';
import {
    AlignCenter,
    BackButton,
    ButtonLineStyle,
    ButtonStyle,
    JustifySpace,
    NotesText,
    TableTitleText,
    TitleText,
    Flex,
    JustifyEnd,
    NumberText,
    StyledTextarea,
    SubText,
    SaveButton,
    AlignEnd,
    JustifySpaceWidth,
    TabBox,
    ButtonPosition,
    ButtonGreenLineStyle,
    JustifySpace2,
    RedText, TextStyle
} from "./styles/UserDetailStyle";
import {Typography} from "@mui/material";
import {ReactComponent as BackArrowIcon} from "../../../../../common/images/BackArrowIcon.svg";
import UserDetailTable from "./table/UserDetailTable";
import Tabs from "../../../common/tabs/Tabs";
import UserDetailFavoriteChannelsTable from "./table/UserDetailFavoriteChannelsTable";
import UserDetailStreamingHistoryTable from "./table/UserDetailStreamingHistoryTable";
import AdminSearch from "../../../common/search/AdminSearch";
import AdminCalendar from "../../../common/calendar/AdminCalendar";
import AdminCommonSelect from "../../../common/select/AdminCommonSelect";
import UserDetailPointsHistoryTable from "./table/UserDetailPointsHistoryTable";

function UserDetail(props) {
    const {handleClickActivateAccountDialog} = props;
    const [tabValue, setTabValue] = React.useState('favorite');
    const [filter, setFilter] = React.useState(0);
    const menuList = [
        {text: 'All Type'},
        {text: 'Points Received'},
        {text: 'Settlement Received'},
        {text: 'Points Settled'},
        {text: 'Points Sent'},
    ]

    const valueList =
        [
            {
                label: 'Favorite Channels',
                value: 'favorite'
            },
            {
                label: 'Streaming History',
                value: 'streaming'
            },
            {
                label: 'Points History',
                value: 'points'
            },
        ]

    const handleChangeFilter = (event) => {
        setFilter(event.target.value);
    };

    const handleChangeTab = (event, newValue) => {
        setTabValue(newValue);
    };

    return (
        <div>
            <TitleText>목록에서 선택한 유저 네임</TitleText>

            <BackButton disableRipple>
                <BackArrowIcon/>
                <Typography>User List</Typography>
            </BackButton>

            <JustifySpace>
                <TableTitleText>User Info</TableTitleText>
                <AlignCenter>
                    <ButtonLineStyle disableRipple>Reset Password</ButtonLineStyle>
                    <ButtonLineStyle disabled={true} disableRipple>Deactivate Account</ButtonLineStyle>
                    {/*<ButtonLineStyle disabled={false} onClick={handleClickActivateAccountDialog} disableRipple>Activate Account</ButtonLineStyle>*/}
                </AlignCenter>
            </JustifySpace>

            <UserDetailTable/>
            <JustifySpace2>
                <Flex>
                    <NotesText>Notes</NotesText>
                    <div>
                        <AlignEnd>
                            <StyledTextarea
                                minRows={3}
                                maxRows={3}
                                placeholder="There are no notes."
                            />
                            <SaveButton disableRipple>
                                Save
                            </SaveButton>
                        </AlignEnd>

                        <JustifySpaceWidth>
                            <SubText>
                                * This is an administrator note to users.
                            </SubText>
                            <JustifyEnd>
                                <NumberText>0 / 5,000</NumberText>
                            </JustifyEnd>
                        </JustifySpaceWidth>

                    </div>
                </Flex>
                <div>
                    <RedText>* The account has been deactivated by the user since Sep. 25, 2023.</RedText>
                    <TextStyle>The reason: i have no ideai have no ideai have no ideai have no ideai<br/> have no ideai have no ideai have no ideaee</TextStyle>
                    {/*<RedText>* The account has been deactivated by the administrator (administrator's username)<br/> since Sep. 25, 2023.</RedText>*/}
                </div>



            </JustifySpace2>


            <TabBox>
                <Tabs
                    tabValue={tabValue}
                    handleChangeTab={handleChangeTab}
                    valueList={valueList}
                />

                <ButtonPosition>
                    <ButtonGreenLineStyle disableRipple>Purchased Points</ButtonGreenLineStyle>
                    <ButtonGreenLineStyle disableRipple>Purchased Channels</ButtonGreenLineStyle>
                </ButtonPosition>
            </TabBox>


            {tabValue === 'points' ?
                <JustifySpace>
                    <AlignCenter>
                        <AdminCommonSelect
                            filter={filter}
                            handleChangeFilter={handleChangeFilter}
                            menuList={menuList}
                        />
                        <AdminSearch
                            width={280}
                            placeholder={'Search for channel ID, tags, stream title'
                        }
                        />
                    </AlignCenter>
                    <AdminCalendar/>
                </JustifySpace>
                :
                <AdminSearch
                    width={280}
                    placeholder={
                        tabValue === 'favorite' ?
                            'Search for channel ID'
                            :
                            'Search for channel ID, tags, stream title'
                    }
                />
            }



            {tabValue === 'favorite' &&
                <UserDetailFavoriteChannelsTable/>
            }

            {tabValue === 'streaming' &&
                <UserDetailStreamingHistoryTable/>
            }

            {tabValue === 'points' &&
                <UserDetailPointsHistoryTable/>
            }

        </div>
    );
}

export default UserDetail;