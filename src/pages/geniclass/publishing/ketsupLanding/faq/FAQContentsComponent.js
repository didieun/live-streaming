import React from 'react';
import styled from '@emotion/styled/macro';
import { Accordion, AccordionDetails, AccordionSummary, Box, Stack, Typography } from '@mui/material';
import { FlexColumnCenter } from '../../common/styled/CommonStyle';
import { ReactComponent as KetsUpCaretDownArrowIcon } from '../../../../assets/images/KetsUpCaretDownArrowIcon.svg';

const Container = styled(Stack)(({ theme }) => ({
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    background: '#fff',
    padding: '124px 0 160px',
    boxSizing: 'border-box',
    [theme?.breakpoints?.down('md')]: {
        padding: '60px 0'
    },
    [theme?.breakpoints?.down('sm')]: {
        padding: '40px 0'
    }
}));

const ContainerIn = styled(FlexColumnCenter)(({ theme }) => ({
    width: 1200,
    padding: '0 16px',
    boxSizing: 'border-box',
    [theme?.breakpoints?.down('md')]: {
        width: '100%',
        padding: '0 24px'
    }
}));

const SubText = styled(Typography)(({ theme }) => ({
    '&.MuiTypography-root': {
        fontSize: '1.5rem',
        color: '#667085',
        fontWeight: 700,
        letterSpacing: '-0.5px',
        lineHeight: 'normal',
        textAlign: 'center',
        wordBreak: 'keep-all',
        textOverflow: 'unset',
        whiteSpace: 'unset',
        [theme?.breakpoints?.down('md')]: {
            fontSize: '1.375rem'
        },
        [theme?.breakpoints?.down('sm')]: {
            fontSize: '1.125rem'
        }
    }
}));

const TitleText = styled(SubText)(({ theme }) => ({
    '&.MuiTypography-root': {
        fontSize: '3rem',
        color: '#0C111D',
        marginTop: 20,
        marginBottom: 40,
        [theme?.breakpoints?.down('md')]: {
            fontSize: '2.625rem',
            marginTop: 16,
            marginBottom: 34
        },
        [theme?.breakpoints?.down('sm')]: {
            fontSize: '1.75rem',
            marginTop: 10,
            marginBottom: 24
        }
    }
}));

const AccordionBox = styled(Box)(({ theme }) => ({
    width: 830,
    [theme?.breakpoints?.down('md')]: {
        width: '100%'
    }
}));

const AccordionStyle = styled(Accordion)(({ theme }) => ({
    '&.MuiAccordion-root': {
        width: '100%',
        boxShadow: 'none',
        border: 0,
        borderBottom: '1px solid #E4E7EC',
        borderRadius: 0,
        '&::before': {
            height: 0,
            background: 'transparent'
        },
        '&.Mui-expanded': {
            borderBottom: 0,
            margin: 0
        }
    }
}));

const AccordionSummaryStyle = styled(AccordionSummary)(({ theme }) => ({
    '&.MuiAccordionSummary-root': {
        padding: '0 24px',
        fontSize: '1.125rem',
        color: '#0C111D',
        fontWeight: 600,
        letterSpacing: '-0.5px',
        lineHeight: 'normal',
        '& .MuiAccordionSummary-content': {
            padding: '34px 0',
            margin: 0
        },
        [theme?.breakpoints?.down('md')]: {
            padding: '0 20px',
            fontSize: '1rem',
            '& .MuiAccordionSummary-content': {
                padding: '29px 0'
            }
        },
        [theme?.breakpoints?.down('sm')]: {
            padding: '0',
            fontSize: '0.875rem',
            '& .MuiAccordionSummary-content': {
                padding: '10px 10px 0 0'
            },
            '& .MuiAccordionSummary-expandIconWrapper': {
                width: 15,
                height: 15,
                '& svg': {
                    width: 15,
                    height: 15
                }
            }
        }
    }
}));

const AccordionDetailsStyle = styled(AccordionDetails)(({ theme }) => ({
    '&.MuiAccordionDetails-root': {
        padding: '40px 41px',
        borderRadius: 15,
        background: '#F2F4F7',
        fontSize: '1.125rem',
        color: '#0C111D',
        fontWeight: 500,
        letterSpacing: '-0.5px',
        lineHeight: '28.8px',
        [theme?.breakpoints?.down('md')]: {
            padding: '34px 35px',
            fontSize: '1rem'
        },
        [theme?.breakpoints?.down('sm')]: {
            borderRadius: 10,
            padding: '20px 21px',
            fontSize: '0.875rem',
            lineHeight: '21px'
        }
    }
}));

const FAQContentsComponent = () => {
    const items = [
        {
            value: 1,
            question: '한국어 실력이 초급인데, 수강할 수 있을까요?',
            answer: '회원의 레벨에 맞추어 한글 자음·모음부터 소개하는 강의도 있으니 한국어가 처음이더라도 충분히 수강할 수 있습니다. 특히 외국어로 강의하는 강사의 강의을 들으면 도움이 될 거예요.'
        },
        {
            value: 2,
            question: '케찹 화상 강의는 학원과 어떻게 다른지 궁금해요.',
            answer: '케찹에서는 회원의 레벨뿐만 아니라 주당 강의 횟수, 회당 강의 시간을 고려하여 맞춤화된 강의을 선택할 수 있습니다. 강의에 사용하는 교재는 시중 문제집이 아닌 한국 명문대학교에서 출판한 한국어학당 강의 교재를 사용합니다.'
        },
        {
            value: 3,
            question: '커리큘럼은 어떻게 되나요?',
            answer: '답변을 준비중입니다.'
        },
        {
            value: 4,
            question: '케찹 강사의 강점은 무엇인지 궁금해요.',
            answer: '케찹 강사들은 모두 한국어 교원 인증을 받은 전문 한국어 강사입니다. 한국에 가지 않고도 현지의 어학당 강의과 동일한 품질의 강의을 제공합니다. '
        },
        {
            value: 5,
            question: '어느 정도 공부해야 한국어 실력이 향상될지 고민이에요.',
            answer: '회원가입 시 무료로 제공되는 AI 레벨테스트를 응시하면 목표를 달성하는 데에 필요한 학습 기간을 알아보는 데에 도움이 될 거예요.'
        },
        {
            value: 6,
            question: 'TOPIK 시험을 위한 강의 외에 회화 강의도 있는지 궁금해요.',
            answer: '한국어 능력 평가 자격증인 TOPIK 외에도 대학 강의를 수강하는 데 필요한 회화, 업무 환경에서 필요한 비즈니스 회화 등 다양한 회화 강의이 준비되어 있습니다. '
        }
    ];

    return (
        <Container>
            <ContainerIn>
                <SubText>케첩 FAQ</SubText>
                <TitleText>자주 묻는 질문</TitleText>

                <AccordionBox>
                    {items.map((item, i) => (
                        <AccordionStyle key={i}>
                            <AccordionSummaryStyle
                                expandIcon={<KetsUpCaretDownArrowIcon />}
                                aria-controls={`panel${item.value}-content`}
                                id={`panel${item.value}-header`}
                            >
                                {item.question}
                            </AccordionSummaryStyle>
                            <AccordionDetailsStyle>{item.answer}</AccordionDetailsStyle>
                        </AccordionStyle>
                    ))}
                </AccordionBox>
            </ContainerIn>
        </Container>
    );
};

export default FAQContentsComponent;
