import Header from './header/Header';
import SideBar from './sideBar/SideBar';
import { styled } from '@mui/material/styles';
import React, { useEffect, useRef } from 'react';
import { Container } from '../common/styled/CommonStyle';
import { Box, IconButton } from '@mui/material';
import { ReactComponent as SideBarArrowIcon } from '../../../assets/images/SideBarArrowIcon.svg';
import CourseInformationSettings from './courseInformationSettings/CourseInformationSettings';
import ContentRegistration from './contentRegistration/ContentRegistration';

const ContainerIn = styled(Box)(({ theme }) => ({
    width: '100%',
    minHeight: 'calc(100vh - 100px)',
    display: 'flex',
    position: 'relative',
    boxSizing: 'border-box'
}));

const OpenSideBarBtn = styled(IconButton)(({ theme }) => ({
    '&.MuiButtonBase-root': {
        width: 35,
        height: 35,
        boxShadow: '0 2px 15px 0 rgba(0, 0, 0, 0.15)',
        borderRadius: '50%',
        background: '#fff',
        position: 'absolute',
        top: 25,
        left: 25,
        padding: '0px',
        '&:hover': {
            background: '#fff'
        }
    }
}));

export const closedRoot = (theme) => ({
    width: '100%',
    height: 'calc(100vh - 100px)',
    overflowY: 'auto',
    boxSizing: 'border-box',
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen
    })
});

export const openedRoot = (theme) => ({
    width: `calc(100% - ${drawerWidth}px)`,
    height: 'calc(100vh - 100px)',
    overflowY: 'auto',
    boxSizing: 'border-box',
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen
    })
});

export const ContentsBox = styled(Box, { shouldForwardProp: (prop) => prop !== 'open' })(({ theme, open }) => ({
    ...(open && {
        ...openedRoot(theme),
        '&.MuiBox-root': openedRoot(theme)
    }),
    ...(!open && {
        ...closedRoot(theme),
        '&.MuiBox-root': closedRoot(theme)
    })
}));

export const drawerWidth = 286;

const steps = ['강의정보 설정', '코칭스케줄 등록', '수업콘텐츠 등록'];

const CreateACourse = () => {
    const [sideBarOpen, setSideBarOpen] = React.useState(true);
    const [activeStep, setActiveStep] = React.useState(0);
    const [completed, setCompleted] = React.useState({});

    const contentsRef = useRef(null);
    const [contentsWidth, setContentsWidth] = React.useState(0);

    const setWidth = () => {
        setContentsWidth(contentsRef.current.offsetWidth);
    };

    useEffect(() => {
        window.addEventListener('resize', setWidth);
        window.addEventListener('mouseover', setWidth);
        return () => {
            window.removeEventListener('resize', setWidth);
            window.removeEventListener('mouseover', setWidth);
        };
    }, []);

    const totalSteps = () => {
        return steps.length;
    };

    const completedSteps = () => {
        return Object.keys(completed).length;
    };

    const isLastStep = () => {
        return activeStep === totalSteps() - 1;
    };

    const allStepsCompleted = () => {
        return completedSteps() === totalSteps();
    };

    const handleNext = () => {
        const newActiveStep = isLastStep() && !allStepsCompleted() ? steps.findIndex((step, i) => !(i in completed)) : activeStep + 1;
        setActiveStep(newActiveStep);
    };

    const handleActiveStep = (e, value) => {
        setActiveStep(steps.indexOf(value));
    };

    const handleComplete = () => {
        const newCompleted = completed;
        newCompleted[activeStep] = true;
        setCompleted(newCompleted);
        handleNext();
    };

    const handleSideBarOpen = () => {
        setSideBarOpen(true);
    };

    const handleSideBarClose = () => {
        setSideBarOpen(false);
        setContentsWidth(window.innerWidth);
    };

    console.log('[CreateCourse] :>>', completed);
    console.log('contentsWidth', contentsWidth);

    return (
        <Container>
            <Header />
            <ContainerIn>
                {sideBarOpen ? (
                    <SideBar
                        width={drawerWidth}
                        open={sideBarOpen}
                        handleSideBarClose={handleSideBarClose}
                        steps={steps}
                        activeStep={activeStep}
                        completed={completed}
                        handleActiveStep={handleActiveStep}
                        setActiveStep={setActiveStep}
                    />
                ) : (
                    <OpenSideBarBtn onClick={handleSideBarOpen} disableRipple>
                        <SideBarArrowIcon />
                    </OpenSideBarBtn>
                )}
                <ContentsBox open={sideBarOpen} ref={contentsRef}>
                    {activeStep === 0 && <CourseInformationSettings handleComplete={handleComplete} open={sideBarOpen} />}
                    {activeStep === 1 && <div>코칭스케줄 등록</div>}
                    {activeStep === 2 && (
                        <ContentRegistration contentsWidth={contentsWidth} handleComplete={handleComplete} open={sideBarOpen} />
                    )}
                </ContentsBox>
            </ContainerIn>
        </Container>
    );
};

export default CreateACourse;
