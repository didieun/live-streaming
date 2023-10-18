import React from 'react';
import {Paper, Table, TableBody, TableCell, TableHead, TableRow, Typography} from "@mui/material";
import {TagBox, ImageBox, NoImageBox, GoLiveButton, LiveBox, OffLineBox} from "../../styles/UserTableStyle";

// 공통 css
import {
    TableContainerBox,
    AlignCenter, UnderlineText, SortTableCell, NoTableCell, TooltipStyle
} from "../../../../styles/AdminMainStyle";
import {ReactComponent as ArrowDownIcon} from "../../../../../../common/images/ArrowDownIcon.svg";
import {ReactComponent as LiveIcon} from "../../../../../../common/images/LiveIcon.svg";
import {ReactComponent as GoLiveIcon} from "../../../../../../common/images/GoLiveIcon.svg";
import {ReactComponent as AdminEmptyIcon} from "../../../../../../common/images/AdminEmptyIcon.svg";
import AdminCommonTableEmpty from "../../../../common/empty/AdminCommonTableEmpty";
import AdminTablePagination from "../../../../common/tablePagination/AdminTablePagination";
import NoImageIcon from "../../../../../../common/images/NoImageIcon.svg";
import TestVideoImage from "../../../../../../common/images/TestVideoImage.jpg";
import AdminTableNoSearch from "../../../../common/noSearch/AdminTableNoSearch";

function createData(no, imageUrl ,channelId, views, tag1, tag2, tag3, searchResults, title, time, session, status) {
    return { no, imageUrl, channelId, views, tag1, tag2, tag3, searchResults, title, time, session, status};
}

const rows = [
    createData(1, TestVideoImage, 'abc-12345678', '1.5', 'tag123', 'tag123', 'tag123','Yes', 'S.title','2023. 06. 09 11:20', 120, true),
    createData(2, TestVideoImage, 'abc-12345678', '1.5', 'tag123', 'tag123', 'tag123','Yes', 'S.title','2023. 06. 09 11:20', 120, false),
    createData(3, '', 'abc-12345678', '1.5', 'tag123', 'tag123', 'tag123','Yes', 'S.title','2023. 06. 09 11:20', 120, false),
];

function UserDetailStreamingHistoryTable() {
    const [rowsPerPage, setRowsPerPage] = React.useState(10);
    const [page, setPage] = React.useState(0);
    const [sort, setSort] = React.useState(false);
    const [sort2, setSort2] = React.useState(false);

    const handleClickSort = () => {
        setSort(!sort);
    };

    const handleClickSort2 = () => {
        setSort2(!sort2);
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
                            <TableCell align="left">Tags</TableCell>
                            <TableCell align="left">Search results</TableCell>
                            <TableCell align="left">Stream Title</TableCell>
                            <TableCell align="left">Start Time</TableCell>
                            <TableCell align="left">Session (min)</TableCell>
                            <SortTableCell onClick={handleClickSort2} align="left">
                                <div>
                                    <Typography>Status</Typography>
                                    {sort2 ? <ArrowDownIcon/> : <ArrowDownIcon style={{transform: 'scaleY(-1)'}}/>}
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
                                    <TableCell align="center" style={{width: '15%'}}>
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
                                    <TableCell align="left" style={{width: '20%'}}>
                                        <AlignCenter>
                                            <TagBox>
                                                <Typography>#{row.tag1}</Typography>
                                            </TagBox>
                                            <TagBox>
                                                <Typography>#{row.tag2}</Typography>
                                            </TagBox>
                                            <TagBox>
                                                <Typography>#{row.tag3}</Typography>
                                            </TagBox>
                                        </AlignCenter>
                                    </TableCell>
                                    <TableCell align="left" style={{width: '10%', minWidth: 115}}>
                                        {row.searchResults}
                                    </TableCell>
                                    <TableCell align="left" style={{width: '10%', minWidth: 115}}>
                                        <TooltipStyle
                                            title={row.title}
                                            placement="bottom"
                                        >
                                            {row.title}
                                        </TooltipStyle>
                                    </TableCell>
                                    <TableCell align="left" style={{width: '10%'}}>
                                        {row.time}
                                    </TableCell>
                                    <TableCell align="left" style={{width: '10%', minWidth: 115}}>
                                        {row.session}
                                    </TableCell>
                                    <TableCell align="left" style={{width: '10%'}}>
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
                                            <GoLiveButton disabled={!row.status} disableRipple>
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

                    {/* 검색 걸과 없을 시,*/}
                    {/*<AdminTableNoSearch/>*/}

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

export default UserDetailStreamingHistoryTable;