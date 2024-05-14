import React from 'react';
import { useViewSize } from '../../../../store';
import styled from '@emotion/styled/macro';
import { Box, Button, Typography, Tab, Tabs, InputAdornment } from '@mui/material';
import CardItemComponent from '../home/CardItemComponent';
import CourseCategoryComponent from './CourseCategoryComponent';
import TestImage from '../../../../assets/newImages/TestImg.jpg';
import { FilterSelectBox, FlexEnd, IconButtonStyle, SearchInput } from '../../common/styled/CommonStyle';
import { ReactComponent as PlusCircleIcon } from '../../../../assets/images/PlusCircleIcon.svg';
import { ReactComponent as MoreIcon } from '../../../../assets/images/MoreIcon.svg';
import { ReactComponent as MinusIcon } from '../../../../assets/images/MinusIcon.svg';
import { ReactComponent as SearchIcon } from '../../../../assets/images/SearchIcon.svg';
import PropTypes from 'prop-types';
import CommonSelect from '../../common/CommonSelect';
import ClearIcon from '../../../../assets/images/ClearIcon.svg';

const Root = styled(Box)(({ theme, isLg }) => ({
    width: isLg ? '100%' : 1280,
    padding: '60px 0',
    background: '#fff',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    overflowY: 'auto',
    boxSizing: 'border-box'
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
    backgroundColor: '#F5CD79',
    borderRadius: 20,
    '&:hover': {
        backgroundColor: '#f3c35d'
    },
    '& svg': {
        width: isSl ? 60 : 80,
        height: isSl ? 60 : 80,
        '& path': {
            fill: '#fff'
        }
    },
    '& .MuiTypography-body1': {
        fontSize: '1.375rem',
        fontWeight: 700,
        color: '#333'
    }
}));

const TabsStyle = styled(Tabs)(({ theme, isLg }) => ({
    width: '100%',
    marginBottom: 30,
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
        backgroundColor: '#F5CD79'
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

const SearchInputStyle = styled(SearchInput)(({ theme }) => ({
    '&.MuiFormControl-root': {
        margin: '0 0 40px',
        '& .MuiInputBase-root': {
            background: '#f5f6fa'
        },
        '& input': {
            fontSize: '0.875rem',
            color: '#737373',
            letterSpacing: '-0.5px',
            '&::placeholder': {
                color: '#737373!important'
            }
        },
        '& input[type="search"]::-webkit-search-cancel-button': {
            WebkitAppearance: 'none',
            height: 24,
            width: 24,
            borderRadius: '50em',
            background: `url(${ClearIcon})`,
            backgroundSize: 'contain',
            opacity: '0',
            pointerEvents: 'none',
            cursor: 'pointer'
        },
        '& input[type="search"]:focus::-webkit-search-cancel-button': {
            opacity: 1,
            pointerEvents: 'all'
        },
        '& .MuiOutlinedInput-notchedOutline': {
            height: 49,
            top: '-6px !important',
            left: '-1px !important',
            border: '1px solid #f5f6fa !important'
        },
        '& .MuiInputBase-root.Mui-focused': {
            '& .MuiOutlinedInput-notchedOutline': {
                border: '1px solid #3190FF !important'
            }
        }
    }
}));

const EmptyBox = styled('div')(({ theme }) => ({
    width: '100%',
    height: 200,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    '& p': {
        fontSize: '1.25rem',
        color: '#737373',
        fontWeight: 400,
        lineHeight: '35px'
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
    const { isLg, isSl, isSd } = useViewSize();
    const { pageTitle } = props;
    const [isLeader, setIsLeader] = React.useState(true);
    const [moreBtn, setMoreBtn] = React.useState(false);
    const [filter, setFilter] = React.useState(0);
    const [value, setValue] = React.useState(0);
    const menuList = [{ text: '최신순' }, { text: '오래된순' }, { text: '가나다순' }];

    const handleChangeFilter = (event) => {
        setFilter(event.target.value);
    };

    const handleClickMore = () => {
        setMoreBtn(!moreBtn);
    };

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Root isLg={isLg}>
            {isLeader ? (
                <TitleText>{pageTitle}</TitleText>
            ) : (
                <Box sx={{ width: '100%' }}>
                    <TabsStyle value={value} onChange={handleChange} isLg={isLg}>
                        <Tab label="나의 교육과정" value={0} />
                        <Tab label="전체 교육과정" value={1} />
                    </TabsStyle>
                    {value === 1 && (
                        <SearchInputStyle
                            type="search"
                            label=""
                            variant="outlined"
                            placeholder={'교육과정을 검색해 보세요.'}
                            width={isSd ? '100%' : '500px'}
                            height={'42px'}
                            borderRadius={'42px'}
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <IconButtonStyle sx={{ width: 18, height: 18 }} disableRipple>
                                            <SearchIcon />
                                        </IconButtonStyle>
                                    </InputAdornment>
                                )
                            }}
                        />
                    )}
                </Box>
            )}

            {isLeader ? <CourseCategoryComponent /> : null}

            <FlexEnd sx={{ width: 'calc(100% - 6px)', marginBottom: '9px' }}>
                <FilterSelectBox>
                    <CommonSelect filter={filter} handleChangeFilter={handleChangeFilter} menuList={menuList} />
                </FilterSelectBox>
            </FlexEnd>

            <CardBox>
                {cardContent.length === 0 ? (
                    <EmptyBox>
                        <Typography>검색 결과가 없습니다.</Typography>
                    </EmptyBox>
                ) : (
                    <CardList isSl={isSl}>
                        {isLeader && (
                            <CardButton disableRipple isSl={isSl}>
                                <PlusCircleIcon />
                                <Typography variant={'body1'}>교육 과정 만들기</Typography>
                            </CardButton>
                        )}

                        <CardItemComponent cardContent={cardContent} tabValue={value} />
                    </CardList>
                )}

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

CourseList.propTypes = {
    pageTitle: PropTypes.string
};

export default CourseList;
