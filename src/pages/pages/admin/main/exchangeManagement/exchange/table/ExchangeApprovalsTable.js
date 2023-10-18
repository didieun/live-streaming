import React from 'react';
import {Paper, Table, TableBody, TableCell, TableHead, TableRow, Typography} from "@mui/material";
import {ReactComponent as ArrowDownIcon} from "../../../../../common/images/ArrowDownIcon.svg";
import {ReactComponent as AdminEmptyIcon} from "../../../../../common/images/AdminEmptyIcon.svg";
import {ReactComponent as ProfileUserIcon} from "../../../../../common/images/ProfileUserIcon.svg";
import {ReactComponent as MailOpenIcon} from "../../../../../common/images/MailOpenIcon.svg";
import {ReactComponent as MailIcon} from "../../../../../common/images/MailIcon.svg";
import {
    BoxColumn,
    ButtonStyle, Flex,
    GreenText,
    OpenButtonStyle, PointBoldText,
    PointText,
    RedText,
    StatusBox,
    YellowText
} from "../styles/ExchangeApprovalsTableStyle";

// 공통 css
import {
    TableContainerBox,
    SortTableCell,
    AlignCenter,
    TooltipStyle,
    NoTableCell, TableAvatarBox, UnderlineText,
} from "../../../styles/AdminMainStyle";
import AdminTablePagination from "../../../common/tablePagination/AdminTablePagination";
import TestProfileImage from "../../../../../common/images/TestProfileImage.jpeg";
import AdminTableNoSearch from "../../../common/noSearch/AdminTableNoSearch";
import AdminCommonTableEmpty from "../../../common/empty/AdminCommonTableEmpty";


function createData(no, pointsRequested, exchangeMoney, image ,userName, notesOpen, notes,exchangeApprovalDate, exchangeRequestDate, status) {
    return { no, pointsRequested, exchangeMoney, image, userName, notesOpen, notes,exchangeApprovalDate, exchangeRequestDate, status};
}

const rows = [
    createData(1, '10', '0.00', TestProfileImage, 'jimsmith', true, '{last message}...', '2023. 06. 07 9:20', '2023. 06. 07 9:20', 'approved'),
    createData(2, '1,234', '0.00', TestProfileImage, 'jimsmith', true, '{last message}...', '2023. 06. 07 9:20', '2023. 06. 07 9:20', 'requesting'),
    createData(3, '1,234', '16000.00', '', 'jimsmith', false, '{last message}...', '2023. 06. 07 9:20', '2023. 06. 07 9:20', 'upcoming'),
    createData(4, '1,234', '16000.00', '', 'jimsmith', false, '{last message}...', '2023. 06. 07 9:20', '2023. 06. 07 9:20', 'expired'),
    createData(5, '1,234', '0.00', '', 'jimsmith', false, '{last message}...', '2023. 06. 07 9:20', '2023. 06. 07 9:20', 'canceled'),
    createData(6, '1,234', '0.00', '', 'jimsmith', true, '{last message}...', '2023. 06. 07 9:20', '2023. 06. 07 9:20', 'rejected'),
];

function ExchangeApprovalsTable(props) {
    const {handleClickExchangeRequestDialog, handleClickExchangeCheckpointBeforeApprovalDialog} = props;
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
                            <TableCell align="left">Points Requested for Exchange</TableCell>
                            <SortTableCell onClick={handleClickSort} align="left">
                                <div>
                                   <Typography>Exchange Money</Typography>
                                    {sort ? <ArrowDownIcon/> : <ArrowDownIcon style={{transform: 'scaleY(-1)'}}/>}
                                </div>
                            </SortTableCell>
                            <TableCell align="left">User Name</TableCell>
                            <TableCell align="left">Notes</TableCell>
                            <SortTableCell align="left" onClick={handleClickSort2} style={{minWidth: 210}}>
                                <BoxColumn>
                                    <AlignCenter>
                                        <Typography>Payment Request Date</Typography>
                                        {sort2 ? <ArrowDownIcon/> : <ArrowDownIcon style={{transform: 'scaleY(-1)'}}/>}
                                    </AlignCenter>
                                    <Typography style={{opacity: 0.7}}>(Payment Approval Date)</Typography>
                                </BoxColumn>
                            </SortTableCell>

                            <TableCell align="left">Status</TableCell>
                        </TableRow>
                    </TableHead>
                    {rows.length > 0 ?
                        <TableBody>
                            {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row, i) => (
                                <TableRow key={i}>
                                    <NoTableCell align="center" style={{width: '5%'}}>
                                        {row.no}
                                    </NoTableCell>
                                    <TableCell onClick={handleClickExchangeCheckpointBeforeApprovalDialog} align="left" style={{width: '15%', minWidth: 237}}>
                                        <Flex>
                                            <PointBoldText>
                                                {row.pointsRequested}&nbsp;
                                            </PointBoldText>
                                            <PointText>
                                                point
                                            </PointText>
                                        </Flex>
                                    </TableCell>
                                    <TableCell align="left" style={{width: '15%', minWidth: 152}}>
                                        $ {row.exchangeMoney}
                                    </TableCell>
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
                                    <TableCell align="left" style={{width: '25%', maxWidth: 230}}>
                                        {row.notesOpen ?
                                            <OpenButtonStyle onClick={handleClickExchangeRequestDialog} disableRipple>
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
                                            <ButtonStyle onClick={handleClickExchangeRequestDialog} disableRipple>
                                                <MailIcon/>
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
                                    <TableCell align="left" style={{width: '10%', minWidth: 210}} >
                                        <BoxColumn>
                                            {row.exchangeApprovalDate}
                                            <span>({row.exchangeRequestDate})</span>
                                        </BoxColumn>
                                    </TableCell>
                                    <TableCell align="left" style={{width: '10%'}}>
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

export default ExchangeApprovalsTable;