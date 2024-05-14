import React from 'react';
import { styled } from '@mui/material/styles';
import { Box, Select } from '@mui/material';
import MainTitleComponent from '../title/MainTitleComponent';
// import { FormattedMessage } from 'react-intl';
import MainEmptyComponent from '../empty/MainEmptyComponent';
import MainEvaluationAssignmentLeaderList from '../EvaluationAssignmentList/MainEvaluationAssignmentLeaderList';
import { FilterSelectBox, FlexSpace } from '../../common/styled/CommonStyle';
import CommonSelect from '../../common/CommonSelect';
import MainEvaluationMember from './MainEvaluationMember';
import PropTypes from 'prop-types';

const Root = styled(Box)(({ theme }) => ({
    width: '100%',
    marginTop: 40
}));

const ContentsBox = styled(Box)(({ theme }) => ({
    width: '100%',
    marginTop: 14,
    boxSizing: 'border-box'
}));

const MainEvaluationComponent = (props) => {
    const [isLeader, setIsLeader] = React.useState(false);
    const [filter, setFilter] = React.useState(0);
    const menuList = [
        { text: '제출일 순' },
        { text: '제출수 많은 순' },
        { text: '제출수 적은 순' },
        // { text: <FormattedMessage id="alphabetical_order" /> }
    ];

    const handleChangeFilter = (event) => {
        setFilter(event.target.value);
    };

    return (
        <Root>
            <FlexSpace>
                <MainTitleComponent title={'평가'} actions={false} />
                {isLeader && (
                    <FilterSelectBox>
                        <CommonSelect filter={filter} handleChangeFilter={handleChangeFilter} menuList={menuList} />
                    </FilterSelectBox>
                )}
            </FlexSpace>

            <ContentsBox>
                {isLeader ? <MainEvaluationAssignmentLeaderList /> : <MainEvaluationMember />}

                {/* 문의 없을때 */}
                {/*<MainEmptyComponent emptyText={'등록된 평가가 없습니다.'} />*/}
            </ContentsBox>
        </Root>
    );
};

MainEvaluationComponent.propTypes = {
    handleChangeTab: PropTypes.func
};

export default MainEvaluationComponent;
