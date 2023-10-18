import React from 'react';
import {Paper, Table, TableBody, TableCell, TableHead, TableRow, Typography} from "@mui/material";
import TestVideoImage from "../../../../../common/images/TestVideoImage.jpg";
import {ReactComponent as ArrowDownIcon} from "../../../../../common/images/ArrowDownIcon.svg";
import {ReactComponent as CalendarIcon} from "../../../../../common/images/CalendarIcon.svg";
import {ReactComponent as LiveIcon} from "../../../../../common/images/LiveIcon.svg";
import {ReactComponent as GoLiveIcon} from "../../../../../common/images/GoLiveIcon.svg";
import NoImageIcon from "../../../../../common/images/NoImageIcon.svg";
import TablePagination from "../../../tablePagination/TablePagination";

// 공통 css
import {
    TableContainerBox,
    TooltipStyle,
    SortTableCell,
    AlignCenter,
    EmptyTableBox, EmptyIconBox, EmptyTitleText, EmptySubText, EmptyButtonStyle
} from "../../../../main/styles/MainStyle";
import {
    ExpirationDateBox,
    BorderRight4,
    FontSize13,
    NoTableCell,
    PurchaseButton,
    LiveBox,
    OffLineBox,
    GoLiveButton,
    NoImageBox,
    ChannelIdText,
    ImageBox
} from "../../style/ManagerStyle";
import TableNoSearch from "../../../noSearch/TableNoSearch";
import CommonTableEmpty from "../../../empty/CommonTableEmpty";


function createData(no, image, imageUrl, channelId, views, favorites, expirationDate, streamTitle, startTime, session, streamer, status) {
    return { no, image, imageUrl, channelId, views, favorites, expirationDate, streamTitle, startTime, session, streamer, status };
}

const rows = [
    createData(1, true, TestVideoImage, 'abc-12345678 abc-12345678abc-12345678abc-12345678abc-12345678abc-12345678', '1.5', '123', '2023. 06. 08 ~ 2024. 06. 08', 'S.title', '2023. 06. 08 14:20', 120, 'AaliyahAaliyahAaliyahAaliyah AaliyahAaliyah', true),
    createData(2, true, TestVideoImage, 'abc-12345678', '1.5', '123', '2023. 06. 08 ~ 2024. 06. 08', 'S.title', '2023. 06. 08 14:20', 120, 'Aaliyah', true),
    createData(3, false, '', 'abc-12345678', '1.5', '123', '2023. 06. 08 ~ 2024. 06. 08', 'S.title', '2023. 06. 08 14:20', 120, 'Aaliyah', true),
    createData(4, false, '', 'abc-12345678', '1.5', '123', '2023. 06. 08 ~ 2024. 06. 08', '', '', '', '', true),
    createData(5, false, '', 'abc-12345678', '1.5', '123', '2023. 06. 08 ~ 2024. 06. 08', '', '', '', '', false),
    createData(6, false, '', 'abc-12345678', '1.5', '123', '2023. 06. 08 ~ 2024. 06. 08', '', '', '', '', false),
    createData(7, false, '', 'abc-12345678', '1.5', '123', '2023. 06. 08 ~ 2024. 06. 08', '', '', '', '', false),
    createData(8, false, '', 'abc-12345678', '1.5', '123', '2023. 06. 08 ~ 2024. 06. 08', '', '', '', '', false),
    createData(9, false, '', 'abc-12345678', '1.5', '123', '2023. 06. 08 ~ 2024. 06. 08', '', '', '', '', false),
];

