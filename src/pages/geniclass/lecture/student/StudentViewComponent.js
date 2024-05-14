import React from 'react';
import styled from '@emotion/styled/macro';
import { Box, Button, Typography } from '@mui/material';
import { Flex, FlexCenter, FlexColumn, FlexEnd, FlexSpace, IconButtonStyle } from '../../common/styled/CommonStyle';
import CommonTextarea from '../../common/CommonTextarea';
import CommonDialog from '../../common/CommonDialog';
import { ReactComponent as ArrowDownIcon } from '../../../../assets/images/ArrowDownIcon.svg';
import { ReactComponent as UserIcon } from '../../../../assets/images/UserIcon.svg';
import { useViewSize } from '../../../../store';
import LectureContentComponent from '../../createCourse/lectureContents/LectureContentComponent';
import PropTypes from 'prop-types';
import CommonRadioGroup from '../../common/CommonRadioGroup';
import TestProfileImage from '../../../../assets/images/TestProfileImage.jpeg';

const AvatarBox = styled(Box)(({ theme }) => ({
    width: 34,
    height: 34,
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
        width: 20,
        height: 20,
        '& path': {
            fill: '#fff'
        }
    }
}));

const UserName = styled(Typography)(({ theme }) => ({
    '&.MuiTypography-root': {
        fontSize: '1rem',
        color: '#333',
        fontWeight: 600,
        textAlign: 'left'
    }
}));

const SubText = styled(Typography)(({ theme }) => ({
    '&.MuiTypography-root': {
        fontSize: '0.875rem',
        color: '#737373',
        fontWeight: 400,
        textAlign: 'left'
    }
}));

const PageBox = styled(Box)(({ theme }) => ({
    minWidth: 80,
    height: 28,
    padding: '0 8px',
    boxSizing: 'border-box',
    borderRadius: 100,
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: '#F5F6FA',
    margin: '0 10px',
    '& p': {
        fontSize: '0.875rem',
        color: '#737373',
        fontWeight: 400,
        letterSpacing: '-0.28px',
        '& span': {
            color: '#333'
        }
    }
}));

const TopTextBox = styled(FlexCenter)(({ theme }) => ({
    minWidth: 73,
    height: 33,
    padding: '0 8px',
    border: '1px solid #D5D4DC',
    boxSizing: 'border-box',
    borderRadius: 4,
    background: '#fff',
    '& p': {
        fontSize: '0.875rem',
        fontWeight: 500,
        color: '#666'
    }
}));

const TextStyle = styled(Typography)(({ theme }) => ({
    '&.MuiTypography-root': {
        fontSize: '1.125rem',
        color: '#333',
        fontWeight: 700,
        textAlign: 'left',
        wordBreak: 'keep-all',
        textOverflow: 'unset',
        whiteSpace: 'unset',
        marginRight: 12
    }
}));

const EvaluationTextStyle = styled(TextStyle)(({ theme }) => ({
    '&.MuiTypography-root': {
        color: '#00BEEA'
    }
}));

const AssignmentTextStyle = styled(TextStyle)(({ theme }) => ({
    '&.MuiTypography-root': {
        color: '#A674ED'
    }
}));

const ChipBox = styled(FlexCenter)(({ theme }) => ({
    minWidth: 48,
    height: 30,
    borderRadius: 6,
    padding: '0 12px',
    boxSizing: 'border-box',
    marginRight: 14,
    '& p': {
        fontSize: '0.875rem',
        color: '#fff',
        fontWeight: 700,
        letterSpacing: '-0.5px'
    }
}));

const EvaluationChipBox = styled(ChipBox)(({ theme }) => ({
    background: '#00BEEA',
    marginRight: 40
}));

const AssignmentChipBox = styled(ChipBox)(({ theme }) => ({
    background: '#A674ED'
}));

const TopTitleButton = styled(Button)(({ theme }) => ({
    '&.MuiButtonBase-root': {
        background: 'transparent',
        padding: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 15,
        '& p': {
            color: '#2F3640',
            fontSize: '1.125rem',
            fontWeight: 500,
            marginRight: 8
        }
    }
}));

const LayoutContentsBox = styled(Box)(({ theme }) => ({
    width: '100%'
}));

const LayoutContentsBox2 = styled(LayoutContentsBox)(({ theme, isMd }) => ({
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    overflowX: 'auto',
    '&::-webkit-scrollbar': {
        width: '5px',
        height: '5px'
    },
    '&::-webkit-scrollbar-thumb': {
        background: '#7A7A7A',
        borderRadius: '10px',
        backgroundClip: 'padding-box'
    },
    '&::-webkit-scrollbar-track': {
        borderRadius: '10px',
        background: '#E8E8E8',
        marginTop: 5,
        marginBottom: 5
    }
}));

