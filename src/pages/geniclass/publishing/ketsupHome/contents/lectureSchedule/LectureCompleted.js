import React from 'react';
import { useViewSize } from '../../../../../store';
import styled from '@emotion/styled/macro';
import { Box, Stack, Typography } from '@mui/material';
import LectureCompletedDetailComponent from './LectureCompletedDetailComponent';
import PropTypes from 'prop-types';
import LectureSchedule from './ScheduleList';
import { FilterSelectBox, Flex, FlexEnd, FlexSpace } from '../../../common/styled/CommonStyle';
import CommonSelect from '../../../common/CommonSelect';
import CommonTextField from '../../../common/CommonTextField';
import CommonButton from '../../../common/CommonButton';
import CommonDialog from '../../../common/CommonDialog';

const Root = styled(Stack)(({ theme }) => ({
    width: '100%',
    boxSizing: 'border-box'
}));

const FilterBox = styled(FlexSpace)(({ theme }) => ({
    marginBottom: 14
}));

const CommonBox = styled(FlexEnd)(({ theme }) => ({
    '& > .MuiFormControl-root': {
        minWidth: '160px !important',
        marginLeft: '0px !important',
        '& .MuiInputBase-root': {
            minHeight: '40px !important',
            height: '40px !important'
        }
    },
    '& > div': {
        marginLeft: 10
    },
    '& button': {
        marginLeft: 10
    }
}));

const TextFieldWidth = styled(Box)(({ theme }) => ({
    '& .MuiFormControl-root': {
        minWidth: '280px !important',
        '& .MuiInputBase-root': {
            minHeight: '40px !important',
            height: '40px !important'
        }
    }
}));

function LectureCompleted(props) {
    const { isLg } = useViewSize();
    const { isLeader } = props;
    const [filter, setFilter] = React.useState(0);
    const [searchFilter, setSearchFilter] = React.useState(0);
    const [dialogOpen, setDialogOpen] = React.useState(false);
    const menuList = [{ text: '최신순' }, { text: '오래된순' }, { text: '가나다순' }];
    const searchMenuList = [{ text: isLeader ? '강의명' : '교육과정명' }, { text: '강사명' }];
    const valueList = [
        {
            chip: ['실시간'],
            title: '24년 1학년 1학기 심화과정 24년 1학년 1학기 심화과정 24년 1학년 1학기 심화과정 24년 1학년 1학기 심화과정 24년 1학년 1학기 심화과정 24년 1학년 1학기 심화과정 24년 1학년 1학기 심화과정 24년 1학년 1학기 심화과정 24년 1학년 1학기 심화과정 24년 1학년 1학기 심화과정 24년 1학년 1학기 심화과정 24년 1학년 1학기 심화과정 24년 1학년 1학기 심화과정 24년 1학년 1학기 심화과정 ',
            contents: '교육과정명',
            date: '2024.03.19 10:00 ~ 11:30'
        },
        {
            chip: ['실시간'],
            title: '24년 1학년 1학기 심화과정',
            contents: '24년 1학년 1학기 심화과정 교육과정명',
            date: '2024.03.19 10:00 ~ 11:30'
        },
        {
            chip: ['실시간'],
            title: '24년 1학년 1학기 심화과정',
            contents: '교육과정명',
            date: '2024.03.19 10:00 ~ 11:30'
        },
        {
            chip: ['실시간'],
            title: '24년 1학년 1학기 심화과정',
            contents: '24년 1학년 1학기 심화과정 교육과정명',
            date: '2024.03.19 10:00 ~ 11:30'
        }
    ];

    const studentValueList = [
        {
            chip: ['실시간'],
            title: '상사에게 인정받는 비즈니스 한국어',
            name: '국지현',
            contents: '국어국문학 전공 박사',
            date: '2024.03.19 10:00 ~ 11:30',
            checked1: false,
            checked2: false
        },
        {
            chip: ['실시간'],
            title: '상사에게 인정받는 비즈니스 한국어',
            name: '강사 이름',
            contents: '전공 학위',
            date: '2024.03.19 10:00 ~ 11:30',
            checked1: true,
            checked2: true
        },
        {
            chip: ['실시간'],
            title: '상사에게 인정받는 비즈니스 한국어',
            subText: 'Febyriani Elfida Trihtarani',
            name: '강사 이름',
            contents: '전공 학위',
            date: '2024.03.19 10:00 ~ 11:30',
            checked1: true,
            checked2: true
        }
    ];

    const handleChangeFilter = (event) => {
        setFilter(event.target.value);
    };

    const handleChangeSearchFilter = (event) => {
        setSearchFilter(event.target.value);
    };

    const handleClickDialog = () => {
        setDialogOpen(true);
    };

    const handleCloseDialog = () => {
        setDialogOpen(false);
    };

    return (
        <Root>
            <FilterBox>
                <CommonBox>
                    <CommonSelect filter={searchFilter} handleChangeFilter={handleChangeSearchFilter} menuList={searchMenuList} />
                    <TextFieldWidth>
                        <CommonTextField
                            placeholder={searchFilter === 0 ? (isLeader ? '강의명 입력' : '교육과정명 입력') : '강사명 입력'}
                        />
                    </TextFieldWidth>
                    <CommonButton
                        width={'74px'}
                        height={'40px'}
                        text={'검색'}
                        background={'#2F3640'}
                        color={'#fff'}
                        fontWeight={700}
                        fontSize={'0.938rem'}
                        disabled={false}
                    />
                </CommonBox>
                <FilterSelectBox>
                    <CommonSelect filter={filter} handleChangeFilter={handleChangeFilter} menuList={menuList} />
                </FilterSelectBox>
            </FilterBox>
            <LectureCompletedDetailComponent
                isLeader={isLeader}
                items={isLeader ? valueList : studentValueList}
                handleClickDialog={handleClickDialog}
            />

            <CommonDialog
                open={dialogOpen}
                title={'알림'}
                message={<Typography>서비스 준비 중입니다.</Typography>}
                actionBtn1={false}
                btnText2={'확인'}
                onClose={handleCloseDialog}
                btnClick2={handleCloseDialog}
            />
        </Root>
    );
}

LectureCompleted.propTypes = {
    isLeader: PropTypes.bool
};

export default LectureCompleted;
