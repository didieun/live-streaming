import React from 'react';
import { styled } from '@mui/material/styles';
import { Box, Tab, Tabs } from '@mui/material';
import MainTitleComponent from '../title/MainTitleComponent';
// import { FormattedMessage } from 'react-intl';
import MainEmptyComponent from '../empty/MainEmptyComponent';
// import WritingDialogComponent from '../../../../views/dialog/WritingDialogComponent';
import CommonDialog from '../../common/CommonDialog';
import MainQuestionList from './MainQuestionList';
import CommonSelect from '../../common/CommonSelect';
import { FilterSelectBox, FlexEnd } from '../../common/styled/CommonStyle';
import MainInquiryList from './MainInquiryList';
import MainMemberInquiryList from './MainMemberInquiryList';

const Root = styled(Box)(({ theme }) => ({
    width: '100%',
    marginTop: 40
}));

const TabsStyle = styled(Tabs)(({ theme }) => ({
    width: '100%',
    marginTop: 26,
    '& .MuiTabs-flexContainer': {
        gap: 15
    },
    '& .MuiTab-root': {
        minWidth: 30,
        boxSizing: 'border-box',
        padding: '12px 0px',
        color: '#bbb',
        fontSize: '1.125rem',
        fontWeight: 500,
        letterSpacing: '-0.377px',
        '&.Mui-selected': {
            color: '#333'
        }
    },
    '& .MuiTabs-indicator': {
        height: 2,
        backgroundColor: '#F5CD79'
    }
}));

const ContentsBox = styled(Box)(({ theme }) => ({
    width: '100%',
    marginTop: 14,
    boxSizing: 'border-box'
}));

const MainInquiryComponent = (props) => {
    const [dialogOpen, setDialogOpen] = React.useState(false);
    const [isLeader, setIsLeader] = React.useState(true);
    const [value, setValue] = React.useState(0);
    const [filter, setFilter] = React.useState(0);
    const questionList = [{ text: '최신순' }, { text: '오래된순' }];
    const inquiryList = [{ text: '전체' }, { text: '답변완료' }, { text: '미답변' }];

    const handleChangeFilter = (event) => {
        setFilter(event.target.value);
    };

    const handleClickDialog = () => {
        setDialogOpen(true);
    };

    const handleCloseDialog = () => {
        setDialogOpen(false);
    };

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Root>
            <MainTitleComponent
                title={'문의'}
                onClick={handleClickDialog}
                btnText={'쓰기'}
                actions={isLeader ? (value === 0 ? true : false) : value === 0 ? false : true}
            />
            <TabsStyle value={value} onChange={handleChange}>
                <Tab label="자주 묻는 질문" value={0} />
                <Tab label="문의내역" value={1} />
            </TabsStyle>

            <FlexEnd>
                <FilterSelectBox>
                    <CommonSelect
                        filter={filter}
                        handleChangeFilter={handleChangeFilter}
                        menuList={value === 0 ? questionList : inquiryList}
                    />
                </FilterSelectBox>
            </FlexEnd>

            <ContentsBox>
                {value === 0 ? <MainQuestionList isLeader={isLeader} /> : isLeader ? <MainInquiryList /> : <MainMemberInquiryList />}

                {/* 문의가 없을때 */}
                {/*<MainEmptyComponent*/}
                {/*    emptyText={value === 0 ? '등록된 내용이 없습니다.' : <FormattedMessage id="course_inquiry_history_management_msg2" />}*/}
                {/*/>*/}
            </ContentsBox>

            {/*<CommonDialog*/}
            {/*    open={dialogOpen}*/}
            {/*    onClose={handleCloseDialog}*/}
            {/*    title={'글쓰기'}*/}
            {/*    children={<WritingDialogComponent />}*/}
            {/*    actionBtn1={false}*/}
            {/*    btnText2={'게시'}*/}
            {/*/>*/}
        </Root>
    );
};

MainInquiryComponent.propTypes = {};

export default MainInquiryComponent;
