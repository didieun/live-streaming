import React from 'react';
import { useViewSize } from '../../../../store';
import styled from '@emotion/styled/macro';
import { Box, Typography } from '@mui/material';
import CategoryImg1 from '../../../../assets/images/CategoryImg1.png';
import CategoryImg2 from '../../../../assets/images/CategoryImg2.png';
import CategoryImg3 from '../../../../assets/images/CategoryImg3.png';
import CategoryImg4 from '../../../../assets/images/CategoryImg4.png';
import { FlexColumn, FlexEnd, FlexSpace } from '../../common/styled/CommonStyle';

const Root = styled(Box)(({ theme, isSl }) => ({
    width: '100%',
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: isSl ? 10 : 26,
    marginBottom: 40,
    boxSizing: 'border-box'
}));

const BoxStyle = styled(FlexColumn)(({ theme, isMd }) => ({
    padding: isMd ? '18px 20px' : '23px 26px',
    borderRadius: 20,
    gap: 16,
    boxSizing: 'border-box',
    '& .MuiTypography-h4': {
        fontSize: '1.125rem',
        fontWeight: 500,
        color: '#737373'
    }
}));

const CountBox = styled(FlexSpace)(({ theme, isMd }) => ({
    width: '100%',
    display: 'flex',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    '& img': {
        width: isMd ? 50 : 80,
        height: isMd ? 50 : 80
    },
    '& .MuiTypography-body1': {
        fontSize: isMd ? '2.25rem' : '2.75rem',
        fontWeight: 700,
        color: '#333'
    }
}));

const boxItem = [
    {
        bgColor: '#FFEDF2',
        img: `${CategoryImg1}`,
        title: '개설 교육 과정',
        count: 178
    },
    {
        bgColor: '#EBF7FF',
        img: `${CategoryImg2}`,
        title: '개설 강의',
        count: 124
    },
    {
        bgColor: '#EDEEFF',
        img: `${CategoryImg3}`,
        title: '전체 교육생',
        count: 463
    }
    // {
    //     bgColor: '#FFF5E0',
    //     img: `${CategoryImg4}`,
    //     title: '수료 교육생',
    //     count: 1627
    // }
];

function CourseCategoryComponent(props) {
    const { isSl, isMd } = useViewSize();

    return (
        <Root isSl={isSl}>
            {boxItem.map((item, i) => (
                <BoxStyle key={i} style={{ backgroundColor: item.bgColor }} isMd={isMd}>
                    <Typography variant={'h4'}>{item.title}</Typography>
                    <CountBox isMd={isMd}>
                        <img src={item.img} alt={item.title} />

                        <Typography variant={'body1'}>{item.count}</Typography>
                    </CountBox>
                </BoxStyle>
            ))}
        </Root>
    );
}

export default CourseCategoryComponent;
