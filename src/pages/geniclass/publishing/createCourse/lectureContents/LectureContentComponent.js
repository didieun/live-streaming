import React from 'react';
import styled from '@emotion/styled/macro';
import { Box, Typography } from '@mui/material';
import { FlexCenter } from '../../common/styled/CommonStyle';
import TestImage from '../../../../assets/images/TestImage.png';
import { useViewSize } from '../../../../store';
import TextbookComponent from './TextbookComponent';
import QuizComponent from './QuizComponent';
import PropTypes from 'prop-types';
import LectureComponent from '../../lecture/lecture/LectureComponent';

const Root = styled(Box)(({ theme }) => ({
    width: '100%'
}));

const BoxStyle = styled(Box)(({ theme }) => ({
    width: '100%',
    border: ' 2px solid #D5D4DC',
    borderTop: '8px solid #D5D4DC',
    borderRadius: 4,
    boxSizing: 'border-box',
    padding: '35px 50px 15px 50px',
    background: '#fff',
    marginBottom: '30px'
}));

const VodBox = styled(FlexCenter)(({ theme }) => ({
    width: '100%',
    borderRadius: 10,
    aspectRatio: 16 / 9,
    boxSizing: 'border-box',
    background: '#2F3640',
    position: 'relative',
    flexDirection: 'column',
    marginBottom: 20
}));

const ImageBox = styled(VodBox)(({ theme }) => ({
    width: '100%',
    height: '100%',
    overflow: 'hidden',
    '& img': {
        width: '100%',
        height: '100%',
        objectFit: 'contain'
    }
}));

const TextStyle = styled(Typography)(({ theme }) => ({
    '&.MuiTypography-root': {
        fontSize: '1.125rem',
        color: '#333',
        fontWeight: 400,
        textAlign: 'left',
        marginBottom: 20
    }
}));

const LectureContentComponent = (props) => {
    const { isLg } = useViewSize();
    const { lecture } = props;

    return (
        <Root>
            <BoxStyle>
                {/* 퀴즈 */}
                <QuizComponent lecture={lecture} />

                {/* 텍스트 */}
                <TextStyle>텍스트</TextStyle>
                {/* 동영상 */}
                <VodBox></VodBox>
                {/* 이미지 */}
                <ImageBox>
                    <img src={TestImage} alt={'테스트 이미지'} />
                    {/*<img src={TestPDF} alt={'테스트 이미지'} />*/}
                </ImageBox>
                {/* 교재 */}
                <TextbookComponent />
            </BoxStyle>
        </Root>
    );
};

LectureContentComponent.propTypes = {
    lecture: PropTypes.bool
};

export default LectureContentComponent;
