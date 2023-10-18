import React from 'react';
import {
    TableCellBox,
    NoImageBox,
    ImageBox,
    ChannelIdText,
    TextStyle,
    SubTextStyle,
    TextBox,
    TagBox,
    TagBoxIn,
    FormControlBox,
    JustifySpace,
    EditButton,
    JustifyEnd,
    ButtonStyle,
    PopoverBox,
    ChangeStreamerBox,
    ChangeStreamerButton,
    ButtonIcon,
    ArrowButtonBox,
    LineStyle,
    StateBox,
    StateText,
    PurpleStateBox,
    RedStateBox, GreenStateBox, OrangeStateBox, TextMargin, AlignMarinTop, AlignMarin
} from "./styles/MyChannelsDetailInfoStyle";
import TestVideoImage from "../../../../../../common/images/TestVideoImage.jpg";
import {
    FormControlLabel, List, ListItem,
    Paper, Radio,
    RadioGroup,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
    Typography
} from "@mui/material";

// 공통 css
import {ExpirationDateBox, BorderRight4, FontSize13, GoLiveButton, LiveBox, NoTableCell, OffLineBox, PurchaseButton,} from "../../../style/ManagerStyle";
import {TooltipStyle, SortTableCell, TableContainerBox, AlignCenter} from "../../../../../main/styles/MainStyle";

import {ReactComponent as ArrowDownIcon} from "../../../../../../common/images/ArrowDownIcon.svg";
import {ReactComponent as CalendarIcon} from "../../../../../../common/images/CalendarIcon.svg";
import {ReactComponent as LiveIcon} from "../../../../../../common/images/LiveIcon.svg";
import {ReactComponent as GoLiveIcon} from "../../../../../../common/images/GoLiveIcon.svg";
import {ReactComponent as ImageIcon} from "../../../../../../common/images/ImageIcon.svg";
import {ReactComponent as UnRadioIcon} from "../../../../../../common/images/UnRadioIcon.svg";
import {ReactComponent as RadioIcon} from "../../../../../../common/images/RadioIcon.svg";
import {ReactComponent as EditIcon} from "../../../../../../common/images/EditIcon.svg";
import {ReactComponent as MailOpenIcon} from "../../../../../../common/images/MailOpenIcon.svg";
import {ReactComponent as MailIcon} from "../../../../../../common/images/MailIcon.svg";

function createData(no, channelId, views, favorites, permission, streamTitle, startTime, session, streamer, status) {
    return { no, channelId, views, favorites, permission, streamTitle, startTime, session, streamer, status };
}

const rows = [
    createData(1, 'abc-12345678', '1.5', '123', 'Nickname', 'S.title', '2023. 06. 08 14:20', 120, 'Aaliyah', true),
];

