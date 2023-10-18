import React from 'react';
import {
    ButtonIcon,
    CloseButton,
    DrawerBox,
    JustifyEnd,
    JustifySpace,
    TopBox,
    TopTitleText,
    PopoverBox,
    BoxStyle,
    NoticeBox, TitleText, TextStyle, DateText, BadgeBox, EmptyBox, EmptyTitle, EmptyText
} from "./styles/MobileNotificationsStyle";
import {ReactComponent as SettingDialogCloseIcon} from "../../../common/images/SettingDialogCloseIcon.svg";
import {ReactComponent as FilterIcon} from "../../../common/images/FilterIcon.svg";
import {ReactComponent as EmptyNoticeIcon} from "../../../common/images/EmptyNoticeIcon.svg";
import {List, ListItem, Typography} from "@mui/material";

function MobileNotifications(props) {
    const { notificationsOpen, handleCloseNotifications, handleClickNoticeDialog, handleClickInviteToStreamDialogOpen } = props;
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

    const rows = [
        {notice: true, new: false, title: 'System Maintenance Notification', text: 'Due to system operations on August 3, 2023 from 00:00 to 30, streamers will be unable to broadcast fords', date: 'August 3, 2023 16:20'},
        {notice: false, new: true, title: 'Invite to Stream', text: 'We are looking for streamers to broadcast live on various topics on our channel ', date: 'August 3, 2023 16:20'}
    ];

    const handleClickPopoverOpen = (event) => {
        setAnchorEl(event.currentTarget);

    };

    const handleClosePopover = () => {
        setAnchorEl(null);
    };


    return (
        <DrawerBox
            open={Boolean(notificationsOpen)}
            anchor='right'
            onClose={handleCloseNotifications}
        >

            <TopBox>
                <JustifySpace>
                    <TopTitleText>Notifications</TopTitleText>
                    <CloseButton onClick={handleCloseNotifications} disableRipple>
                        <SettingDialogCloseIcon/>
                    </CloseButton>
                </JustifySpace>
                <JustifyEnd>
                    <ButtonIcon aria-describedby={id} onClick={handleClickPopoverOpen} disableRipple>
                        <FilterIcon/>
                    </ButtonIcon>
                </JustifyEnd>
                <PopoverBox
                    id="simple-popper"
                    open={open}
                    anchorEl={anchorEl}
                    onClose={handleClosePopover}
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'right'
                    }}
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'right'
                    }}
                >
                    <List>
                        <ListItem onClick={handleClosePopover}>Sort by Date</ListItem>
                        <ListItem onClick={handleClosePopover}>Sort by Unread</ListItem>
                    </List>
                </PopoverBox>
            </TopBox>

            {rows.length !== 0 ?
                rows.map((row, i) => (
                        <BoxStyle key={i} newBadge={row.new} onClick={row.new ? handleClickInviteToStreamDialogOpen : handleClickNoticeDialog}>
                            {row.notice &&
                                <NoticeBox>
                                    <Typography>Notice</Typography>
                                </NoticeBox>
                            }

                            {row.new &&
                                <BadgeBox/>
                            }

                            <TitleText newBadge={row.new}>{row.title}</TitleText>

                            <TextStyle>
                                {row.text.substring(0, 102)}

                                {row.text.length > 102 &&
                                    <>
                                        ...<span onClick={handleClickNoticeDialog}>more</span>
                                    </>
                                }
                            </TextStyle>

                            <DateText>{row.date}</DateText>
                        </BoxStyle>
                    ))
                :
                <EmptyBox>
                    <EmptyNoticeIcon/>
                    <EmptyTitle>Your Notification Live Here</EmptyTitle>
                    <EmptyText>
                        Service announcements and channel<br/>
                        invites, and show up when your<br/>
                        favorite channel goes live.
                    </EmptyText>
                </EmptyBox>
            }
        </DrawerBox>
    );
}

export default MobileNotifications;
