import React from 'react';
import { styled } from '@mui/material/styles';
import { Box, PaginationItem, Paper, Table, TableBody, TableCell, TableHead, TableRow, Typography } from '@mui/material';
import {
    Flex,
    FlexCenter,
    FlexColumn,
    FlexColumnCenter,
    LightTooltip,
    PaginationStyle,
    StyledTextarea,
    TableContainerBox,
    UnderlineText
} from '../../common/styled/CommonStyle';
import CommonButton from '../../common/CommonButton';
import CommonDialog from '../../common/CommonDialog';
import { ReactComponent as FirstIcon } from '../../../../assets/images/FirstIcon.svg';
import { ReactComponent as LastIcon } from '../../../../assets/images/LastIcon.svg';
import { ReactComponent as PrevIcon } from '../../../../assets/images/PrevIcon.svg';
import { ReactComponent as NextIcon } from '../../../../assets/images/NextIcon.svg';
import CommonTableNoData from '../../common/CommonTableNoData';
import PropTypes from 'prop-types';
import GroupCreateDialog from './GroupCreateDialog';

const ButtonBox = styled(FlexCenter)(({ theme }) => ({
    '& .MuiButtonBase-root:last-child': {
        marginLeft: 8
    }
}));

const ApplicationDialogBox = styled(FlexColumn)(({ theme }) => ({
    width: '100%',
    height: 200,
    border: '1px solid #D5D4DC',
    borderRadius: 8,
    padding: 12,
    boxSizing: 'border-box',
    overflowY: 'auto',
    '&::-webkit-scrollbar': {
        width: '5px'
    },
    '&::-webkit-scrollbar-thumb': {
        background: '#7A7A7A',
        borderRadius: '10px',
        backgroundClip: 'padding-box'
    },
    '&::-webkit-scrollbar-track': {
        borderRadius: '10px',
        background: '#E8E8E8',
        marginTop: 5,
        marginBottom: 5
    }
}));

const DialogText = styled(Typography)(({ theme }) => ({
    '&.MuiTypography-root': {
        boxSizing: 'border-box',
        fontSize: '1.125rem',
        color: '#333',
        fontWeight: 400,
        textAlign: 'left'
    }
}));

function createData(no, group, course, name, management) {
    return { no, group, course, name, management };
}

const rows = [
    createData(
        1,
        '그룹 이름',
        '교육과정명',
        '김가명, 김가명, 김가명, 김가명, 김가명, 김가명, 김가명., 김가명, 김가명, 김가명, 김가명, 김가명, 김가명, 김가명., 김가명, 김가명, 김가명, 김가명'
    ),
    createData(1, '그룹 이름', '교육과정명', '김가명, 김가명, 김가명')
];

const FirstCustomIcon = () => <FirstIcon />;
const LastCustomIcon = () => <LastIcon />;
const PreviousCustomIcon = () => <PrevIcon />;
const NextCustomIcon = () => <NextIcon />;

const GroupManagementTableComponent = (props) => {
    const { createDialog, handleClickCreateDialog, handleCloseCreateDialog } = props;
    const [information, setInformation] = React.useState(false);
    const [deleteDialog, setDeleteDialog] = React.useState(false);

    const handleClickDeleteDialog = () => {
        setDeleteDialog(true);
    };

    const handleClickInformation = () => {
        setInformation(true);
    };

    const handleCloseDialog = () => {
        setInformation(false);
        setDeleteDialog(false);
    };

    return (
        <Box>
            <TableContainerBox component={Paper}>
                <Table sx={{ minWidth: 650 }}>
                    <TableHead>
                        <TableRow>
                            <TableCell align="center">No.</TableCell>
                            <TableCell align="center">그룹명</TableCell>
                            <TableCell align="center">교육 과정</TableCell>
                            <TableCell align="center">학생</TableCell>
                            <TableCell align="center">관리</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row, i) => (
                            <TableRow key={i}>
                                <TableCell align="center" style={{ minWidth: '45px', width: '5%' }}>
                                    {row.no}
                                </TableCell>
                                <LightTooltip title={row.group}>
                                    <TableCell align="center" style={{ maxWidth: '280px', width: '20%' }}>
                                        <UnderlineText onClick={handleClickInformation} disableRipple>
                                            <Typography>{row.group}</Typography>
                                        </UnderlineText>
                                    </TableCell>
                                </LightTooltip>
                                <LightTooltip title={row.course}>
                                    <TableCell align="center" style={{ maxWidth: '400px', width: '20%' }}>
                                        {row.course}
                                    </TableCell>
                                </LightTooltip>
                                <LightTooltip title={row.name}>
                                    <TableCell align="center" style={{ maxWidth: '450px', width: '30%' }}>
                                        {row.name}
                                    </TableCell>
                                </LightTooltip>
                                <TableCell align="center" style={{ width: '25%' }}>
                                    <ButtonBox>
                                        <CommonButton
                                            width={'54px'}
                                            height={'29px'}
                                            text={'수정'}
                                            background={'#3190FF'}
                                            color={'#fff'}
                                            fontWeight={500}
                                            fontSize={'0.875rem'}
                                            disabled={false}
                                            onClick={handleClickCreateDialog}
                                        />

                                        <CommonButton
                                            width={'54px'}
                                            height={'29px'}
                                            text={'삭제'}
                                            background={'#FF5E57'}
                                            color={'#fff'}
                                            fontWeight={500}
                                            fontSize={'0.875rem'}
                                            disabled={false}
                                            onClick={handleClickDeleteDialog}
                                        />
                                    </ButtonBox>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>

                    {/* 데이터가 없을때 */}
                    {/*<CommonTableNoData colSpan={4} />*/}
                </Table>
            </TableContainerBox>

            <FlexCenter>
                <PaginationStyle
                    count={10}
                    showFirstButton
                    showLastButton
                    renderItem={(item) => (
                        <PaginationItem
                            slots={{ first: FirstCustomIcon, last: LastCustomIcon, previous: PreviousCustomIcon, next: NextCustomIcon }}
                            {...item}
                        />
                    )}
                />
            </FlexCenter>

            <CommonDialog
                open={deleteDialog}
                title={'알림'}
                message={
                    <Typography>
                        그룹에 속한 모든 학생들의 그룹이 삭제 됩니다.
                        <br />
                        삭제 하시겠습니까?
                    </Typography>
                }
                btnText2={'삭제'}
                onClose={handleCloseDialog}
                btnClick1={handleCloseDialog}
            />

            <CommonDialog
                open={information}
                title={'그룹 이름'}
                children={
                    <FlexColumnCenter>
                        <ApplicationDialogBox>
                            <Box>
                                <DialogText>김가명&nbsp;&nbsp;|&nbsp;&nbsp;user@mail.com</DialogText>
                            </Box>
                        </ApplicationDialogBox>
                    </FlexColumnCenter>
                }
                actionBtn1={false}
                btnText2={'수정'}
                onClose={handleCloseDialog}
                btnClick2={handleClickCreateDialog}
            />

            <CommonDialog
                open={createDialog}
                title={'그룹 만들기'}
                children={<GroupCreateDialog />}
                btnText2={'만들기(1)'}
                onClose={handleCloseCreateDialog}
                btnClick1={handleCloseCreateDialog}
            />
        </Box>
    );
};

GroupManagementTableComponent.propTypes = {
    createDialog: PropTypes.bool,
    handleClickCreateDialog: PropTypes.func,
    handleCloseCreateDialog: PropTypes.func
};

export default GroupManagementTableComponent;
