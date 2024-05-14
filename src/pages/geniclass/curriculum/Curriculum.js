import { Box, IconButton } from '@mui/material';
import { Container, FlexColumnCenter } from '../common/styled/CommonStyle';
import Header from './header/Header';
import Footer from './footer/Footer';
import React from 'react';
import { styled } from '@mui/material/styles';
import SideBar from './sideBar/SideBar';
import { ReactComponent as HouseIcon } from '../../../assets/images/HouseLineIcon.svg';
import { ReactComponent as HouseLineDefaultIcon } from '../../../assets/images/HouseLineDefaultIcon.svg';
import { ReactComponent as CalendarBlankIcon } from '../../../assets/images/CalendarBlankIcon.svg';
import { ReactComponent as CalendarBlankActiveIcon } from '../../../assets/images/CalendarBlankActiveIcon.svg';
import { ReactComponent as ListChecksIcon } from '../../../assets/images/ListChecksIcon.svg';
import { ReactComponent as ListChecksActiveIcon } from '../../../assets/images/ListChecksActiveIcon.svg';
import { ReactComponent as FolderNotchOpenIcon } from '../../../assets/images/FolderNotchOpenIcon.svg';
import { ReactComponent as FolderNotchOpenActiveIcon } from '../../../assets/images/FolderNotchOpenActiveIcon.svg';
import { ReactComponent as CheckCircleOutlineIcon } from '../../../assets/images/CheckCircleOutlineIcon.svg';
import { ReactComponent as CheckCircleOutlineActiveIcon } from '../../../assets/images/CheckCircleOutlineActiveIcon.svg';
import { ReactComponent as StudentIcon } from '../../../assets/images/StudentIcon.svg';
import { ReactComponent as StudentActiveIcon } from '../../../assets/images/StudentActiveIcon.svg';
import { ReactComponent as GroupIcon } from '../../../assets/images/GroupIcon.svg';
import { ReactComponent as GroupActiveIcon } from '../../../assets/images/GroupActiveIcon.svg';
import Home from './home/Home';
import LectureSchedule from './lectureSchedule/LectureSchedule';
import ClassMaterials from './classMaterials/ClassMaterials';
import { useViewSize } from '../../../store';
import CourseList from './courseList/CourseList';
import RegisterCourseComponent from './registerCourse/RegisterCourseComponent';
import StudentManagementComponent from './studentManagement/StudentManagementComponent';
import GroupManagementComponent from './groupManagement/GroupManagementComponent';

const ContainerIn = styled(Box)(({ theme }) => ({
    width: '100%',
    minHeight: `calc(100vh - ${headerHeight}px)`,
    paddingTop: `${headerHeight}px`,
    display: 'flex',
    position: 'relative',
    boxSizing: 'border-box'
}));

const ContentsBox = styled(FlexColumnCenter)(({ theme, isLg, open }) => ({
    width: open ? `calc(100% - ${sideBarWidth}px)` : `calc(100% - ${closeSideBarWidth}px)`,
    background: '#fff',
    padding: isLg ? '0 16px' : 0,
    boxSizing: 'border-box'
}));

export const sideBarWidth = 237;
export const closeSideBarWidth = 65;
export const headerHeight = 78;
export const footerHeight = 232;
export const scheduleUserListWidth = 303;
export const scheduleHeight = `calc(100vh - ${headerHeight}px - 25px - 33px - 44px - 30px - 15px - 25px - 67px - 60px)`;

const Default = () => {
    const { isLg } = useViewSize();
    const [sideBarOpen, setSideBarOpen] = React.useState(true);
    const [value, setValue] = React.useState('홈');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    const handleSideBarOpen = () => {
        setSideBarOpen(true);
    };

    const handleSideBarClose = () => {
        setSideBarOpen(false);
    };

    const ToggleClickSideBar = () => {
        setSideBarOpen(!sideBarOpen);
    };

    const lnbMenu = [
        {
            icon: <HouseLineDefaultIcon />,
            iconActive: <HouseIcon />,
            text: '홈',
            value: '홈'
        },
        {
            icon: <CalendarBlankIcon />,
            iconActive: <CalendarBlankActiveIcon />,
            text: '강의일정',
            value: '강의일정'
        },
        {
            icon: <ListChecksIcon />,
            iconActive: <ListChecksActiveIcon />,
            text: '교육과정',
            value: '교육과정'
        },
        {
            icon: <FolderNotchOpenIcon />,
            iconActive: <FolderNotchOpenActiveIcon />,
            text: '수업자료',
            value: '수업자료'
        },
        {
            icon: <CheckCircleOutlineIcon />,
            iconActive: <CheckCircleOutlineActiveIcon />,
            text: '수강신청 승인',
            value: '수강신청 승인'
        },
        {
            icon: <StudentIcon />,
            iconActive: <StudentActiveIcon />,
            text: '학생관리',
            value: '학생관리'
        },
        {
            icon: <GroupIcon />,
            iconActive: <GroupActiveIcon />,
            text: '그룹관리',
            value: '그룹관리'
        }
    ];
    return (
        <Container>
            <Header />
            <ContainerIn>
                <SideBar
                    menuItem={lnbMenu}
                    handleSideBarClose={handleSideBarClose}
                    value={value}
                    open={sideBarOpen}
                    handleChange={handleChange}
                    ToggleClickSideBar={ToggleClickSideBar}
                />

                <ContentsBox isLg={isLg} open={sideBarOpen}>
                    {value === '홈' && <Home />}
                    {value === '강의일정' && <LectureSchedule />}
                    {value === '교육과정' && <CourseList pageTitle={'교육과정'} />}
                    {value === '수업자료' && <ClassMaterials pageTitle={'수업자료'} />}
                    {value === '수강신청 승인' && <RegisterCourseComponent />}
                    {value === '학생관리' && <StudentManagementComponent />}
                    {value === '그룹관리' && <GroupManagementComponent />}
                </ContentsBox>
            </ContainerIn>
            <Footer />
        </Container>
    );
};

export default Default;
