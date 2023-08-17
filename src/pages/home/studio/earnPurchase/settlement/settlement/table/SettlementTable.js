import React from 'react';
import {Paper, Table, TableBody, TableCell, TableHead, TableRow, Typography} from "@mui/material";
import {
    AlignCenter,
    CanceledText,
    MinusText, RedButton, StatusBox, StatusBoxBlue,
    ButtonStyle,
    OpenButtonStyle, PlusText
} from "../../../styles/TableStyle";
import {ReactComponent as ArrowDownIcon} from "../../../../../../common/images/ArrowDownIcon.svg";
import {ReactComponent as MailIcon} from "../../../../../../common/images/MailIcon.svg";
import {ReactComponent as MailOpenIcon} from "../../../../../../common/images/MailOpenIcon.svg";
import TablePagination from "../../../../tablePagination/TablePagination";

// 공통 css
import {TableContainerBox, SortTableCell, TooltipStyle, EmptyIconBox} from "../../../../../main/styles/MainStyle";
import {ChannelIdText, NoTableCell} from "../../../../channelsManager/style/ManagerStyle";
import CommonTableEmpty from "../../../../empty/CommonTableEmpty";
import TableNoSearch from "../../../../noSearch/TableNoSearch";

function createData(no, pointDetailsState, pointDetails, dateReceivedPoints, streamer, fromWhom, streamTitle, channelId) {
    return { no, pointDetailsState, pointDetails, dateReceivedPoints, streamer, fromWhom, streamTitle, channelId};
}

const rows = [
    createData(1, 'plus', 10, '2023. 06. 08 14:20', '{Streamer nickname}', '{User nickname who sent the gift}', '{Stream title}','abc-12345678' ),
    createData(2, 'minus', 10, '2023. 06. 08 14:20', '{Streamer nickname Streamer nickname Streamer nickname Streamer nickname}', '{User nickname who sent the gift User nickname who sent the gift User nickname who sent the gift}', '{Stream title Stream title Stream title}','abc-12345678' ),
    createData(3, 'plus', 10, '2023. 06. 08 14:20', '{Streamer nickname}', '{User nickname who sent the gift}', '{Stream title}','abc-12345678' ),
    createData(4, 'plus', 10, '2023. 06. 08 14:20', '{Streamer nickname}', '{User nickname who sent the gift}', '{Stream title}','abc-12345678' ),
];

function SettlementTable() {
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
                            <SortTableCell onClick={handleClickSort} style={{ minWidth: 132}} align="left">
                                <div>
                                   <Typography>Point Details</Typography>
                                    {sort ? <ArrowDownIcon/> : <ArrowDownIcon style={{transform: 'scaleY(-1)'}}/>}
                                </div>
                            </SortTableCell>
                            <SortTableCell onClick={handleClickSort2} style={{ minWidth: 190}} align="left">
                                <div>
                                    <Typography>Date Received Points</Typography>
                                    {sort2 ? <ArrowDownIcon/> : <ArrowDownIcon style={{transform: 'scaleY(-1)'}}/>}
                                </div>
                            </SortTableCell>

                            <SortTableCell onClick={handleClickSort3} align="left"  style={{ minWidth: 105}}>
                                <div>
                                    <Typography>Streamer</Typography>
                                    {sort3 ? <ArrowDownIcon/> : <ArrowDownIcon style={{transform: 'scaleY(-1)'}}/>}
                                </div>
                            </SortTableCell>

                            <TableCell align="left" style={{ minWidth: 105}}>Form Whom</TableCell>
                            <TableCell align="left" style={{ minWidth: 105}}>Stream Title</TableCell>
                            <TableCell align="left" style={{ minWidth: 80}}>Channel ID</TableCell>
                        </TableRow>
                    </TableHead>
                    {rows.length > 0 ?
                        <TableBody>
                            {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row, i) => (
                                <TableRow key={i}>
                                    <NoTableCell align="center" style={{width: '5%'}}>
                                        {row.no}
                                    </NoTableCell>
                                    <TableCell align="left" style={{width: '10%'}}>
                                        {row.pointDetailsState === 'plus' ?
                                            <PlusText>
                                                + {row.pointDetails}
                                            </PlusText>
                                            :
                                            <MinusText>
                                                - {row.pointDetails}
                                            </MinusText>
                                        }
                                        point
                                    </TableCell>

                                    <TableCell align="left" style={{width: '10%'}}>
                                       {row.dateReceivedPoints}
                                    </TableCell>

                                    <TableCell align="left" style={{width: '15%', maxWidth: 200}}>
                                        <TooltipStyle
                                            title={row.streamer}
                                            placement="bottom"
                                        >
                                            <span>
                                                {row.streamer}
                                            </span>
                                        </TooltipStyle>
                                    </TableCell>

                                    <TableCell align="left" style={{width: '25%', maxWidth: 300}}>
                                        <TooltipStyle
                                            title={row.fromWhom}
                                            placement="bottom"
                                        >
                                            <span>
                                                {row.fromWhom}
                                            </span>
                                        </TooltipStyle>
                                    </TableCell>

                                    <TableCell align="left" style={{width: '20%', maxWidth: 300}}>
                                        <TooltipStyle
                                            title={row.streamTitle}
                                            placement="bottom"
                                        >
                                            <span>
                                                {row.streamTitle}
                                            </span>
                                        </TooltipStyle>
                                    </TableCell>

                                    <TableCell align="left" style={{width: '15%', maxWidth: 300}}>
                                        <TooltipStyle
                                            title={row.channelId}
                                            placement="bottom"
                                        >
                                            <ChannelIdText disableRipple>
                                                <Typography>{row.channelId}</Typography>
                                            </ChannelIdText>
                                        </TooltipStyle>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                        :
                        <CommonTableEmpty
                            image={<EmptyIconBox/>}
                            title={'There is nothing to settle.'}
                            message={
                                <span>
                                    Points their streamers receive from live broadcasts will show up here.
                                </span>
                            }
                            action={false}
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

export default SettlementTable;