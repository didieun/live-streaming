import React from 'react';
import { styled } from '@mui/material/styles';
import { Box, Typography } from '@mui/material';
import { FlexEnd } from '../../common/styled/CommonStyle';
import CommonSelect from '../../common/CommonSelect';
import CommonButton from '../../common/CommonButton';
import { useViewSize } from '../../../../store';
import GroupManagementTableComponent from './GroupManagementTableComponent';
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
    marginRight: 10,
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

const GroupManagementComponent = (props) => {
    const { isLg } = useViewSize();
    const [filter, setFilter] = React.useState(0);
    const menuList = [{ text: '그룹명' }, { text: '이름' }];
    const [createDialog, setCreateDialog] = React.useState(false);

    const handleChangeFilter = (event) => {
        setFilter(event.target.value);
    };

    const handleClickCreateDialog = () => {
        setCreateDialog(true);
    };

    const handleCloseDialog = () => {
        setCreateDialog(false);
    };

    return (
        <Root isLg={isLg}>
            <TitleBox>그룹관리</TitleBox>
            <FlexEnd sx={{ marginBottom: '14px' }}>
                <TabletSelectBox>
                    <CommonSelect filter={filter} handleChangeFilter={handleChangeFilter} menuList={menuList} />
                </TabletSelectBox>
                <CommonButton
                    width={'74px'}
                    height={'40px'}
                    text={'그룹 생성'}
                    background={'#fff'}
                    border={'#D5D4DC'}
                    color={'#333'}
                    fontWeight={700}
                    fontSize={'0.938rem'}
                    disabled={false}
                    onClick={handleClickCreateDialog}
                />
            </FlexEnd>

            <ControlBox>
                <SubTextStyle>
                    전체 <span>355</span>건
                </SubTextStyle>
                <CommonBox>
                    <PcSelectBox>
                        <CommonSelect filter={filter} handleChangeFilter={handleChangeFilter} menuList={menuList} />
                    </PcSelectBox>
                    <TextFieldWidth>
                        <CommonTextField placeholder={filter === 0 ? '그룹명 입력' : '학생 이름 입력'} />
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
            </ControlBox>

            <GroupManagementTableComponent
                createDialog={createDialog}
                handleClickCreateDialog={handleClickCreateDialog}
                handleCloseCreateDialog={handleCloseDialog}
            />
        </Root>
    );
};

GroupManagementComponent.propTypes = {};

export default GroupManagementComponent;
