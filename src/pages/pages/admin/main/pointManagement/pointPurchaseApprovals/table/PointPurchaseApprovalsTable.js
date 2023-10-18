import React from 'react';
import {Paper, Table, TableBody, TableCell, TableRow, Typography} from "@mui/material";
import {
    BoxColumn, ButtonIcon, ButtonStyle, DayBold, DayRed, OpenButtonStyle, StatusBox,
    TableHeadBox,
    BorderRight4,
    GreenText, YellowText, RedText, Flex, PointBoldText, PointText
} from "../styles/PointPurchaseApprovalsTableStyle";
import {ReactComponent as ArrowDownIcon} from "../../../../../common/images/ArrowDownIcon.svg";
import {ReactComponent as ProfileUserIcon} from "../../../../../common/images/ProfileUserIcon.svg";
import {ReactComponent as CalendarIcon} from "../../../../../common/images/CalendarIcon.svg";
import {ReactComponent as SettingDialogCloseIcon} from "../../../../../common/images/SettingDialogCloseIcon.svg";
import {ReactComponent as MailOpenIcon} from "../../../../../common/images/MailOpenIcon.svg";
import {ReactComponent as MailIcon} from "../../../../../common/images/MailIcon.svg";
import {ReactComponent as AdminEmptyIcon} from "../../../../../common/images/AdminEmptyIcon.svg";

// 공통 css
import {
    TableContainerBox,
    SortTableCell,
    AlignCenter,
    NoTableCell, UnderlineText,
    ArrowTooltipStyle, ArrowTooltipStyleGray, TooltipStyle, TableAvatarBox,
} from "../../../styles/AdminMainStyle";
import AdminTablePagination from "../../../common/tablePagination/AdminTablePagination";
import TestProfileImage from "../../../../../common/images/TestProfileImage.jpeg";
import AdminTableNoSearch from "../../../common/noSearch/AdminTableNoSearch";
import TooltipArrowBlue from "../../../../../common/images/TooltipArrowBlue.svg";
import TooltipArrowGray from "../../../../../common/images/TooltipArrowGray.svg";
import CommonTableEmpty from "../../../../../home/studio/empty/CommonTableEmpty";
import AdminCommonTableEmpty from "../../../common/empty/AdminCommonTableEmpty";

function createData(no, pricePlan, quantity, totalPrice, paymentValidityPeriodValue, paymentValidityPeriod, image, userName, notesOpen, notes, paymentApprovalDate, paymentRequestDate, productPrice, status) {
    return { no, pricePlan, quantity, totalPrice, paymentValidityPeriodValue, paymentValidityPeriod, image, userName, notesOpen, notes, paymentApprovalDate, paymentRequestDate, productPrice, status };
}

const rows = [
    createData(1,'10', 2, '16.00', false,365, TestProfileImage, 'jimsmith', true, '{last message}...', '2023. 06. 08 14:20', '2023. 06. 08 15:20', '2,300', 'approved'),
    createData(2,'50', 1, '22.95', false,'', TestProfileImage, 'jimsmith',true, '{last message}...', '2023. 06. 08 14:20', '2023. 06. 08 15:20', '2,300', 'requesting'),
    createData(3,'30', 1, '38.75', true,3, TestProfileImage, 'jimsmith',false, 'last message last message last message last message last message last message ', '2023. 06. 08 14:20', '2023. 06. 08 15:20', '2,300', 'expired'),
    createData(4,'100', 1, '76.50', true, 7, TestProfileImage, 'jimsmith',false, '{last message}...', '2023. 06. 08 14:20', '2023. 06. 08 15:20', '2,300', 'canceled'),
    createData(5,'500', 1, '382.00', true, 0, TestProfileImage, 'jimsmith',false, '{last message}...', '2023. 06. 08 14:20', '2023. 06. 08 15:20', '2,300', 'rejected'),
    createData(6,'500', 1, '382.00', true, 0, TestProfileImage, 'jimsmith',false, '{last message}...', '2023. 06. 08 14:20', '2023. 06. 08 15:20', '2,300', 'upcoming'),
];

