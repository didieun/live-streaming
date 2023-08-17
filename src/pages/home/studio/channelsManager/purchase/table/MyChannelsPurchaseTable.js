import React from 'react';
import {
    BoxColumn,
    TableHeadBox,
    DayBold,
    DayRed,
    StatusBox,
    TradingText,
    ExpiredText,
    CanceledText, ButtonStyle, OpenButtonStyle, ButtonIcon
} from "./styles/MyChannelsPurchaseStyleTable";
import {Paper, Table, TableBody, TableCell, TableRow, Typography} from "@mui/material";

// 공통 css
import {
    TableContainerBox,
    TooltipStyle,
    SortTableCell,
    AlignCenter, EmptyIconBox, ArrowTooltipStyle, ArrowTooltipStyleGray,
} from "../../../../main/styles/MainStyle";
import {ChannelIdText, NoTableCell, ExpirationDateBox , BorderRight4} from "../../style/ManagerStyle";

import {ReactComponent as ArrowDownIcon} from "../../../../../common/images/ArrowDownIcon.svg";
import {ReactComponent as CalendarIcon} from "../../../../../common/images/CalendarIcon.svg";
import {ReactComponent as MailOpenIcon} from "../../../../../common/images/MailOpenIcon.svg";
import {ReactComponent as MailIcon} from "../../../../../common/images/MailIcon.svg";
import {ReactComponent as SettingDialogCloseIcon} from "../../../../../common/images/SettingDialogCloseIcon.svg";
import TablePagination from "../../../tablePagination/TablePagination";
import CommonTableEmpty from "../../../empty/CommonTableEmpty";
import TooltipArrowBlue from "../../../../../common/images/TooltipArrowBlue.svg";
import TooltipArrowGray from "../../../../../common/images/TooltipArrowGray.svg";
import TableNoSearch from "../../../noSearch/TableNoSearch";

function createData(no, channelId, pricePlan, expirationDate, remainingPeriodValue, remainingPeriod, notesOpen, notes, paymentRequestDate, paymentApprovalDate, productPrice, status) {
    return { no, channelId, pricePlan, expirationDate, remainingPeriodValue, remainingPeriod, notesOpen, notes, paymentRequestDate, paymentApprovalDate, productPrice, status };
}

const rows = [
    createData(1,'abc-12345678abc-12345678abc-12345678abc-12345678', 'Basic 3 month', '2023. 06. 08 ~ 2024. 06. 08', false,365, true, '{last message}...', '2023. 06. 08 14:20', '2023. 06. 08 15:20', '2,300', 'activated'),
    createData(1,'abc-12345678', 'Basic 3 month', '', false,365, true, '{last message}...', '2023. 06. 08 14:20', '2023. 06. 08 15:20', '2,300', 'trading'),
    createData(1,'abc-12345678', 'Basic 3 month', '', true,3, false, 'last message last message last message last message last message last message ', '2023. 06. 08 14:20', '2023. 06. 08 15:20', '2,300', 'expired'),
    createData(1,'abc-12345678', 'Basic 3 month', '2023. 06. 08 ~ 2024. 06. 08', true, 7, false, '{last message}...', '2023. 06. 08 14:20', '2023. 06. 08 15:20', '2,300', 'canceled'),
];