function MyChannelsDetailInfo(props) {
    const {handleClickEditChannelInfoDialogOpen, handleClickExtendChannelPeriodDialogOpen, handleClickChangeStreamerDialogOpen} = props;
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);

    const handleClickPopoverOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClosePopover = () => {
        setAnchorEl(null);
    };

    return (
        <div>
            <TableContainerBox component={Paper}>
                <Table sx={{ minWidth: 650 }}>
                    <TableHead>
                        <TableRow>
                            <TableCell align="center">No</TableCell>
                            <TableCell align="left" >Channel ID</TableCell>
                            <TableCell align="left" >Views</TableCell>
                            <TableCell align="left" >Favorites</TableCell>
                            <TableCell align="left" >Users with streaming permission</TableCell>
                            <TableCell align="left" style={{minWidth: 108}}>Stream Title</TableCell>
                            <TableCell align="left">Start Time</TableCell>
                            <TableCell align="left">Session<FontSize13>(min)</FontSize13></TableCell>
                            <TableCell align="left">Streamer</TableCell>
                            <TableCell align="left">Status</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row, i) => (
                            <TableRow key={i}>
                                <NoTableCell align="center" style={{width: '5%'}}>
                                    {row.no}
                                </NoTableCell>
                                <TableCell align="left" style={{width: '15%', maxWidth: 180}}>
                                    <TooltipStyle
                                        title={row.channelId}
                                        placement="bottom"
                                    >
                                        <ChannelIdText disableRipple>
                                            <Typography>
                                                {row.channelId}
                                            </Typography>
                                        </ChannelIdText>
                                    </TooltipStyle>
                                </TableCell>
                                <TableCell align="left" style={{width: '6%'}}>{row.views}K</TableCell>
                                <TableCell align="left" style={{width: '6%'}} >{row.favorites}K</TableCell>
                                <BorderRight4 align="left" style={{width: '17%'}} >
                                    {row.permission}
                                </BorderRight4>
                                <TableCell align="left" style={{width: '8%', maxWidth: 230}}>
                                    <TooltipStyle
                                        title={row.streamTitle}
                                        placement="bottom"
                                    >
                                        <span>
                                            {row.streamTitle === '' ? '-' : row.streamTitle}
                                        </span>
                                    </TooltipStyle>
                                </TableCell>
                                <TableCell align="left" style={{width: '7%'}} >
                                    {row.startTime === '' ? '-' : row.startTime}
                                </TableCell>
                                <TableCell align="left" style={{width: '6%'}}>
                                    {row.session === '' ? '-' : row.session}
                                </TableCell>
                                <TableCell align="left" style={{width: '10%', maxWidth: 150}}>
                                    <TooltipStyle
                                        title={row.streamer}
                                        placement="bottom"
                                    >
                                        <span>
                                            {row.streamer === '' ? '-' : row.streamer}
                                        </span>
                                    </TooltipStyle>
                                </TableCell>
                                <TableCell align="left" style={{width: '20%'}} >
                                    <AlignCenter>
                                        {row.status ?
                                            <LiveBox>
                                                <LiveIcon/>
                                                <Typography>LIVE</Typography>
                                            </LiveBox>
                                            :
                                            <OffLineBox>
                                                <Typography>OFF LINE</Typography>
                                            </OffLineBox>
                                        }
                                        <GoLiveButton disableRipple>
                                            <GoLiveIcon/>
                                            <Typography>
                                                Go Live
                                            </Typography>
                                        </GoLiveButton>

                                        <ChangeStreamerBox>
                                            <ChangeStreamerButton onClick={handleClickChangeStreamerDialogOpen} disableRipple>Change Streamer</ChangeStreamerButton>

                                            <ArrowButtonBox>
                                                <LineStyle/>
                                                <ButtonIcon onClick={handleClickPopoverOpen} disableRipple>
                                                    <ArrowDownIcon/>
                                                </ButtonIcon>
                                            </ArrowButtonBox>

                                        </ChangeStreamerBox>

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
                                                <ListItem onClick={handleClosePopover}>Shutdown Streaming</ListItem>
                                                <ListItem onClick={handleClosePopover}>Revoke Streaming</ListItem>
                                            </List>
                                        </PopoverBox>
                                    </AlignCenter>
                                </TableCell>
                            </TableRow>
                        ))}

                        <TableRow>
                            <TableCellBox colSpan={10}>
                                <JustifySpace>
                                    <div style={{display:'flex'}}>
                                        {/*<ImageBox>*/}
                                        {/*    <img src={TestVideoImage} alt='image'/>*/}
                                        {/*</ImageBox>*/}
                                        <NoImageBox>
                                            <ImageIcon/>
                                            <Typography>Banner Image</Typography>
                                        </NoImageBox>

                                        <TextBox>
                                            <TextStyle>Description</TextStyle>
                                            <SubTextStyle>
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras auctor dui at varius posuere. Donec id mauris sagittis, eleifend ligula quis, tempor est. Nunc quis nibh mauris. Donec iaculis augue nec sollicitudin cursus. Nulla ante erat, vestibulum in erat ut, semper faucibus nulla. Integer pellentesque nunc sed bibendum condimentum. Nam odio diam, tristique posuere lorem a, iaculis suscipit ligula
                                            </SubTextStyle>
                                        </TextBox>

                                        <div>
                                            <TextStyle>Tags</TextStyle>
                                            <TagBox>
                                                <TagBoxIn disableRipple>
                                                    <Typography>#kldsjfw</Typography>
                                                </TagBoxIn>

                                                <TagBoxIn disableRipple>
                                                    <Typography>#dkfklfmfaksdkrldnlgo</Typography>
                                                </TagBoxIn>

                                                <TagBoxIn disableRipple>
                                                    <Typography>#kdjkflwlqfj</Typography>
                                                </TagBoxIn>
                                            </TagBox>

                                            <AlignCenter>
                                                <TextMargin>Appear in search results</TextMargin>
                                                <TextStyle>Expiration Date</TextStyle>
                                            </AlignCenter>

                                            <AlignMarin>
                                                <FormControlBox>
                                                    <RadioGroup
                                                        row
                                                        defaultValue="yes"
                                                    >
                                                        <FormControlLabel
                                                            value="yes"
                                                            control={<Radio  icon={<UnRadioIcon />} checkedIcon={<RadioIcon />} disableRipple/>}
                                                            label="Yes"
                                                        />
                                                        <FormControlLabel
                                                            value="no"
                                                            control={<Radio  icon={<UnRadioIcon />} checkedIcon={<RadioIcon />} disableRipple/>}
                                                            label="No"
                                                        />
                                                    </RadioGroup>
                                                </FormControlBox>
                                                <ExpirationDateBox>
                                                    <AlignCenter>
                                                        <CalendarIcon/>
                                                        2023. 06. 08 ~ 2024. 06. 08
                                                    </AlignCenter>

                                                    <PurchaseButton disableRipple>
                                                        PURCHASE
                                                    </PurchaseButton>
                                                </ExpirationDateBox>
                                            </AlignMarin>
                                        </div>
                                    </div>

                                    <EditButton onClick={handleClickEditChannelInfoDialogOpen} disableRipple>
                                        <EditIcon/>
                                        <Typography>Edit</Typography>
                                    </EditButton>
                                </JustifySpace>
                            </TableCellBox>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainerBox>

            <JustifyEnd>

                <MailOpenIcon/>
                {/*<MailIcon/>*/}

                <ButtonStyle onClick={handleClickExtendChannelPeriodDialogOpen} disableRipple>
                    Extend Channel Period
                </ButtonStyle>
            </JustifyEnd>
            <JustifyEnd style={{marginTop: 8}}>
                <StateText>(<span>Requesting..</span>)</StateText>
                {/*<RedStateBox>*/}
                {/*    <Typography>CANCELED</Typography>*/}
                {/*</RedStateBox>*/}
                {/*<RedStateBox>*/}
                {/*    <Typography>EXPIRED</Typography>*/}
                {/*</RedStateBox>*/}
                <RedStateBox>
                    <Typography>Cancel Exchanging</Typography>
                </RedStateBox>
                {/*<GreenStateBox>*/}
                {/*    <Typography>ACTIVATED</Typography>*/}
                {/*</GreenStateBox>*/}
                {/*<OrangeStateBox>*/}
                {/*    <Typography>UPCOMING</Typography>*/}
                {/*</OrangeStateBox>*/}
                {/*<RedStateBox>*/}
                {/*    <Typography>REJECTED</Typography>*/}
                {/*</RedStateBox>*/}
            </JustifyEnd>
        </div>
    );
}

export default MyChannelsDetailInfo;