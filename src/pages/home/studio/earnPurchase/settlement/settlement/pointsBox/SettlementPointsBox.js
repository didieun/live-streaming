import React from 'react';
import {ReactComponent as PointsIcon2} from "../../../../../../common/images/PointsIcon2.svg";
import {ReactComponent as CurrentIcon} from "../../../../../../common/images/CurrentIcon.svg";
import {ReactComponent as ArrowDownIcon} from "../../../../../../common/images/ArrowDownIcon.svg";
import {ReactComponent as RadioIcon} from "../../../../../../common/images/RadioIcon.svg";
import {ReactComponent as UnRadioIcon} from "../../../../../../common/images/UnRadioIcon.svg";
import {ReactComponent as ProfileUserIcon} from "../../../../../../common/images/ProfileUserIcon.svg";
import {ReactComponent as InfoIcon} from "../../../../../../common/images/InfoIcon.svg";
import {ReactComponent as CalendarIcon} from "../../../../../../common/images/CalendarIcon.svg";
import Search from "../../../../../search/Search";
import {
    List,
    ListItem,
    ListItemButton,
    ListItemIcon, ListItemText,
    OutlinedInput,Typography
} from "@mui/material";

//공통 css
import {
    AlignCenter,
    AlignEnd,
    BeforeBox,
    BoxStyle,
    FontSize14,
    FontSize16,
    FontSizeSpan,
    IconMargin,
    IconTitleGreen,
    JustifyCenter,
    LineStyle2,
    MarginLeftRight,
    MarginRight,
    PointsTextGreen,
    SubText,
    SearchBox,
    SettlementButton,
    FontSize18,
    ContentsIn,
    DatePickerText,
    ContainerBox,
    PopoverButtonStyle,
    PopoverBox,
    ImageBox,
    NoImageBox,
    RadioBox,
    ListItemNameText,
    WhomPopoverButtonStyle,
    WhomBox,
    AvatarBox,
    CurrentPointsBox,
    SettlementBox,
    SettlementBoxIn,
    WarningBox, SmallDatePicker, BasicDatePicker
} from "./styles/SettlementPointsBoxStyle";
import {AdapterDayjs} from "@mui/x-date-pickers/AdapterDayjs";
import {DemoContainer} from "@mui/x-date-pickers/internals/demo";
import {DatePicker, LocalizationProvider} from "@mui/x-date-pickers";
import dayjs from "dayjs";
import NoImageIcon from "../../../../../../common/images/NoImageIcon.svg";
import TestVideoImage from "../../../../../../common/images/TestVideoImage.jpg";
import TestProfileImage from "../../../../../../common/images/TestProfileImage.jpeg";
import {ButtonIcon} from "../../../../calendar/styles/CalendarStyle";

