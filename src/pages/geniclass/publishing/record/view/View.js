import { styled } from '@mui/material/styles';
import { Box, Typography, Slider } from '@mui/material';
import { useViewSize } from '../../../../store';
import React from 'react';
import { Flex, FlexSpace, IconButtonStyle } from '../../common/styled/CommonStyle';
import { ReactComponent as PageHeightIcon } from '../../../../assets/images/PageHeightIcon.svg';
import { ReactComponent as PageWidthIcon } from '../../../../assets/images/PageWidthIcon.svg';
import { ReactComponent as PlusCircleIcon } from '../../../../assets/images/PlusCircleIcon.svg';
import { ReactComponent as MinusCircleIcon } from '../../../../assets/images/MinusCircleIcon.svg';
import { ReactComponent as PencilSimpleIcon } from '../../../../assets/images/PencilSimpleIcon.svg';
import { ReactComponent as SortVerticalIcon } from '../../../../assets/images/SortVerticalIcon.svg';
import Palette from '../palette/Palette';
import FileList from '../file/FileList';
import TestPDF from '../../../../assets/images/TestPDF.png';
import PropTypes from 'prop-types';
import WhiteBoard from '../whiteBoard/WhiteBoard';

const Container = styled(Box)(({ theme }) => ({
    width: '100%'
}));

const ViewTop = styled(FlexSpace)(({ theme, isSmall }) => ({
    width: '100%',
    marginBottom: 25,
    flexDirection: isSmall ? 'column' : 'row',
    alignItems: isSmall ? 'flex-start' : 'center'
}));

const TextStyle = styled(Typography)(({ theme, isSmall }) => ({
    '&.MuiTypography-root': {
        maxWidth: isSmall ? '100%' : 'calc(100% - 323px - 10px)',
        fontSize: '1.25rem',
        color: '#333',
        lineHeight: 1,
        fontWeight: 500,
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
        '& span': {
            fontWeight: 'bold'
        }
    }
}));

const IconMargin = styled(IconButtonStyle)(({ theme }) => ({
    '&.MuiButtonBase-root': {
        marginRight: 5
    }
}));

const ZoomInZoomOut = styled(Flex)(({ theme }) => ({
    margin: '0 12px'
}));

const ViewBox = styled(Box)(({ theme }) => ({
    width: '100%',
    maxHeight: 1020,
    height: 'auto',
    background: '#F5F6FA',
    padding: '25px 25px 5px',
    boxSizing: 'border-box',
    position: 'relative',
    display: 'flex',
    justifyContent: 'space-between'
}));

const SliderBox = styled(Slider)(({ theme }) => ({
    '&.MuiSlider-root': {
        width: 142,
        height: 2,
        padding: '10px 0',
        boxSizing: 'border-box',
        margin: '0 8px',
        '& .MuiSlider-rail': {
            background: '#444954',
            opacity: 1
        },
        '& .MuiSlider-track': {
            border: 0,
            background: '#2572ED'
        },
        '& .MuiSlider-mark': {
            background: 'transparent'
        },
        '& .MuiSlider-thumb': {
            width: 12,
            height: 12,
            background: '#2572ED',
            '&::after': {
                width: 20,
                height: 20,
                background: 'transparent'
            },
            '&.Mui-active': {
                boxShadow: 'none'
            },
            '&.Mui-focusVisible': {
                boxShadow: 'none'
            },
            '&:hover': {
                boxShadow: 'none'
            },
            '& .MuiSlider-valueLabel': {
                background: 'transparent',
                padding: 0,
                fontSize: '0.875rem',
                color: '#1976d2',
                lineHeight: 1.43,
                top: -4,
                '&::before': {
                    display: 'none'
                },
                '& .MuiSlider-valueLabelCircle': {
                    '&:after': {
                        content: "'%'",
                        fontSize: '0.875rem',
                        color: '#1976d2'
                    }
                }
            }
        }
    }
}));

