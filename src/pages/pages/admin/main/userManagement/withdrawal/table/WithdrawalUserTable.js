import React from 'react';
import {Paper, Table, TableBody, TableCell, TableHead, TableRow, Typography} from "@mui/material";
import {ReactComponent as ArrowDownIcon} from "../../../../../common/images/ArrowDownIcon.svg";
import {ReactComponent as AdminEmptyIcon} from "../../../../../common/images/AdminEmptyIcon.svg";
import {ReactComponent as ProfileUserIcon} from "../../../../../common/images/ProfileUserIcon.svg";
import {ReactComponent as SettingDialogCloseIcon} from "../../../../../common/images/SettingDialogCloseIcon.svg";

// 공통 css
import {
    TableContainerBox,
    SortTableCell,
    AlignCenter,
    NoTableCell, TableAvatarBox, ArrowTooltipStyle, YellowText, CellText,
} from "../../../styles/AdminMainStyle";
import AdminTablePagination from "../../../common/tablePagination/AdminTablePagination";
import TestProfileImage from "../../../../../common/images/TestProfileImage.jpeg";
import AdminTableNoSearch from "../../../common/noSearch/AdminTableNoSearch";
import AdminCommonTableEmpty from "../../../common/empty/AdminCommonTableEmpty";
import {
    ButtonIcon
} from "../../../channelManagement/channelPurchaseApprovals /styles/ChannelPurchaseApprovalsTableStyle";
import TooltipArrowBlue from "../../../../../common/images/TooltipArrowBlue.svg";

function createData(no, image ,userName, nickName, channels, streamed, points, date, withdrawalDate) {
    return { no, image, userName, nickName, channels, streamed, points, date, withdrawalDate};
}

const rows = [
    createData(1, TestProfileImage, 'jimsmith', 'jims', 0, 0, '500','2023. 06. 08 14:20', '2023. 06. 09 11:20'),
    createData(2, TestProfileImage, 'jimsmith', 'jims', 5, 12, '1,200','2023. 06. 08 14:20', '2023. 06. 09 11:20'),
    createData(3, '', 'jimsmith', 'jims', 0, 5, '100','2023. 06. 08 14:20', '2023. 06. 09 11:20'),
    createData(4, '', 'jimsmith', 'jims', 0, 0, '500','2023. 06. 08 14:20', '2023. 06. 09 11:20'),
    createData(5, '', 'jimsmith', 'jims', 0, 0, '500','2023. 06. 08 14:20', '2023. 06. 09 11:20'),
];

function WithdrawalUserTable() {
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
                            <TableCell align="left">Number of channels owned</TableCell>
                            <TableCell align="left">Number of times streamed</TableCell>
                            <TableCell align="left">Total points held by the user</TableCell>
                            <SortTableCell onClick={handleClickSort2} style={{ minWidth: 132}} align="left">
                                <div>
                                    <Typography>Signup Date</Typography>
                                    {sort2 ? <ArrowDownIcon/> : <ArrowDownIcon style={{transform: 'scaleY(-1)'}}/>}
                                </div>
                            </SortTableCell>
                            <SortTableCell onClick={handleClickSort3} style={{ minWidth: 132}} align="left">
                                <div>
                                    <Typography>Withdrawal Date</Typography>
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
                                    <TableCell align="center" style={{width: '15%'}}>
                                        <AlignCenter>
                                            <TableAvatarBox>
                                                {row.image === '' ?
                                                    <ProfileUserIcon />
                                                    :
                                                    <img src={row.image} alt='image'/>
                                                }
                                            </TableAvatarBox>

                                            <ArrowTooltipStyle
                                                title={
                                                    <div>
                                                        <Typography>
                                                            Reason for withdrawal: -
                                                        </Typography>
                                                    </div>
                                                }
                                                placement="bottom"
                                                top={'-25px'}
                                                left={'50%'}
                                                triangle={TooltipArrowBlue}
                                            >
                                                <YellowText>
                                                    {row.userName}
                                                </YellowText>
                                            </ArrowTooltipStyle>

                                        </AlignCenter>
                                    </TableCell>
                                    <TableCell align="left" style={{width: '15%', maxWidth: 230}}>
                                        {row.nickName}
                                    </TableCell>
                                    <TableCell align="left" style={{width: '15%', minWidth: 210}}>
                                        {row.channels}
                                    </TableCell>
                                    <TableCell align="left" style={{width: '15%', minWidth: 210}}>
                                        {row.streamed}
                                    </TableCell>
                                    <TableCell align="left" style={{width: '15%', minWidth: 230}}>
                                        <CellText>{row.points} <span>points</span></CellText>

                                    </TableCell>
                                    <TableCell align="left" style={{width: '10%'}}>
                                        {row.date}
                                    </TableCell>
                                    <TableCell align="left" style={{width: '10%', minWidth: 150}}>
                                        {row.withdrawalDate}
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

export default WithdrawalUserTable;