import Header from './header/Header';
import SideBar from './sideBar/SideBar';
import { styled } from '@mui/material/styles';
import React from 'react';
import { Container, IconButtonStyle } from '../common/styled/CommonStyle';
import { Box } from '@mui/material';
import { ReactComponent as ArrowLineLeft } from '../../../assets/images/ArrowLineLeft.svg';
import ContentRegistration from './contentRegistration/ContentRegistration';
import ScheduleRegistration from './ScheduleRegistration/ScheduleRegistration';
import CourseInformationSettings from './courseInformationSettings/CourseInformationSettings';
// import ContentLectureSectionComponent from '../../../views/contentLecture/ContentLectureSectionComponent';
// import { inject, observer } from 'mobx-react';
// import ContentLecturePreviewComponent from '../../../views/contentLecture/ContentLecturePreviewComponent';
import PreviewComponent from './preview/PreviewComponent';

const ContainerIn = styled(Box)(({ theme }) => ({
    width: '100%',
    minHeight: `calc(100vh - ${headerHeight}px)`,
    display: 'flex',
    position: 'relative',
    boxSizing: 'border-box'
}));

const OpenSideBarBtn = styled(IconButtonStyle)(({ theme }) => ({
    '&.MuiButtonBase-root': {
        width: 20,
        height: 20,
        position: 'absolute',
        top: 25,
        left: 25
    }
}));

export const closedRoot = (theme) => ({
    width: '100%',
    height: `calc(100vh - ${headerHeight}px)`,
    overflowY: 'auto',
    overflowX: 'hidden',
    boxSizing: 'border-box',
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen
    })
});

