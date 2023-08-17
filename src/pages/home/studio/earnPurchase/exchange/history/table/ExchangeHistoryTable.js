import React from 'react';
import {Paper, Table, TableBody, TableCell, TableHead, TableRow, Typography} from "@mui/material";
import {
    AlignCenter,
    CanceledText,
    MinusText, RedButton, StatusBox, StatusBoxBlue,
    ButtonStyle,
    OpenButtonStyle
} from "../../../styles/TableStyle";
import {ReactComponent as ArrowDownIcon} from "../../../../../../common/images/ArrowDownIcon.svg";
import {ReactComponent as MailIcon} from "../../../../../../common/images/MailIcon.svg";
import {ReactComponent as MailOpenIcon} from "../../../../../../common/images/MailOpenIcon.svg";
import TablePagination from "../../../../tablePagination/TablePagination";

// 공통 css
import {
    TableContainerBox,
    SortTableCell,
    TooltipStyle,
    ArrowTooltipStyleGray
} from "../../../../../main/styles/MainStyle";
import {NoTableCell} from "../../../../channelsManager/style/ManagerStyle";
import TooltipArrowGray from "../../../../../../common/images/TooltipArrowGray.svg";

function createData(no, exchangePoints, notesOpen, notesText, requestDate, purchaseDate, status) {
    return { no, exchangePoints, notesOpen, notesText, requestDate, purchaseDate, status};
}

const rows = [
    createData(1, 30, false, 'last message', '2023. 06. 08 14:20','2023. 06. 08 15:20', 'charged', ),
    createData(1, 50, true, 'last message last message last message last message last message last message', '2023. 06. 08 14:20','2023. 06. 08 15:20', 'requesting', ),
    createData(1, 30, true, 'last message', '2023. 06. 08 14:20','', 'canceled', ),
];

function ExchangeHistoryTable() {
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
                            <SortTableCell onClick={handleClickSort} style={{ minWidth: 132}} align="left">
                                <div>
                                   <Typography>Exchange Points</Typography>
                                    {sort ? <ArrowDownIcon/> : <ArrowDownIcon style={{transform: 'scaleY(-1)'}}/>}
                                </div>
                            </SortTableCell>
                            <TableCell align="left" style={{ minWidth: 80}}>Notes</TableCell>
                            <SortTableCell onClick={handleClickSort2} align="left">
                                <div>
                                    <Typography>Request Date</Typography>
                                    {sort2 ? <ArrowDownIcon/> : <ArrowDownIcon style={{transform: 'scaleY(-1)'}}/>}
                                </div>
                            </SortTableCell>
                            <SortTableCell onClick={handleClickSort3} align="left" >
                                <div>
                                    <Typography>Exchange Date</Typography>
                                    {sort3 ? <ArrowDownIcon/> : <ArrowDownIcon style={{transform: 'scaleY(-1)'}}/>}
                                </div>
                            </SortTableCell>

                            <SortTableCell onClick={handleClickSort4} align="left" style={{minWidth: 80}}>
                                <div>
                                    <Typography>Status</Typography>
                                    {sort4 ? <ArrowDownIcon/> : <ArrowDownIcon style={{transform: 'scaleY(-1)'}}/>}
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
                                <TableCell align="left" style={{width: '15%'}}>
                                    <MinusText style={row.status === 'canceled' ? {textDecoration: 'line-through'} : {}}>{row.exchangePoints}</MinusText>point
                                </TableCell>

                                <TableCell align="left" style={{width: '30%'}}>
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

                                <TableCell align="left" style={{width: '15%', textDecoration: row.status === 'canceled' ? 'line-through' : 'none'}}>
                                    {row.requestDate === '' ?
                                        '-'
                                        :
                                        row.requestDate
                                    }
                                </TableCell>
                                <TableCell align="left" style={{width: '15%', textDecoration: row.status === 'canceled' ? 'line-through' : 'none'}}>
                                    {row.purchaseDate === '' ?
                                        '-'
                                        :
                                        row.purchaseDate
                                    }
                                </TableCell>
                                <TableCell align="left" style={{width: '20%'}}>
                                    <AlignCenter>
                                        {row.status === 'charged' ?
                                            <StatusBox>
                                                <Typography>CHARGED</Typography>
                                            </StatusBox>
                                            :
                                            row.status === 'requesting' ?
                                                <StatusBoxBlue>
                                                    <Typography>REQUESTING..</Typography>
                                                </StatusBoxBlue>
                                                :
                                                <CanceledText>
                                                    <Typography>CHARGED</Typography>
                                                </CanceledText>
                                        }
                                        {row.status === 'requesting' &&
                                            <RedButton>Cancel Charging</RedButton>
                                        }
                                    </AlignCenter>

                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
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

export default ExchangeHistoryTable;