function SettlementPointsBox(props) {
    const {handleClickSettlementDialogOpen} = props;

    const [calendarOpen, setCalendarOpen] = React.useState(false);
    const [endCalendarOpen, setEndCalendarOpen] = React.useState(false);
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [whomAnchorEl, setWhomAnchorEl] = React.useState(null);
    const [channelsChecked, setChannelsChecked] = React.useState('All Channels');
    const [whomChecked, setWhomChecked] = React.useState('Choose a Streamer');
    const menuList = [
        {imageUrl: TestVideoImage, id: 'abc-12345677'},
        {imageUrl: '', id: 'abc-12345678'},
        {imageUrl: '', id: 'abc-12345676'},
        {imageUrl: '', id: 'abc-12345675'},
    ]
    const whomMenuList = [
        {imageUrl: TestProfileImage, name: 'Jeremy Elder'},
        {imageUrl: TestProfileImage, name: 'Jeremy'},
        {imageUrl: '', name: 'Elder'},
        {imageUrl: '', name: 'Jeremy Elder Jeremy Elder'},
    ]
    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;
    const whomOpen = Boolean(whomAnchorEl);
    const whomId = whomOpen ? 'simple-popover' : undefined;

    const handleClickPopoverOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClickWhomPopoverOpen = (event) => {
        setWhomAnchorEl(event.currentTarget);
    };

    const handleClosePopover = () => {
        setAnchorEl(null);
        setWhomAnchorEl(null);
    };

    const handleClickChannelsChecked = (event) => {
        setChannelsChecked(event.target.value)
    };

    const handleClickChannelsButton = (value) => {
        setChannelsChecked(value)
    };

    const handleClickWhomChecked = (event) => {
        setWhomChecked(event.target.value)
    };

    const handleClickWhomButton = (value) => {
        setWhomChecked(value)
    };

    const controlProps = (item) => ({
        checked: channelsChecked === item,
        onChange: handleClickChannelsChecked,
        value: item,
        name: 'color-radio-button-demo',
        inputProps: { 'aria-label': item },
    });

    const whomControlProps = (item) => ({
        checked: whomChecked === item,
        onChange: handleClickWhomChecked,
        value: item,
        name: 'color-radio-button-demo',
        inputProps: { 'aria-label': item },
    });

    return (
        <JustifyCenter>
            <ContentsIn>
                <BoxStyle>
                    <CurrentPointsBox>
                        <CurrentIcon/>
                        <IconMargin>
                            <IconTitleGreen>Current Points</IconTitleGreen>

                            <PointsTextGreen>
                                <span>95,620</span> points
                            </PointsTextGreen>
                        </IconMargin>
                    </CurrentPointsBox>

                    <LineStyle2/>

                    <SettlementBox>
                        <SettlementBoxIn>
                            <PointsIcon2 style={{marginRight: 25, marginBottom: 10}}/>

                            <AlignEnd>
                                <MarginLeftRight>
                                    <SubText>My Channels</SubText>
                                    <PopoverButtonStyle aria-describedby={id} onClick={handleClickPopoverOpen} disableRipple>
                                        <Typography>{channelsChecked}</Typography>
                                        <ArrowDownIcon/>
                                    </PopoverButtonStyle>
                                    <PopoverBox
                                        id="simple-popper"
                                        open={open}
                                        anchorEl={anchorEl}
                                        onClose={handleClosePopover}
                                        anchorOrigin={{
                                            vertical: 'bottom',
                                            horizontal: 'left'
                                        }}
                                        transformOrigin={{
                                            vertical: 'top',
                                            horizontal: 'left'
                                        }}
                                    >
                                        <List>
                                            {menuList.map((list, i) => {
                                                const labelId = `checkbox-list-label-${i}`;

                                                return (
                                                    <ListItem key={i}>
                                                        <ListItemButton onClick={() => handleClickChannelsButton(list.id)} disableRipple>
                                                            <ListItemIcon>
                                                                <RadioBox {...controlProps(list.id)} icon={<UnRadioIcon />} checkedIcon={<RadioIcon />} disableRipple/>
                                                            </ListItemIcon>
                                                            {list.imageUrl === '' ?
                                                                <NoImageBox>
                                                                    <img src={NoImageIcon} alt='image'/>
                                                                </NoImageBox>
                                                                :
                                                                <ImageBox>
                                                                    <img src={list.imageUrl} alt='image'/>
                                                                </ImageBox>
                                                            }
                                                            <ListItemText id={labelId} primary={list.id} />
                                                        </ListItemButton>
                                                    </ListItem>
                                                );
                                            })}
                                        </List>
                                    </PopoverBox>
                                </MarginLeftRight>

                                <MarginRight>
                                    <SubText>To Whom</SubText>
                                    <WhomPopoverButtonStyle aria-describedby={whomId} onClick={handleClickWhomPopoverOpen} disableRipple>
                                        <Typography>{whomChecked}</Typography>
                                        <ArrowDownIcon/>
                                    </WhomPopoverButtonStyle>
                                    <PopoverBox
                                        id="simple-popper"
                                        open={whomOpen}
                                        anchorEl={whomAnchorEl}
                                        onClose={handleClosePopover}
                                        anchorOrigin={{
                                            vertical: 'bottom',
                                            horizontal: 'left'
                                        }}
                                        transformOrigin={{
                                            vertical: 'top',
                                            horizontal: 'left'
                                        }}
                                    >
                                        <div>
                                            <WhomBox>
                                                <Search width={'214px'} placeholder={'Search users'}/>
                                            </WhomBox>
                                            <List>
                                                {whomMenuList.map((list, i) => {
                                                    const labelId = `checkbox-list-label-${i}`;

                                                    return (
                                                        <ListItem key={i}>
                                                            <ListItemButton onClick={() => handleClickWhomButton(list.name)} disableRipple>
                                                                <ListItemIcon>
                                                                    <RadioBox {...whomControlProps(list.name)} icon={<UnRadioIcon />} checkedIcon={<RadioIcon />} disableRipple/>
                                                                </ListItemIcon>
                                                                {list.imageUrl === '' ?
                                                                    <AvatarBox>
                                                                        <ProfileUserIcon />
                                                                    </AvatarBox>
                                                                    :
                                                                    <AvatarBox>
                                                                        <img src={list.imageUrl} alt='image'/>
                                                                    </AvatarBox>
                                                                }
                                                                <ListItemNameText id={labelId} primary={list.name} />
                                                            </ListItemButton>
                                                        </ListItem>
                                                    );
                                                })}
                                            </List>
                                        </div>

                                    </PopoverBox>
                                </MarginRight>

                                <MarginRight>
                                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                                        <DemoContainer components={['DatePicker']}>
                                            <ContainerBox>
                                                <div>
                                                    <SubText>Start</SubText>
                                                    <BasicDatePicker>
                                                        <DatePicker
                                                            defaultValue={dayjs()}
                                                            format="MMMM DD, YYYY"
                                                            open={calendarOpen}
                                                            onClose={() => setCalendarOpen(false)}
                                                            slotProps={{
                                                                textField: {
                                                                    onClick: () => setCalendarOpen(true),
                                                                    // placeholder: 'Start'
                                                                },
                                                            }}
                                                            slots={{openPickerButton: (props) => <ButtonIcon {...props} disableRipple><CalendarIcon /></ButtonIcon>}}
                                                        />
                                                    </BasicDatePicker>
                                                    <SmallDatePicker>
                                                        <DatePicker
                                                            defaultValue={dayjs()}
                                                            format="MMM DD"
                                                            open={calendarOpen}
                                                            onClose={() => setCalendarOpen(false)}
                                                            slotProps={{
                                                                textField: {
                                                                    onClick: () => setCalendarOpen(true),
                                                                    // placeholder: 'Start'
                                                                },
                                                            }}
                                                            slots={{openPickerButton: (props) => <ButtonIcon {...props} disableRipple><CalendarIcon /></ButtonIcon>}}
                                                        />
                                                    </SmallDatePicker>

                                                </div>
                                                <DatePickerText>~</DatePickerText>
                                                <div>
                                                    <SubText>End</SubText>
                                                    <BasicDatePicker>
                                                        <DatePicker
                                                            format="MMMM DD, YYYY"
                                                            open={endCalendarOpen}
                                                            onClose={() => setEndCalendarOpen(false)}
                                                            slotProps={{
                                                                textField: {
                                                                    onClick: () => setEndCalendarOpen(true),
                                                                    // placeholder: 'End'
                                                                },
                                                            }}
                                                            slots={{openPickerButton: (props) => <ButtonIcon {...props} disableRipple><CalendarIcon /></ButtonIcon>}}
                                                        />
                                                    </BasicDatePicker>
                                                    <SmallDatePicker>
                                                        <DatePicker
                                                            format="MMM DD"
                                                            open={endCalendarOpen}
                                                            onClose={() => setEndCalendarOpen(false)}
                                                            slotProps={{
                                                                textField: {
                                                                    onClick: () => setEndCalendarOpen(true),
                                                                    // placeholder: 'End'
                                                                },
                                                            }}
                                                            slots={{openPickerButton: (props) => <ButtonIcon {...props} disableRipple><CalendarIcon /></ButtonIcon>}}
                                                        />
                                                    </SmallDatePicker>
                                                </div>

                                            </ContainerBox>
                                        </DemoContainer>
                                    </LocalizationProvider>
                                </MarginRight>

                                <AlignCenter style={{height: 42, marginBottom: 10}}>
                                    <FontSize14>
                                        Settlement Available Points<br/>
                                        to <span>to whom - 닉네임</span>
                                    </FontSize14>

                                    <FontSizeSpan>
                                        <span>510</span> points
                                    </FontSizeSpan>
                                </AlignCenter>
                            </AlignEnd>
                        </SettlementBoxIn>

                        <AlignCenter style={{marginTop: 10}}>
                            <BeforeBox/>

                            <FontSize16>
                                Enter the actual points<br/>
                                to send to the streamer.
                            </FontSize16>

                            <SearchBox variant="outlined" error={false}>
                                <OutlinedInput
                                    placeholder={'Enter Points'}
                                />
                            </SearchBox>

                            <SettlementButton onClick={handleClickSettlementDialogOpen} disableRipple>Settlement</SettlementButton>
                        </AlignCenter>

                        {/* error 일때 */}
                        {/*<WarningBox>*/}
                        {/*    <InfoIcon/>*/}
                        {/*    <Typography>Settlement points cannot exceed current points. Please enter again.</Typography>*/}
                        {/*</WarningBox>*/}

                        <FontSize18>
                            * You must have at least <span>10</span> redeemable points for a settlement.<br/>
                            * Settlement Available Points are the total points a streamer has received from their live broadcast.
                        </FontSize18>
                    </SettlementBox>
                </BoxStyle>
            </ContentsIn>

        </JustifyCenter>
    );
}

export default SettlementPointsBox;