export const openedRoot = (theme) => ({
    width: `calc(100% - ${sideBarWidth}px)`,
    height: `calc(100vh - ${headerHeight}px)`,
    overflowY: 'auto',
    overflowX: 'hidden',
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

export const sideBarWidth = 237;
export const headerHeight = 78;
export const contentsMaxHeight = `calc(100vh - ${headerHeight}px - 50px - 25px - 25px - 57px - 15px - 57px - 25px - 56px)`;
export const contentsHeight = `calc(100vh - ${headerHeight}px - 50px - 25px - 25px - 57px - 25px - 56px)`;

export const scheduleUserListWidth = 303;
export const scheduleHeight = `calc(100vh - ${headerHeight}px - 25px - 33px - 44px - 30px - 15px - 25px - 67px - 60px)`;

const coachingSteps = ['강의정보 설정', '코칭스케줄 등록', '수업콘텐츠 등록'];
const steps = ['강의정보 설정', '교재 생성'];

const ContentsLectureSectionView = observer(
    ({ lessonStore, open, contentsTypeTooltip, handleCloseContentsTypeTooltip }) =>
        lessonStore.lesson.layout && (
            <ContentLectureSectionComponent
                open={open}
                lessonStore={lessonStore}
                contentsTypeTooltip={contentsTypeTooltip}
                handleCloseContentsTypeTooltip={handleCloseContentsTypeTooltip}
            />
        )
);

const CreateACourse = ({ lessonStore }) => {
    const [sideBarOpen, setSideBarOpen] = React.useState(true);
    const [activeStep, setActiveStep] = React.useState(0);
    const [completed, setCompleted] = React.useState({});
    const [typeValue, setTypeValue] = React.useState('0');
    const [layoutTooltip, setLayoutTooltip] = React.useState(true);
    const [contentsTooltip, setContentsTooltip] = React.useState(false);
    const [contentsTypeTooltip, setContentsTypeTooltip] = React.useState(false);
    const [preview, setPreview] = React.useState(false);

    const typeValueList = [
        {
            label: '맞춤코칭',
            value: '0'
        },
        {
            label: '일시강의',
            value: '1'
        },
        {
            label: '상시강의',
            value: '2'
        },
        {
            label: '만족도 조사',
            value: '3'
        }
    ];

    const handleCloseLayoutTooltip = () => {
        setLayoutTooltip(false);
        setContentsTooltip(true);
    };

    const handleClickPreview = () => {
        setPreview(!preview);
    };

    const handleCloseContentsTooltip = () => {
        setContentsTooltip(false);
        setContentsTypeTooltip(true);
    };

    const handleCloseContentsTypeTooltip = () => {
        setContentsTypeTooltip(false);
    };

    const handleTypeChange = (event) => {
        setTypeValue(event.target.value);
    };

    const totalSteps = () => {
        return coachingSteps.length;
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
        const newActiveStep =
            isLastStep() && !allStepsCompleted() ? coachingSteps.findIndex((step, i) => !(i in completed)) : activeStep + 1;
        isLastStep() && !allStepsCompleted() ? steps.findIndex((step, i) => !(i in completed)) : activeStep + 1;
        setActiveStep(newActiveStep);
    };

    const handleActiveStep = (e, value) => {
        setActiveStep(coachingSteps.indexOf(value));
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
    };

    console.log('[CreateCourse] :>>', completed);

    return (
        <Container>
            <Header typeValue={typeValue} activeStep={activeStep} preview={preview} handleClickPreview={handleClickPreview} />
            <PreviewComponent />
            {/*{preview ? (*/}
            {/*    <PreviewComponent />*/}
            {/*) : (*/}
            {/*    <ContainerIn>*/}
            {/*        {sideBarOpen ? (*/}
            {/*            <SideBar*/}
            {/*                open={sideBarOpen}*/}
            {/*                handleSideBarClose={handleSideBarClose}*/}
            {/*                steps={typeValue === '0' ? coachingSteps : steps}*/}
            {/*                activeStep={activeStep}*/}
            {/*                completed={completed}*/}
            {/*                handleActiveStep={handleActiveStep}*/}
            {/*                setActiveStep={setActiveStep}*/}
            {/*                typeValue={typeValue}*/}
            {/*                layoutTooltip={layoutTooltip}*/}
            {/*                contentsTooltip={contentsTooltip}*/}
            {/*                handleCloseLayoutTooltip={handleCloseLayoutTooltip}*/}
            {/*                handleCloseContentsTooltip={handleCloseContentsTooltip}*/}
            {/*            />*/}
            {/*        ) : (*/}
            {/*            <OpenSideBarBtn onClick={handleSideBarOpen} disableRipple>*/}
            {/*                <ArrowLineLeft style={{ transform: 'scaleX(-1)' }} />*/}
            {/*            </OpenSideBarBtn>*/}
            {/*        )}*/}
            {/*        <ContentsBox open={sideBarOpen}>*/}
            {/*            {activeStep === 0 && (*/}
            {/*                <CourseInformationSettings*/}
            {/*                    handleChange={handleTypeChange}*/}
            {/*                    value={typeValue}*/}
            {/*                    valueList={typeValueList}*/}
            {/*                    handleComplete={handleComplete}*/}
            {/*                    open={sideBarOpen}*/}
            {/*                />*/}
            {/*            )}*/}
            {/*            {typeValue === '0' && activeStep === 1 && (*/}
            {/*                <ScheduleRegistration handleComplete={handleComplete} open={sideBarOpen} />*/}
            {/*            )}*/}
            {/*            {typeValue !== '0' && activeStep === 1 && (*/}
            {/*                <ContentsLectureSectionView*/}
            {/*                    lessonStore={lessonStore}*/}
            {/*                    open={sideBarOpen}*/}
            {/*                    contentsTypeTooltip={contentsTypeTooltip}*/}
            {/*                    handleCloseContentsTypeTooltip={handleCloseContentsTypeTooltip}*/}
            {/*                />*/}
            {/*            )}*/}
            {/*            {activeStep === 2 && <ContentRegistration open={sideBarOpen} />}*/}
            {/*        </ContentsBox>*/}
            {/*    </ContainerIn>*/}
            {/*)}*/}
        </Container>
    );
};

// export default inject('lessonStore')(CreateACourse);
export default CreateACourse;