function MyChannelsPurchaseTable(props) {
    const [rowsPerPage, setRowsPerPage] = React.useState(10);
    const [page, setPage] = React.useState(0);
    const [sort, setSort] = React.useState(false);
    const [sort2, setSort2] = React.useState(false);
    const [sort3, setSort3] = React.useState(false);
    const [sort4, setSort4] = React.useState(false);
    const [sort5, setSort5] = React.useState(false);

    const handleClickSort = () => {setSort(!sort);};

    const handleClickSort2 = () => {setSort2(!sort2);};

    const handleClickSort3 = () => {setSort3(!sort3);};

    const handleClickSort4 = () => {setSort4(!sort4);};

    const handleClickSort5 = () => {setSort5(!sort5);};

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
                            <TableCell align="left">Channel ID</TableCell>
                            <SortTableCell onClick={handleClickSort} align="left">
                                <div>
                                   <Typography>Price Plan</Typography>
                                    {sort ? <ArrowDownIcon/> : <ArrowDownIcon style={{transform: 'scaleY(-1)'}}/>}
                                </div>
                            </SortTableCell>
                            <SortTableCell onClick={handleClickSort2} align="left">
                                <div>
                                    <Typography>Expiration Date</Typography>
                                    {sort2 ? <ArrowDownIcon/> : <ArrowDownIcon style={{transform: 'scaleY(-1)'}}/>}
                                </div>
                            </SortTableCell>
                            <SortTableCell onClick={handleClickSort3} align="left" style={{minWidth: 155}}>
                                <div>
                                    <Typography>Remaining Period</Typography>
                                    {sort3 ? <ArrowDownIcon/> : <ArrowDownIcon style={{transform: 'scaleY(-1)'}}/>}
                                </div>
                            </SortTableCell>
                            <TableCell align="left">Notes</TableCell>
                            <SortTableCell align="left" onClick={handleClickSort4} style={{minWidth: 210}}>
                                <BoxColumn>
                                    <AlignCenter>
                                        <Typography>Payment Request Date</Typography>
                                        {sort4 ? <ArrowDownIcon/> : <ArrowDownIcon style={{transform: 'scaleY(-1)'}}/>}
                                    </AlignCenter>
                                    <Typography style={{opacity: 0.7}}>(Payment Approval Date)</Typography>
                                </BoxColumn>
                            </SortTableCell>
                            <TableCell align="left" style={{minWidth: 112}}>Product Price</TableCell>
                            <SortTableCell onClick={handleClickSort5} align="left">
                                <div>
                                    <Typography>Status</Typography>
                                    {sort5 ? <ArrowDownIcon/> : <ArrowDownIcon style={{transform: 'scaleY(-1)'}}/>}
                                </div>
                            </SortTableCell>
                        </TableRow>
                    </TableHeadBox>
                    {rows.length > 0 ?
                        <TableBody>
                            {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row, i) => (
                                <TableRow key={i}>
                                    <NoTableCell align="center" style={{width: '5%'}}>
                                        {row.no}
                                    </NoTableCell>
                                    <TableCell align="left" style={{width: '10%'}}>
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
                                    </TableCell>
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
                                    <BorderRight4 align="left" style={{width: '20%'}} >
                                        {row.remainingPeriod <= 7 ?
                                            <ArrowTooltipStyle
                                                title={
                                                    <div>
                                                        <Typography>You have <span>7</span> days left to extend your channel period.</Typography>
                                                        <ButtonIcon disableRipple>
                                                            <SettingDialogCloseIcon style={{width: 16, height: 16}}/>
                                                        </ButtonIcon>
                                                    </div>
                                                }
                                                placement="bottom"
                                                top={'-25px'}
                                                left={'50%'}
                                                triangle={TooltipArrowBlue}
                                            >
                                                <DayRed>D+{row.remainingPeriod}</DayRed>
                                            </ArrowTooltipStyle>

                                            :
                                            <><DayBold>D+</DayBold>{row.remainingPeriod}</>
                                        }

                                    </BorderRight4>
                                    <TableCell align="left" style={{width: '10%', maxWidth: 230}}>
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
                                    <TableCell align="left" style={{width: '10%'}} >
                                        {row.status === 'activated' ?
                                            <StatusBox>
                                                ACTIVATED
                                            </StatusBox>
                                            :
                                            row.status === 'trading' ?
                                                <TradingText>
                                                    TRADING..
                                                </TradingText>
                                                :
                                                row.status === 'expired' ?
                                                    <ExpiredText>
                                                        EXPIRED
                                                    </ExpiredText>
                                                    :
                                                    <CanceledText>
                                                        CANCELED
                                                    </CanceledText>
                                        }

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

export default MyChannelsPurchaseTable;