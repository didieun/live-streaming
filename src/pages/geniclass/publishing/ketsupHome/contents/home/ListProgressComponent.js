import React from 'react';
import { useViewSize } from '../../../../../store';
import styled from '@emotion/styled/macro';
import { Box, Button, Typography } from '@mui/material';
import Progress01 from '../../../../../assets/images/Progress01.png';
import Progress02 from '../../../../../assets/images/Progress02.png';
import Progress03 from '../../../../../assets/images/Progress03.png';
import Progress04 from '../../../../../assets/images/Progress04.png';
import PropTypes from 'prop-types';
import Home from './Home';

const Root = styled(Box)(({ theme, login }) => ({
    width: '100%',
    background: '#fff',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    overflowY: 'auto',
    boxSizing: 'border-box',
    padding: login ? '59px 0 40px' : '40px 0'
}));

const TitleText = styled(Typography)(({ theme }) => ({
    '&.MuiTypography-root': {
        width: '100%',
        fontSize: '1.5rem',
        color: '#333',
        letterSpacing: '-0.5px',
        fontWeight: 700,
        textAlign: 'left',
        marginBottom: 48
    }
}));

const ListBox = styled(Box)(({ theme, isLg, isSd }) => ({
    width: '100%',
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    justifyContent: 'space-between',
    gridTemplateRows: 'auto',
    gap: isSd ? '10px 10px' : isLg ? '10px 30px' : '10px 80px'
}));

const ListBoxIn = styled(Button)(({ theme, isMd, isSd }) => ({
    '&.MuiButtonBase-root': {
        aspectRatio: 1,
        borderRadius: '50%',
        background: '#F5F6FA',
        justifyContent: 'center',
        padding: 10,
        flexDirection: 'column',
        '&:hover': {
            background: '#F5F6FA'
        },
        '& p': {
            fontSize: isSd ? '0.75rem' : isMd ? '0.875rem' : '1.125rem',
            color: '#333',
            fontWeight: 600,
            letterSpacing: '-0.5px',
            lineHeight: 'normal'
        }
    }
}));

const ImageBox = styled(Box)(({ theme, isHd, isMd }) => ({
    width: isMd ? 80 : isHd ? 120 : 150,
    height: isMd ? 80 : isHd ? 120 : 150,
    '& img': {
        width: '100%',
        height: '100%'
    }
}));

function ListProgressComponent(props) {
    const { isLg, isHd, isMd, isSd } = useViewSize();
    const { login } = props;
    const items = [
        { image: Progress01, text: 'AI 레벨 테스트하기' },
        { image: Progress02, text: '학습 MBTI 검사하기' },
        { image: Progress03, text: '관심 주제 설정하기' },
        { image: Progress04, text: '강사 찜하기' }
    ];

    return (
        <Root login={login}>
            <TitleText>케찹이 처음이라면 아래 목록을 진행해보세요.</TitleText>
            <ListBox isLg={isLg} isSd={isSd}>
                {items.map((item, i) => (
                    <ListBoxIn key={i} isMd={isMd} isSd={isSd}>
                        <ImageBox isHd={isHd} isMd={isMd}>
                            <img src={item.image} alt={item.text} />
                        </ImageBox>
                        <Typography>{item.text}</Typography>
                    </ListBoxIn>
                ))}
            </ListBox>
        </Root>
    );
}

ListProgressComponent.propTypes = {
    login: PropTypes.bool
};

export default ListProgressComponent;
