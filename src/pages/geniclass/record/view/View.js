import { styled } from '@mui/material/styles';
import { Box, Typography, Slider } from '@mui/material';
import { useViewSize } from '../../../../store';
import React from 'react';
import { Flex, FlexSpace, IconButtonStyle } from '../../common/styled/CommonStyle';
import { ReactComponent as PageHeightIcon } from '../../../../assets/images/PageHeightIcon.svg';
import { ReactComponent as PageWidthIcon } from '../../../../assets/images/PageWidthIcon.svg';
import { ReactComponent as PencilSimpleIcon } from '../../../../assets/images/PencilSimpleIcon.svg';
import { ReactComponent as SortVerticalIcon } from '../../../../assets/images/SortVerticalIcon.svg';
import Palette from '../palette/Palette';
import FileList from '../file/FileList';
import TestPDF from '../../../../assets/images/TestPDF.png';
import PropTypes from 'prop-types';
import CommonZoomInZoomOut from '../../common/CommonZoomInZoomOut';

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
            fontWeight: 600
        }
    }
}));

const IconMargin = styled(IconButtonStyle)(({ theme }) => ({
    '&.MuiButtonBase-root': {
        marginRight: 5
    }
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

const ViewBoxContents = styled(Box)(({ theme, isSmall, isMd }) => ({
    width: isSmall ? '100%' : 'calc(100% - 180px - 10px)',
    paddingTop: isMd ? 70 : 0,
    paddingRight: 10,
    paddingBottom: 10,
    paddingLeft: isMd ? 0 : 60,
    marginBottom: 20,
    boxSizing: 'border-box',
    overflow: 'scroll',
    display: 'grid',
    placeItems: 'center',
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
        background: 'transparent'
    },
    '&::-webkit-scrollbar-corner': {
        background: 'transparent'
    }
}));

const ViewImageBox = styled(Box)(({ theme, isSl }) => ({
    width: isSl ? '100%' : 675,
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

const View = (props) => {
    const { tabValue } = props;
    const { isSmall, isSl, isMd } = useViewSize();

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
                        <CommonZoomInZoomOut width={'142px'} height={'2px'} />
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
                    <img src={TestPDF} alt={'pdf 파일'} />
                    {/*<ViewImageBox isSl={isSl}>*/}
                    {/*    <img src={TestPDF} alt={'pdf 파일'} />*/}
                    {/*</ViewImageBox>*/}
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
