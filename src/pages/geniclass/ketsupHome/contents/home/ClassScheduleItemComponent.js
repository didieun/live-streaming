import React from 'react';
import { useViewSize } from '../../../../../store';
import styled from '@emotion/styled/macro';
import { Box, Card, CardContent, Chip, Typography, Link, Button } from '@mui/material';
import { Flex, FlexColumn, FlexEnd, FlexCenter } from '../../../common/styled/CommonStyle';
import { ReactComponent as ClockIcon } from '../../../../../assets/newImages/ClockIcon.svg';
import { ReactComponent as MoreIcon } from '../../../../../assets/images/MoreIcon.svg';
import { ReactComponent as MinusIcon } from '../../../../../assets/images/MinusIcon.svg';
import { ReactComponent as UnRadioCheckIcon } from '../../../../../assets/images/UnRadioCheckIcon.svg';
import { ReactComponent as RadioCheckIcon } from '../../../../../assets/images/RadioCheckIcon.svg';
import CommonButton from '../../../common/CommonButton';
import PropTypes from 'prop-types';
import SideBar from '../../sideBar/SideBar';

const Root = styled(Box)(({ theme }) => ({
    width: '100%',
    boxSizing: 'border-box'
}));

const Wrap = styled(Box)(({ theme, isSl }) => ({
    width: '100%',
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: isSl ? 10 : 20,
    boxSizing: 'border-box'
}));

const CardStyle = styled(Card)(({ theme, isSl }) => ({
    padding: 0,
    border: '1px solid #D5D4DC',
    borderRadius: 10,
    boxShadow: 'none',
    '& .MuiButtonBase-root': {
        padding: 0
    },
    '& .MuiCardContent-root': {
        display: 'flex',
        flexDirection: 'column',
        padding: isSl ? '20px !important' : '30px !important',
        '& .MuiTypography-h5': {
            fontSize: isSl ? '1.313rem' : '1.5rem',
            color: '#333',
            fontWeight: 700,
            textAlign: 'left',
            letterSpacing: '-0.5px',
            display: '-webkit-box',
            wordBreak: 'break-all',
            textOverflow: 'ellipsis',
            WebkitBoxOrient: 'vertical',
            whiteSpace: 'normal',
            WebkitLineClamp: 1,
            overflow: 'hidden',
            lineHeight: 'normal',
            margin: isSl ? '5px 0 10px' : '10px 0 15px'
        },
        '& .MuiLink-root': {
            color: '#737373',
            fontSize: isSl ? '0.875rem' : '1rem',
            fontWeight: 500,
            letterSpacing: '-0.5px',
            textAlign: 'left',
            textDecoration: 'underline',
            marginBottom: 0,
            display: '-webkit-box',
            wordBreak: 'break-all',
            textOverflow: 'ellipsis',
            WebkitBoxOrient: 'vertical',
            whiteSpace: 'normal',
            WebkitLineClamp: 1,
            overflow: 'hidden'
        }
    }
}));
const CardInfo = styled(Box)(({ theme, isSl }) => ({
    display: 'flex',
    alignItems: 'center',
    gap: 8,
    fontSize: isSl ? '1rem' : '1.25rem',
    fontWeight: 700,
    letterSpacing: '-0.5px',
    color: '#333',
    marginBottom: isSl ? 10 : 20,
    '& svg': {
        width: isSl ? 20 : 24,
        height: isSl ? 20 : 24,
        '& path': {
            fill: '#333'
        }
    }
}));

