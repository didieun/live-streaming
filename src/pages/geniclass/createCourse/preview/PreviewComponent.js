import React from 'react';
import styled from '@emotion/styled/macro';
import { Box, Button, Typography } from '@mui/material';
import CommonZoomInZoomOut from '../../common/CommonZoomInZoomOut';
import { FlexCenter, FlexColumn, FlexSpace } from '../../common/styled/CommonStyle';
import CommonTextarea from '../../common/CommonTextarea';
import CommonDialog from '../../common/CommonDialog';
import { ReactComponent as ArrowDownIcon } from '../../../../assets/images/ArrowDownIcon.svg';
import { useViewSize } from '../../../../store';
import LectureContentComponent from '../lectureContents/LectureContentComponent';

const Root = styled(Box)(({ theme, isLg, layout }) => ({
    width: layout ? (isLg ? '100%' : 1380) : '100%',
    maxWidth: layout ? 1380 : 2300,
    margin: '0 auto',
    padding: layout ? (isLg ? '0 16px 0 35px' : '0') : '0 30px 0 35px',
    boxSizing: 'border-box'
}));

const FlexSpaceBox = styled(FlexSpace)(({ theme }) => ({
    width: '100%',
    marginTop: 25
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
    height: 'calc(100vh - 78px - 131px)',
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

const PreviewComponent = (props) => {
    const { isLg } = useViewSize();
    const [dialog, setDialog] = React.useState(false);
    const [layout, setLayout] = React.useState(false);

    const handleClickDialogOpen = () => {
        setDialog(true);
    };

    const handleCloseDialog = () => {
        setDialog(false);
    };

    return (
        <Root isLg={isLg} layout={layout}>
            <FlexColumn sx={{ width: '100%' }}>
                <Box sx={{ paddingBottom: '25px' }}>
                    <FlexSpaceBox>
                        <TopTextBox>
                            <Typography>토픽</Typography>
                        </TopTextBox>
                    </FlexSpaceBox>

                    <TopTitleButton onClick={handleClickDialogOpen} disableRipple>
                        <Typography>웹 해킹 보안 입문</Typography>
                        <ArrowDownIcon style={{ transform: 'rotate( -90deg )' }} />
                    </TopTitleButton>
                </Box>

                {layout ? (
                    <LayoutContentsBox>
                        <LectureContentComponent lecture={false} />
                    </LayoutContentsBox>
                ) : (
                    <LayoutContentsBox2>
                        <LayoutContentsBoxIn2>
                            <LectureContentComponent lecture={false} />
                        </LayoutContentsBoxIn2>
                        <LayoutContentsBoxIn2>
                            <LectureContentComponent lecture={false} />
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
        </Root>
    );
};

export default PreviewComponent;
