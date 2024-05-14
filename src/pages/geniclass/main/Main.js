import React from 'react';
import { styled } from '@mui/material/styles';
import { Box } from '@mui/material';
import MainLectureComponent from "./lecture/MainLectureComponent";
import MainEvaluationComponent from "./evaluation/MainEvaluationComponent";
import MainAssignmentComponent from "./assignment/MainAssignmentComponent";
import MainReferenceRoomComponent from "./referenceRoom/MainReferenceRoomComponent";
import MainInquiryComponent from "./inquiry/MainInquiryComponent";
import MainCommunityComponent from "./community/MainCommunityComponent";

export const Container = styled(Box)(({ theme }) => ({
    width: '100%',
    background: '#fff',
    boxSizing: 'border-box'
}));

const Root = styled(Box)(({ theme }) => ({
    width: 1280,
    margin: '0 auto',
    height: '100%',
    boxSizing: 'content-box',
    '& .sticky': {
        position: 'absolute',
        top: 0,
        width: '100%',
        zIndex: 200,
        boxShadow: '0 2px 2px 0 rgba(0, 0, 0, 0.25)'
    },
    '& .stickyCenter': {
        '@media all and (min-width: 1500px)': {
            width: 730
        },
        width: 620,
        margin: '80px auto 30px'
    },
    '& .stickyLeft': {
        '@media all and (min-width: 1500px)': {
            transform: 'translate(-690px, 0)'
        },
        position: 'fixed',
        top: 100,
        left: '50%',
        transform: 'translate(-570px, 0)'
    },
    '& .stickyRight': {
        '@media all and (min-width: 1500px)': {
            transform: 'translate(690px, 0)'
        },
        position: 'fixed',
        top: 100,
        right: '50%',
        transform: 'translate(570px, 0)'
    },
    [theme.breakpoints.down('hd')]: {
        width: '100%',
        padding: '0 16px',
        boxSizing: 'border-box'
    }
}));

const Wrap = styled(Box)(({ theme }) => ({
    width: '100%'
}));

const Main = () => {
    return (
        <Container>
            <Root>
                <Wrap>
                    <MainLectureComponent handleChangeTab={this.handleChangeTab} />

                    <MainEvaluationComponent />

                    <MainAssignmentComponent />

                    <MainReferenceRoomComponent />

                    <MainInquiryComponent />

                    {/*<MainCommunityComponent isMember={isMember} />*/}
                    <MainCommunityComponent  />
                </Wrap>
            </Root>


        </Container>
    );
};

export default Main;
