import React from 'react';
import {Paper, Table, TableBody, TableCell, TableHead, TableRow, Typography} from "@mui/material";
import TestVideoImage from "../../../../../../common/images/TestVideoImage.jpg";
import {ReactComponent as ArrowDownIcon} from "../../../../../../common/images/ArrowDownIcon.svg";
import {ReactComponent as LiveIcon} from "../../../../../../common/images/LiveIcon.svg";
import {ReactComponent as GoLiveIcon} from "../../../../../../common/images/GoLiveIcon.svg";
import {ReactComponent as ImageIcon} from "../../../../../../common/images/ImageIcon.svg";
import TablePagination from "../../../../tablePagination/TablePagination";

// 공통 css
import {TableContainerBox, TooltipStyle, SortTableCell, AlignCenter} from "../../../../../main/styles/MainStyle";
import {
    ChannelIdText,
    FontSize13,
    GoLiveButton,
    ImageBox,
    LiveBox,
    NoImageBox,
    NoTableCell,
    OffLineBox
} from "../../../style/ManagerStyle";
import NoImageIcon from "../../../../../../common/images/NoImageIcon.svg";
import TableNoSearch from "../../../../noSearch/TableNoSearch";

function createData(no, image, imageUrl, streamTitle, startTime, endTime, session, viewers, logIn, streamer, status) {
    return { no, image, imageUrl, streamTitle, startTime, endTime, session, viewers, logIn, streamer, status };
}

const rows = [
    createData(1, true, TestVideoImage, 'S.title', '2023. 06. 08 14:20', '', '', '1,234', 'Yes', 'Aaliyah', true),
    createData(2, false, '', 'S.title', '2023. 06. 08 14:20', '2023. 06. 08 14:20', '120', '1,234', 'Yes', 'Aaliyah', false),
    createData(3, false, '', 'S.title', '2023. 06. 08 14:20', '2023. 06. 08 14:20', '120', '1,234', 'Yes', 'Aaliyah', false),
]

function MyChannelsDetailHistory(props) {
    const [rowsPerPage, setRowsPerPage] = React.useState(10);
    const [page, setPage] = React.useState(0);
    const [sort, setSort] = React.useState(false);
    const [sort2, setSort2] = React.useState(false);
    const [sort3, setSort3] = React.useState(false);
    const [sort4, setSort4] = React.useState(false);
    const [sort5, setSort5] = React.useState(false);
    const [sort6, setSort6] = React.useState(false);
    const [sort7, setSort7] = React.useState(false);
    const [sort8, setSort8] = React.useState(false);

    const handleClickSort = () => {setSort(!sort);};
    const handleClickSort2 = () => {setSort2(!sort2);};
    const handleClickSort3 = () => {setSort3(!sort3);};
    const handleClickSort4 = () => {setSort4(!sort4);};
    const handleClickSort5 = () => {setSort5(!sort5);};
    const handleClickSort6 = () => {setSort6(!sort6);};
    const handleClickSort7 = () => {setSort7(!sort7);};
    const handleClickSort8 = () => {setSort8(!sort8);};

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
                            <SortTableCell onClick={handleClickSort} align="left">
                                <div>
                                   <Typography>Stream Title</Typography>
                                    {sort ? <ArrowDownIcon/> : <ArrowDownIcon style={{transform: 'scaleY(-1)'}}/>}
                                </div>
                            </SortTableCell>
                            <SortTableCell onClick={handleClickSort2} align="left">
                                <div>
                                    <Typography>Start Time</Typography>
                                    {sort2 ? <ArrowDownIcon/> : <ArrowDownIcon style={{transform: 'scaleY(-1)'}}/>}
                                </div>
                            </SortTableCell>
                            <SortTableCell onClick={handleClickSort3} align="left">
                                <div>
                                    <Typography>End Time</Typography>
                                    {sort3 ? <ArrowDownIcon/> : <ArrowDownIcon style={{transform: 'scaleY(-1)'}}/>}
                                </div>
                            </SortTableCell>
                            <SortTableCell onClick={handleClickSort4} align="left" style={{minWidth: 156}}>
                                <div>
                                    <Typography>Stream Time<FontSize13>(min)</FontSize13></Typography>
                                    {sort4 ? <ArrowDownIcon/> : <ArrowDownIcon style={{transform: 'scaleY(-1)'}}/>}
                                </div>
                            </SortTableCell>
                            <SortTableCell onClick={handleClickSort5} align="left">
                                <div>
                                    <Typography>Viewers</Typography>
                                    {sort5 ? <ArrowDownIcon/> : <ArrowDownIcon style={{transform: 'scaleY(-1)'}}/>}
                                </div>
                            </SortTableCell>
                            <SortTableCell onClick={handleClickSort6} align="left" style={{minWidth: 156}}>
                                <div>
                                    <Typography>Log-in to watch</Typography>
                                    {sort6 ? <ArrowDownIcon/> : <ArrowDownIcon style={{transform: 'scaleY(-1)'}}/>}
                                </div>
                            </SortTableCell>
                            <SortTableCell onClick={handleClickSort7} align="left">
                                <div>
                                    <Typography>Streamer</Typography>
                                    {sort7 ? <ArrowDownIcon/> : <ArrowDownIcon style={{transform: 'scaleY(-1)'}}/>}
                                </div>
                            </SortTableCell>
                            <SortTableCell onClick={handleClickSort8} align="left">
                                <div>
                                    <Typography>Status</Typography>
                                    {sort8 ? <ArrowDownIcon/> : <ArrowDownIcon style={{transform: 'scaleY(-1)'}}/>}
                                </div>
                            </SortTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row, i) => (
                            <TableRow key={i}>
                                <NoTableCell align="center" style={{width: '5%'}}>
                                    {row.no}
                                </NoTableCell>
                                <TableCell align="left" style={{width: '20%'}}>
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
                                        {/*{row.image ?*/}
                                        {/*    <ImageBox>*/}
                                        {/*        <img src={row.imageUrl} alt='image'/>*/}
                                        {/*    </ImageBox>*/}
                                        {/*    :*/}
                                        {/*    <NoImageBox>*/}
                                        {/*        <ImageIcon/>*/}
                                        {/*        <Typography>Banner Image</Typography>*/}
                                        {/*    </NoImageBox>*/}
                                        {/*}*/}
                                        <TooltipStyle
                                            title={row.streamTitle}
                                            placement="bottom"
                                        >
                                            <ChannelIdText disableRipple>
                                                <Typography>
                                                    {row.streamTitle}
                                                </Typography>
                                            </ChannelIdText>
                                        </TooltipStyle>
                                    </AlignCenter>
                                </TableCell>
                                <TableCell align="left" style={{width: '10%'}}>
                                    {row.startTime}
                                </TableCell>
                                <TableCell align="left" style={{width: '10%'}}>
                                    {row.endTime === '' ? '-' : row.endTime}
                                </TableCell>
                                <TableCell align="left" style={{width: '11%'}}>
                                    {row.session === '' ? '-' : row.session}
                                </TableCell>
                                <TableCell align="left" style={{width: '8%'}}>
                                    {row.viewers}
                                </TableCell>
                                <TableCell align="left" style={{width: '10%'}}>
                                    {row.logIn}
                                </TableCell>
                                <TableCell align="left" style={{width: '8%', maxWidth: 150}}>
                                    <TooltipStyle
                                        title={row.streamer}
                                        placement="bottom"
                                    >
                                        <span>
                                            {row.streamer}
                                        </span>
                                    </TooltipStyle>
                                </TableCell>
                                <TableCell align="left" style={{width: '15%'}}>
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

export default MyChannelsDetailHistory;