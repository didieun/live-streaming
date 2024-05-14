import React from 'react';
import { styled } from '@mui/material/styles';
import { Accordion, AccordionActions, AccordionDetails, AccordionSummary, Box, Button, Chip, Typography } from '@mui/material';
import { Flex, FlexCenter } from '../../common/styled/CommonStyle';
import CommonButton from '../../common/CommonButton';
import { ReactComponent as ArrowIcon } from '../../../../assets/images/ArrowIcon.svg';
import { ReactComponent as MoreIcon } from '../../../../assets/images/MoreIcon.svg';
// import WritingDialogComponent from '../../../../views/dialog/WritingDialogComponent';
import CommonDialog from '../../common/CommonDialog';
import PropTypes from 'prop-types';

const AccordionBox = styled(Accordion)(({ theme }) => ({
    '&.MuiAccordion-root': {
        boxShadow: 'none',
        outline: '1px solid #D5D4DC',
        border: 0,
        borderRadius: 8,
        padding: 0,
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
        padding: '26px 28px',
        '& .MuiAccordionSummary-content': {
            width: 'calc(100% - 40px)',
            flexDirection: 'column',
            alignItems: 'flex-start',
            margin: '0',
            '&.Mui-expanded': {
                '& > div': {
                    display: 'none'
                }
            }
        },
        '& .MuiIconButton-label, .MuiAccordionSummary-expandIconWrapper': {
            width: 40,
            height: 24,
            borderRadius: 48,
            background: '#E5F1FF',
            marginRight: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            '& svg': {
                width: 13,
                height: 13,
                '& path': {
                    fill: '#3190FF'
                }
            }
        }
    }
}));

const AccordionTitle = styled(Typography)(({ theme }) => ({
    '&.MuiTypography-root': {
        width: 'calc(100% - 90px)',
        fontSize: '1.125rem',
        fontWeight: 700,
        letterSpacing: '-0.36px',
        color: '#333',
        textAlign: 'left',
        paddingRight: 14,
        boxSizing: 'border-box',
        '& span': {
            fontSize: '1.375rem',
            color: '#3190FF',
            marginRight: 8
        }
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
        color: '#666',
        backgroundColor: '#F5F6FA',
        borderRadius: '0',
        borderTop: '1px solid #D5D4DC',
        padding: '25px 27px 20px ',
        boxSizing: 'border-box'
    }
}));

const DetailScroll = styled(Box)(({ theme }) => ({
    minHeight: 80,
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

const AccordionActionsStyled = styled(AccordionActions)(({ theme }) => ({
    '&.MuiAccordionActions-root': {
        padding: '0 27px 30px ',
        boxSizing: 'border-box',
        backgroundColor: '#F5F6FA'
    }
}));

const TextStyle = styled(Typography)(({ theme }) => ({
    '&.MuiTypography-root': {
        width: 'calc(100% - 30px)',
        fontSize: '1rem',
        color: '#333',
        fontWeight: 400,
        textAlign: 'left',
        wordBreak: 'keep-all',
        textOverflow: 'unset',
        whiteSpace: 'unset'
    }
}));

const TextBoldStyle = styled(Typography)(({ theme }) => ({
    '&.MuiTypography-root': {
        fontSize: '1.375rem',
        color: '#3190FF',
        marginRight: 8,
        fontWeight: 700
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

const MainQuestionList = (props) => {
    const { isLeader } = props;
    const [dialogOpen, setDialogOpen] = React.useState(false);
    const [deleteDialog, setDeleteDialog] = React.useState(false);

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
            <AccordionBox>
                <AccordionSummaryStyled expandIcon={<ArrowIcon />} aria-controls="panel1bh-content" id="panel1bh-header">
                    <AccordionTitle>
                        <span>Q.</span>기업 서비스 가입 및 이용 절차가 궁금합니다.
                    </AccordionTitle>
                    <FlexCenter sx={{ marginTop: '12px', marginLeft: '30px' }}>
                        <AccordionTitleSub>일반강의실 test</AccordionTitleSub>
                        <LineStyle />
                        <AccordionTitleSub>2023.08.17 등록</AccordionTitleSub>
                    </FlexCenter>
                </AccordionSummaryStyled>
                <AccordionDetailsStyled>
                    <DetailScroll>
                        <TextBoldStyle>A.</TextBoldStyle>
                        <TextStyle>
                            유료 플랜은 내 비즈니스에 적합한 유형의 플랜을 만들 수 있는 유연성을 제공합니다. 조직 규모에 따라 지원 환경을
                            구성해야 하므로 사용 인원에 맞는 플랜을 선택하세요. 유료 플랜은 내 비즈니스에 적합한 유형의 플랜을 만들 수 있는
                            유연성을 제공합니다. 조직 규모에 따라 지원 환경을 구성해야 하므로 사용 인원에 맞는 플랜을 선택하세요.
                        </TextStyle>
                    </DetailScroll>
                </AccordionDetailsStyled>

                {isLeader && (
                    <AccordionActionsStyled>
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
                    </AccordionActionsStyled>
                )}
            </AccordionBox>

            <CommonButtonStyle disableRipple>
                <Typography>더보기</Typography>
                <MoreIcon />
            </CommonButtonStyle>

            {/*<CommonDialog*/}
            {/*    open={dialogOpen}*/}
            {/*    onClose={handleCloseDialog}*/}
            {/*    title={'글쓰기'}*/}
            {/*    children={<WritingDialogComponent />}*/}
            {/*    actionBtn1={false}*/}
            {/*    btnText2={'게시'}*/}
            {/*/>*/}

            <CommonDialog
                open={deleteDialog}
                onClose={handleCloseDeleteDialog}
                btnClick1={handleCloseDeleteDialog}
                title={'알림'}
                message={<Typography>질문을 삭제 하시겠습니까?</Typography>}
            />
        </Box>
    );
};

MainQuestionList.propTypes = {
    isLeader: PropTypes.bool
};

export default MainQuestionList;
