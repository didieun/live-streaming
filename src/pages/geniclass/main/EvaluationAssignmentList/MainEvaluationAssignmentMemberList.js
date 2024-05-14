import React from 'react';
import { styled } from '@mui/material/styles';
import { Box, Button, Typography } from '@mui/material';
import { Flex, FlexColumn, FlexSpace, IconButtonStyle } from '../../common/styled/CommonStyle';
import { ReactComponent as CheckSquareOffsetIcon } from '../../../../assets/images/CheckSquareOffsetIcon.svg';
import { ReactComponent as ClockIcon } from '../../../../assets/images/ClockIcon.svg';
import { ReactComponent as MoreIcon } from '../../../../assets/images/MoreIcon.svg';
import CommonButton from '../../common/CommonButton';

const Root = styled(Box)(({ theme }) => ({
    paddingBottom: 80
}));

const BoxStyle = styled(FlexSpace)(({ theme }) => ({
    width: '100%',
    minHeight: 170,
    border: '1px solid #D5D4DC',
    background: '#fff',
    borderRadius: 8,
    padding: '29px 36px 29px 32px',
    marginBottom: 20,
    '&:last-child': {
        marginBottom: 0
    }
}));

const TextStyle = styled(Typography)(({ theme }) => ({
    '&.MuiTypography-root': {
        fontSize: '1.125rem',
        color: '#333',
        fontWeight: 600,
        margin: '0 10px 0 4px'
    }
}));

const NumberText = styled(Typography)(({ theme }) => ({
    '&.MuiTypography-root': {
        fontSize: '1.25rem',
        color: '#737373',
        fontWeight: 600,
        letterSpacing: '-0.4px',
        '& span': {
            color: '#3190FF'
        }
    }
}));

const TitleText = styled(Typography)(({ theme }) => ({
    '&.MuiTypography-root': {
        width: '100%',
        fontSize: '1.5rem',
        color: '#333',
        fontWeight: 500,
        letterSpacing: '-0.5px',
        margin: '20px 0 14px',
        textAlign: 'left',
        paddingRight: 14,
        boxSizing: 'border-box'
    }
}));

const SubTextStyle = styled(Typography)(({ theme }) => ({
    '&.MuiTypography-root': {
        fontSize: '0.875rem',
        color: '#333',
        fontWeight: 500,
        letterSpacing: '-0.28px',
        marginRight: 20
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

const MainEvaluationAssignmentMemberList = (props) => {
    const items = [
        { number: 7, total: 10, title: '24년 1학년 1학기 심화과정', date1: '2024.03.19', date2: '', complete: false },
        { number: 7, total: 10, title: '24년 1학년 1학기 심화과정', date1: '2024.03.19', date2: '2024.03.19', complete: true },
        { number: 7, total: 10, title: '24년 1학년 1학기 심화과정', date1: '2024.03.19', date2: '2024.03.19', complete: true }
    ];

    return (
        <Root>
            {items.map((item, i) => (
                <BoxStyle key={i}>
                    <FlexColumn sx={{ width: 'calc(100% - 140px)' }}>
                        <Flex sx={{ width: '100%' }}>
                            <IconButtonStyle disableRipple>
                                <CheckSquareOffsetIcon />
                            </IconButtonStyle>
                            <TextStyle>제출 결과</TextStyle>
                            <NumberText>
                                <span>{item.number}</span> / {item.total}
                            </NumberText>
                        </Flex>

                        <TitleText>{item.title}</TitleText>

                        <Flex>
                            <ClockIcon />
                            <SubTextStyle>{item.date1}</SubTextStyle>
                            <SubTextStyle>제출일 : {item.date2 === '' ? '-' : item.date2}</SubTextStyle>
                        </Flex>
                    </FlexColumn>

                    <CommonButton
                        width={'140px'}
                        height={'50px'}
                        text={item.complete ? '제출 완료' : '수업 듣기'}
                        background={item.complete ? '#fff' : '#2F3640'}
                        border={item.complete ? '#D5D4DC' : '#2F3640'}
                        color={item.complete ? '#333' : '#fff'}
                        fontWeight={700}
                        fontSize={'1.125rem'}
                        disabled={false}
                    />
                </BoxStyle>
            ))}

            <CommonButtonStyle disableRipple>
                <Typography>더보기</Typography>
                <MoreIcon />
            </CommonButtonStyle>
        </Root>
    );
};

MainEvaluationAssignmentMemberList.propTypes = {};

export default MainEvaluationAssignmentMemberList;
