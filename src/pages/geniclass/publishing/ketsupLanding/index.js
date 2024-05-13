import React from 'react';
import styled from '@emotion/styled/macro';
import { Stack } from '@mui/material';
import VideoContentsComponent from './videoContents/VideoContentsComponent';
import IntroductionTeacherContentsComponent from './introductionContents/IntroductionTeacherContentsComponent';
import TextContentsComponent from './text/TextContentsComponent';
import IntroductionContentsComponent2 from './introductionContents/IntroductionLectureContentsComponent';
import FAQContentsComponent from './faq/FAQContentsComponent';
import TextBookContentsComponent from './textbook/TextBookContentsComponent';
import Header from './header/Header';
import Footer from './footer/Footer';

const Container = styled(Stack)(({ theme }) => ({
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center'
}));

const Landing = () => {
    return (
        <Container>
            <Header />
            <VideoContentsComponent />
            <IntroductionTeacherContentsComponent />
            <TextContentsComponent />
            <IntroductionContentsComponent2 />
            <TextBookContentsComponent />
            <FAQContentsComponent />
            <Footer />
        </Container>
    );
};

export default Landing;
