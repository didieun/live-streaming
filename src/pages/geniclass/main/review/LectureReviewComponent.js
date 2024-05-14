import React from 'react';
import styled from '@emotion/styled/macro';
import { Box, Button, Typography } from '@mui/material';
import CommonSelect from '../../common/CommonSelect';
import { FilterSelectBox, Flex, FlexEnd, IconButtonStyle, LinearProgressStyle, RatingStyle } from '../../common/styled/CommonStyle';
import { ReactComponent as GrayStar } from '../../../../assets/images/GrayStar.svg';
import { ReactComponent as YellowStar } from '../../../../assets/images/YellowStar.svg';
import { ReactComponent as FlagIcon } from '../../../../assets/images/FlagIcon.svg';
import { ReactComponent as CalendarRightArrowIcon } from '../../../../assets/images/CalendarRightArrowIcon.svg';
import { ReactComponent as UserIcon } from '../../../../assets/images/UserIcon.svg';
import TestProfileImage from '../../../../assets/images/TestProfileImage.jpeg';
import CommonButton from '../../common/CommonButton';
import LectureReviewReplyComponent from './reply/LectureReviewReplyComponent';
import LectureReviewWritingComponent from './writing/LectureReviewWritingComponent';
import CommonDialog from '../../common/CommonDialog';
// import WritingDialogComponent from '../../../../views/dialog/WritingDialogComponent';

const Container = styled(Box)(({ theme }) => ({
    width: '100%',
    padding: '23px 0 80px',
    boxSizing: 'border-box'
}));

const ResultBox = styled(Box)(({ theme }) => ({
    width: '100%',
    padding: '25px',
    boxSizing: 'border-box',
    display: 'flex',
    alignItems: 'center',
    background: '#F5F6FA',
    marginTop: 24
}));

const ResultBoxIn = styled(Box)(({ theme }) => ({
    width: '50%',
    boxSizing: 'border-box',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
}));

const AverageText = styled(Typography)(({ theme }) => ({
    '&.MuiTypography-root': {
        fontSize: '2.188rem',
        color: '#000',
        fontWeight: 400
    }
}));

const RatingText = styled(Typography)(({ theme }) => ({
    '&.MuiTypography-root': {
        fontSize: '1rem',
        color: '#737373',
        fontWeight: 400,
        letterSpacing: '-0.32px',
        marginTop: 28,
        '& span': {
            color: '#3190FF',
            fontWeight: 600
        }
    }
}));

const PercentBox = styled(Box)(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    marginBottom: 20,
    '&:last-child': {
        marginBottom: 0
    },
    [theme.breakpoints.down('md')]: {
        '& .MuiLinearProgress-root': {
            width: '300px !important'
        }
    },
    [theme.breakpoints.down('sd')]: {
        '& .MuiLinearProgress-root': {
            width: '200px !important'
        }
    }
}));

const TextStyle = styled(Typography)(({ theme }) => ({
    '&.MuiTypography-root': {
        width: 34,
        fontSize: '0.875rem',
        color: '#2F3640',
        fontWeight: 400,
        letterSpacing: '-0.28px'
    }
}));

const ReviewBox = styled(Box)(({ theme, reply, border }) => ({
    width: '100%',
    padding: 24,
    boxSizing: 'border-box',
    borderBottom: border ? '0' : '1px solid #D5D4DC',
    background: '#fff',
    display: 'flex',
    alignItems: 'flex-start',
    cursor: reply ? 'pointer' : 'auto'
}));

const ReviewLeft = styled(Box)(({ theme }) => ({
    flex: 4
}));

const ReviewRight = styled(Box)(({ theme }) => ({
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end'
}));

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

const MoreButton = styled(Button)(({ theme }) => ({
    '&.MuiButtonBase-root': {
        padding: 0,
        marginTop: 9,
        background: 'transparent',
        '& p': {
            fontSize: '0.875rem',
            color: '#737373',
            letterSpacing: '-0.5px',
            fontWeight: 400,
            marginRight: 6
        },
        '& svg': {
            width: 16,
            height: 16,
            '& path': {
                fill: '#737373'
            }
        },
        '&:hover': {
            background: 'transparent'
        }
    }
}));