const ChipStyle = styled(Chip)(({ theme, isSl }) => ({
    minWidth: isSl ? 40 : 48,
    height: isSl ? 25 : 30,
    padding: isSl ? '2px 6px' : '5px 12px',
    backgroundColor: '#2BCBBA',
    borderRadius: 6,
    lineHeight: 'initial',
    boxSizing: 'border-box',
    '& .MuiChip-label': {
        padding: 0,
        color: '#fff',
        fontSize: isSl ? '0.688rem' : '0.875rem',
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

const CheckBox = styled(Flex)(({ theme, isHd, isMd }) => ({
    marginTop: 10,
    marginBottom: 10,
    gap: isMd ? 5 : isHd ? 30 : 80,
    flexDirection: isMd ? 'column' : 'row',
    alignItems: 'flex-start',
    '& svg': {
        '& .checked': {
            fill: '#00B959'
        }
    }
}));

const CheckText = styled(Typography)(({ theme, isMd }) => ({
    '&.MuiTypography-root': {
        fontSize: isMd ? '1rem' : '1.125rem',
        color: '#333',
        fontWeight: 500,
        letterSpacing: '-0.5px',
        marginLeft: 8
    }
}));

const ButtonBox = styled(FlexEnd)(({ theme }) => ({
    marginTop: 11,
    '& button:first-child': {
        marginRight: 14
    }
}));

const EmptyBox = styled('div')(({ theme }) => ({
    width: '100%',
    height: 200,
    border: '1px solid #D5D4DC',
    borderRadius: 8,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    '& p': {
        fontSize: '1rem',
        color: '#737373',
        fontWeight: 500,
        letterSpacing: '-0.5px'
    }
}));

function ClassScheduleItemComponent(props) {
    const { isSl, isHd, isMd } = useViewSize();
    const { schedule, isLeader } = props;
    const [moreBtn, setMoreBtn] = React.useState(false);

    const handleClickMore = () => {
        setMoreBtn(!moreBtn);
    };

    return (
        <Root>
            {schedule.length > 0 ? (
                <Box>
                    <Wrap isSl={isSl}>
                        {schedule.map((item, index) => (
                            <CardStyle key={index} isSl={isSl}>
                                <CardContent>
                                    <Flex>
                                        <CardInfo isSl={isSl}>
                                            <ClockIcon /> {item.date}
                                        </CardInfo>
                                    </Flex>
                                    <FlexColumn>
                                        <Flex sx={{ gap: '8px' }}>
                                            {item.chip.map((list, i) => (
                                                <ChipStyle
                                                    label={list}
                                                    key={i}
                                                    isSl={isSl}
                                                    sx={{
                                                        backgroundColor:
                                                            list == '과제'
                                                                ? '#A674ED!important'
                                                                : list == 'VOD'
                                                                  ? '#000000!important'
                                                                  : list == '평가'
                                                                    ? '#00BEEA!important'
                                                                    : list == '실시간'
                                                                      ? '#F61E6C !important'
                                                                      : '#00CCA5'
                                                    }}
                                                />
                                            ))}
                                        </Flex>
                                        <Typography gutterBottom variant="h5" component="div">
                                            {item.title}
                                        </Typography>
                                        <Link href="#" target="_blank">
                                            {item.contents}
                                        </Link>
                                        {!isLeader && (
                                            <CheckBox isHd={isHd} isMd={isMd}>
                                                <Flex>
                                                    {item.checked1 ? <RadioCheckIcon /> : <UnRadioCheckIcon />}
                                                    <CheckText isMd={isMd}>지난 주차 복습 퀴즈 풀기</CheckText>
                                                </Flex>
                                                <Flex>
                                                    {item.checked2 ? <RadioCheckIcon /> : <UnRadioCheckIcon />}
                                                    <CheckText isMd={isMd}>이번 주차 내용 미리보기</CheckText>
                                                </Flex>
                                            </CheckBox>
                                        )}
                                    </FlexColumn>
                                    <ButtonBox>
                                        <CommonButton
                                            width={isSl ? '90px' : '178px'}
                                            height={isSl ? '38px' : '50px'}
                                            text={isLeader ? '수업 준비 관리' : '수업 준비하기'}
                                            background={'#fff'}
                                            border={'#2F3640'}
                                            color={'#333'}
                                            fontWeight={700}
                                            fontSize={isSl ? '1rem' : '1.125rem'}
                                            disabled={false}
                                        />
                                        <CommonButton
                                            width={isSl ? '90px' : '140px'}
                                            height={isSl ? '38px' : '50px'}
                                            text={isLeader ? '강의하기' : '수강하기'}
                                            background={'#2F3640'}
                                            color={'#fff'}
                                            fontWeight={700}
                                            fontSize={isSl ? '1rem' : '1.125rem'}
                                            disabled={false}
                                        />
                                    </ButtonBox>
                                </CardContent>
                            </CardStyle>
                        ))}
                    </Wrap>
                    {schedule.length > 2 && (
                        <CommonButtonStyle onClick={handleClickMore} disableRipple>
                            <Typography>{moreBtn ? '접기' : '더보기'}</Typography>
                            {moreBtn ? <MinusIcon /> : <MoreIcon />}
                        </CommonButtonStyle>
                    )}
                </Box>
            ) : (
                <EmptyBox>
                    {/*<Typography>등록된 강의가 없습니다.</Typography>*/}
                    <Typography>강의 일정이 없습니다.</Typography>
                </EmptyBox>
            )}
        </Root>
    );
}

ClassScheduleItemComponent.propTypes = {
    schedule: PropTypes.string,
    isLeader: PropTypes.bool
};

export default ClassScheduleItemComponent;
