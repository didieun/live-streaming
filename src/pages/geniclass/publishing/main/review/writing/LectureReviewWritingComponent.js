import React from 'react';
import styled from '@emotion/styled/macro';
import { Box, Typography } from '@mui/material';
import { Flex, FlexColumn, FlexEnd } from '../../../common/styled/CommonStyle';
import CommonButton from '../../../common/CommonButton';
import PropTypes from 'prop-types';
import CommonTextarea from '../../../common/CommonTextarea';

const ReviewDetailBox = styled(Box)(({ theme }) => ({
    width: '100%',
    height: 'auto',
    marginTop: 14,
    '& p': {
        fontSize: '0.875rem',
        color: '#737373',
        fontWeight: 400,
        lineHeight: '20px',
        wordBreak: 'keep-all',
        textOverflow: 'unset',
        whiteSpace: 'unset',
        textAlign: 'left'
    }
}));

const ReplyBox = styled(Box)(({ theme }) => ({
    width: '100%',
    padding: '0 0 24px',
    boxSizing: 'border-box',
    borderBottom: '1px solid #D5D4DC'
}));

function LectureReviewWritingComponent(props) {
    const { handleCloseWriting } = props;
    return (
        <ReplyBox>
            <ReviewDetailBox>
                <CommonTextarea minRows={10} maxRows={10} placeholder={'댓글을 입력해주세요.(최대1000자)'} />
            </ReviewDetailBox>

            <FlexEnd sx={{ marginTop: '14px', '& button:last-child': { marginLeft: '10px' } }}>
                <CommonButton
                    width={'100px'}
                    height={'37px'}
                    text={'취소'}
                    background={'#fff'}
                    border={'#DDD'}
                    color={'#737373'}
                    fontWeight={500}
                    fontSize={'1rem'}
                    disabled={false}
                    onClick={handleCloseWriting}
                />

                <CommonButton
                    width={'100px'}
                    height={'37px'}
                    text={'완료'}
                    background={'#2F3640'}
                    color={'#fff'}
                    fontWeight={500}
                    fontSize={'1rem'}
                    disabled={false}
                />
            </FlexEnd>
        </ReplyBox>
    );
}
LectureReviewWritingComponent.propTypes = {
    handleCloseWriting: PropTypes.func
};

export default LectureReviewWritingComponent;
