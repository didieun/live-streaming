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
import {ReactComponent as ArrowUpIcon} from "../../../../../common/images/ArrowUpIcon.svg";
import {ReactComponent as BlueArrowDownIcon} from "../../../../../common/images/BlueArrowDownIcon.svg";
import {ReactComponent as AdminEmptyIcon} from "../../../../../common/images/AdminEmptyIcon.svg";
import {AlignCenter, BlueText, BoldText, RedText, UnderlineTBoldText} from "../styles/TagsTableStyle";

function createData(no, tag ,channelUsingTags, clicks, change, changeState) {
    return { no, tag, channelUsingTags, clicks, change, changeState};
}

const rows = [
    createData(1, 'tag2222222222222222222222', 100, 50, '', 'normal'),
    createData(2, 'tag2222222222222222222222', 100, 49, '', 'normal'),
    createData(3, 'tag2222222222222222222222', 100, 48, '', 'normal'),
    createData(4, 'tag2222222222222222222222', 100, 47, '', 'normal'),
    createData(5, 'tag2222222222222222222222', 100, 46, '2', 'up'),
    createData(6, 'tag2222222222222222222222', 100, 45, '', 'normal'),
    createData(7, 'tag2222222222222222222222', 100, 44, '2', 'down'),
    createData(8, 'tag2222222222222222222222', 100, 43, '', 'normal'),
];

function TopTrendingTagsTable(props) {
    const [sort, setSort] = React.useState(false);

    const handleClickSort = () => {
        setSort(!sort);
    };

    return (
        <div>
            <TableContainerBox component={Paper}>
                <Table sx={{ minWidth: 650 }}>
                    <TableHead>
                        <TableRow>
                            <TableCell align="center">Ranking</TableCell>
                            <TableCell align="left">Tag</TableCell>
                            <TableCell align="left">Channels using tags</TableCell>
                            <SortTableCell onClick={handleClickSort} align="left">
                                <div>
                                    <Typography>Clicks</Typography>
                                    {sort ? <ArrowDownIcon/> : <ArrowDownIcon style={{transform: 'scaleY(-1)'}}/>}
                                </div>
                            </SortTableCell>
                            <TableCell align="center">Change (24H)</TableCell>
                        </TableRow>
                    </TableHead>
                    {rows.length > 0 ?
                        <TableBody>
                            {rows.map((row, i) => (
                                <TableRow key={i}>
                                    <NoTableCell align="center" style={{width: '10%', minWidth: 90}}>
                                        {row.no}
                                    </NoTableCell>
                                    <TableCell align="left" style={{width: '40%', maxWidth: 450}}>
                                        <UnderlineTBoldText disableRipple>
                                            <Typography>{row.tag}</Typography>
                                        </UnderlineTBoldText>
                                    </TableCell>
                                    <TableCell align="left" style={{width: '20%', minWidth: 170}}>
                                        <UnderlineText disableRipple>
                                            <Typography>{row.channelUsingTags}</Typography>
                                        </UnderlineText>
                                    </TableCell>
                                    <TableCell align="left" style={{width: '15%', minWidth: 100}}>
                                        <BoldText>{row.clicks}</BoldText>
                                    </TableCell>
                                    <TableCell align="center" style={{width: '15%', minWidth: 120}}>
                                        {row.changeState === 'up' ?
                                            <AlignCenter>
                                                <RedText>{row.change}</RedText>
                                                <ArrowUpIcon/>
                                            </AlignCenter>
                                            :
                                            row.changeState === 'down' ?
                                                <AlignCenter>
                                                    <BlueText>{row.change}</BlueText>
                                                    <BlueArrowDownIcon/>
                                                </AlignCenter>
                                            :
                                               '-'
                                        }

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
        </div>
    );
}

export default TopTrendingTagsTable;