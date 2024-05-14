import React from 'react';
import styled from '@emotion/styled/macro';
import { Box, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
import { ReactComponent as BackArrowIcon } from '../../../../assets/images/BackArrowIcon.svg';
import { ReactComponent as CameraIcon } from '../../../../assets/images/CameraIcon.svg';
import { ReactComponent as BluetoothPenIcon } from '../../../../assets/images/BluetoothPenIcon.svg';
import CommonButton from '../../common/CommonButton';
import { FlexCenter, IconButtonStyle } from '../../common/styled/CommonStyle';
import PropTypes from 'prop-types';
import { GroupMainPath } from '../../../../components/GroupMainPath';

const Container = styled(Box)(({ theme }) => ({
    width: '100%',
    padding: '40px 0',
    boxSizing: 'border-box'
}));

const BackButtonBox = styled(Box)(({ theme }) => ({
    '& .MuiButtonBase-root': {
        padding: '0px !important'
    }
}));

const TextStyle = styled(Typography)(({ theme }) => ({
    '&.MuiTypography-root': {
        fontSize: '1.125rem',
        color: '#2F3640',
        fontWeight: 600,
        margin: '54px 0 40px',
        textAlign: 'left'
    }
}));

const TableContainerBox = styled(TableContainer)(({ theme }) => ({
    '&.MuiPaper-root': {
        background: '#fff',
        boxShadow: 'none',
        border: '1px solid #D5D4DC',
        borderBottom: 0,
        '& .MuiTable-root': {
            '& thead': {
                '& .MuiTableCell-root': {
                    background: '#2F3640',
                    padding: '12px 16px',
                    fontSize: '1rem',
                    color: '#fff',
                    borderRight: '1px solid #D5D4DC',
                    borderBottom: 0,
                    fontWeight: 500,
                    boxSizing: 'border-box',
                    '&:last-child': {
                        borderRight: 0
                    }
                }
            },
            '& tbody': {
                '& .MuiTableRow-root': {
                    marginBottom: 4,
                    '& .MuiTableCell-root': {
                        width: '100%',
                        minHeight: 48,
                        background: '#fff',
                        padding: '8px 16px',
                        fontSize: '0.875rem',
                        color: '#737373',
                        boxSizing: 'border-box',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        whiteSpace: 'nowrap',
                        borderRight: '1px solid #D5D4DC',
                        borderBottom: '1px solid #D5D4DC',
                        '&:last-child': {
                            borderRight: 0
                        }
                    }
                }
            }
        }
    }
}));

const ControlTableCell = styled(TableCell)(({ theme }) => ({
    '& > div': {
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-around'
    }
}));

const ChipBox = styled(FlexCenter)(({ theme }) => ({
    minWidth: 79,
    height: 32,
    padding: '0 8px',
    boxSizing: 'border-box',
    border: '1px solid #3190FF',
    borderRadius: 90,
    marginLeft: 15,
    '& p': {
        fontSize: '0.875rem',
        fontWeight: 500,
        letterSpacing: '-0.28px',
        color: '#3190FF'
    }
}));

function LectureLearningRecordComponent(props) {
    const { handleChangeTab } = props;
    const rows = [
        { name: '김이나', lastTime: '2023-08-22 16:04:48', teacher: true },
        { name: '김이나', lastTime: '2023-08-22 16:04:48', teacher: false },
        { name: '김이나', lastTime: '2023-08-22 16:04:48', teacher: false },
        { name: '김이나', lastTime: '2023-08-22 16:04:48', teacher: false },
        { name: '김이나', lastTime: '2023-08-22 16:04:48', teacher: false }
    ];

    return (
        <Container>
            <BackButtonBox>
                <CommonButton
                    width={'80px'}
                    height={'24px'}
                    text={'강의명'}
                    background={'transparent'}
                    color={'#737373'}
                    fontSize={'1.125rem'}
                    disabled={false}
                    startIcon={<BackArrowIcon />}
                    onClick={() => handleChangeTab(GroupMainPath.lecture.home)}
                />
            </BackButtonBox>

            <TextStyle>학습기록</TextStyle>
            <TableContainerBox component={Paper}>
                <Table sx={{ minWidth: 650 }}>
                    <TableHead>
                        <TableRow>
                            <TableCell align="center">참여자</TableCell>
                            <TableCell align="center">마지막 필기 시간</TableCell>
                            <TableCell align="center">학습현황</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((list, i) => (
                            <TableRow key={i}>
                                <TableCell align="center" style={{ width: '30%' }}>
                                    <FlexCenter>
                                        {list.name}
                                        {list.teacher && (
                                            <ChipBox>
                                                <Typography>선생님</Typography>
                                            </ChipBox>
                                        )}
                                    </FlexCenter>
                                </TableCell>
                                <TableCell align="center" style={{ width: '35%' }}>
                                    {list.lastTime}
                                </TableCell>
                                <ControlTableCell align="center" style={{ width: '35%' }}>
                                    <Box>
                                        <CommonButton
                                            width={'113px'}
                                            height={'32px'}
                                            text={'학습기록'}
                                            background={'#F5CD79'}
                                            color={'#2F3640'}
                                            fontWeight={400}
                                            fontSize={'0.875rem'}
                                            disabled={false}
                                        />
                                        <IconButtonStyle sx={{ width: 24, height: 24 }} disableRipple>
                                            <CameraIcon />
                                        </IconButtonStyle>

                                        <IconButtonStyle sx={{ width: 25, height: 28 }} disableRipple>
                                            <BluetoothPenIcon />
                                        </IconButtonStyle>
                                    </Box>
                                </ControlTableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainerBox>
        </Container>
    );
}
LectureLearningRecordComponent.propTypes = {
    handleChangeTab: PropTypes.func
};

export default LectureLearningRecordComponent;
