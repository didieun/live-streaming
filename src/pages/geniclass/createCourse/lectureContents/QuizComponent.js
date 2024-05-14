import React from 'react';
import styled from '@emotion/styled/macro';
import { Box } from '@mui/material';
import { useViewSize } from '../../../../store';
import ShortAnswerComponent from './ShortAnswerComponent';
import DescriptiveComponent from './DescriptiveComponent';
import MultipleChoiceComponent from './MultipleChoiceComponent';
import AssignmentComponent from './AssignmentComponent';
import PropTypes from 'prop-types';
import LectureComponent from '../../lecture/lecture/LectureComponent';

const Root = styled(Box)(({ theme }) => ({
    marginBottom: 20
}));

const QuizComponent = (props) => {
    const { lecture } = props;
    const { isLg } = useViewSize();

    return (
        <Root>
            {/*객관식 단답형*/}
            <ShortAnswerComponent lecture={lecture} />

            {/*객관식 다답형*/}
            <MultipleChoiceComponent lecture={lecture} />

            {/* 주관식 단답형, 서술형*/}
            <DescriptiveComponent lecture={lecture} />

            {/* 과제 */}
            <AssignmentComponent lecture={lecture} isLeader={true} />
        </Root>
    );
};

LectureComponent.propTypes = {
    lecture: PropTypes.bool
};

export default QuizComponent;