function PointPurchaseApprovalsTable(props) {
    const {handleClickPointPurchaseRequestDialog, handleClickPointCheckpointBeforeApprovalDialog} = props;
    const [tooltip, setTooltip] = React.useState(true);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);
    const [page, setPage] = React.useState(0);
    const [sort, setSort] = React.useState(false);
    const [sort2, setSort2] = React.useState(false);
    const [sort3, setSort3] = React.useState(false);

    const handleCloseTooltip = () => {
        setTooltip(false);
    };

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
                    <TableHeadBox>
                        <TableRow>
                            <TableCell align="center">No</TableCell>
                            <TableCell align="left">Price Plan</TableCell>
                            <TableCell align="left">Quantity (ea)</TableCell>
                            <SortTableCell onClick={handleClickSort} align="left" style={{minWidth: 197}}>
                                <div>
                                    <Typography>Total Price</Typography>
                                    {sort ? <ArrowDownIcon/> : <ArrowDownIcon style={{transform: 'scaleY(-1)'}}/>}
                                </div>
                            </SortTableCell>
                            <SortTableCell onClick={handleClickSort2} align="left" style={{minWidth: 197}}>
                                <div>
                                    <Typography>Payment validity period</Typography>
                                    {sort2 ? <ArrowDownIcon/> : <ArrowDownIcon style={{transform: 'scaleY(-1)'}}/>}
                                </div>
                            </SortTableCell>
                            <TableCell align="left">Buyer</TableCell>
                            <TableCell align="left">Notes</TableCell>
                            <SortTableCell align="left" onClick={handleClickSort3} style={{minWidth: 210}}>
                                <BoxColumn>
                                    <AlignCenter>
                                        <Typography>Payment Approval Date</Typography>
                                        {sort3 ? <ArrowDownIcon/> : <ArrowDownIcon style={{transform: 'scaleY(-1)'}}/>}
                                    </AlignCenter>
                                    <Typography style={{opacity: 0.7}}>(Payment Request Date)</Typography>
                                </BoxColumn>
                            </SortTableCell>
                            <TableCell align="left" style={{minWidth: 112}}>Product Price</TableCell>
                            <TableCell align="left" >Status</TableCell>
                        </TableRow>
                    </TableHeadBox>
                    {rows.length > 0 ?
                        <TableBody>
                            {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row, i) => (
                                <TableRow key={i}>
                                    <NoTableCell align="center" style={{width: '5%'}}>
                                        {row.no}
                                    </NoTableCell>
                                    <TableCell onClick={handleClickPointCheckpointBeforeApprovalDialog} align="left" style={{width: '10%'}}>
                                        <div>
                                            {/* 툴팁 기획서 확인..*/}
                                            <ArrowTooltipStyle
                                                title={
                                                    <div>
                                                        <Typography>Click here to approve points purchase.</Typography>
                                                        <ButtonIcon onClick={handleCloseTooltip} disableRipple>
                                                            <SettingDialogCloseIcon style={{width: 16, height: 16}}/>
                                                        </ButtonIcon>
                                                    </div>
                                                }
                                                placement="bottom"
                                                top={'-25px'}
                                                left={'50%'}
                                                triangle={TooltipArrowBlue}
                                            >
                                                <Flex>
                                                    <PointBoldText>
                                                        {row.pricePlan}&nbsp;
                                                    </PointBoldText>
                                                    <PointText>
                                                        point
                                                    </PointText>
                                                </Flex>
                                            </ArrowTooltipStyle>
                                        </div>

                                    </TableCell>
                                    <TableCell align="left" style={{width: '10%'}}>{row.quantity}</TableCell>
                                    <TableCell align="left" style={{width: '10%'}}>${row.totalPrice}</TableCell>

                                    <TableCell align="left" style={{width: '15%'}} >
                                        {row.paymentValidityPeriod === 7 ?
                                            <ArrowTooltipStyle
                                                open={tooltip}
                                                title={
                                                    <div>
                                                        <Typography>The buyer has <span>7</span> days left to pay.</Typography>
                                                        <ButtonIcon onClick={handleCloseTooltip} disableRipple>
                                                            <SettingDialogCloseIcon style={{width: 16, height: 16}}/>
                                                        </ButtonIcon>
                                                    </div>
                                                }
                                                placement="bottom"
                                                top={'-25px'}
                                                left={'50%'}
                                                triangle={TooltipArrowBlue}
                                            >
                                                <DayRed>D-{row.paymentValidityPeriod}</DayRed>
                                            </ArrowTooltipStyle>
                                            :
                                            row.paymentValidityPeriod === '' ?
                                                '-'
                                                :
                                                <><DayBold>D+</DayBold>{row.paymentValidityPeriod}</>
                                        }
                                    </TableCell>
                                    <BorderRight4 align="center" style={{width: '15%'}}>
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
                                    </BorderRight4>
                                    <TableCell align="left" style={{width: '10%', maxWidth: 230}}>
                                        {row.notesOpen ?
                                            <OpenButtonStyle onClick={handleClickPointPurchaseRequestDialog} disableRipple>
                                                <MailOpenIcon/>
                                                <ArrowTooltipStyle
                                                    title={
                                                        <div>
                                                            <Typography>Be sure to check the Notes before<br/> approving the buyer's request.</Typography>
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
                                                    <Typography>
                                                        {row.notes}
                                                    </Typography>
                                                </ArrowTooltipStyle>
                                            </OpenButtonStyle>
                                            :
                                            <ButtonStyle onClick={handleClickPointPurchaseRequestDialog} disableRipple>
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

                                                <ArrowTooltipStyle
                                                    title={
                                                        <div>
                                                            <Typography>Be sure to check the Notes before<br/> approving the buyer's request.</Typography>
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
                                                    <Typography>
                                                        {row.notes}
                                                    </Typography>
                                                </ArrowTooltipStyle>
                                            </ButtonStyle>
                                        }
                                    </TableCell>
                                    <TableCell align="left" style={{width: '10%'}} >
                                        <BoxColumn>
                                            {row.paymentApprovalDate}
                                            <span>({row.paymentRequestDate})</span>
                                        </BoxColumn>
                                    </TableCell>
                                    <TableCell align="left" style={{width: '10%'}}>
                                        $ {row.productPrice}
                                    </TableCell>
                                    <TableCell align="left" style={{width: '10%'}} >
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

export default PointPurchaseApprovalsTable;