import React from 'react';
import { useViewSize } from '../../../../../store';
import styled from '@emotion/styled/macro';
import { Box, Button, Card, Typography } from '@mui/material';
import { FilterSelectBox, FlexCenter, FlexEnd, FlexSpace } from '../../../common/styled/CommonStyle';
import CommonButton from '../../../common/CommonButton';
import { ReactComponent as PlusCircleIcon } from '../../../../../assets/images/PlusCircleIcon.svg';
import { ReactComponent as ArrowIcon } from '../../../../../assets/images/ArrowIcon.svg';
import TestImage from '../../../../../assets/newImages/TestImg.jpg';
import CardItemComponent from './CardItemComponent';
import PropTypes from 'prop-types';
import Home from './Home';
import CommonSelect from '../../../common/CommonSelect';

const Root = styled(Box)(({ theme, isLg }) => ({
    width: isLg ? '100%' : 1280,
    background: '#fff',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    overflowY: 'auto',
    boxSizing: 'border-box',
    marginTop: 40,
    paddingBottom: 100
}));

const TitleBox = styled(FlexSpace)(({ theme, isLeader }) => ({
    width: '100%',
    justifyContent: isLeader ? 'space-between' : 'flex-end',
    marginBottom: '14px',
    alignItems: 'flex-end',
    '& button': {
        '& .circle': {
            fill: '#fff'
        }
    }
}));

const Title = styled(FlexCenter)(({ theme }) => ({
    '& svg': {
        width: 26,
        height: 26
    },
    '& p': {
        color: '#333',
        fontSize: '1.375rem',
        fontWeight: 700
    }
}));

const CardList = styled(Box)(({ theme, isSl }) => ({
    width: 'calc(100% - 6px)',
    display: 'grid',
    gridTemplateColumns: isSl ? 'repeat(2, 1fr)' : 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: isSl ? 10 : 20
}));

const ButtonStyle = styled(Button)(({ theme }) => ({
    '&.MuiButtonBase-root': {
        color: '#333',
        fontSize: '1.125rem',
        fontWeight: 500,
        padding: '0 6px',
        letterSpacing: '-0.5px',
        '& svg': {
            width: 17,
            height: 17,
            marginLeft: 4,
            '& path': {
                fill: '#333'
            }
        },
        '&:hover': {
            background: 'transparent'
        }
    }
}));

const EmptyBox = styled(Box)(({ theme }) => ({
    width: '100%',
    height: 200,
    border: '1px solid #D5D4DC',
    borderRadius: 8,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    '& > p': {
        fontSize: '1rem',
        color: '#737373',
        fontWeight: 500,
        letterSpacing: '-0.5px',
        marginBottom: 14
    }
}));

const cardContent = [
    {
        chip: ['TOPIK', 'K-POP', '문법'],
        img: `${TestImage}`,
        title: '8/8 교육과정 테스트 8/8 교육 과정 테스트8/8 교육과정 8/8 교육과정 테스트 8/8 교육 과정 테스트8/8 교육과정 ',
        summary1: '강의5',
        summary2: '100'
    },
    {
        chip: ['TOPIK 읽기', 'K-POP', '문법'],
        img: `${TestImage}`,
        title: '8/8 교육과정 테스트 ',
        summary1: '강의6',
        summary2: '100'
    },
    {
        chip: ['일상 한국어', 'K-POP', '문법'],
        img: `${TestImage}`,
        title: '8/8 교육과정 테스트 8/8 교육 과정 테스트8/8 교육과정 8/8 교육과정 테스트 8/8 교육 과정 테스트8/8 교육과정 ',
        summary1: '강의5',
        summary2: '100'
    },
    {
        chip: ['K-POP', '문법'],
        img: `${TestImage}`,
        title: '8/8 교육과정 테스트 ',
        summary1: '강의6',
        summary2: '100'
    }
];

function CardListComponent(props) {
    const { isLg, isSl } = useViewSize();
    const { isLeader, handleClickAllTeacher, menuValue } = props;
    const [filter, setFilter] = React.useState(0);
    const menuList = [{ text: '최신순' }, { text: '오래된순' }, { text: '가나다순' }];

    const handleChangeFilter = (event) => {
        setFilter(event.target.value);
    };

    return (
        <Root isLg={isLg}>
            {menuValue === '전체 강의' ? (
                <FlexEnd sx={{ width: '100%', marginBottom: '9px' }}>
                    <FilterSelectBox>
                        <CommonSelect filter={filter} handleChangeFilter={handleChangeFilter} menuList={menuList} />
                    </FilterSelectBox>
                </FlexEnd>
            ) : (
                <TitleBox isLeader={isLeader}>
                    {isLeader && (
                        <Title>
                            <Typography>교육과정</Typography>
                            <ArrowIcon style={{ transform: 'rotate( -90deg )' }} />
                        </Title>
                    )}

                    {isLeader ? (
                        <CommonButton
                            width={isSl ? '160px' : '200px'}
                            height={isSl ? '38px' : '50px'}
                            text={'교육 과정 만들기'}
                            background={'#00B959'}
                            color={'#fff'}
                            fontWeight={700}
                            fontSize={isSl ? '1rem' : '1.125rem'}
                            disabled={false}
                            startIcon={<PlusCircleIcon />}
                        />
                    ) : (
                        <ButtonStyle onClick={() => handleClickAllTeacher('전체 강의')} disableRipple>
                            전체 강의 <ArrowIcon style={{ transform: 'rotate( -90deg )' }} />
                        </ButtonStyle>
                    )}
                </TitleBox>
            )}

            <CardList isSl={isSl}>
                <CardItemComponent cardContent={cardContent} />
            </CardList>

            {/*<EmptyBox>*/}
            {/*    <Typography>수강 중인 교육과정이 없습니다.</Typography>*/}
            {/*    <CommonButton*/}
            {/*        width={isSl ? '160px' : '200px'}*/}
            {/*        height={isSl ? '38px' : '50px'}*/}
            {/*        text={'교육 과정 찾기'}*/}
            {/*        background={'#F5CD79'}*/}
            {/*        color={'#333'}*/}
            {/*        fontWeight={500}*/}
            {/*        fontSize={isSl ? '1rem' : '1.125rem'}*/}
            {/*        disabled={false}*/}
            {/*        startIcon={<PlusCircleIcon />}*/}
            {/*    />*/}
            {/*</EmptyBox>*/}
        </Root>
    );
}

CardListComponent.propTypes = {
    isLeader: PropTypes.bool,
    handleClickAllTeacher: PropTypes.func,
    menuValue: PropTypes.array
};

export default CardListComponent;
