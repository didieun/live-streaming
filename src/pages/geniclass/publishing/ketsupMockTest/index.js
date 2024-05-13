import React from 'react';
import styled from '@emotion/styled/macro';
import {
    Box,
    Button,
    Chip,
    Paper,
    Stack,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Typography
} from '@mui/material';
import { useViewSize } from '../../../store';
import { ReactComponent as CalendarLeftArrowIcon } from '../../../assets/images/CalendarLeftArrowIcon.svg';
import MockTestImage from '../../../assets/images/MockTestImage.png';
import CommonButton from '../common/CommonButton';
import { Flex, FlexCenter, FlexColumnCenter } from '../common/styled/CommonStyle';

const Root = styled(Stack)(({ theme }) => ({
    width: '100%'
}));

const Header = styled(Box)(({ theme }) => ({
    width: '100%',
    height: 60,
    borderBottom: '1px solid #D5D4DC',
    padding: '0 33px',
    boxSizing: 'border-box',
    background: '#fff',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start'
}));

const BackButton = styled(Button)(({ theme }) => ({
    '&.MuiButtonBase-root': {
        background: 'transparent',
        padding: 0,
        '& p': {
            fontSize: '1.125rem',
            color: '#737373',
            marginLeft: 4,
            fontWeight: 400
        },
        '& svg': {
            width: 22,
            height: 22,
            '& path': {
                fill: '#737373'
            }
        },
        '&:hover': {
            background: 'transparent'
        }
    }
}));

const ContentsBox = styled(Box)(({ theme, isLg }) => ({
    width: isLg ? '100%' : 1280,
    padding: isLg ? '0 16px' : 0,
    boxSizing: 'border-box',
    margin: '60px auto 110px'
}));