function MyChannels() {
    const [rowsPerPage, setRowsPerPage] = React.useState(10);
    const [page, setPage] = React.useState(0);
    const [sort, setSort] = React.useState(false);
    const [sort2, setSort2] = React.useState(false);
    const [sort3, setSort3] = React.useState(false);
    const [sort4, setSort4] = React.useState(false);

    const handleClickSort = () => {
        setSort(!sort);
    };

    const handleClickSort2 = () => {
        setSort2(!sort2);
    };

    const handleClickSort3 = () => {
        setSort3(!sort3);
    };

    const handleClickSort4 = () => {
        setSort4(!sort4);
    };

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(event.target.value);
        setPage(0);
    };

    return (
        <div>
            <TableContainerBox component={Paper}>
                <Table sx={{ minWidth: 650 }}>
                    <TableHead>
                        <TableRow>
                            <TableCell align="center">No</TableCell>
                            <TableCell align="center">Channel ID</TableCell>
                            <SortTableCell onClick={handleClickSort} align="left">
                                <div>
                                   <Typography>Views</Typography>
                                    {sort ? <ArrowDownIcon/> : <ArrowDownIcon style={{transform: 'scaleY(-1)'}}/>}
                                </div>
                            </SortTableCell>
                            <SortTableCell onClick={handleClickSort2} align="left">
                                <div>
                                    <Typography>Favorites</Typography>
                                    {sort2 ? <ArrowDownIcon/> : <ArrowDownIcon style={{transform: 'scaleY(-1)'}}/>}
                                </div>
                            </SortTableCell>
                            <SortTableCell onClick={handleClickSort3} align="left">
                                <div>
                                    <Typography>Expiration Date</Typography>
                                    {sort3 ? <ArrowDownIcon/> : <ArrowDownIcon style={{transform: 'scaleY(-1)'}}/>}
                                </div>
                            </SortTableCell>
                            <TableCell align="left" style={{ minWidth: 108}}>Stream Title</TableCell>
                            <TableCell align="left" style={{ minWidth: 108}}>Start Time</TableCell>
                            <TableCell align="left">Session<FontSize13>(min)</FontSize13></TableCell>
                            <TableCell align="left">Streamer</TableCell>
                            <SortTableCell onClick={handleClickSort4} align="left" style={{width: '10%'}}>
                                <div>
                                    <Typography>Status</Typography>
                                    {sort4 ? <ArrowDownIcon/> : <ArrowDownIcon style={{transform: 'scaleY(-1)'}}/>}
                                </div>
                            </SortTableCell>
                        </TableRow>
                    </TableHead>
                    {rows.length > 0 ?
                        <TableBody>
                            {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row, i) => (
                                <TableRow key={i}>
                                    <NoTableCell align="center" style={{width: '5%'}}>
                                        {row.no}
                                    </NoTableCell>
                                    <TableCell align="center" style={{width: '18%'}}>
                                        <AlignCenter>
                                            {row.imageUrl === '' ?
                                                <NoImageBox>
                                                    <img src={NoImageIcon} alt='image'/>
                                                </NoImageBox>
                                                :
                                                <ImageBox>
                                                    <img src={row.imageUrl} alt='image'/>
                                                </ImageBox>
                                            }
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
                                        </AlignCenter>
                                    </TableCell>
                                    <TableCell align="left" style={{width: '6%'}}>{row.views}K</TableCell>
                                    <TableCell align="left" style={{width: '6%'}} >{row.favorites}K</TableCell>
                                    <BorderRight4 align="left" style={{width: '22%'}} >
                                        <ExpirationDateBox>
                                            <AlignCenter>
                                                <CalendarIcon/>
                                                {row.expirationDate}
                                            </AlignCenter>

                                            <PurchaseButton disableRipple>
                                                PURCHASE
                                            </PurchaseButton>
                                        </ExpirationDateBox>
                                    </BorderRight4>
                                    <TableCell align="left" style={{width: '10%', maxWidth: 230}}>
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
                                    <TableCell align="left" style={{width: '10%'}} >
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
                                        </AlignCenter>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                        :
                        <CommonTableEmpty
                            image={<EmptyIconBox/>}
                            title={'Buy a channel to get started'}
                            message={
                                <span>
                                    You don’t have any purchased channels.<br/>
                                    The channels you purchased will show up here.
                                </span>
                            }
                            action={true}
                            actionText1={'Buy a New Channel'}
                        />
                    }

                    {/* 검색 걸과 없을 시,*/}
                    {/*<TableNoSearch/>*/}

                </Table>
            </TableContainerBox>

            <TablePagination
                count={rows.length}
                rowsPerPage={rowsPerPage}
                page={page}
                handleChangePage={handleChangePage}
                handleChangeRowsPerPage={handleChangeRowsPerPage}
            />
        </div>
    );
}

export default MyChannels;