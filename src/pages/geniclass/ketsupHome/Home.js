import React from 'react';
import styled from '@emotion/styled/macro';
import { ReactComponent as HouseLineDefaultIcon } from '../../../assets/images/HouseLineDefaultIcon.svg';
import { ReactComponent as HouseLineIcon } from '../../../assets/images/HouseLineIcon.svg';
import { ReactComponent as CalendarCheckIcon } from '../../../assets/images/CalendarCheckIcon.svg';
import { ReactComponent as CalendarCheckActiveIcon } from '../../../assets/images/CalendarCheckActiveIcon.svg';
import { ReactComponent as BookOpenTextIcon } from '../../../assets/images/BookOpenTextIcon.svg';
import { ReactComponent as BookOpenTextActiveIcon } from '../../../assets/images/BookOpenTextActiveIcon.svg';
import { ReactComponent as ListChecksIcon } from '../../../assets/images/ListChecksIcon.svg';
import { ReactComponent as ListChecksActiveIcon } from '../../../assets/images/ListChecksActiveIcon.svg';
import { ReactComponent as StudentIcon } from '../../../assets/images/StudentIcon.svg';
import { ReactComponent as StudentActiveIcon } from '../../../assets/images/StudentActiveIcon.svg';
import { ReactComponent as MegaphoneSimpleIcon } from '../../../assets/images/MegaphoneSimpleIcon.svg';
import { ReactComponent as MegaphoneSimpleActiveIcon } from '../../../assets/images/MegaphoneSimpleActiveIcon.svg';
import { Box, Stack } from '@mui/material';
import Header from './header/Header';
import Footer from './footer/Footer';
import SideBar from './sideBar/SideBar';
import HomeComponent from './contents/home/Home';
import LectureSchedule from './contents/lectureSchedule/LectureSchedule';
import CourseList from './contents/courseList/CourseList';
import TeacherComponent from './contents/teacher/TeacherComponent';
import CurriculumComponent from './contents/curriculum/CurriculumComponent';
import PreparingService from './preparingService/PreparingService';
import MockTestList from './contents/mockTest/MockTestList';

const Container = styled(Stack)(({ theme }) => ({
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center'
}));

const ContentsBox = styled(Box)(({ theme }) => ({
    width: '100%',
    minHeight: `calc(100vh - ${headerHeight}px - 234px)`,
    display: 'flex',
    marginTop: `${headerHeight}px`
}));

const ContentsInBox = styled(Box)(({ theme }) => ({
    width: `calc(100% - ${sideBarWidth}px)`
}));

export const sideBarWidth = 92;
export const headerHeight = 78;

const Home = () => {
    const [menuValue, setMenuValue] = React.useState('홈');
    const [isLeader, setIsLeader] = React.useState(false);
    const [login, setLogin] = React.useState(true);

    const menuItem = [
        { icon: <HouseLineDefaultIcon />, iconActive: <HouseLineIcon />, text: '홈' },
        { icon: <CalendarCheckIcon />, iconActive: <CalendarCheckActiveIcon />, text: '강의' },
        { icon: <ListChecksIcon />, iconActive: <ListChecksActiveIcon />, text: '교육과정' },
        { icon: <BookOpenTextIcon />, iconActive: <BookOpenTextActiveIcon />, text: '학습' },
        { icon: <StudentIcon />, iconActive: <StudentActiveIcon />, text: '학생관리' },
        { icon: <MegaphoneSimpleIcon />, iconActive: <MegaphoneSimpleActiveIcon />, text: '이벤트' }
    ];

    const studentMenuItem = [
        { icon: <HouseLineDefaultIcon />, iconActive: <HouseLineIcon />, text: '홈' },
        { icon: <CalendarCheckIcon />, iconActive: <CalendarCheckActiveIcon />, text: '강의' },
        { icon: <BookOpenTextIcon />, iconActive: <BookOpenTextActiveIcon />, text: '학습' },
        { icon: <ListChecksIcon />, iconActive: <ListChecksActiveIcon />, text: '모의고사' },
        { icon: <MegaphoneSimpleIcon />, iconActive: <MegaphoneSimpleActiveIcon />, text: '이벤트' }
    ];

    const handleClickMenu = (newValue) => {
        setMenuValue(newValue);
    };

    const handleClickAllTeacher = (value) => {
        setMenuValue(value);
    };

    return (
        <Container>
            <Header />
            <ContentsBox>
                <SideBar menuItem={isLeader ? menuItem : studentMenuItem} menuValue={menuValue} handleClickMenu={handleClickMenu} />
                <ContentsInBox>
                    {menuValue === '홈' && (
                        <HomeComponent isLeader={isLeader} login={login} handleClickAllTeacher={handleClickAllTeacher} />
                    )}
                    {menuValue === '강의' && <LectureSchedule isLeader={isLeader} />}
                    {menuValue === '교육과정' && <CourseList />}
                    {menuValue === '학습' && <PreparingService />}
                    {menuValue === '모의고사' && <MockTestList />}
                    {menuValue === '이벤트' && <PreparingService />}

                    {menuValue === '강사' && <TeacherComponent />}
                    {menuValue === '전체 강의' && <CurriculumComponent menuValue={menuValue} />}
                </ContentsInBox>
            </ContentsBox>
            <Footer />
        </Container>
    );
};

export default Home;
