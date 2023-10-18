import React from 'react';
import {Paper, Table, TableBody, TableCell, TableHead, TableRow, Typography} from "@mui/material";
import {
    ImageBox,
    NoImageBox,
    GoLiveButton,
    ExpirationDateBox,
    BorderRight4,
    FormControlLabelBox, SwitchStyle, StyledInput
} from "../../styles/MainBannerDisplaylTableStyle";

// 공통 css
import {
    AlignCenter, UnderlineText, SortTableCell, NoTableCell,
    TooltipStyle, TableContainerBoxScroll
} from "../../../../styles/AdminMainStyle";
import {ReactComponent as ArrowDownIcon} from "../../../../../../common/images/ArrowDownIcon.svg";
import {ReactComponent as GoLiveIcon} from "../../../../../../common/images/GoLiveIcon.svg";
import {ReactComponent as EmptyTableIcon} from "../../../../../../common/images/EmptyTableIcon.svg";
import {ReactComponent as CalendarIcon} from "../../../../../../common/images/CalendarIcon.svg";
import NoImageIcon from "../../../../../../common/images/NoImageIcon.svg";
import TestVideoImage from "../../../../../../common/images/TestVideoImage.jpg";
import AdminCommonTableEmpty from "../../../../common/empty/AdminCommonTableEmpty";
import AdminTablePagination from "../../../../common/tablePagination/AdminTablePagination";

function createData(no, imageUrl ,channelId, views, favorites, expirationDate, title, time, session, streamer, order) {
    return { no, imageUrl, channelId, views, favorites, expirationDate, title, time, session, streamer, order};
}

const rows = [
    createData(1, TestVideoImage, 'abc-12345678', '1.5', '123', '2023.  06. 08 ~ 2024. 06. 08', 'S.title','2023. 06. 09 11:20', 120, '김중계', 1),
    createData(2, TestVideoImage, 'abc-12345678', '1.5', '123', '2023.  06. 08 ~ 2024. 06. 08', 'S.title','2023. 06. 09 11:20', 120, '김중계', 2),
    createData(3, '', 'abc-12345678', '1.5', '123', '', 'S.title','2023. 06. 09 11:20', 120, '김중계', 3),
    createData(4, '', 'abc-12345678', '1.5', '123', '', 'S.title','2023. 06. 09 11:20', 120, '김중계', 4),
    createData(5, '', 'abc-12345678', '1.5', '123', '', 'S.title','2023. 06. 09 11:20', 120, '김중계',  5),
    createData(6, '', 'abc-12345678', '1.5', '123', '', 'S.title','2023. 06. 09 11:20', 120, '김중계', 6),
];

