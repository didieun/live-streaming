import React from 'react';
import styled from '@emotion/styled/macro';
import { Box, Typography } from '@mui/material';
import { Flex, FlexColumn, FlexEnd } from '../../../common/styled/CommonStyle';
import CommonButton from '../../../common/CommonButton';
import LectureReviewWritingComponent from '../writing/LectureReviewWritingComponent';
import CommonDialog from '../../../common/CommonDialog';
import { ReactComponent as UserIcon } from '../../../../../assets/images/UserIcon.svg';
import TestProfileImage from '../../../../../assets/images/TestProfileImage.jpeg';

const AvatarBox = styled(Box)(({ theme }) => ({
    width: 68,
    height: 68,
    borderRadius: '50%',
    overflow: 'hidden',
    background: '#bbb',
    marginRight: 12,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    '& img': {
        width: '100%',
        height: '100%',
        objectFit: 'cover'
    },
    '& svg': {
        '& path': {
            fill: '#fff'
        }
    }
}));

const ReviewText = styled(Typography)(({ theme }) => ({
    '&.MuiTypography-root': {
        fontSize: '1rem',
        color: '#737373',
        fontWeight: 500,
        marginRight: 30
    }
}));

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
    padding: 24,
    boxSizing: 'border-box',
    background: '#F5F6FA'
}));

function LectureReviewReplyComponent(props) {
    const [writing, setWriting] = React.useState(false);
    const [deleteDialog, setDeleteDialog] = React.useState(false);

    const handleClickWriting = () => {
        setWriting(true);
    };

    const handleCloseWriting = () => {
        setWriting(false);
    };

    const handleClickDelete = () => {
        setDeleteDialog(true);
    };

    const handleCloseDelete = () => {
        setDeleteDialog(false);
    };

    return (
        <Box>
            {writing ? (
                <LectureReviewWritingComponent handleCloseWriting={handleCloseWriting} />
            ) : (
                <ReplyBox>
                    <Flex>
                        <AvatarBox>
                            {/*<img src={TestProfileImage} alt={'프로필 이미지'} />*/}
                            <UserIcon />
                        </AvatarBox>
                        <FlexColumn>
                            <ReviewText>김**</ReviewText>
                            <ReviewText>2024.08.06</ReviewText>
                        </FlexColumn>
                    </Flex>
                    <ReviewDetailBox>
                        <Typography>
                            Lorem ipsum dolor sit amet consectetur. Rutrum in morbi congue sed etiam maecenas in consequat ac. Id ultrices
                            fermentum pretium velit eu tellus condimentum tortor egestas. Tempor nisl blandit vitae nunc sit pharetra odio
                            scelerisque tincidunt. Leo non tellus tortor elit faucibus purus ultrices. Proin est vel aenean faucibus sem.
                            Hac turpis.
                        </Typography>
                    </ReviewDetailBox>

                    <FlexEnd sx={{ marginTop: '14px', '& button:last-child': { marginLeft: '10px' } }}>
                        <CommonButton
                            width={'100px'}
                            height={'37px'}
                            text={'수정'}
                            background={'#fff'}
                            border={'#DDD'}
                            color={'#737373'}
                            fontWeight={500}
                            fontSize={'1rem'}
                            disabled={false}
                            onClick={handleClickWriting}
                        />

                        <CommonButton
                            width={'100px'}
                            height={'37px'}
                            text={'삭제'}
                            background={'#2F3640'}
                            color={'#fff'}
                            fontWeight={500}
                            fontSize={'1rem'}
                            onClick={handleClickDelete}
                        />
                    </FlexEnd>
                </ReplyBox>
            )}

            <CommonDialog
                open={deleteDialog}
                title={'알림'}
                message={<Typography>해당 댓글을 삭제 하시겠습니까?</Typography>}
                actionBtn1={false}
                btnText2={'확인'}
                onClose={handleCloseDelete}
                btnClick2={handleCloseDelete}
            />
        </Box>
    );
}
LectureReviewReplyComponent.propTypes = {};

export default LectureReviewReplyComponent;