const ViewBoxContents = styled(Box)(({ theme, isSmall, isMd }) => ({
    width: isSmall ? '100%' : 'calc(100% - 180px - 10px)',
    paddingTop: isMd ? 70 : 0,
    paddingRight: 10,
    paddingBottom: 10,
    marginBottom: 20,
    boxSizing: 'border-box',
    overflow: 'scroll',
    '&::-webkit-scrollbar': {
        width: '5px',
        height: '5px'
    },
    '&::-webkit-scrollbar-thumb': {
        background: '#7A7A7A',
        borderRadius: '10px',
        backgroundClip: 'padding-box'
    },
    '&::-webkit-scrollbar-track': {
        // background: '#E8E8E8'
        background: 'transparent'
    },
    '&::-webkit-scrollbar-corner': {
        background: 'transparent'
    }
}));

const ViewImageBox = styled(Box)(({ theme, isSd }) => ({
    width: isSd ? '100%' : 675,
    aspectRatio: '1/1.414',
    border: '1px solid #000000',
    background: '#fff',
    overflow: 'hidden',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    boxSizing: 'border-box',
    margin: '0 auto',
    '& img': {
        width: '100%',
        objectFit: 'cover'
    }
}));

const SpaceBox = styled(Box)(({ theme, isSmall }) => ({
    display: 'flex',
    justifyContent: 'space-between',
    width: isSmall ? '100%' : 'auto',
    marginTop: isSmall ? '16px' : 0,
    alignItems: 'flex-end'
}));

function valuetext(value) {
    return `${value}`;
}

const View = (props) => {
    const { tabValue } = props;
    const { isSmall, isSd, isMd } = useViewSize();

    return (
        <Container>
            <ViewTop isSmall={isSmall}>
                <TextStyle isSmall={isSmall}>
                    강의명 | <span>참여자명</span> 선생님
                </TextStyle>
                <SpaceBox isSmall={isSmall}>
                    <IconButtonStyle sx={{ display: isSmall ? '' : 'none', width: 24, height: 24 }} disableRipple>
                        <SortVerticalIcon />
                    </IconButtonStyle>
                    <Flex sx={{ marginTop: isSmall ? '16px' : 0 }}>
                        <IconMargin sx={{ width: 32, height: 32 }} disableRipple>
                            <PageHeightIcon />
                        </IconMargin>
                        <IconButtonStyle sx={{ width: 32, height: 32 }} disableRipple>
                            <PageWidthIcon />
                        </IconButtonStyle>
                        <ZoomInZoomOut>
                            <IconButtonStyle sx={{ width: 24, height: 24 }} disableRipple>
                                <PlusCircleIcon />
                            </IconButtonStyle>
                            <SliderBox
                                aria-label="Temperature"
                                defaultValue={100}
                                getAriaValueText={valuetext}
                                valueLabelDisplay="on"
                                shiftStep={30}
                                step={10}
                                marks
                                min={25}
                                max={300}
                            />
                            <IconButtonStyle sx={{ width: 24, height: 24 }} disableRipple>
                                <MinusCircleIcon />
                            </IconButtonStyle>
                        </ZoomInZoomOut>
                        {tabValue === '학습기록' && (
                            <IconButtonStyle sx={{ display: isSmall ? 'none' : '', width: 24, height: 24 }} disableRipple>
                                <PencilSimpleIcon />
                            </IconButtonStyle>
                        )}
                    </Flex>
                </SpaceBox>
            </ViewTop>
            <ViewBox>
                {tabValue === '학습기록' && <Palette />}
                <ViewBoxContents isSmall={isSmall} isMd={isMd}>
                    <ViewImageBox isSd={isSd}>
                        <img src={TestPDF} alt={'pdf 파일'} />
                    </ViewImageBox>
                </ViewBoxContents>
                <FileList />
            </ViewBox>
        </Container>
    );
};

View.propTypes = {
    tabValue: PropTypes.string
};

export default View;
