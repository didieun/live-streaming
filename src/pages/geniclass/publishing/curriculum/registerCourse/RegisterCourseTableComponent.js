import React from 'react';
import { styled } from '@mui/material/styles';
import { Box, PaginationItem, Paper, Table, TableBody, TableCell, TableHead, TableRow, Typography } from '@mui/material';
import { FlexCenter, LightTooltip, PaginationStyle, StyledTextarea, TableContainerBox } from '../../common/styled/CommonStyle';
import CommonButton from '../../common/CommonButton';
import CommonDialog from '../../common/CommonDialog';
import { ReactComponent as FirstIcon } from '../../../../assets/images/FirstIcon.svg';
import { ReactComponent as LastIcon } from '../../../../assets/images/LastIcon.svg';
import { ReactComponent as PrevIcon } from '../../../../assets/images/PrevIcon.svg';
import { ReactComponent as NextIcon } from '../../../../assets/images/NextIcon.svg';
import CommonTableNoData from '../../common/CommonTableNoData';

const ButtonBox = styled(FlexCenter)(({ theme }) => ({
    '& .MuiButtonBase-root:last-child': {
        marginLeft: 8
    }
}));

const DialogText = styled(Typography)(({ theme }) => ({
    '&.MuiTypography-root': {
        boxSizing: 'border-box',
        fontSize: '1.125rem',
        color: '#333',
        fontWeight: 400,
        textAlign: 'center',
        marginBottom: 24
    }
}));

const DialogSubText = styled(Typography)(({ theme }) => ({
    '&.MuiTypography-root': {
        maxWidth: 380,
        fontSize: '0.875rem',
        color: '#333',
        fontWeight: 400,
        textOverflow: 'unset',
        whiteSpace: 'unset',
        textAlign: 'left'
    }
}));

function createData(no, userName, email, title, date, approvalDate) {
    return { no, userName, email, title, date, approvalDate };
}

const rows = [
    createData(
        1,
        '김지니',
        'skdlfjk756@mail.com',
        '소리 내어 또박또박 읽어요소리 내어 또박또박 읽어요소리소리 내어 또박또박 읽어요소리 내어 또박또박 읽어요소리',
        '2024.01.24',
        '2024.01.24'
    ),
    createData(2, '김지니', 'skdlfjk756@mail.com', '소리 내어 또박또박 읽어요', '2024.01.24', ''),
    createData(3, '김지니', 'skdlfjk756@mail.com', '소리 내어 또박또박 읽어요', '', '')
];

const FirstCustomIcon = () => <FirstIcon />;
const LastCustomIcon = () => <LastIcon />;
const PreviousCustomIcon = () => <PrevIcon />;
const NextCustomIcon = () => <NextIcon />;

const RegisterCourseTableComponent = (props) => {
    const [approvalDialog, setApprovalDialog] = React.useState(false);
    const [approval, setApproval] = React.useState(false);
    const [returnDialog, setReturnDialog] = React.useState(false);
    const [returnBtn, setReturnBtn] = React.useState(false);

    const handleClickApprovalDialog = () => {
        setApprovalDialog(true);
    };

    const handleClickApproval = () => {
        setApproval(true);
        setApprovalDialog(false);
    };

    const handleClickReturnDialog = () => {
        setReturnDialog(true);
    };

    const handleClickReturn = () => {
        setReturnBtn(true);
        setReturnDialog(false);
    };

    const handleCloseDialog = () => {
        setApprovalDialog(false);
        setReturnDialog(false);
    };

    return (
        <Box>
            <TableContainerBox component={Paper}>
                <Table sx={{ minWidth: 650 }}>
                    <TableHead>
                        <TableRow>
                            <TableCell align="center">No.</TableCell>
                            <TableCell align="center">신청자</TableCell>
                            <TableCell align="center">이메일</TableCell>
                            <TableCell align="center">교육과정명</TableCell>
                            <TableCell align="center">신청일자</TableCell>
                            <TableCell align="center">승인일자</TableCell>
                            <TableCell align="center">승인</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row, i) => (
                            <TableRow key={i}>
                                <TableCell align="center" style={{ minWidth: '45px', width: '5%' }}>
                                    {row.no}
                                </TableCell>
                                <LightTooltip title={row.userName}>
                                    <TableCell align="center" style={{ maxWidth: '180px', width: '15%' }}>
                                        {row.userName}
                                    </TableCell>
                                </LightTooltip>
                                <LightTooltip title={row.email}>
                                    <TableCell align="center" style={{ maxWidth: '250px', width: '15%' }}>
                                        {row.email}
                                    </TableCell>
                                </LightTooltip>
                                <LightTooltip title={row.title}>
                                    <TableCell align="center" style={{ maxWidth: '350px', width: '30%' }}>
                                        {row.title}
                                    </TableCell>
                                </LightTooltip>
                                <TableCell align="center" style={{ minWidth: '100px', width: '10%' }}>
                                    {row.date === '' ? '-' : row.date}
                                </TableCell>
                                <TableCell align="center" style={{ minWidth: '100px', width: '10%' }}>
                                    {row.approvalDate === '' ? '-' : row.approvalDate}
                                </TableCell>
                                <TableCell align="center" style={{ width: '15%' }}>
                                    {approval ? (
                                        '승인 완료'
                                    ) : returnBtn ? (
                                        <span style={{ color: '#FF5E57' }}>자동 반려</span>
                                    ) : (
                                        <ButtonBox>
                                            <CommonButton
                                                width={'54px'}
                                                height={'29px'}
                                                text={'승인'}
                                                background={'#3190FF'}
                                                color={'#fff'}
                                                fontWeight={500}
                                                fontSize={'0.875rem'}
                                                disabled={false}
                                                onClick={handleClickApprovalDialog}
                                            />

                                            <CommonButton
                                                width={'54px'}
                                                height={'29px'}
                                                text={'반려'}
                                                background={'#FF5E57'}
                                                color={'#fff'}
                                                fontWeight={500}
                                                fontSize={'0.875rem'}
                                                disabled={false}
                                                onClick={handleClickReturnDialog}
                                            />
                                        </ButtonBox>
                                    )}
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>

                    {/* 데이터가 없을때 */}
                    {/*<CommonTableNoData colSpan={7} />*/}
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
                open={approvalDialog}
                title={'알림'}
                message={
                    <Typography>
                        ‘신청자’를 ‘교육과정명’
                        <br />
                        교육신청을 승인하시겠습니까?
                    </Typography>
                }
                btnText2={'승인'}
                onClose={handleCloseDialog}
                btnClick1={handleCloseDialog}
                btnClick2={handleClickApproval}
            />

            <CommonDialog
                open={returnDialog}
                title={'교육신청 반려'}
                children={
                    <Box>
                        <DialogText>
                            ‘신청자'를 ‘교육과정명'
                            <br />
                            교육신청을 반려 하시겠습니까?
                        </DialogText>
                        <StyledTextarea width={'380px'} minRows={9} maxRows={9} placeholder="사유를 입력해 주세요." />
                        <DialogSubText>*반려 사유는 교육을 신청한 교육생에게 알림으로 발송됩니다.</DialogSubText>
                    </Box>
                }
                btnText2={'반려'}
                error2={'#FF5E57'}
                onClose={handleCloseDialog}
                btnClick1={handleCloseDialog}
                btnClick2={handleClickReturn}
            />
        </Box>
    );
};

RegisterCourseTableComponent.propTypes = {};

export default RegisterCourseTableComponent;