function DisplayManagementExposeTable() {
    const [rowsPerPage, setRowsPerPage] = React.useState(3);
    const [page, setPage] = React.useState(0);
    const [sort, setSort] = React.useState(false);
    const [sort2, setSort2] = React.useState(false);
    const [sort3, setSort3] = React.useState(false);
    const [sort4, setSort4] = React.useState(false);
    const [value, setValue] = React.useState(true);

    const handleChangeSwitch = (event) => {
        setValue((prev) => !prev);
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

    const handleClickSort4 = () => {
        setSort2(!sort4);
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
            <TableContainerBoxScroll component={Paper} sx={{ maxHeight: 251 }}>
                <Table stickyHeader sx={{ minWidth: 650 }}>
                    <TableHead>
                        <TableRow>
                            <TableCell align="center">No</TableCell>
                            <TableCell align="left">Channel ID</TableCell>
                            <SortTableCell onClick={handleClickSort} align="left">
                                <div>
                                    <Typography>Views</Typography>
                                    {sort ? <ArrowDownIcon/> : <ArrowDownIcon style={{transform: 'scaleY(-1)'}}/>}
                                </div>
                            </SortTableCell>
                            <SortTableCell onClick={handleClickSort2} align="left">
                                <div>
                                    <Typography>Favorites</Typography>
                                    {sort2 ? <ArrowDownIcon/> : <ArrowDownIcon style={{transform: 'scaleY(-1)'}}/>}
                                </div>
                            </SortTableCell>
                            <SortTableCell onClick={handleClickSort3} align="left">
                                <div>
                                    <Typography>Expiration Date</Typography>
                                    {sort3 ? <ArrowDownIcon/> : <ArrowDownIcon style={{transform: 'scaleY(-1)'}}/>}
                                </div>
                            </SortTableCell>
                            <TableCell align="left">Stream Title</TableCell>
                            <TableCell align="left">Start Time</TableCell>
                            <TableCell align="left">Session (min)</TableCell>
                            <TableCell align="left">Streamer</TableCell>
                            <TableCell align="left">Display</TableCell>
                            <SortTableCell onClick={handleClickSort4} align="left">
                                <div>
                                    <Typography>Order</Typography>
                                    {sort4 ? <ArrowDownIcon/> : <ArrowDownIcon style={{transform: 'scaleY(-1)'}}/>}
                                </div>
                            </SortTableCell>
                            <TableCell align="left"></TableCell>
                        </TableRow>
                    </TableHead>
                    {rows.length > 0 ?
                        <TableBody>
                            {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row, i) => (
                                <TableRow key={i}>
                                    <NoTableCell align="center" style={{width: '5%'}}>
                                        {row.no}
                                    </NoTableCell>
                                    <TableCell align="center" style={{width: '10%', maxWidth: 360}}>
                                        <AlignCenter>
                                            {row.imageUrl === '' ?
                                                <NoImageBox>
                                                    <img src={NoImageIcon} alt='image'/>
                                                </NoImageBox>
                                                :
                                                <ImageBox>
                                                    <img src={row.imageUrl} alt='image'/>
                                                </ImageBox>
                                            }
                                            <UnderlineText disableRipple>
                                                <TooltipStyle
                                                    title={row.channelId}
                                                    placement="bottom"
                                                >
                                                    <Typography>
                                                        {row.channelId}
                                                    </Typography>
                                                </TooltipStyle>
                                            </UnderlineText>
                                        </AlignCenter>
                                    </TableCell>
                                    <TableCell align="left" style={{width: '10%'}}>
                                        {row.views}K
                                    </TableCell>
                                    <TableCell align="left" style={{width: '10%'}}>
                                        {row.favorites}
                                    </TableCell>
                                    <BorderRight4 align="left" style={{width: '10%'}}>
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
                                    </BorderRight4>
                                    <TableCell align="left" style={{width: '10%', minWidth: 115, maxWidth: 200}}>
                                        {row.title}
                                    </TableCell>
                                    <TableCell align="left" style={{width: '10%'}}>
                                        {row.time}
                                    </TableCell>
                                    <TableCell align="left" style={{width: '5%', minWidth: 115}}>
                                        {row.session}
                                    </TableCell>
                                    <TableCell align="left" style={{width: '10%', minWidth: 115}}>
                                        <UnderlineText disableRipple>
                                            <TooltipStyle
                                                title={row.streamer}
                                                placement="bottom"
                                            >
                                                <Typography>
                                                    {row.streamer}
                                                </Typography>
                                            </TooltipStyle>
                                        </UnderlineText>
                                    </TableCell>
                                    <TableCell align="left" style={{width: '5%', minWidth: 80}}>
                                        <FormControlLabelBox
                                            control={<SwitchStyle checked={value} onChange={handleChangeSwitch} sx={{ m: 1 }} disableRipple/>}
                                            label={value ? 'Yes':'No'}
                                            color={value}
                                        />
                                    </TableCell>
                                    <TableCell align="left" style={{width: '5%', minWidth: 80}}>
                                        <StyledInput
                                            type='number'
                                            label=""
                                            defaultValue={row.order}
                                            variant="outlined"
                                            fullWidth
                                            placeholder=""
                                        />
                                    </TableCell>
                                    <TableCell align="left" style={{width: '10%'}}>
                                        <AlignCenter>
                                            <GoLiveButton disableRipple>
                                                <GoLiveIcon/>
                                                <Typography>
                                                    Go Live
                                                </Typography>
                                            </GoLiveButton>
                                        </AlignCenter>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                        :
                        <AdminCommonTableEmpty
                            image={<EmptyTableIcon/>}
                            title={'Buy a channel or a point to get started'}
                            message={
                                <span>
                                    Points you’ve earned in your stream, the points you’ve given as gifts will show up here.
                                </span>
                            }
                            action={true}
                            actionText1={'Buy a New Channel'}
                            actionText2={'Buy Points'}
                        />
                    }
                </Table>
            </TableContainerBoxScroll>

            <AdminTablePagination
                rowsPerPageOptions={[3, 5, 10]}
                count={rows.length}
                rowsPerPage={rowsPerPage}
                page={page}
                handleChangePage={handleChangePage}
                handleChangeRowsPerPage={handleChangeRowsPerPage}
            />
        </div>
    );
}

export default DisplayManagementExposeTable;