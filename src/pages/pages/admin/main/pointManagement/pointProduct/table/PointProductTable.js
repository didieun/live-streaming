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
    NoTableCell, TableAvatarBox, UnderlineText,
} from "../../../styles/AdminMainStyle";
import AdminTablePagination from "../../../common/tablePagination/AdminTablePagination";
import TestProfileImage from "../../../../../common/images/TestProfileImage.jpeg";
import AdminTableNoSearch from "../../../common/noSearch/AdminTableNoSearch";
import AdminCommonTableEmpty from "../../../common/empty/AdminCommonTableEmpty";
import {Flex, PointBoldText} from "../styles/PointProductTableStyle";


function createData(no, adminProductName, displayProduct, productPrice, date, image ,userName, display) {
    return { no, adminProductName, displayProduct, productPrice, date, image, userName, display};
}

const rows = [
    createData(1, '10', '10', '2,300', '2023. 06. 07 9:20', TestProfileImage, 'jimsmith', 'Yes'),
    createData(2, '50', '30', '6,900', '2023. 06. 07 9:20', TestProfileImage, 'jimsmith', 'Yes'),
    createData(3, '30', '50', '2,300', '2023. 06. 07 9:20', '', 'jimsmith', 'No'),
    createData(4, '500', '100', '2,300', '2023. 06. 07 9:20', '', 'jimsmith', 'No'),
    createData(5, '500', '500', '2,300', '2023. 06. 07 9:20', '', 'jimsmith', 'Yes'),
    createData(6, '500', '850', '2,300', '2023. 06. 07 9:20', '', 'jimsmith', 'No'),
];

function PointProductTable(props) {
    const {handleClickPointProductDialog} = props;

    const [rowsPerPage, setRowsPerPage] = React.useState(10);
    const [page, setPage] = React.useState(0);
    const [sort, setSort] = React.useState(false);
    const [sort2, setSort2] = React.useState(false);
    const [sort3, setSort3] = React.useState(false);

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
                    <TableHead>
                        <TableRow>
                            <TableCell align="center">No</TableCell>
                            <TableCell align="left">Admin Product Name</TableCell>
                            <TableCell align="left">Display Product Name</TableCell>
                            <TableCell align="left">Product Price</TableCell>
                            <SortTableCell onClick={handleClickSort} style={{ minWidth: 132}} align="left">
                                <div>
                                    <Typography>Created Date</Typography>
                                    {sort ? <ArrowDownIcon/> : <ArrowDownIcon style={{transform: 'scaleY(-1)'}}/>}
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
                                    <TableCell align="left" style={{width: '15%', minWidth: 173}}>
                                        {row.adminProductName}P
                                    </TableCell>
                                    <TableCell onClick={handleClickPointProductDialog} align="left" style={{width: '15%', minWidth: 173}}>
                                        <Flex>
                                            <PointBoldText>
                                                {row.displayProduct}P
                                            </PointBoldText>
                                        </Flex>
                                    </TableCell>
                                    <TableCell align="left" style={{width: '15%', minWidth: 173}}>
                                        $ {row.productPrice}
                                    </TableCell>
                                    <TableCell align="left" style={{width: '15%', minWidth: 173}}>
                                        {row.date}
                                    </TableCell>
                                    <TableCell align="center" style={{width: '25%'}}>
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
                                    <TableCell align="left" style={{width: '10%', color: row.display === 'Yes' ? '#2673E5' : 'rgba(24, 24, 29, 0.6)'}}>
                                        {row.display}
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

export default PointProductTable;