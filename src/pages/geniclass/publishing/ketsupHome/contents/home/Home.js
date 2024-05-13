import React from 'react';
import { useViewSize } from '../../../../../store';
import styled from '@emotion/styled/macro';
import { Box, Button, Tab, Tabs, Typography } from '@mui/material';
import CardListComponent from './CardListComponent';
import HomeScheduleComponent from './HomeScheduleComponent';
import PropTypes from 'prop-types';
import ListProgressComponent from './ListProgressComponent';
import CardListTeacherComponent from './CardListTeacherComponent';
import PresentImage from '../../../../../assets/images/PresentImage.png';
import CommonButton from '../../../common/CommonButton';
import { ReactComponent as CalendarCheckActiveIcon } from '../../../../../assets/images/CalendarCheckActiveIcon.svg';

const Root = styled(Box)(({ theme, isLg }) => ({
    position: 'relative',
    width: isLg ? '100%' : 1280,
    background: '#fff',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    overflowY: 'auto',
    boxSizing: 'border-box',
    margin: '0 auto',
    padding: isLg ? '0 16px' : 0
}));

const BoxStyle = styled(Box)(({ theme }) => ({
    width: '100%',
    background: '#2F6A75',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    boxSizing: 'border-box',
    margin: '60px auto 0',
    padding: '66px 116px',
    backgroundImage: `url(${PresentImage})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'bottom 0px right 20%',
    borderRadius: 20
}));

const TitleText = styled(Typography)(({ theme }) => ({
    '&.MuiTypography-root': {
        width: '100%',
        fontSize: '2rem',
        color: '#fff',
        fontWeight: 700,
        letterSpacing: '-0.5px',
        textAlign: 'left',
        marginBottom: 14
    }
}));

const ButtonStyle = styled(Button)(({ theme }) => ({
    '&.MuiButtonBase-root': {
        minWidth: 171,
        height: 46,
        background: '#fff',
        boxShadow: '0px 0px 10px 0px rgba(29, 71, 78, 0.30)',
        borderRadius: 99,
        justifyContent: 'center',
        padding: 10,
        flexDirection: 'column',
        '&:hover': {
            background: '#fff'
        },
        '& p': {
            fontSize: '1rem',
            color: '#333',
            fontWeight: 700,
            letterSpacing: '-0.5px',
            lineHeight: 'normal'
        }
    }
}));

const TabsStyle = styled(Tabs)(({ theme, isLg }) => ({
    width: '100%',
    '& .MuiTabs-flexContainer': {
        gap: 24
    },
    '& .MuiTab-root': {
        minWidth: 30,
        boxSizing: 'border-box',
        padding: '16px 0px',
        color: '#bbb',
        fontSize: '1.5rem',
        fontWeight: 500,
        letterSpacing: '-0.5px',
        '&.Mui-selected': {
            color: '#333'
        }
    },
    '& .MuiTabs-indicator': {
        height: 3,
        backgroundColor: '#00B959'
    }
}));

const EmptyBox = styled(Box)(({ theme }) => ({
    width: '100%',
    height: 264,
    border: '1px solid #D5D4DC',
    borderRadius: 8,
    background: '#Fff',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 40,
    '& > p': {
        fontSize: '1rem',
        color: '#737373',
        fontWeight: 500,
        letterSpacing: '-0.5px',
        marginBottom: 14
    }
}));

const SignUpButton = styled(Button)(({ theme }) => ({
    '&.MuiButtonBase-root': {
        position: 'fixed',
        bottom: 130,
        right: 40,
        width: 78,
        height: 78,
        padding: 5,
        background: '#00B959',
        boxShadow: '0px 1.316px 3.948px 0px rgba(12, 68, 39, 0.60)',
        borderRadius: 24,
        flexDirection: 'column',
        '& svg': {
            width: 40,
            height: 40,
            '& path': {
                fill: '#fff'
            }
        },
        '& p': {
            fontSize: '0.813rem',
            color: '#fff',
            fontWeight: 700,
            letterSpacing: '-0.6px',
            marginTop: 2
        },
        '&:hover': {
            background: '#00B959'
        }
    }
}));

function Home(props) {
    const { isLg } = useViewSize();
    const { isLeader, login, handleClickAllTeacher } = props;
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Root isLg={isLg}>
            {login ? (
                <HomeScheduleComponent isLeader={isLeader} />
            ) : (
                <BoxStyle>
                    <TitleText>
                        신규회원 혜택으로 제공되는
                        <br />
                        무료 체험 강의를 신청하세요.
                    </TitleText>
                    <ButtonStyle disableRipple>
                        <Typography>체험 강의 신청하기</Typography>
                    </ButtonStyle>
                </BoxStyle>
            )}

            {!isLeader && <ListProgressComponent login={login} />}
            {!login && (
                <EmptyBox>
                    <Typography>
                        예정된 실시간 강의가 없어요.
                        <br />
                        지금 바로 강의를 선택해 보세요!
                    </Typography>
                    <CommonButton
                        width={'82px'}
                        height={'29px'}
                        text={'수강 신청'}
                        background={'#fff'}
                        border={'#D5D4DC'}
                        color={'#00B959'}
                        fontWeight={700}
                        fontSize={'0.875rem'}
                        disabled={false}
                    />
                </EmptyBox>
            )}
            {!isLeader && (
                <>
                    <TabsStyle value={value} onChange={handleChange} isLg={isLg}>
                        <Tab label="추천 강사" value={0} />
                        <Tab label="추천 교육과정" value={1} />
                    </TabsStyle>

                    {value === 0 && <CardListTeacherComponent handleClickAllTeacher={handleClickAllTeacher} />}
                    {value === 1 && <CardListComponent isLeader={isLeader} handleClickAllTeacher={handleClickAllTeacher} />}
                </>
            )}

            {isLeader && <CardListComponent isLeader={isLeader} />}

            {!isLeader && (
                <SignUpButton>
                    <CalendarCheckActiveIcon />
                    <Typography>수강신청</Typography>
                </SignUpButton>
            )}
        </Root>
    );
}

Home.propTypes = {
    isLeader: PropTypes.bool,
    login: PropTypes.bool,
    handleClickAllTeacher: PropTypes.func
};

export default Home;
