import React from 'react';
import {Paper, Table, TableBody, TableCell, TableHead, TableRow, Typography} from "@mui/material";
import {ReactComponent as ArrowDownIcon} from "../../../../../common/images/ArrowDownIcon.svg";
import {ReactComponent as AdminEmptyIcon} from "../../../../../common/images/AdminEmptyIcon.svg";
import {ReactComponent as ProfileUserIcon} from "../../../../../common/images/ProfileUserIcon.svg";

// 공통 css
import {
    TableContainerBox,
    SortTableCell,
    AlignCenter,
    TooltipStyle,
    NoTableCell, TableAvatarBox, UnderlineText
} from "../../../styles/AdminMainStyle";
import AdminTablePagination from "../../../common/tablePagination/AdminTablePagination";
import TestProfileImage from "../../../../../common/images/TestProfileImage.jpeg";
import AdminTableNoSearch from "../../../common/noSearch/AdminTableNoSearch";
import AdminCommonTableEmpty from "../../../common/empty/AdminCommonTableEmpty";
import {NoticeBox, FormControlLabelBox, SwitchStyle} from "../styles/NotificationsTableStyle";
import AdminAlertDialog from "../../../../dialog/AdminAlertDialog";
import AdminCommonDialog from "../../../../dialog/AdminCommonDialog";

function createData(no, type, notice, title, publicType, date, image ,userName, display) {
    return { no, type, notice, title, publicType, date, image, userName, display};
}

const rows = [
    createData(1, 'Announcement', true, 'This is a question.', 'Audience', '2023. 06. 07 9:20', TestProfileImage, 'jimsmith', 'Yes'),
    createData(2, 'Announcement', true, 'This is a question.', 'Channel Owner', '2023. 06. 07 9:20', TestProfileImage, 'jimsmith', 'Yes'),
    createData(3, 'Notification', false, 'This is a question.', 'Streamer', '2023. 06. 07 9:20', '', 'jimsmith', 'No'),
    createData(4, 'Notification', false, 'This is a question.', 'Audience', '2023. 06. 07 9:20', '', 'jimsmith', 'No'),
    createData(5, 'Notification', false, 'This is a question.', 'Audience', '2023. 06. 07 9:20', '', 'jimsmith', 'Yes'),
    createData(6, 'Notification', false, 'This is a question.', 'Audience', '2023. 06. 07 9:20', '', 'jimsmith', 'No'),
    createData(7, 'Notification', false, 'This is a question.', 'Audience', '2023. 06. 07 9:20', '', 'jimsmith', 'No'),
];

function NotificationsTable(props) {
    const {handleClickNotificationDialog} = props;
    const [rowsPerPage, setRowsPerPage] = React.useState(10);
    const [page, setPage] = React.useState(0);
    const [sort, setSort] = React.useState(false);
    const [sort2, setSort2] = React.useState(false);
    const [value, setValue] = React.useState(false);
    const [alert, setAlert] = React.useState(false);

    const handleChangeSwitch = (event) => {
        setValue((prev) => !prev);
        setAlert(true);
    };

    const handleClickNo = () => {
        setValue(false);
        setAlert(false);
    };

    const handleClickYes = () => {
        setValue(true);
        setAlert(false);
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
                    <TableHead>
                        <TableRow>
                            <TableCell align="center">No</TableCell>
                            <TableCell align="left">Type</TableCell>
                            <TableCell align="left">Title</TableCell>
                            <SortTableCell onClick={handleClickSort} align="left">
                                <div>
                                   <Typography>Public</Typography>
                                    {sort ? <ArrowDownIcon/> : <ArrowDownIcon style={{transform: 'scaleY(-1)'}}/>}
                                </div>
                            </SortTableCell>
                            <SortTableCell onClick={handleClickSort2} style={{ minWidth: 132}} align="left">
                                <div>
                                    <Typography>Created Date</Typography>
                                    {sort2 ? <ArrowDownIcon/> : <ArrowDownIcon style={{transform: 'scaleY(-1)'}}/>}
                                </div>
                            </SortTableCell>
                            <TableCell align="left">Creator</TableCell>
                            <TableCell align="left">Display</TableCell>
                        </TableRow>
                    </TableHead>
                    {rows.length > 0 ?
                        <TableBody>
                            {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row, i) => (
                                <TableRow key={i}>
                                    <NoTableCell align="center" style={{width: '5%'}}>
                                        {row.no}
                                    </NoTableCell>
                                    <TableCell align="left" style={{width: '10%', minWidth: 110}}>
                                        {row.type}
                                    </TableCell>
                                    <TableCell align="left" style={{width: '30%', minWidth: 200}}>
                                        <AlignCenter>
                                            {row.notice &&
                                                <NoticeBox>
                                                    <Typography>Notice</Typography>
                                                </NoticeBox>
                                            }
                                            <UnderlineText onClick={handleClickNotificationDialog} disableRipple>
                                                <TooltipStyle
                                                    title={row.title}
                                                    placement="bottom"
                                                >
                                                    <Typography>
                                                        <b>{row.title}</b>
                                                    </Typography>
                                                </TooltipStyle>
                                            </UnderlineText>
                                        </AlignCenter>
                                    </TableCell>
                                    <TableCell align="left" style={{width: '10%'}}>
                                        {row.publicType}
                                    </TableCell>
                                    <TableCell align="left" style={{width: '15%', minWidth: 173}}>
                                        {row.date}
                                    </TableCell>
                                    <TableCell align="center" style={{width: '20%', minWidth: 173}}>
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
                                    <TableCell align="left" style={{width: '10%', minWidth: 120, color: row.display === 'Yes' ? '#2673E5' : 'rgba(24, 24, 29, 0.6)'}}>
                                        <FormControlLabelBox
                                            control={<SwitchStyle checked={value} onChange={handleChangeSwitch} sx={{ m: 1 }} disableRipple/>}
                                            label={value ? 'Yes':'No'}
                                            color={value}
                                        />
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

            <AdminCommonDialog
                open={value && alert}
                title={''}
                children={
                    <AdminAlertDialog
                        children={<span>Notifications are visible to specified users.<br/>Deletion and editing are not possible after publication.<br/>Would you like to make it public?</span>}
                        actionCancel={true}
                        onClick={handleClickYes}
                        onClose={handleClickNo}
                        submitText={'Disclosure and Send'}
                    />
                }
                onClose={handleClickNo}
            />
        </div>
    );
}

export default NotificationsTable;