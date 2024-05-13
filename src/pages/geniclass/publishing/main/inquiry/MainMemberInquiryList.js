import React from 'react';
import { styled } from '@mui/material/styles';
import { Accordion, AccordionActions, AccordionDetails, AccordionSummary, Box, Button, Chip, Typography } from '@mui/material';
import { Flex, FlexCenter, FlexColumn, FlexEnd } from '../../common/styled/CommonStyle';
import CommonButton from '../../common/CommonButton';
import { ReactComponent as ArrowIcon } from '../../../../assets/images/ArrowIcon.svg';
import { ReactComponent as MoreIcon } from '../../../../assets/images/MoreIcon.svg';
import { ReactComponent as ButtonCheckCircleIcon } from '../../../../assets/images/ButtonCheckCircleIcon.svg';
import { ReactComponent as LockSimpleIcon } from '../../../../assets/images/LockSimpleIcon.svg';
import WritingDialogComponent from '../../../../views/dialog/WritingDialogComponent';
import CommonDialog from '../../common/CommonDialog';
import PropTypes from 'prop-types';
import RichTextEditBox from '../../../../components/RichTextEditBox';

const EDITOR_PROPS = {
    placeholderText: '답변을 입력해주세요.',
    height: '360px'
};

const AccordionBox = styled(Accordion)(({ theme }) => ({
    '&.MuiAccordion-root': {
        boxShadow: 'none',
        outline: '1px solid #D5D4DC',
        border: 0,
        borderRadius: 8,
        padding: '0 0 0',
        boxSizing: 'border-box',
        marginBottom: 20,
        backgroundColor: '#fff',
        '&:hover': {
            outline: '3px solid #F5CD79'
        },
        '&:before': {
            display: 'none'
        },
        '&.Mui-expanded': {
            backgroundColor: '#fff'
        }
    }
}));

const AccordionSummaryStyled = styled(AccordionSummary)(({ theme }) => ({
    '&.MuiAccordionSummary-root': {
        width: '100%',
        alignItems: 'flex-start',
        padding: '26px 28px 20px',
        '& .MuiAccordionSummary-content': {
            width: 'calc(100% - 40px)',
            flexDirection: 'column',
            alignItems: 'flex-start',
            margin: '0'
        }
    }
}));

const BoxStyle = styled(Box)(({ theme }) => ({
    width: '100%',
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'space-between'
}));

const AccordionTitle = styled(Typography)(({ theme, width }) => ({
    '&.MuiTypography-root': {
        width: width ? 'calc(100% - 8px)' : '100%',
        fontSize: '1.125rem',
        fontWeight: 700,
        letterSpacing: '-0.36px',
        color: '#333',
        textAlign: 'left',
        boxSizing: 'border-box'
    }
}));

const AccordionTitleSub = styled(Typography)(({ theme }) => ({
    '&.MuiTypography-root': {
        fontSize: '0.875rem',
        fontWeight: 400,
        letterSpacing: '-0.289px',
        color: '#666'
    }
}));

const LineStyle = styled(Box)(({ theme }) => ({
    width: 1,
    height: 14,
    background: '#666',
    margin: '0 9px'
}));

const AccordionDetailsStyled = styled(AccordionDetails)(({ theme }) => ({
    '&.MuiAccordionDetails-root': {
        backgroundColor: '#fff',
        borderRadius: '0',
        padding: '0',
        boxSizing: 'border-box'
    }
}));

const DetailsBoxIn = styled(Box)(({ theme }) => ({
    backgroundColor: '#fff',
    borderRadius: '0',
    padding: '0 27px',
    boxSizing: 'border-box'
}));

const EditBox = styled(Box)(({ theme }) => ({
    marginBottom: '17px',
    padding: '0 27px',
    boxSizing: 'border-box'
}));

const CompletionBox = styled(FlexColumn)(({ theme }) => ({
    backgroundColor: '#F5F6FA',
    borderRadius: '0',
    padding: '20px 60px 0',
    boxSizing: 'border-box',
    borderTop: '1px solid #D5D4DC'
}));

