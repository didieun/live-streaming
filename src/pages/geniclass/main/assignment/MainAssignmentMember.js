import React from 'react';
import { Box } from '@mui/material';
import { FilterSelectBox, FlexEnd } from '../../common/styled/CommonStyle';
import { ReactComponent as PencilLineOutlineIcon } from '../../../../assets/images/PencilLineOutlineIcon.svg';
import { ReactComponent as CheckFatIcon } from '../../../../assets/images/CheckFatIcon.svg';
import { ReactComponent as FileXIcon } from '../../../../assets/images/FileXIcon.svg';
import MainMemberAnswerCountComponent from '../memberAnswerCount/MainMemberAnswerCountComponent';
import CommonSelect from '../../common/CommonSelect';
import MainEvaluationAssignmentMemberList from '../EvaluationAssignmentList/MainEvaluationAssignmentMemberList';

const MainAssignmentMember = (props) => {
    const [filter, setFilter] = React.useState(0);
    const menuList = [{ text: '등록일 순' }, { text: '최근 제출일 순' }, { text: '가나다순' }];
    const countList = [
        { icon: <PencilLineOutlineIcon />, text: '평가', number: 1 },
        { icon: <CheckFatIcon />, text: '제출완료', number: 2 },
        { icon: <FileXIcon />, text: '미제출', number: 0 }
    ];

    const handleChangeFilter = (event) => {
        setFilter(event.target.value);
    };

    return (
        <Box>
            <MainMemberAnswerCountComponent items={countList} />
            <FlexEnd sx={{ marginTop: '30px', marginBottom: '14px' }}>
                <FilterSelectBox>
                    <CommonSelect filter={filter} handleChangeFilter={handleChangeFilter} menuList={menuList} />
                </FilterSelectBox>
            </FlexEnd>
            <MainEvaluationAssignmentMemberList />
        </Box>
    );
};

MainAssignmentMember.propTypes = {};

export default MainAssignmentMember;
