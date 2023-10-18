import React from 'react';
import {Paper, Table, TableBody, TableCell, TableHead, TableRow, Typography} from "@mui/material";
import {TagBox, ImageBox, NoImageBox} from "../../styles/UserTableStyle";

// 공통 css
import {
    TableContainerBox,
    AlignCenter, UnderlineText, SortTableCell, NoTableCell, TooltipStyle
} from "../../../../styles/AdminMainStyle";
import {ReactComponent as ArrowDownIcon} from "../../../../../../common/images/ArrowDownIcon.svg";
import {ReactComponent as AdminEmptyIcon} from "../../../../../../common/images/AdminEmptyIcon.svg";
import AdminCommonTableEmpty from "../../../../common/empty/AdminCommonTableEmpty";
import AdminTablePagination from "../../../../common/tablePagination/AdminTablePagination";
import NoImageIcon from "../../../../../../common/images/NoImageIcon.svg";
import TestVideoImage from "../../../../../../common/images/TestVideoImage.jpg";
import AdminTableNoSearch from "../../../../common/noSearch/AdminTableNoSearch";

function createData(no, imageUrl ,channelId, views, tag1, tag2, tag3, searchResults, date) {
    return { no, imageUrl, channelId, views, tag1, tag2, tag3, searchResults, date};
}

const rows = [
    createData(1, TestVideoImage, 'abc-12345678', '1.5', 'tag123', 'tag123', 'tag123','Yes', '2023. 06. 09 11:20'),
    createData(2, TestVideoImage, 'abc-12345678', '1.5', 'tag123', 'tag123', 'tag123','Yes', '2023. 06. 09 11:20'),
    createData(3, '', 'abc-12345678', '1.5', 'tag123', 'tag123', 'tag123','Yes', '2023. 06. 09 11:20'),
    createData(4, '', 'abc-12345678', '1.5', 'tag123', 'tag123', 'tag123','Yes', '2023. 06. 09 11:20'),
];

function UserDetailFavoriteChannelsTable() {
    const [rowsPerPage, setRowsPerPage] = React.useState(10);
    const [page, setPage] = React.useState(0);
    const [sort, setSort] = React.useState(false);

    const handleClickSort = () => {
        setSort(!sort);
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
                            <TableCell align="left">Channel ID</TableCell>
                            <SortTableCell onClick={handleClickSort} align="left">
                                <div>
                                    <Typography>Views</Typography>
                                    {sort ? <ArrowDownIcon/> : <ArrowDownIcon style={{transform: 'scaleY(-1)'}}/>}
                                </div>
                            </SortTableCell>
                            <TableCell align="left">Tags</TableCell>
                            <TableCell align="left">Search results</TableCell>
                            <TableCell align="left">Favorited Date</TableCell>
                        </TableRow>
                    </TableHead>
                    {rows.length > 0 ?
                        <TableBody>
                            {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row, i) => (
                                <TableRow key={i}>
                                    <NoTableCell align="center" style={{width: '5%'}}>
                                        {row.no}
                                    </NoTableCell>
                                    <TableCell align="center" style={{width: '25%'}}>
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
                                    <TableCell align="left" style={{width: '30%'}}>
                                        <AlignCenter>
                                            <TagBox>
                                                <Typography>#{row.tag1}</Typography>
                                            </TagBox>
                                            <TagBox>
                                                <Typography>#{row.tag2}</Typography>
                                            </TagBox>
                                            <TagBox>
                                                <Typography>#{row.tag3}</Typography>
                                            </TagBox>
                                        </AlignCenter>
                                    </TableCell>
                                    <TableCell align="left" style={{width: '15%'}}>
                                        {row.searchResults}
                                    </TableCell>
                                    <TableCell align="left" style={{width: '15%'}}>
                                        {row.date}
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

export default UserDetailFavoriteChannelsTable;