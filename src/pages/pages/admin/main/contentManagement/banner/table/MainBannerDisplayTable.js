import React from 'react';
import {Paper, Table, TableBody, TableCell, TableHead, TableRow, Typography} from "@mui/material";
import {
    ImageBox,
    NoImageBox,
    GoLiveButton,
    ExpirationDateBox,
    BorderRight4
} from "../styles/MainBannerDisplaylTableStyle";

// 공통 css
import {
    TableContainerBox,
    AlignCenter, UnderlineText, SortTableCell, NoTableCell,
    TooltipStyle
} from "../../../styles/AdminMainStyle";
import {ReactComponent as ArrowDownIcon} from "../../../../../common/images/ArrowDownIcon.svg";
import {ReactComponent as GoLiveIcon} from "../../../../../common/images/GoLiveIcon.svg";
import {ReactComponent as AdminEmptyIcon} from "../../../../../common/images/AdminEmptyIcon.svg";
import {ReactComponent as CalendarIcon} from "../../../../../common/images/CalendarIcon.svg";
import NoImageIcon from "../../../../../common/images/NoImageIcon.svg";
import TestVideoImage from "../../../../../common/images/TestVideoImage.jpg";
import AdminCommonTableEmpty from "../../../common/empty/AdminCommonTableEmpty";
import AdminTablePagination from "../../../common/tablePagination/AdminTablePagination";

function createData(no, imageUrl ,channelId, views, favorites, expirationDate, title, time, session, streamer, display, order) {
    return { no, imageUrl, channelId, views, favorites, expirationDate, title, time, session, streamer, display, order};
}

const rows = [
    createData(1, TestVideoImage, 'abc-12345678', '1.5', '123', '2023.  06. 08 ~ 2024. 06. 08', 'S.title','2023. 06. 09 11:20', 120, '김중계', 'Yes', 1),
    createData(2, TestVideoImage, 'abc-12345678', '1.5', '123', '2023.  06. 08 ~ 2024. 06. 08', 'S.title','2023. 06. 09 11:20', 120, '김중계', 'Yes', 1),
    createData(3, '', 'abc-12345678', '1.5', '123', '', 'S.title','2023. 06. 09 11:20', 120, '김중계', 'No', 5),
];

function MainBannerDisplayTable() {
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
        setSort2(!sort4);
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
                            <TableCell align="left">Channel ID</TableCell>
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
                            <TableCell align="left">Stream Title</TableCell>
                            <TableCell align="left">Start Time</TableCell>
                            <TableCell align="left">Session (min)</TableCell>
                            <TableCell align="left">Streamer</TableCell>
                            <TableCell align="left">Display</TableCell>
                            <SortTableCell onClick={handleClickSort4} align="left">
                                <div>
                                    <Typography>Order</Typography>
                                    {sort4 ? <ArrowDownIcon/> : <ArrowDownIcon style={{transform: 'scaleY(-1)'}}/>}
                                </div>
                            </SortTableCell>
                            <TableCell align="left"></TableCell>
                        </TableRow>
                    </TableHead>
                    {rows.length > 0 ?
                        <TableBody>
                            {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row, i) => (
                                <TableRow key={i}>
                                    <NoTableCell align="center" style={{width: '5%'}}>
                                        {row.no}
                                    </NoTableCell>
                                    <TableCell align="center" style={{width: '10%', maxWidth: 360}}>
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
                                            <UnderlineText disableRipple>
                                                <TooltipStyle
                                                    title={row.channelId}
                                                    placement="bottom"
                                                >
                                                    <Typography>
                                                        {row.channelId}
                                                    </Typography>
                                                </TooltipStyle>
                                            </UnderlineText>
                                        </AlignCenter>
                                    </TableCell>
                                    <TableCell align="left" style={{width: '10%'}}>
                                        {row.views}K
                                    </TableCell>
                                    <TableCell align="left" style={{width: '10%'}}>
                                        {row.favorites}
                                    </TableCell>
                                    <BorderRight4 align="left" style={{width: '10%'}}>
                                        <ExpirationDateBox>
                                            <AlignCenter>
                                                <CalendarIcon/>
                                                {row.expirationDate === '' ?
                                                    'YYYY. MM. DD ~ YYYY. MM. DD'
                                                    :
                                                    row.expirationDate
                                                }
                                            </AlignCenter>
                                        </ExpirationDateBox>
                                    </BorderRight4>
                                    <TableCell align="left" style={{width: '10%', minWidth: 115, maxWidth: 200}}>
                                        {row.title}
                                    </TableCell>
                                    <TableCell align="left" style={{width: '10%'}}>
                                        {row.time}
                                    </TableCell>
                                    <TableCell align="left" style={{width: '5%', minWidth: 115}}>
                                        {row.session}
                                    </TableCell>
                                    <TableCell align="left" style={{width: '10%', minWidth: 115}}>
                                        <UnderlineText disableRipple>
                                            <TooltipStyle
                                                title={row.streamer}
                                                placement="bottom"
                                            >
                                                <Typography>
                                                    {row.streamer}
                                                </Typography>
                                            </TooltipStyle>
                                        </UnderlineText>
                                    </TableCell>
                                    <TableCell align="left" style={{width: '5%', minWidth: 80}}>
                                        {row.display}
                                    </TableCell>
                                    <TableCell align="left" style={{width: '5%', minWidth: 80}}>
                                        {row.order}
                                    </TableCell>
                                    <TableCell align="left" style={{width: '10%'}}>
                                        <AlignCenter>
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
                        <AdminCommonTableEmpty
                            image={<AdminEmptyIcon/>}
                            title={'There is no data.'}
                            action={false}
                        />
                    }
                </Table>
            </TableContainerBox>

            <AdminTablePagination
                count={rows.length}
                rowsPerPage={rowsPerPage}
                page={page}
                handleChangePage={handleChangePage}
                handleChangeRowsPerPage={handleChangeRowsPerPage}
            />
        </div>
    );
}

export default MainBannerDisplayTable;