import React from 'react';
import {Paper, Table, TableBody, TableCell, TableHead, TableRow, Typography} from "@mui/material";
import {ReactComponent as ArrowDownIcon} from "../../../../../../common/images/ArrowDownIcon.svg";
import {ReactComponent as AdminEmptyIcon} from "../../../../../../common/images/AdminEmptyIcon.svg";
import {ReactComponent as ProfileUserIcon} from "../../../../../../common/images/ProfileUserIcon.svg";

// 공통 css
import {
    TableContainerBoxScroll,
    SortTableCell,
    AlignCenter,
    TooltipStyle,
    NoTableCell, TableAvatarBox, UnderlineText,
} from "../../../../styles/AdminMainStyle";
import AdminTablePagination from "../../../../common/tablePagination/AdminTablePagination";
import TestProfileImage from "../../../../../../common/images/TestProfileImage.jpeg";
import AdminTableNoSearch from "../../../../common/noSearch/AdminTableNoSearch";
import AdminCommonTableEmpty from "../../../../common/empty/AdminCommonTableEmpty";
import {FormControlLabelBox, StyledInput, SwitchStyle} from "../styles/FAQDisplayManagementTableStyle";

function createData(no, topics, question, views, date, image ,userName, order) {
    return { no, topics, question, views, date, image, userName, order};
}

const rows = [
    createData(1, 'Account', 'This is a question.', '1.5', '2023. 06. 07 9:20', TestProfileImage, 'jimsmith', '1'),
    createData(2, 'Broadcasting', 'This is a question.', '1.5', '2023. 06. 07 9:20', TestProfileImage, 'jimsmith','2'),
    createData(3, 'Channel', 'This is a question.', '1.5', '2023. 06. 07 9:20', '', 'jimsmith','3'),
    createData(4, 'Point', 'This is a question.', '1.5', '2023. 06. 07 9:20', '', 'jimsmith', '4'),
    createData(5, 'Channel Owner', 'This is a question.', '1.5', '2023. 06. 07 9:20', '', 'jimsmith', '5'),
    createData(6, 'Streamer', 'This is a question.', '1.5', '2023. 06. 07 9:20', '', 'jimsmith', '6'),
    createData(7, 'Troubleshooting', 'This is a question.', '1.5', '2023. 06. 07 9:20', '', 'jimsmith',  '7'),
    createData(8, 'Troubleshooting', 'This is a question.', '1.5', '2023. 06. 07 9:20', '', 'jimsmith',  '7'),
    createData(9, 'Troubleshooting', 'This is a question.', '1.5', '2023. 06. 07 9:20', '', 'jimsmith',  '7'),
    createData(10, 'Troubleshooting', 'This is a question.', '1.5', '2023. 06. 07 9:20', '', 'jimsmith',  '7'),
    createData(11, 'Troubleshooting', 'This is a question.', '1.5', '2023. 06. 07 9:20', '', 'jimsmith',  '7'),
];

function FAQListTable(props) {
    const [rowsPerPage, setRowsPerPage] = React.useState(10);
    const [page, setPage] = React.useState(0);
    const [sort, setSort] = React.useState(false);
    const [sort2, setSort2] = React.useState(false);
    const [value, setValue] = React.useState(false);

    const handleChangeSwitch = (event) => {
        setValue((prev) => !prev);
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
            <TableContainerBoxScroll component={Paper} sx={{ maxHeight: 'calc(100vh - 724px)' }}>
                <Table stickyHeader sx={{ minWidth: 650 }}>
                    <TableHead>
                        <TableRow>
                            <TableCell align="center">No</TableCell>
                            <TableCell align="left">Topics</TableCell>
                            <TableCell align="left">Question</TableCell>
                            <SortTableCell onClick={handleClickSort} align="left">
                                <div>
                                   <Typography>Views</Typography>
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
                            <TableCell align="left">Order</TableCell>
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
                                        {row.topics}
                                    </TableCell>
                                    <TableCell align="left" style={{width: '25%', minWidth: 200}}>
                                        <UnderlineText disableRipple>
                                            <TooltipStyle
                                                title={row.question}
                                                placement="bottom"
                                            >
                                                <Typography>
                                                    <b>{row.question}</b>
                                                </Typography>
                                            </TooltipStyle>
                                        </UnderlineText>
                                    </TableCell>
                                    <TableCell align="left" style={{width: '10%'}}>
                                        {row.views}K
                                    </TableCell>
                                    <TableCell align="left" style={{width: '15%', minWidth: 173}}>
                                        {row.date}
                                    </TableCell>
                                    <TableCell align="center" style={{width: '15%', minWidth: 173}}>
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
                                    <TableCell align="left" style={{width: '10%', minWidth: 120}}>
                                        <FormControlLabelBox
                                            control={<SwitchStyle checked={value} onChange={handleChangeSwitch} sx={{ m: 1 }} disableRipple/>}
                                            label={value ? 'Yes':'No'}
                                            color={value}
                                        />
                                    </TableCell>
                                    <TableCell align="left" style={{width: '10%'}}>
                                        -
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
            </TableContainerBoxScroll>

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

export default FAQListTable;