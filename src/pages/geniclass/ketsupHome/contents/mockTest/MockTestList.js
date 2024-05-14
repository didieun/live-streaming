import React from 'react';
import styled from '@emotion/styled/macro';
import { Box, Chip, Stack, Tab, Tabs, Typography } from '@mui/material';
import { useViewSize } from '../../../../../store';
import MockTestImage from '../../../../../assets/images/MockTestImage.png';
import { ReactComponent as LockKeyIcon } from '../../../../../assets/images/LockKeyIcon.svg';
import { Flex, IconButtonStyle } from '../../../common/styled/CommonStyle';

const Root = styled(Stack)(({ theme, isLg }) => ({
    width: isLg ? '100%' : 1280,
    height: '100%',
    background: '#fff',
    margin: '0 auto 100px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    overflowY: 'auto',
    padding: isLg ? '0 16px' : 0,
    boxSizing: 'border-box'
}));

const TabsStyle = styled(Tabs)(({ theme }) => ({
    width: '100%',
    marginTop: 60,
    marginBottom: 60,
    '& .MuiTabs-flexContainer': {
        gap: 24
    },
    '& .MuiTab-root': {
        minWidth: 30,
        boxSizing: 'border-box',
        padding: '16px 0px',
        color: '#bbb',
        fontSize: '1.5rem',
        fontWeight: 500,
        letterSpacing: '-0.5px',
        '&.Mui-selected': {
            color: '#333'
        }
    },
    '& .MuiTabs-indicator': {
        height: 3,
        backgroundColor: '#00B959'
    }
}));

const CardList = styled(Box)(({ theme, isSl }) => ({
    width: '100%',
    display: 'grid',
    gridTemplateColumns: isSl ? 'repeat(2, 1fr)' : 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: isSl ? 16 : 27
}));

const CardStyle = styled(Box)(({ theme }) => ({
    cursor: 'pointer'
}));

const CardImageBox = styled(Box)(({ theme }) => ({
    width: '100%',
    borderRadius: 10,
    position: 'relative',
    overflow: 'hidden'
}));

const ImageBox = styled(Box)(({ theme }) => ({
    width: '100%',
    aspectRatio: '9/6',
    position: 'relative',
    overflow: 'hidden',
    '& img': {
        width: '100%',
        height: '100%',
        objectFit: 'cover'
    }
}));

const LockButton = styled(IconButtonStyle)(({ theme }) => ({
    width: 46,
    height: 46,
    position: 'absolute',
    top: 10,
    right: 11,
    boxShadow: '0px 2px 2px rgba(0, 0, 0, 0.25)',
    background: 'rgba(255, 255, 255, 0.8) !important',
    '&:hover': {
        background: 'rgba(255, 255, 255, 0.8) !important'
    },
    '& svg': {
        width: 28,
        height: 28,
        '& path': {
            fill: '#333'
        }
    }
}));

const ImageText = styled(Typography)(({ theme }) => ({
    '&.MuiTypography-root': {
        position: 'absolute',
        left: 18,
        bottom: 50,
        fontSize: '1.5rem',
        fontWeight: 700,
        color: '#fff',
        letterSpacing: '-0.5px',
        lineHeight: '28.8px',
        textAlign: 'left'
    }
}));

const NumberBox = styled(Box)(({ theme }) => ({
    minWidth: 50,
    height: 24,
    padding: '0 10px',
    position: 'absolute',
    left: 18,
    bottom: 18,
    borderRadius: 90,
    background: '#5BB7FF',
    boxSizing: 'border-box',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    '& p': {
        fontSize: '0.813rem',
        color: '#fff',
        fontWeight: 500,
        letterSpacing: '-0.5px'
    }
}));

const TitleText = styled(Typography)(({ theme }) => ({
    '&.MuiTypography-root': {
        fontSize: '1.125rem',
        color: '#111',
        fontWeight: 600,
        letterSpacing: '-0.5px',
        textAlign: 'left',
        display: '-webkit-box',
        wordBreak: 'break-all',
        textOverflow: 'ellipsis',
        WebkitBoxOrient: 'vertical',
        whiteSpace: 'normal',
        WebkitLineClamp: 1,
        overflow: 'hidden',
        margin: '16px 0 10px'
    }
}));

const ChipStyle = styled(Chip)(({ theme }) => ({
    minWidth: 42,
    height: 24,
    padding: '0 8px',
    borderRadius: 4,
    backgroundColor: '#F5F6FA',
    '& .MuiChip-label': {
        padding: 0,
        color: '#737373',
        fontSize: '0.813rem',
        fontWeight: 700,
        letterSpacing: '-0.5px'
    }
}));

function MockTestList(props) {
    const { isLg, isSl } = useViewSize();
    const [value, setValue] = React.useState(0);
    const cardContent = [
        {
            chip: ['TOPIK II 듣기', 'TOPIK II 읽기', 'TOPIK II 쓰기'],
            img: MockTestImage,
            title: 'TOPIK Ⅱ 듣기 집중 Half 모의고사 52제 TOPIK Ⅱ 듣기 집중 Half 모의고사 52제TOPIK Ⅱ 듣기 집중 Half 모의고사 52제'
        },
        {
            chip: ['TOPIK II 듣기', 'TOPIK II 읽기', 'TOPIK II 쓰기'],
            img: MockTestImage,
            title: 'TOPIK Ⅱ 듣기 집중 Half 모의고사 52제'
        },
        {
            chip: ['TOPIK II 듣기', 'TOPIK II 읽기', 'TOPIK II 쓰기'],
            img: MockTestImage,
            title: 'TOPIK Ⅱ 듣기 집중 Half 모의고사 52제'
        },
        {
            chip: ['TOPIK II 듣기', 'TOPIK II 읽기', 'TOPIK II 쓰기'],
            img: MockTestImage,
            title: 'TOPIK Ⅱ 듣기 집중 Half 모의고사 52제'
        },
        {
            chip: ['TOPIK II 듣기', 'TOPIK II 읽기', 'TOPIK II 쓰기'],
            img: MockTestImage,
            title: 'TOPIK Ⅱ 듣기 집중 Half 모의고사 52제'
        },
        {
            chip: ['TOPIK II 듣기', 'TOPIK II 읽기', 'TOPIK II 쓰기'],
            img: MockTestImage,
            title: 'TOPIK Ⅱ 듣기 집중 Half 모의고사 52제'
        }
    ];

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Root isLg={isLg}>
            <TabsStyle value={value} onChange={handleChange}>
                <Tab label="TOPIK l" value={0} />
                <Tab label="TOPIK ll" value={1} />
            </TabsStyle>
            <CardList isSl={isSl}>
                {cardContent.map((item, index) => (
                    <CardStyle key={index} isSl={isSl}>
                        <CardImageBox>
                            <ImageBox>
                                <img src={item.img} alt={'썸네일 이미지'} />
                            </ImageBox>
                            <LockButton disableRipple>
                                <LockKeyIcon />
                            </LockButton>
                            <ImageText>
                                듣기 집중
                                <br />
                                Half 모의고사
                            </ImageText>
                            <NumberBox>
                                <Typography>52제</Typography>
                            </NumberBox>
                        </CardImageBox>
                        <TitleText>{item.title}</TitleText>
                        <Flex sx={{ gap: '10px' }}>
                            {item.chip.map((list, i) => (
                                <ChipStyle label={list} />
                            ))}
                        </Flex>
                    </CardStyle>
                ))}
            </CardList>
        </Root>
    );
}

MockTestList.propTypes = {};

export default MockTestList;
