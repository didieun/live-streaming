import React from 'react';
import {Paper, Table, TableBody, TableCell, TableHead, TableRow, Typography} from "@mui/material";
import {ActiveRoles, Audience, ChannelOwner, Streamer,} from "../styles/UserTableStyle";
import {ReactComponent as ArrowDownIcon} from "../../../../../common/images/ArrowDownIcon.svg";
import {ReactComponent as AdminEmptyIcon} from "../../../../../common/images/AdminEmptyIcon.svg";
import {ReactComponent as ProfileUserIcon} from "../../../../../common/images/ProfileUserIcon.svg";

// 공통 css
import {
    TableContainerBox,
    SortTableCell,
    AlignCenter,
    NoTableCell, TableAvatarBox, UnderlineText, TooltipStyle,
} from "../../../styles/AdminMainStyle";
import AdminTablePagination from "../../../common/tablePagination/AdminTablePagination";
import TestProfileImage from "../../../../../common/images/TestProfileImage.jpeg";
import AdminTableNoSearch from "../../../common/noSearch/AdminTableNoSearch";
import AdminCommonTableEmpty from "../../../common/empty/AdminCommonTableEmpty";

function createData(no, image ,userName, nickName, audience, streamer, channelOwner, date, lastLoginDate) {
    return { no, image, userName, nickName, audience, streamer, channelOwner, date, lastLoginDate};
}

const rows = [
    createData(1, TestProfileImage, 'jimsmith', 'jims', true, true, true,'2023. 06. 08 14:20', '2023. 06. 09 11:20'),
    createData(2, TestProfileImage, 'jimsmith', 'jims', true, true, false,'2023. 06. 08 14:20', '2023. 06. 09 11:20'),
    createData(3, '', 'jimsmith', 'jims', true, false, true,'2023. 06. 08 14:20', '2023. 06. 09 11:20'),
    createData(4, '', 'jimsmith', 'jims', true, false, false,'2023. 06. 08 14:20', '2023. 06. 09 11:20'),
    createData(5, '', 'jimsmith', 'jims', true, true, true,'2023. 06. 08 14:20', '2023. 06. 09 11:20'),
];

function UserTable() {
    const [rowsPerPage, setRowsPerPage] = React.useState(10);
    const [page, setPage] = React.useState(0);
    const [sort, setSort] = React.useState(false);
    const [sort2, setSort2] = React.useState(false);
    const [sort3, setSort3] = React.useState(false);

    const handleClickSort = () => {
        setSort(!sort);
    };

    const handleClickSort2 = () => {
        setSort2(!sort2);
    };

    const handleClickSort3 = () => {
        setSort3(!sort3);
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
                            <TableCell align="left">User Name</TableCell>
                            <SortTableCell onClick={handleClickSort} align="left">
                                <div>
                                   <Typography>Nickname</Typography>
                                    {sort ? <ArrowDownIcon/> : <ArrowDownIcon style={{transform: 'scaleY(-1)'}}/>}
                                </div>
                            </SortTableCell>
                            <TableCell align="left">Active Roles</TableCell>
                            <SortTableCell onClick={handleClickSort2} style={{ minWidth: 132}} align="left">
                                <div>
                                    <Typography>Signup Date</Typography>
                                    {sort2 ? <ArrowDownIcon/> : <ArrowDownIcon style={{transform: 'scaleY(-1)'}}/>}
                                </div>
                            </SortTableCell>
                            <SortTableCell onClick={handleClickSort3} style={{ minWidth: 132}} align="left">
                                <div>
                                    <Typography>Last Login Date</Typography>
                                    {sort3 ? <ArrowDownIcon/> : <ArrowDownIcon style={{transform: 'scaleY(-1)'}}/>}
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
                                    <TableCell align="center" style={{width: '20%'}}>
                                        <AlignCenter>
                                            <TableAvatarBox>
                                                {row.image === '' ?
                                                    <ProfileUserIcon />
                                                    :
                                                    <img src={row.image} alt='image'/>
                                                }
                                            </TableAvatarBox>
                                            <UnderlineText disableRipple>
                                                <TooltipStyle
                                                    title={row.userName}
                                                    placement="bottom"
                                                >
                                                    <Typography>
                                                        {row.userName}
                                                    </Typography>
                                                </TooltipStyle>

                                            </UnderlineText>
                                        </AlignCenter>
                                    </TableCell>
                                    <TableCell align="left" style={{width: '20%', maxWidth: 230}}>
                                        {row.nickName}
                                    </TableCell>
                                    <TableCell align="left" style={{width: '25%'}}>
                                        <AlignCenter>
                                            {row.audience ?
                                                <Audience>
                                                    <span/>
                                                    <Typography>Audience</Typography>
                                                </Audience>
                                                :
                                                <ActiveRoles>
                                                    <span/>
                                                    <Typography>Audience</Typography>
                                                </ActiveRoles>
                                            }
                                            {row.streamer ?
                                                <Streamer>
                                                    <span/>
                                                    <Typography>Streamer</Typography>
                                                </Streamer>
                                                :
                                                <ActiveRoles>
                                                    <span/>
                                                    <Typography>Streamer</Typography>
                                                </ActiveRoles>
                                            }
                                            {row.channelOwner ?
                                                <ChannelOwner>
                                                    <span/>
                                                    <Typography>Channel Owner</Typography>
                                                </ChannelOwner>
                                                :
                                                <ActiveRoles>
                                                    <span/>
                                                    <Typography>Channel Owner</Typography>
                                                </ActiveRoles>
                                            }
                                        </AlignCenter>

                                    </TableCell>
                                    <TableCell align="left" style={{width: '15%'}}>
                                        {row.date}
                                    </TableCell>
                                    <TableCell align="left" style={{width: '15%'}}>
                                        {row.lastLoginDate}
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

export default UserTable;