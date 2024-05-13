import React from 'react';
import styled from '@emotion/styled/macro';
import { Box, Button, Typography } from '@mui/material';
import { FlexCenter, FlexColumn, FlexSpace } from '../../common/styled/CommonStyle';
import CommonTextarea from '../../common/CommonTextarea';
import CommonDialog from '../../common/CommonDialog';
import { ReactComponent as ArrowDownIcon } from '../../../../assets/images/ArrowDownIcon.svg';
import { useViewSize } from '../../../../store';
import LectureContentComponent from '../../createCourse/lectureContents/LectureContentComponent';
import PropTypes from 'prop-types';

const BoxStyle = styled(FlexColumn)(({ theme }) => ({
    width: '100%'
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
    height: 'calc(100vh - 78px - 50px - 62px - 36px - 33px - 15px - 28px - 30px)',
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

const LectureComponent = (props) => {
    const { isMd } = useViewSize();
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
            <FlexColumn>
                <Box sx={{ paddingBottom: '25px' }}>
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
                        <LayoutContentsBoxIn2>
                            <LectureContentComponent lecture={lecture} />
                        </LayoutContentsBoxIn2>
                        <LayoutContentsBoxIn2>
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

LectureComponent.propTypes = {
    lecture: PropTypes.bool,
    layout: PropTypes.bool
};

export default LectureComponent;
