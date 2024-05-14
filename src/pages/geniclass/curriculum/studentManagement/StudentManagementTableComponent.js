import React from 'react';
import { styled } from '@mui/material/styles';
import { Box, PaginationItem, Paper, Table, TableBody, TableCell, TableHead, TableRow, Typography } from '@mui/material';
import PropTypes from 'prop-types';
import {
    Flex,
    FlexCenter,
    FlexColumn,
    FlexColumnCenter,
    LightTooltip,
    PaginationStyle,
    TableContainerBox,
    UnderlineText
} from '../../common/styled/CommonStyle';
import CommonDialog from '../../common/CommonDialog';
import { ReactComponent as FirstIcon } from '../../../../assets/images/FirstIcon.svg';
import { ReactComponent as LastIcon } from '../../../../assets/images/LastIcon.svg';
import { ReactComponent as PrevIcon } from '../../../../assets/images/PrevIcon.svg';
import { ReactComponent as NextIcon } from '../../../../assets/images/NextIcon.svg';
import { ReactComponent as UserIcon } from '../../../../assets/images/UserIcon.svg';
import CommonTableNoData from '../../common/CommonTableNoData';

const DialogAvatarBox = styled(Box)(({ theme }) => ({
    width: 120,
    height: 120,
    borderRadius: '50%',
    overflow: 'hidden',
    background: '#bbb',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
    '& img': {
        width: '100%',
        height: '100%',
        objectFit: 'cover'
    },
    '& svg': {
        width: 45,
        height: 45,
        '& path': {
            fill: '#fff'
        }
    }
}));

const DialogBox = styled(FlexColumn)(({ theme }) => ({
    width: '100%',
    borderTop: '1px solid #D5D4DC',
    borderBottom: '1px solid #D5D4DC',
    padding: '12px 0',
    boxSizing: 'border-box'
}));

const ApplicationDialogBox = styled(FlexColumn)(({ theme }) => ({
    width: '100%',
    height: 140,
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

const DialogList = styled(Flex)(({ theme }) => ({
    marginBottom: 20,
    '&:last-child': {
        marginBottom: 0
    }
}));

const DialogListText = styled(Typography)(({ theme }) => ({
    '&.MuiTypography-root': {
        minWidth: 60,
        fontSize: '1.125rem',
        color: '#737373',
        fontWeight: 400,
        textAlign: 'left',
        paddingRight: 10
    }
}));

const DialogListTextBold = styled(Typography)(({ theme }) => ({
    '&.MuiTypography-root': {
        fontSize: '1.125rem',
        color: '#333',
        fontWeight: 700
    }
}));

const DialogText = styled(DialogListTextBold)(({ theme }) => ({
    '&.MuiTypography-root': {
        textDecoration: 'underline'
    }
}));

function createData(no, userName, email, application, participation, standBy, completion) {
    return { no, userName, email, application, participation, standBy, completion };
}

const rows = [
    createData(1, '김지니', 'skdlfjk756@mail.com', 0, 0, 0, 0),
    createData(2, '김지니', 'skdlfjk756@mail.com', 0, 0, 0, 0),
    createData(3, '김지니', 'skdlfjk756@mail.com', 0, 0, 0, 0)
];

const FirstCustomIcon = () => <FirstIcon />;
const LastCustomIcon = () => <LastIcon />;
const PreviousCustomIcon = () => <PrevIcon />;
const NextCustomIcon = () => <NextIcon />;

const StudentManagementTableComponent = (props) => {
    const [applicationDialog, setApplicationDialog] = React.useState(false);
    const [studentInformation, setStudentInformation] = React.useState(false);

    const handleClickApplicationDialog = () => {
        setApplicationDialog(true);
    };

    const handleClickStudentInformation = () => {
        setStudentInformation(true);
    };

    const handleCloseDialog = () => {
        setApplicationDialog(false);
        setStudentInformation(false);
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
                            <TableCell align="center">신청과정</TableCell>
                            <TableCell align="center">참여과정</TableCell>
                            <TableCell align="center">대기과정</TableCell>
                            <TableCell align="center">수료한 과정</TableCell>
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
                                        <UnderlineText onClick={handleClickStudentInformation} disableRipple>
                                            <Typography>{row.userName}</Typography>
                                        </UnderlineText>
                                    </TableCell>
                                </LightTooltip>
                                <LightTooltip title={row.email}>
                                    <TableCell align="center" style={{ minWidth: '180px', maxWidth: '250px', width: '20%' }}>
                                        {row.email}
                                    </TableCell>
                                </LightTooltip>
                                <TableCell align="center" style={{ minWidth: '100px', width: '15%' }}>
                                    <UnderlineText onClick={handleClickApplicationDialog} disableRipple>
                                        <Typography>{row.application}</Typography>
                                    </UnderlineText>
                                </TableCell>
                                <TableCell align="center" style={{ minWidth: '100px', width: '15%' }}>
                                    {row.participation}
                                </TableCell>
                                <TableCell align="center" style={{ minWidth: '100px', width: '15%' }}>
                                    {row.standBy}
                                </TableCell>
                                <TableCell align="center" style={{ minWidth: '100px', width: '15%' }}>
                                    {row.completion}
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
                open={applicationDialog}
                title={'신청 과정'}
                children={
                    <FlexColumnCenter>
                        <ApplicationDialogBox>
                            <Flex>
                                <DialogListTextBold>•&nbsp;</DialogListTextBold>
                                <DialogText>교육과정명</DialogText>
                            </Flex>
                        </ApplicationDialogBox>
                    </FlexColumnCenter>
                }
                actionBtn1={false}
                btnText2={'확인'}
                onClose={handleCloseDialog}
                btnClick1={handleCloseDialog}
            />

            <CommonDialog
                open={studentInformation}
                title={'교육생 정보'}
                children={
                    <FlexColumnCenter>
                        <DialogAvatarBox>
                            {/*<img src={TestProfileImage} alt={'프로필 이미지'} />*/}
                            <UserIcon />
                        </DialogAvatarBox>
                        <DialogBox>
                            <DialogList>
                                <DialogListText>이름</DialogListText>
                                <DialogListTextBold>김가명</DialogListTextBold>
                            </DialogList>
                            <DialogList>
                                <DialogListText>이메일</DialogListText>
                                <DialogListTextBold>student01@test.com</DialogListTextBold>
                            </DialogList>
                            <DialogList>
                                <DialogListText>가입일</DialogListText>
                                <DialogListTextBold>2024.01.01</DialogListTextBold>
                            </DialogList>
                        </DialogBox>
                    </FlexColumnCenter>
                }
                actionBtn1={false}
                btnText2={'확인'}
                onClose={handleCloseDialog}
                btnClick2={handleCloseDialog}
            />
        </Box>
    );
};

StudentManagementTableComponent.propTypes = {
    emptyText: PropTypes.string
};

export default StudentManagementTableComponent;
