import React from 'react';
import {Paper, Table, TableBody, TableCell, TableHead, TableRow, Typography} from "@mui/material";
import {
    RedButton,
    FlexColumn,
    GreenText,
    MinusText,
    PlusText,
    SvgSize,
    TypeSpanText,
    TypeText,
    TypeTextBlue
} from "../../styles/UserTableStyle";
import {ReactComponent as ArrowDownIcon} from "../../../../../../common/images/ArrowDownIcon.svg";
import {ReactComponent as AdminEmptyIcon} from "../../../../../../common/images/AdminEmptyIcon.svg";
import {ReactComponent as EarnedIcon} from "../../../../../../common/images/EarnedIcon.svg";
import {ReactComponent as DeductedIcon} from "../../../../../../common/images/DeductedIcon.svg";

// 공통 css
import {
    TableContainerBox,
    SortTableCell,
    AlignCenter,
    TooltipStyle,
    UnderlineText,
    NoTableCell
} from "../../../../../main/styles/AdminMainStyle";
import AdminCommonTableEmpty from "../../../../common/empty/AdminCommonTableEmpty";
import AdminTableNoSearch from "../../../../common/noSearch/AdminTableNoSearch";
import AdminTablePagination from "../../../../common/tablePagination/AdminTablePagination";

function createData(no, imageUrl, type, requesting, typePoints, pointDetailsState, pointDetails, currentPoints, date, myRole, from, to, channelId) {
    return { no, imageUrl, type, requesting, typePoints, pointDetailsState, pointDetails, currentPoints, date, myRole, from, to, channelId};
}

const rows = [
    createData(1, <EarnedIcon/>, 'earned', false, 'Points Received', 'plus','10', '95.6', '2023. 06. 08 14:20', 'Channel Owner', 'Chris', 'abc-12345678', 'abc-12345678'),
    createData(2, <EarnedIcon/>, 'earned', false, 'Points Received', 'plus','10', '95.6', '2023. 06. 08 14:20', 'Channel Owner', 'Chris', 'abc-12345678', ''),
    createData(3, <DeductedIcon/>, 'deducted', false, 'Points Settled', 'minus','10', '95.6', '2023. 06. 08 14:20', '', 'Chris', 'abc-12345678', 'abc-12345678'),
    createData(4, <DeductedIcon/>, 'deducted', true, 'Cash Exchanged', 'minus','10', '95.6', '2023. 06. 08 14:20', 'Channel Owner', 'Chris', 'abc-12345678', 'abc-12345678'),
    createData(5, <DeductedIcon/>, 'deducted', false,'Points Received', 'minus','10', '95.6', '2023. 06. 08 14:20', '', 'Chris', 'abc-12345678', 'abc-12345678'),
];

function UserDetailPointsHistoryTable() {
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
                            <SortTableCell onClick={handleClickSort} align="left">
                                <div>
                                   <Typography>Type</Typography>
                                    {sort ? <ArrowDownIcon/> : <ArrowDownIcon style={{transform: 'scaleY(-1)'}}/>}
                                </div>
                            </SortTableCell>
                            <SortTableCell onClick={handleClickSort2} style={{ minWidth: 132}} align="left">
                                <div>
                                    <Typography>Point Details</Typography>
                                    {sort2 ? <ArrowDownIcon/> : <ArrowDownIcon style={{transform: 'scaleY(-1)'}}/>}
                                </div>
                            </SortTableCell>
                            <SortTableCell onClick={handleClickSort3} style={{ minWidth: 132}} align="left">
                                <div>
                                    <Typography>CurrentPoints</Typography>
                                    {sort3 ? <ArrowDownIcon/> : <ArrowDownIcon style={{transform: 'scaleY(-1)'}}/>}
                                </div>
                            </SortTableCell>
                            <SortTableCell onClick={handleClickSort4} align="left" style={{width: '10%'}}>
                                <div>
                                    <Typography>Date</Typography>
                                    {sort4 ? <ArrowDownIcon/> : <ArrowDownIcon style={{transform: 'scaleY(-1)'}}/>}
                                </div>
                            </SortTableCell>
                            <TableCell align="left" style={{ minWidth: 80}}>My Role</TableCell>
                            <TableCell align="left">From</TableCell>
                            <TableCell align="left">To</TableCell>
                            <TableCell align="left">Channel ID</TableCell>

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
                                            <SvgSize>
                                                {row.imageUrl}
                                            </SvgSize>

                                            <FlexColumn>
                                                {row.type === 'earned' ?
                                                    <TypeTextBlue>{row.typePoints}</TypeTextBlue>
                                                    :
                                                    <TypeText>
                                                        {row.typePoints}
                                                        {row.requesting &&
                                                            <TypeSpanText>(Requesting..)</TypeSpanText>
                                                        }
                                                    </TypeText>
                                                }
                                                {row.requesting &&
                                                    <RedButton disableRipple>Cancel Exchange</RedButton>
                                                }
                                            </FlexColumn>
                                        </AlignCenter>
                                    </TableCell>
                                    <TableCell align="left" style={{width: '10%'}}>
                                        {row.pointDetailsState === 'plus' ?
                                            <PlusText>
                                                + {row.pointDetails}
                                            </PlusText>
                                            :
                                            <MinusText>
                                                - {row.pointDetails}
                                            </MinusText>
                                        }
                                        point
                                    </TableCell>
                                    <TableCell align="left" style={{width: '10%'}}>
                                        <GreenText>{row.currentPoints}K</GreenText>point
                                    </TableCell>
                                    <TableCell align="left" style={{width: '10%'}}>
                                        {row.date}
                                    </TableCell>
                                    <TableCell align="left" style={{width: '10%'}}>
                                        {row.myRole === '' ?
                                            '-'
                                            :
                                            row.myRole
                                        }
                                    </TableCell>
                                    <TableCell align="left" style={{width: '10%'}}>
                                        {row.from}
                                    </TableCell>
                                    <TableCell align="left" style={{width: '10%'}}>
                                        {row.to}
                                    </TableCell>
                                    <TableCell align="left" style={{width: '15%'}}>
                                        {row.channelId === '' ?
                                            '-'
                                            :
                                            <TooltipStyle
                                                title={row.channelId}
                                                placement="bottom"
                                            >
                                                <UnderlineText disableRipple>
                                                    <Typography>{row.channelId}</Typography>
                                                </UnderlineText>
                                            </TooltipStyle>
                                        }

                                        {/*내 채널이 아니면..*/}
                                        {/*<TooltipStyle*/}
                                        {/*    title={row.channelId}*/}
                                        {/*    placement="bottom"*/}
                                        {/*>*/}
                                        {/*    {row.channelId}*/}
                                        {/*</TooltipStyle>*/}
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

export default UserDetailPointsHistoryTable;