import React from 'react';
import {Paper, Table, TableBody, TableCell, TableHead, TableRow, Typography} from "@mui/material";

// 공통 css
import {
    TableContainerBox,
    SortTableCell,
    NoTableCell,
    UnderlineText,
    EmptyTableBox2, EmptyTitleText,
} from "../../../styles/AdminMainStyle";
import {ReactComponent as ArrowDownIcon} from "../../../../../common/images/ArrowDownIcon.svg";
import {ReactComponent as AdminEmptyIcon} from "../../../../../common/images/AdminEmptyIcon.svg";
import {BoldText, UnderlineTBoldText} from "../styles/TagsTableStyle";
import AdminTablePagination from "../../../common/tablePagination/AdminTablePagination";

function createData(no, tag ,channelUsingTags, clicks) {
    return { no, tag, channelUsingTags, clicks};
}

const rows = [
    createData(1, 'tag2222222222222222222222', 100, 50),
    createData(2, 'tag2222222222222222222222', 100, 49),
    createData(3, 'tag2222222222222222222222', 100, 48),
    createData(4, 'tag2222222222222222222222', 100, 47),
    createData(5, 'tag2222222222222222222222', 100, 46),
    createData(6, 'tag2222222222222222222222', 100, 45),
    createData(7, 'tag2222222222222222222222', 100, 44),
    createData(8, 'tag2222222222222222222222', 100, 43),
    createData(9, 'tag2222222222222222222222', 100, 43),
    createData(10, 'tag2222222222222222222222', 100, 43),
    createData(11, 'tag2222222222222222222222', 100, 43),
    createData(12, 'tag2222222222222222222222', 100, 43),
];

function RecommendedTagsTable(props) {
    const [sort, setSort] = React.useState(false);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);
    const [page, setPage] = React.useState(0);

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
                            <TableCell align="center">Ranking</TableCell>
                            <TableCell align="left">Tag</TableCell>
                            <SortTableCell onClick={handleClickSort} align="left">
                                <div>
                                    <Typography>Channels using tags</Typography>
                                    {sort ? <ArrowDownIcon/> : <ArrowDownIcon style={{transform: 'scaleY(-1)'}}/>}
                                </div>
                            </SortTableCell>
                            <TableCell align="left">Clicks</TableCell>
                        </TableRow>
                    </TableHead>
                    {rows.length > 0 ?
                        <TableBody>
                            {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row, i) => (
                                <TableRow key={i}>
                                    <NoTableCell align="center" style={{width: '10%', minWidth: 90}}>
                                        {row.no}
                                    </NoTableCell>
                                    <TableCell align="left" style={{width: '50%', maxWidth: 450}}>
                                        <UnderlineTBoldText disableRipple>
                                            <Typography>{row.tag}</Typography>
                                        </UnderlineTBoldText>
                                    </TableCell>
                                    <TableCell align="left" style={{width: '25%', minWidth: 170}}>
                                        <UnderlineText disableRipple>
                                            <Typography>{row.channelUsingTags}</Typography>
                                        </UnderlineText>
                                    </TableCell>
                                    <TableCell align="left" style={{width: '20%', minWidth: 100}}>
                                        <BoldText>{row.clicks}</BoldText>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                        :
                        <TableBody>
                            <TableRow>
                                <TableCell colSpan={6} style={{borderRadius: 10}}>
                                    <EmptyTableBox2>
                                        <AdminEmptyIcon/>
                                        <EmptyTitleText>
                                            There is no data.
                                        </EmptyTitleText>
                                    </EmptyTableBox2>
                                </TableCell>
                            </TableRow>
                        </TableBody>
                    }
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

export default RecommendedTagsTable;