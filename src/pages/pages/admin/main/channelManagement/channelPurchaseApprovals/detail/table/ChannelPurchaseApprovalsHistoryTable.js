import React from 'react';
import {Paper, Table, TableBody, TableCell, TableRow, Typography} from "@mui/material";
import {
    BoxColumn, ButtonStyle, OpenButtonStyle, StatusBox,
    TableHeadBox,
    ExpirationDateBox, GreenText, RedText, YellowText
} from "../../styles/ChannelPurchaseApprovalsTableStyle";
import {ReactComponent as ArrowDownIcon} from "../../../../../../common/images/ArrowDownIcon.svg";
import {ReactComponent as CalendarIcon} from "../../../../../../common/images/CalendarIcon.svg";
import {ReactComponent as MailOpenIcon} from "../../../../../../common/images/MailOpenIcon.svg";
import {ReactComponent as MailIcon} from "../../../../../../common/images/MailIcon.svg";
import {ReactComponent as AdminEmptyIcon} from "../../../../../../common/images/AdminEmptyIcon.svg";

// 공통 css
import {
    TableContainerBox,
    SortTableCell,
    AlignCenter,
    NoTableCell,
    ArrowTooltipStyleGray, TooltipStyle,
} from "../../../../styles/AdminMainStyle";
import AdminTablePagination from "../../../../common/tablePagination/AdminTablePagination";
import AdminTableNoSearch from "../../../../common/noSearch/AdminTableNoSearch";
import TooltipArrowGray from "../../../../../../common/images/TooltipArrowGray.svg";
import CommonTableEmpty from "../../../../../../home/studio/empty/CommonTableEmpty";
import AdminCommonTableEmpty from "../../../../common/empty/AdminCommonTableEmpty";

function createData(no , pricePlan, expirationDate, notesOpen, notes, paymentRequestDate, paymentApprovalDate, productPrice, status) {
    return { no, pricePlan, expirationDate, notesOpen, notes, paymentRequestDate, paymentApprovalDate, productPrice, status };
}

const rows = [
    createData(1,'Basic 3 month', '2023. 06. 08 ~ 2024. 06. 08', true, '{last message}...', '2023. 06. 08 14:20', '2023. 06. 08 15:20', '2,300', 'approved'),
    createData(2,'Basic 3 month', '',true, '{last message}...', '2023. 06. 08 14:20', '2023. 06. 08 15:20', '2,300', 'upcoming'),
    createData(3,'Basic 3 month', '', false, 'last message last message last message last message last message last message ', '2023. 06. 08 14:20', '2023. 06. 08 15:20', '2,300', 'canceled'),
    createData(5,'Basic 3 month', '2023. 06. 08 ~ 2024. 06. 08', false, '{last message}...', '2023. 06. 08 14:20', '2023. 06. 08 15:20', '2,300', 'rejected'),
];

function ChannelPurchaseApprovalsHistoryTable() {
    const [tooltip, setTooltip] = React.useState(true);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);
    const [page, setPage] = React.useState(0);
    const [sort, setSort] = React.useState(false);
    const [sort2, setSort2] = React.useState(false);

    const handleCloseTooltip = () => {
        setTooltip(false);
    };

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
                    <TableHeadBox>
                        <TableRow>
                            <TableCell align="center">No</TableCell>
                            <TableCell align="left">Price Plan</TableCell>
                            <TableCell align="left">Expiration Date</TableCell>
                            <TableCell align="left">Notes</TableCell>
                            <SortTableCell align="left" onClick={handleClickSort2} style={{minWidth: 210}}>
                                <BoxColumn>
                                    <AlignCenter>
                                        <Typography>Payment Approval Date</Typography>
                                        {sort2 ? <ArrowDownIcon/> : <ArrowDownIcon style={{transform: 'scaleY(-1)'}}/>}
                                    </AlignCenter>
                                    <Typography style={{opacity: 0.7}}>(Payment Request Date)</Typography>
                                </BoxColumn>
                            </SortTableCell>
                            <TableCell align="left" style={{minWidth: 112}}>Product Price</TableCell>
                            <TableCell align="left" >Previous Status</TableCell>
                        </TableRow>
                    </TableHeadBox>
                    {rows.length > 0 ?
                        <TableBody>
                            {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row, i) => (
                                <TableRow key={i}>
                                    <NoTableCell align="center" style={{width: '5%'}}>
                                        {row.no}
                                    </NoTableCell>
                                    <TableCell align="left" style={{width: '10%'}}>{row.pricePlan}</TableCell>
                                    <TableCell align="left" style={{width: '20%'}} >
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
                                    </TableCell>
                                    <TableCell align="left" style={{width: '30%', maxWidth: 350}}>
                                        {row.notesOpen ?
                                            <OpenButtonStyle disableRipple>
                                                <MailOpenIcon/>
                                                <TooltipStyle
                                                    title={row.notes}
                                                    placement="bottom"
                                                >
                                                    <Typography>
                                                        {row.notes}
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
                                                    title={row.notes}
                                                    placement="bottom"
                                                >
                                                    <Typography>
                                                        {row.notes}
                                                    </Typography>
                                                </TooltipStyle>
                                            </ButtonStyle>
                                        }
                                    </TableCell>
                                    <TableCell align="left" style={{width: '15%'}} >
                                        <BoxColumn>
                                            {row.paymentRequestDate}
                                            <span>({row.paymentApprovalDate})</span>
                                        </BoxColumn>
                                    </TableCell>
                                    <TableCell align="left" style={{width: '10%'}}>
                                        $ {row.productPrice}
                                    </TableCell>
                                    <TableCell align="left" style={{width: '10%', minWidth: 125}} >
                                        {row.status === 'approved' ?
                                            <StatusBox>
                                                APPROVED
                                            </StatusBox>
                                            :
                                            row.status === 'requesting' ?
                                                <GreenText>
                                                    REQUESTING..
                                                </GreenText>
                                                :
                                                row.status === 'expired' ?
                                                    <RedText>
                                                        EXPIRED
                                                    </RedText>
                                                    :
                                                    row.status === 'upcoming' ?
                                                        <YellowText>
                                                            UPCOMING
                                                        </YellowText>
                                                        :
                                                        row.status === 'rejected' ?
                                                            <RedText>
                                                                REJECTED
                                                            </RedText>
                                                            :
                                                            <RedText>
                                                                CANCELED
                                                            </RedText>
                                        }
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

export default ChannelPurchaseApprovalsHistoryTable;