const ContentsBoxIn = styled(FlexColumnCenter)(({ theme }) => ({
    width: '100%',
    aspectRatio: 9 / 5.3,
    justifyContent: 'center',
    backgroundImage: `url(${MockTestImage})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: '100%',
    marginBottom: 30
}));

const TextStyle = styled(Typography)(({ theme, isHd, isSd }) => ({
    '&.MuiTypography-root': {
        fontSize: isSd ? '1.25rem' : isHd ? '1.5rem' : '2rem',
        color: '#fff',
        fontWeight: 700,
        lineHeight: 'normal',
        letterSpacing: '-0.5px'
    }
}));

const TitleText = styled(TextStyle)(({ theme, isHd, isSd }) => ({
    '&.MuiTypography-root': {
        fontSize: isSd ? '2rem' : isHd ? '2.875rem' : '3.625rem',
        fontWeight: 800,
        margin: isSd ? '5px 0' : isHd ? '8px 0 10px' : '12px 0 15px'
    }
}));

const SubText = styled(TextStyle)(({ theme, isHd, isSd }) => ({
    '&.MuiTypography-root': {
        fontSize: isSd ? '1rem' : isHd ? '1.875rem' : '2.25rem',
        fontWeight: 500
    }
}));

const NumberBox = styled(Box)(({ theme, isHd }) => ({
    minWidth: isHd ? 50 : 76,
    height: isHd ? 24 : 36,
    padding: '0 10px',
    borderRadius: 110,
    background: '#5BB7FF',
    boxSizing: 'border-box',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: isHd ? '12px 0' : '16px 0',
    '& p': {
        fontSize: isHd ? '0.813rem' : '1.25rem',
        color: '#fff',
        fontWeight: 500,
        lineHeight: 'normal',
        letterSpacing: '-0.756px'
    }
}));

const ChipStyle = styled(Chip)(({ theme, isHd }) => ({
    minWidth: isHd ? 42 : 100,
    height: isHd ? 24 : 31,
    padding: isHd ? '0 8px' : '0 12px',
    borderRadius: isHd ? 4 : 5,
    backgroundColor: '#F5F6FA',
    '& .MuiChip-label': {
        padding: 0,
        color: '#737373',
        fontSize: isHd ? '0.813rem' : '1rem',
        fontWeight: 700,
        lineHeight: 'normal',
        letterSpacing: '-0.631px'
    }
}));

const TableContainerBox = styled(TableContainer)(({ theme, isHd, isSd }) => ({
    '&.MuiPaper-root': {
        width: isSd ? 450 : 576,
        minWidth: isSd ? 450 : 576,
        background: 'transparent',
        boxShadow: 'none',
        border: 0,
        marginTop: isSd ? 16 : 30,
        '& .MuiTable-root': {
            '& thead': {
                borderTop: '2px solid #333',
                borderLeft: 0,
                borderRight: 0,
                '& .MuiTableCell-root': {
                    background: '#fff',
                    padding: isSd ? '6px 8px' : isHd ? '10px 8px' : '15px 8px',
                    fontSize: isSd ? '1rem' : isHd ? '1.25rem' : '1.625rem',
                    color: '#737373',
                    fontWeight: 700,
                    letterSpacing: '-0.5px',
                    boxSizing: 'border-box',
                    borderBottom: '2px solid #333'
                }
            },
            '& tbody': {
                '& .MuiTableRow-root': {
                    '& .MuiTableCell-root': {
                        background: '#fff',
                        padding: '10px 0',
                        boxSizing: 'border-box',
                        borderBottom: '1px solid #D5D4DC',
                        '& p': {
                            width: '100%',
                            fontSize: isSd ? '0.813rem' : isHd ? '1rem' : '1.375rem',
                            color: '#333',
                            fontWeight: 500,
                            letterSpacing: '-0.5px',
                            borderRight: '1px solid #D5D4DC'
                        },
                        '&:last-child p': {
                            borderRight: 0
                        }
                    }
                }
            }
        }
    }
}));

const LastTableCell = styled(TableCell)(({ theme }) => ({
    '&.MuiTableCell-root': {
        borderTop: '2px solid #333 !important',
        borderBottom: '2px solid #333 !important',
        '& p': {
            fontWeight: '700 !important'
        }
    }
}));

function Index(props) {
    const { isLg, isHd, isSd } = useViewSize();
    const items = [{ text: 'TOPIK II 듣기' }, { text: 'TOPIK II 읽기' }, { text: 'TOPIK II 쓰기' }];
    return (
        <Root>
            <Header>
                <BackButton disableRipple>
                    <CalendarLeftArrowIcon />
                    <Typography>이전 페이지</Typography>
                </BackButton>
            </Header>
            <ContentsBox isLg={isLg}>
                <ContentsBoxIn>
                    <TextStyle isHd={isHd} isSd={isSd}>
                        TOPIK II
                    </TextStyle>
                    <TitleText isHd={isHd} isSd={isSd}>
                        듣기 집중 Half 모의고사
                    </TitleText>
                    <SubText isHd={isHd} isSd={isSd}>
                        AI 예측 모의고사 vol.4
                    </SubText>
                    <NumberBox isHd={isHd}>
                        <Typography>52제</Typography>
                    </NumberBox>
                    <Flex sx={{ gap: '10px' }}>
                        {items.map((item, i) => (
                            <ChipStyle key={i} label={item.text} isHd={isHd} />
                        ))}
                    </Flex>

                    <TableContainerBox component={Paper} isHd={isHd} isSd={isSd}>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell align="center" colSpan={3}>
                                        TOPIK II
                                    </TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                <TableRow>
                                    <TableCell align="center" sx={{ width: 168 }}>
                                        <Typography>1교시</Typography>
                                    </TableCell>
                                    <TableCell align="center" sx={{ width: 214 }}>
                                        <Typography>듣기, 쓰기</Typography>
                                    </TableCell>
                                    <TableCell align="center" sx={{ width: 194 }}>
                                        <Typography>110분</Typography>
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell align="center">
                                        <Typography>2교시</Typography>
                                    </TableCell>
                                    <TableCell align="center">
                                        <Typography>읽기</Typography>
                                    </TableCell>
                                    <TableCell align="center">
                                        <Typography>700분</Typography>
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <LastTableCell align="center" colSpan={3}>
                                        <Typography>총 180분</Typography>
                                    </LastTableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </TableContainerBox>
                </ContentsBoxIn>
                <FlexCenter>
                    <CommonButton
                        width={'240px'}
                        height={'50px'}
                        text={'시험 시작하기'}
                        background={'#2F3640'}
                        color={'#fff'}
                        fontWeight={700}
                        fontSize={'1rem'}
                        disabled={false}
                    />
                </FlexCenter>
            </ContentsBox>
        </Root>
    );
}

Index.propTypes = {};

export default Index;