const DetailScroll = styled(Box)(({ theme }) => ({
    maxHeight: 250,
    display: 'flex',
    alignItems: 'flex-start',
    overflowY: 'auto',
    '&::-webkit-scrollbar': {
        width: '5px'
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

const AccordionActionsStyled = styled(AccordionActions)(({ theme, completion }) => ({
    '&.MuiAccordionActions-root': {
        padding: '0 27px 30px',
        boxSizing: 'border-box',
        background: completion ? '#F5F6FA' : '#fff'
    }
}));

const TextStyle = styled(Typography)(({ theme, completion, answer }) => ({
    '&.MuiTypography-root': {
        fontSize: '1rem',
        color: '#333',
        fontWeight: 400,
        textAlign: 'left',
        wordBreak: 'keep-all',
        textOverflow: 'unset',
        whiteSpace: 'unset',
        marginBottom: 30
    }
}));

const CommonButtonStyle = styled(Button)(({ theme }) => ({
    '&.MuiButtonBase-root': {
        padding: 0,
        width: '100%',
        marginTop: 24,
        '& p': {
            color: '#333',
            fontSize: '0.875rem',
            fontWeight: 400,
            marginRight: 6
        },
        '&:hover': {
            backgroundColor: '#fff'
        },
        '& svg': {
            width: 20,
            height: 20
        }
    }
}));

const MainMemberInquiryList = (props) => {
    const { editorRef } = React.createRef;
    const [answer, setAnswer] = React.useState(false);
    const [completion, setCompletion] = React.useState(false);
    const [dialogOpen, setDialogOpen] = React.useState(false);
    const [deleteDialog, setDeleteDialog] = React.useState(false);
    const items = [
        {
            title: '비공개 문의하기',
            name: '작성자',
            date: '2023.08.17 오후 1:26',
            state: false,
            text: '비공개 문의하기 비공개 문의하기 비공개 문의하기 비공개 문의하기 비공개 문의하기 비공개 문의하기 비공개 문의하기 비공개 문의하기',
            nondisclosure: false
        },
        {
            title: '비공개 문의하기',
            name: '작성자',
            date: '2023.08.17 오후 1:26',
            state: true,
            text: '비공개 문의하기 비공개 문의하기 비공개 문의하기 비공개 문의하기 비공개 문의하기 비공개 문의하기 비공개 문의하기 비공개 문의하기',
            nondisclosure: false
        },
        {
            title: '비공개 문의하기',
            name: '작성자',
            date: '2023.08.17 오후 1:26',
            state: true,
            text: '비공개 문의하기 비공개 문의하기 비공개 문의하기 비공개 문의하기 비공개 문의하기 비공개 문의하기 비공개 문의하기 비공개 문의하기',
            nondisclosure: true
        }
    ];

    const handleClickDialog = () => {
        setDialogOpen(true);
    };

    const handleCloseDialog = () => {
        setDialogOpen(false);
    };

    const handleClickDeleteDialog = () => {
        setDeleteDialog(true);
    };

    const handleCloseDeleteDialog = () => {
        setDeleteDialog(false);
    };

    return (
        <Box>
            {items.map((item, i) => (
                <AccordionBox>
                    <AccordionSummaryStyled aria-controls="panel1bh-content" id="panel1bh-header">
                        <BoxStyle>
                            <FlexColumn sx={item.state ? { width: 'calc(100% - 110px)' } : { width: '100%' }}>
                                <Flex sx={{ width: '100%' }}>
                                    {item.nondisclosure ? <LockSimpleIcon style={{ marginRight: 8 }} /> : null}
                                    <AccordionTitle width={item.nondisclosure}>{item.title}</AccordionTitle>
                                </Flex>

                                <FlexCenter sx={{ marginTop: '12px', alignItems: 'flex-start' }}>
                                    <AccordionTitleSub>{item.name}</AccordionTitleSub>
                                    <LineStyle />
                                    <AccordionTitleSub>{item.date}</AccordionTitleSub>
                                </FlexCenter>
                            </FlexColumn>
                            {item.state && (
                                <CommonButton
                                    width={'94px'}
                                    height={'34px'}
                                    text={'답변 완료'}
                                    background={'#1976D2'}
                                    border={'#1976D2'}
                                    color={'#fff'}
                                    fontWeight={700}
                                    fontSize={'0.875rem'}
                                    disabled={false}
                                    startIcon={<ButtonCheckCircleIcon />}
                                />
                            )}
                        </BoxStyle>
                    </AccordionSummaryStyled>
                    <AccordionDetailsStyled>
                        <DetailsBoxIn>
                            <DetailScroll>
                                <TextStyle>{item.text}</TextStyle>
                            </DetailScroll>
                        </DetailsBoxIn>

                        <FlexEnd sx={{ padding: '0 27px 30px', '& button:last-child': { marginLeft: '8px' } }}>
                            <CommonButton
                                width={'72px'}
                                height={'34px'}
                                text={'수정'}
                                background={'#2F3640'}
                                color={'#fff'}
                                fontWeight={700}
                                fontSize={'0.875rem'}
                                disabled={false}
                                onClick={handleClickDialog}
                            />

                            <CommonButton
                                width={'72px'}
                                height={'34px'}
                                text={'삭제'}
                                background={'#fff'}
                                border={'#D5D4DC'}
                                color={'#333'}
                                fontWeight={700}
                                fontSize={'1rem'}
                                onClick={handleClickDeleteDialog}
                            />
                        </FlexEnd>

                        {item.state && (
                            <CompletionBox>
                                <FlexCenter sx={{ alignItems: 'flex-start', marginBottom: '20px' }}>
                                    <AccordionTitleSub>{item.name}</AccordionTitleSub>
                                    <LineStyle />
                                    <AccordionTitleSub>{item.date}</AccordionTitleSub>
                                </FlexCenter>
                                <DetailScroll>
                                    <TextStyle>{item.text}</TextStyle>
                                </DetailScroll>
                            </CompletionBox>
                        )}
                    </AccordionDetailsStyled>
                </AccordionBox>
            ))}
            <CommonButtonStyle disableRipple>
                <Typography>더보기</Typography>
                <MoreIcon />
            </CommonButtonStyle>
            <CommonDialog
                open={dialogOpen}
                onClose={handleCloseDialog}
                title={'글쓰기'}
                children={<WritingDialogComponent />}
                actionBtn1={false}
                btnText2={'게시'}
            />
            <CommonDialog
                open={deleteDialog}
                onClose={handleCloseDeleteDialog}
                btnClick1={handleCloseDeleteDialog}
                title={'알림'}
                message={<Typography>문의를 삭제하시겠습니까?</Typography>}
            />
        </Box>
    );
};

MainMemberInquiryList.propTypes = {};

export default MainMemberInquiryList;
