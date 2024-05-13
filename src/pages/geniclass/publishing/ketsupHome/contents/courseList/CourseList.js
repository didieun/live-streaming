import React from 'react';
import { useViewSize } from '../../../../../store';
import styled from '@emotion/styled/macro';
import { Box, Button, Typography, Stack } from '@mui/material';
import CardItemComponent from '../home/CardItemComponent';
import CourseCategoryComponent from './CourseCategoryComponent';
import TestImage from '../../../../../assets/newImages/TestImg.jpg';
import { FilterSelectBox, Flex, FlexEnd } from '../../../common/styled/CommonStyle';
import { ReactComponent as PlusCircleIcon } from '../../../../../assets/images/PlusCircleIcon.svg';
import { ReactComponent as MoreIcon } from '../../../../../assets/images/MoreIcon.svg';
import { ReactComponent as MinusIcon } from '../../../../../assets/images/MinusIcon.svg';
import CommonSelect from '../../../common/CommonSelect';

const Root = styled(Stack)(({ theme, isLg }) => ({
    width: isLg ? '100%' : 1280,
    padding: isLg ? '60px 16px' : '60px 0',
    background: '#fff',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    overflowY: 'auto',
    boxSizing: 'border-box',
    margin: '0 auto'
}));
const TitleText = styled(Typography)(({ theme }) => ({
    '&.MuiTypography-root': {
        width: '100%',
        textAlign: 'left',
        fontSize: '1.5rem',
        color: '#333',
        fontWeight: 700,
        letterSpacing: '-0.5px',
        marginBottom: 14
    }
}));
const CardBox = styled(Box)(({ theme }) => ({
    width: '100%'
}));
const CardList = styled(Box)(({ theme, isSl }) => ({
    width: 'calc(100% - 6px)',
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: isSl ? 10 : 26,
    margin: '0 auto'
}));

const CardButton = styled(Button)(({ theme, isSl }) => ({
    display: 'flex',
    flexDirection: 'column',
    gap: 14,
    backgroundColor: '#F5F6FA',
    borderRadius: 20,
    border: '1px solid #D5D4DC',
    boxSizing: 'border-box',
    '&:hover': {
        backgroundColor: '#F5F6FA'
    },
    '& svg': {
        width: isSl ? 60 : 80,
        height: isSl ? 60 : 80,
        '& path': {
            fill: '#BBBBBB'
        }
    },
    '& .MuiTypography-body1': {
        fontSize: '1.375rem',
        fontWeight: 700,
        color: '#333',
        letterSpacing: '-0.683px'
    }
}));

const CommonButtonStyle = styled(Button)(({ theme }) => ({
    '&.MuiButtonBase-root': {
        padding: 0,
        width: '100%',
        marginTop: 24,
        '& p': {
            color: '#333',
            fontSize: '0.875rem',
            fontWeight: 400,
            marginRight: 6
        },
        '&:hover': {
            backgroundColor: '#fff'
        },
        '& svg': {
            width: 20,
            height: 20
        }
    }
}));

const cardContent = [
    {
        chip: ['훈련', '연습', '테스트'],
        img: `${TestImage}`,
        title: '8/8 교육과정 테스트 8/8 교육 과정 테스트8/8 교육과정 8/8 교육과정 테스트 8/8 교육 과정 테스트8/8 교육과정 ',
        summary1: '강의5',
        summary2: '100'
    },
    {
        chip: ['훈련'],
        img: `${TestImage}`,
        title: '8/8 교육과정 테스트 ',
        summary1: '강의6',
        summary2: '100'
    },
    {
        chip: ['훈련', '연습', '테스트'],
        img: `${TestImage}`,
        title: '8/8 교육과정 테스트 8/8 교육 과정 테스트8/8 교육과정 8/8 교육과정 테스트 8/8 교육 과정 테스트8/8 교육과정 ',
        summary1: '강의5',
        summary2: '100'
    },
    {
        chip: ['훈련'],
        img: `${TestImage}`,
        title: '8/8 교육과정 테스트 ',
        summary1: '강의6',
        summary2: '100'
    }
];
function CourseList(props) {
    const { isLg, isSl } = useViewSize();
    const [moreBtn, setMoreBtn] = React.useState(false);
    const [filter, setFilter] = React.useState(0);
    const menuList = [{ text: '최신순' }, { text: '오래된순' }, { text: '가나다순' }];

    const handleChangeFilter = (event) => {
        setFilter(event.target.value);
    };

    const handleClickMore = () => {
        setMoreBtn(!moreBtn);
    };

    return (
        <Root isLg={isLg}>
            <TitleText>교육과정</TitleText>
            <CourseCategoryComponent />

            <FlexEnd sx={{ width: 'calc(100% - 6px)', marginBottom: '9px' }}>
                <FilterSelectBox>
                    <CommonSelect filter={filter} handleChangeFilter={handleChangeFilter} menuList={menuList} />
                </FilterSelectBox>
            </FlexEnd>

            <CardBox>
                <CardList isSl={isSl}>
                    <CardButton disableRipple isSl={isSl}>
                        <PlusCircleIcon />
                        <Typography variant={'body1'}>교육 과정 만들기</Typography>
                    </CardButton>
                    <CardItemComponent cardContent={cardContent} />
                </CardList>
                {cardContent.length > 11 && (
                    <CommonButtonStyle onClick={handleClickMore} disableRipple>
                        <Typography>{moreBtn ? '접기' : '더보기'}</Typography>
                        {moreBtn ? <MinusIcon /> : <MoreIcon />}
                    </CommonButtonStyle>
                )}
            </CardBox>
        </Root>
    );
}

CourseList.propTypes = {};

export default CourseList;
