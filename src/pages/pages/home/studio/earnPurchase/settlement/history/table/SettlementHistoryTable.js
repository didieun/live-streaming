import React from 'react';
import {Paper, Table, TableBody, TableCell, TableHead, TableRow, Typography} from "@mui/material";
import {
    ButtonStyle,
    ChannelIdTextSettlement,
    MinusText, OpenButtonStyle,
    PlusText
} from "../../../styles/TableStyle";
import {ReactComponent as ArrowDownIcon} from "../../../../../../common/images/ArrowDownIcon.svg";
import {ReactComponent as MailOpenIcon} from "../../../../../../common/images/MailOpenIcon.svg";
import {ReactComponent as MailIcon} from "../../../../../../common/images/MailIcon.svg";
import TablePagination from "../../../../tablePagination/TablePagination";

// 공통 css
import {
    TableContainerBox,
    SortTableCell,
    TooltipStyle,
    ArrowTooltipStyleGray, EmptyIconBox
} from "../../../../../main/styles/MainStyle";
import {NoTableCell} from "../../../../channelsManager/style/ManagerStyle";
import TooltipArrowGray from "../../../../../../common/images/TooltipArrowGray.svg";
import CommonTableEmpty from "../../../../empty/CommonTableEmpty";
import TableNoSearch from "../../../../noSearch/TableNoSearch";

function createData(no, pointDetailsState, pointDetails, settlementDate, myRole, from, to, notesOpen, notesText, streamTitle, channelId) {
    return { no, pointDetailsState, pointDetails, settlementDate, myRole, from, to, notesOpen, notesText, streamTitle, channelId};
}

const rows = [
    createData(1, 'minus', 5, '2023. 06. 08 14:20', 'Channel Owner', '{Channel ID you belong to}', '{Streamer Nickname}', false, 'last message', '{Stream title Stream title Stream title Stream title Stream title}','abc-12345678' ),
    createData(2, 'plus', 10, '2023. 06. 08 14:20', 'Streamer', '{Channel ID you belong to}', '{Streamer Nickname}', true, 'last message', '{Stream title}','abc-12345678' ),
    createData(3, 'plus', 10, '2023. 06. 08 14:20', 'Channel Owner', '{Channel ID you belong to}', '{Streamer Nickname}', true, 'last message', '{Stream title}','abc-12345678' ),
    createData(4, 'minus', 10, '2023. 06. 08 14:20', 'Channel Owner', '{Channel ID you belong to}', '{Streamer Nickname}', false, 'last message', '{Stream title}','abc-12345678' ),
];

function SettlementHistoryTable() {
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
                            <SortTableCell onClick={handleClickSort} style={{ minWidth: 132}} align="left">
                                <div>
                                   <Typography>Point Details</Typography>
                                    {sort ? <ArrowDownIcon/> : <ArrowDownIcon style={{transform: 'scaleY(-1)'}}/>}
                                </div>
                            </SortTableCell>
                            <SortTableCell onClick={handleClickSort2} align="left" style={{ minWidth: 150}}>
                                <div>
                                    <Typography>Settlement Date</Typography>
                                    {sort2 ? <ArrowDownIcon/> : <ArrowDownIcon style={{transform: 'scaleY(-1)'}}/>}
                                </div>
                            </SortTableCell>

                            <TableCell align="left" style={{ minWidth: 105}}>My Role</TableCell>

                            <TableCell align="left"  style={{ minWidth: 105}}>From</TableCell>

                            <TableCell align="left"  style={{ minWidth: 105}}>To</TableCell>

                            <TableCell align="left"  style={{ minWidth: 105}}>Notes</TableCell>
                            <TableCell align="left"  style={{ minWidth: 105}}>Stream Title</TableCell>
                            <TableCell align="left" style={{ minWidth: 105}}>Channel ID</TableCell>
                        </TableRow>
                    </TableHead>
                    {rows.length > 0 ?
                        <TableBody>
                            {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row, i) => (
                                <TableRow key={i}>
                                    <NoTableCell align="center" style={{width: '5%'}}>
                                        {row.no}
                                    </NoTableCell>
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
                                       {row.settlementDate}
                                    </TableCell>

                                    <TableCell align="left" style={{width: '11%'}}>
                                        {row.myRole}
                                    </TableCell>

                                    <TableCell align="left" style={{width: '12%', maxWidth: 300}}>
                                        <TooltipStyle
                                            title={row.from}
                                            placement="bottom"
                                        >
                                            <span>
                                                {row.from}
                                            </span>
                                        </TooltipStyle>
                                    </TableCell>

                                    <TableCell align="left" style={{width: '12%', maxWidth: 300}}>
                                        <TooltipStyle
                                            title={row.to}
                                            placement="bottom"
                                        >
                                            <span>
                                                {row.to}
                                            </span>
                                        </TooltipStyle>
                                    </TableCell>

                                    <TableCell align="left" style={{width: '15%'}}>
                                        {row.notesOpen ?
                                            <OpenButtonStyle disableRipple>
                                                <MailOpenIcon/>
                                                <TooltipStyle
                                                    title={row.notesText}
                                                    placement="bottom"
                                                >
                                                    <Typography>
                                                        {row.notesText}
                                                    </Typography>
                                                </TooltipStyle>
                                            </OpenButtonStyle>
                                            :
                                            <ButtonStyle disableRipple>
                                                <ArrowTooltipStyleGray
                                                    title={
                                                        <div>
                                                            <Typography>You have unread messages.</Typography>
                                                        </div>
                                                    }
                                                    placement="bottom"
                                                    top={'-19px'}
                                                    left={'52%'}
                                                    triangle={TooltipArrowGray}
                                                >
                                                    <MailIcon/>
                                                </ArrowTooltipStyleGray>
                                                <TooltipStyle
                                                    title={row.notesText}
                                                    placement="bottom"
                                                >
                                                    <Typography>
                                                        {row.notesText}
                                                    </Typography>
                                                </TooltipStyle>
                                            </ButtonStyle>
                                        }
                                    </TableCell>

                                    <TableCell align="left" style={{width: '15%', maxWidth: 500}}>
                                        <TooltipStyle
                                            title={row.streamTitle}
                                            placement="bottom"
                                        >
                                            <ChannelIdTextSettlement disableRipple>
                                                <Typography>{row.streamTitle}</Typography>
                                            </ChannelIdTextSettlement>
                                        </TooltipStyle>
                                    </TableCell>

                                    <TableCell align="left" style={{width: '10%', maxWidth: 300}}>
                                        <TooltipStyle
                                            title={row.channelId}
                                            placement="bottom"
                                        >
                                            <ChannelIdTextSettlement disableRipple>
                                                <Typography>{row.channelId}</Typography>
                                            </ChannelIdTextSettlement>
                                        </TooltipStyle>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                        :
                        <CommonTableEmpty
                            image={<EmptyIconBox/>}
                            title={'There is no settlement history.'}
                            message={
                                <span>
                                    Points you’ve earned and settled will show up here.
                                </span>
                            }
                            action={false}
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

export default SettlementHistoryTable;