function LectureReviewComponent(props) {
    const [filter, setFilter] = React.useState(0);
    const [replyBox, setReplyBox] = React.useState(false);
    const [writing, setWriting] = React.useState(false);
    const [reportDialog, setReportDialog] = React.useState(false);
    const [deleteDialog, setDeleteDialog] = React.useState(false);
    const [reviewWrite, setReviewWrite] = React.useState(false);
    const menuList = [{ text: '최신순' }, { text: '별점높은순' }, { text: '별점낮은순' }];
    const scoreList = [
        { score: '5점', percent: 95 },
        { score: '4점', percent: 35 },
        { score: '3점', percent: 0 },
        { score: '2점', percent: 0 },
        { score: '1점', percent: 0 }
    ];

    const reviewList = [
        {
            index: 0,
            ratingValue: 4,
            name: '김**',
            date: '2024.08.06',
            review: 'Lorem ipsum dolor sit amet consectetur. Rutrum in morbi congue sed etiam maecenas in consequat ac. Id ultrices fermentum pretium velit eu tellus condimentum tortor egestas. Tempor nisl blandit vitae nunc sit pharetra odio scelerisque tincidunt. Leo non tellus tortor elit faucibus purus ultrices. Proin est vel aenean faucibus sem. Hac turpis.',
            reply: true
        },
        {
            index: 0,
            ratingValue: 2,
            name: '김**',
            date: '2024.08.06',
            review: 'Lorem ipsum dolor sit amet consectetur. Rutrum in morbi congue sed etiam maecenas in consequat ac. Id ultrices fermentum pretium velit eu tellus condimentum tortor egestas. Tempor nisl blandit vitae nunc sit pharetra odio scelerisque tincidunt. Leo non tellus tortor elit faucibus purus ultrices. Proin est vel aenean faucibus sem. Hac turpis.',
            reply: false
        },
        {
            index: 0,
            ratingValue: 4,
            name: '김**',
            date: '2024.08.06',
            review: 'Lorem ipsum dolor sit amet consectetur. Rutrum in morbi congue sed etiam maecenas in consequat ac.',
            reply: true
        }
    ];

    const handleClickDelete = () => {
        setDeleteDialog(true);
    };

    const handleCloseDelete = () => {
        setDeleteDialog(false);
    };

    const handleClickReviewWrite = () => {
        setReviewWrite(true);
    };

    const handleCloseReviewWrite = () => {
        setReviewWrite(false);
    };

    const handleChangeFilter = (event) => {
        setFilter(event.target.value);
    };

    const handleClickReply = () => {
        setReplyBox(!replyBox);
    };

    const handleClickWriting = () => {
        setWriting(true);
    };

    const handleCloseWriting = () => {
        setWriting(false);
    };

    const handleClickReportDialog = () => {
        setReportDialog(true);
    };

    const handleCloseReportDialog = () => {
        setReportDialog(false);
    };

    return (
        <Container>
            <Flex sx={{ '& button': { marginLeft: '10px' } }}>
                <FilterSelectBox sx={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>
                    <CommonSelect filter={filter} handleChangeFilter={handleChangeFilter} menuList={menuList} />
                </FilterSelectBox>

                {/* 학생일때 */}
                <CommonButton
                    width={'100px'}
                    height={'37px'}
                    text={'리뷰 작성'}
                    background={'#2F3640'}
                    color={'#fff'}
                    fontWeight={500}
                    fontSize={'1rem'}
                    onClick={handleClickReviewWrite}
                />
            </Flex>

            <ResultBox>
                <ResultBoxIn>
                    <AverageText>4.1</AverageText>
                    <RatingStyle name="rating" defaultValue={4} max={5} icon={<YellowStar />} emptyIcon={<GrayStar />} disabled={true} />
                    <RatingText>
                        <span>17개</span>의 리뷰가 있습니다.
                    </RatingText>
                </ResultBoxIn>
                <ResultBoxIn sx={{ alignItems: 'flex-start !important' }}>
                    {scoreList.map((list, i) => (
                        <PercentBox key={i}>
                            <TextStyle>{list.score}</TextStyle>
                            <LinearProgressStyle variant="determinate" value={list.percent} />
                            <TextStyle>{list.percent}%</TextStyle>
                        </PercentBox>
                    ))}
                </ResultBoxIn>
            </ResultBox>
            {reviewList.map((list) => (
                <Box key={list.index}>
                    <ReviewBox reply={list.reply} border={replyBox || writing} onClick={list.reply ? handleClickReply : null}>
                        <ReviewLeft>
                            <Flex>
                                <AvatarBox>
                                    <img src={TestProfileImage} alt={'프로필 이미지'} />
                                    {/*<UserIcon />*/}
                                </AvatarBox>
                                <Box>
                                    <RatingStyle
                                        name="rating"
                                        defaultValue={list.ratingValue}
                                        max={5}
                                        icon={<YellowStar style={{ width: 22, height: 22 }} />}
                                        emptyIcon={<GrayStar style={{ width: 22, height: 22 }} />}
                                        sx={{ '& label': { marginRight: '4px !important' } }}
                                        disabled={true}
                                    />
                                    <Flex>
                                        <ReviewText>{list.name}</ReviewText>
                                        <ReviewText>{list.date}</ReviewText>
                                    </Flex>
                                </Box>
                            </Flex>
                            <ReviewDetailBox>
                                <Typography>{list.review}</Typography>
                                <MoreButton disableRipple>
                                    <Typography>더보기</Typography>
                                    <CalendarRightArrowIcon />
                                </MoreButton>
                            </ReviewDetailBox>
                        </ReviewLeft>
                        <ReviewRight sx={{ '& .MuiButton-root:first-child': { marginRight: '10px' } }}>
                            {!list.reply && (
                                <CommonButton
                                    width={'100px'}
                                    height={'37px'}
                                    text={'댓글쓰기'}
                                    background={'#fff'}
                                    border={'#DDD'}
                                    color={'#737373'}
                                    fontWeight={500}
                                    fontSize={'0.875rem'}
                                    disabled={false}
                                    onClick={handleClickWriting}
                                />
                            )}

                            <IconButtonStyle onClick={handleClickReportDialog} sx={{ width: '24px', height: '24px' }} disableRipple>
                                <FlagIcon />
                            </IconButtonStyle>

                            {/* 학생일때 */}
                            {/*<CommonButton*/}
                            {/*    width={'100px'}*/}
                            {/*    height={'37px'}*/}
                            {/*    text={'수정'}*/}
                            {/*    background={'#fff'}*/}
                            {/*    border={'#DDD'}*/}
                            {/*    color={'#737373'}*/}
                            {/*    fontWeight={500}*/}
                            {/*    fontSize={'1rem'}*/}
                            {/*    disabled={false}*/}
                            {/*    onClick={handleClickWriting}*/}
                            {/*/>*/}

                            {/*<CommonButton*/}
                            {/*    width={'100px'}*/}
                            {/*    height={'37px'}*/}
                            {/*    text={'삭제'}*/}
                            {/*    background={'#2F3640'}*/}
                            {/*    color={'#fff'}*/}
                            {/*    fontWeight={500}*/}
                            {/*    fontSize={'1rem'}*/}
                            {/*    onClick={handleClickDelete}*/}
                            {/*/>*/}
                        </ReviewRight>
                    </ReviewBox>

                    {replyBox && <LectureReviewReplyComponent />}
                    {writing && <LectureReviewWritingComponent handleCloseWriting={handleCloseWriting} />}
                </Box>
            ))}

            <CommonDialog
                open={reportDialog}
                title={'알림'}
                message={
                    <Typography>
                        리뷰를 신고 하시겠습니까?
                        <br />
                        관리자가 확인 후 조취를 취합니다.
                    </Typography>
                }
                actionBtn1={false}
                btnText2={'확인'}
                onClose={handleCloseReportDialog}
                btnClick2={handleCloseReportDialog}
            />

            {/*<CommonDialog*/}
            {/*    open={reviewWrite}*/}
            {/*    title={'리뷰 작성'}*/}
            {/*    children={<WritingDialogComponent />}*/}
            {/*    actionBtn1={false}*/}
            {/*    btnText2={'작성 완료'}*/}
            {/*    onClose={handleCloseReviewWrite}*/}
            {/*    btnClick2={handleCloseReviewWrite}*/}
            {/*/>*/}

            <CommonDialog
                open={deleteDialog}
                title={'알림'}
                message={<Typography>해당 댓글을 삭제 하시겠습니까?</Typography>}
                actionBtn1={false}
                btnText2={'확인'}
                onClose={handleCloseDelete}
                btnClick2={handleCloseDelete}
            />

            {/* 학생일때 삭제 */}
            <CommonDialog
                open={false}
                title={'알림'}
                message={<Typography>리뷰를 삭제하시겠습니까?</Typography>}
                onClose={handleCloseDelete}
                btnClick2={handleCloseDelete}
            />
        </Container>
    );
}
LectureReviewComponent.propTypes = {};

export default LectureReviewComponent;