const LayoutContentsBoxIn2 = styled(Box)(({ theme }) => ({
    height: 'calc(100vh - 78px - 50px - 62px - 36px - 59px - 30px - 30px - 33px - 15px - 28px - 30px)',
    minWidth: 550,
    boxSizing: 'border-box',
    overflowY: 'auto',
    padding: '0 8px',
    '&::-webkit-scrollbar': {
        width: '5px',
        height: '5px'
    },
    '&::-webkit-scrollbar-thumb': {
        background: '#7A7A7A',
        borderRadius: '10px',
        backgroundClip: 'padding-box'
    },
    '&::-webkit-scrollbar-track': {
        borderRadius: '10px',
        background: '#E8E8E8',
        marginTop: 5,
        marginBottom: 5
    }
}));

const DialogTextStyle = styled(Typography)(({ theme }) => ({
    '&.MuiTypography-root': {
        fontSize: '1rem',
        color: '#333',
        fontWeight: 600,
        marginBottom: 25
    }
}));

const StudentViewComponent = (props) => {
    const { isLg } = useViewSize();
    const { lecture, layout } = props;
    const [dialog, setDialog] = React.useState(false);

    const handleClickDialogOpen = () => {
        setDialog(true);
    };

    const handleCloseDialog = () => {
        setDialog(false);
    };

    return (
        <Box>
            <FlexColumn sx={{ width: '100%' }}>
                <Box sx={{ width: '100%', paddingBottom: '25px' }}>
                    <FlexSpace sx={{ width: '100%', paddingBottom: '12px' }}>
                        <Flex>
                            <AvatarBox>
                                <img src={TestProfileImage} alt={'프로필 이미지'} />
                                {/*<UserIcon />*/}
                            </AvatarBox>
                            <Box>
                                <UserName>이름</UserName>
                                <SubText>마지막 학습일: 2024.01.05 오전 10:51 | 학습 횟수 4회 | 학습 시간 5분</SubText>
                            </Box>
                        </Flex>

                        <Flex>
                            <IconButtonStyle sx={{ width: '24px', height: '24px' }} disableRipple>
                                <ArrowDownIcon style={{ transform: 'rotate( 90deg )' }} />
                            </IconButtonStyle>
                            <PageBox>
                                <Typography>
                                    <span>
                                        <strong>1</strong> /
                                    </span>
                                    5
                                </Typography>
                            </PageBox>
                            <IconButtonStyle sx={{ width: '24px', height: '24px' }} disableRipple>
                                <ArrowDownIcon style={{ transform: 'rotate( -90deg )' }} />
                            </IconButtonStyle>
                        </Flex>
                    </FlexSpace>
                    <FlexEnd sx={{ width: '100%', marginBottom: '30px' }}>
                        <EvaluationTextStyle>평가</EvaluationTextStyle>
                        <EvaluationChipBox>
                            <Typography>0 / 200</Typography>
                        </EvaluationChipBox>
                        <AssignmentTextStyle>과제</AssignmentTextStyle>
                        <AssignmentChipBox>
                            <Typography>0 / 100</Typography>
                        </AssignmentChipBox>
                    </FlexEnd>

                    <FlexSpace>
                        <TopTextBox>
                            <Typography>토픽</Typography>
                        </TopTextBox>
                    </FlexSpace>

                    <TopTitleButton onClick={handleClickDialogOpen} disableRipple>
                        <Typography>웹 해킹 보안 입문</Typography>
                        <ArrowDownIcon style={{ transform: 'rotate( -90deg )' }} />
                    </TopTitleButton>
                </Box>

                {layout ? (
                    <LayoutContentsBox>
                        <LectureContentComponent lecture={lecture} />
                    </LayoutContentsBox>
                ) : (
                    <LayoutContentsBox2>
                        <LayoutContentsBoxIn2 sx={{ padding: '0 8px' }}>
                            <LectureContentComponent lecture={lecture} />
                        </LayoutContentsBoxIn2>
                        <LayoutContentsBoxIn2 sx={{ padding: '0 8px' }}>
                            <LectureContentComponent lecture={lecture} />
                        </LayoutContentsBoxIn2>
                    </LayoutContentsBox2>
                )}
            </FlexColumn>

            <CommonDialog
                open={dialog}
                title={'교육과정명'}
                children={
                    <FlexColumn sx={{ width: 759 }}>
                        <DialogTextStyle>강의소개</DialogTextStyle>
                        <CommonTextarea minRows={18} maxRows={18} placeholder={'강의 소개 상세 내용'} />
                    </FlexColumn>
                }
                actionBtn1={false}
                btnText2={'확인'}
                onClose={handleCloseDialog}
            />
        </Box>
    );
};

StudentViewComponent.propTypes = {
    lecture: PropTypes.bool,
    layout: PropTypes.bool
};

export default StudentViewComponent;
