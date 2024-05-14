import React from 'react';
import { styled } from '@mui/material/styles';
import { Box, Typography } from '@mui/material';
import { FlexEnd } from '../../common/styled/CommonStyle';
import CommonSelect from '../../common/CommonSelect';
import CommonButton from '../../common/CommonButton';
import { useViewSize } from '../../../../store';
import StudentManagementTableComponent from './StudentManagementTableComponent';
import CommonTextField from '../../common/CommonTextField';

const Root = styled(Box)(({ theme, isLg }) => ({
    width: isLg ? '100%' : 1280,
    margin: '60px auto 100px',
    boxSizing: 'border-box'
}));

const TitleBox = styled(Typography)(({ theme }) => ({
    '&.MuiTypography-root': {
        fontSize: '1.5rem',
        color: '#333',
        fontWeight: 700,
        marginBottom: 60,
        textAlign: 'left'
    }
}));

const ControlBox = styled(Box)(({ theme }) => ({
    display: 'flex',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    marginBottom: 14
}));

const SubTextStyle = styled(Typography)(({ theme }) => ({
    '&.MuiTypography-root': {
        fontSize: '1rem',
        color: '#333',
        fontWeight: 400,
        letterSpacing: '-0.5px',
        '& span': {
            color: '#3190ff',
            fontWeight: 500
        }
    }
}));

const CommonBox = styled(FlexEnd)(({ theme }) => ({
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

const PcSelectBox = styled(Box)(({ theme }) => ({
    '& .MuiFormControl-root': {
        '& .MuiInputBase-root': {
            minHeight: '40px !important',
            height: '40px !important'
        }
    },
    [theme.breakpoints.down('md')]: {
        display: 'none'
    }
}));

const TabletSelectBox = styled(Box)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'flex-end',
    marginBottom: 14,
    '& .MuiFormControl-root': {
        minWidth: 209,
        '& .MuiInputBase-root': {
            minHeight: '40px !important',
            height: '40px !important'
        }
    },
    [theme.breakpoints.up('md')]: {
        display: 'none'
    }
}));

const StudentManagementComponent = (props) => {
    const { isLg } = useViewSize();
    const [filterName, setFilterName] = React.useState(0);
    const [filter, setFilter] = React.useState(0);
    const menuList = [{ text: '이름' }, { text: '메일' }];

    const handleChangeFilter = (event) => {
        setFilter(event.target.value);
    };

    return (
        <Root isLg={isLg}>
            <TitleBox>학생 관리</TitleBox>
            <TabletSelectBox>
                <CommonSelect filter={filter} handleChangeFilter={handleChangeFilter} menuList={menuList} />
            </TabletSelectBox>
            <ControlBox>
                <SubTextStyle>
                    전체 <span>355</span>건
                </SubTextStyle>
                <CommonBox>
                    <PcSelectBox>
                        <CommonSelect filter={filter} handleChangeFilter={handleChangeFilter} menuList={menuList} />
                    </PcSelectBox>
                    <Box>
                        <TextFieldWidth>
                            <CommonTextField placeholder={filter === 0 ? '학생 이름 입력' : '메일 입력'} />
                        </TextFieldWidth>
                    </Box>

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
            </ControlBox>

            <StudentManagementTableComponent />
        </Root>
    );
};

StudentManagementComponent.propTypes = {};

export default StudentManagementComponent;
