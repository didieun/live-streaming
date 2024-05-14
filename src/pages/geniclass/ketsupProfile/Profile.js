import React from 'react';
import styled from '@emotion/styled/macro';
import { Box, Stack, Tab, Tabs } from '@mui/material';
import Header from '../ketsupHome/header/Header';
import Footer from '../ketsupHome/footer/Footer';
import { headerHeight } from '../ketsupHome/Home';
import { useViewSize } from '../../../store';
import TeacherInformationComponent from './TeacherInformationComponent';

const Container = styled(Stack)(({ theme }) => ({
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center'
}));

const ContentsInBox = styled(Box)(({ theme, isLg }) => ({
    width: isLg ? '100%' : 1280,
    minHeight: `calc(100vh - ${headerHeight}px - 234px)`,
    margin: `${headerHeight}px auto 0`,
    padding: isLg ? '0 16px' : 0
}));

const TabsStyle = styled(Tabs)(({ theme, isLg }) => ({
    width: '100%',
    marginTop: 30,
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

const Profile = () => {
    const { isLg } = useViewSize();
    const [value, setValue] = React.useState(1);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Container>
            <Header />
            <ContentsInBox isLg={isLg}>
                <TabsStyle value={value} onChange={handleChange} isLg={isLg}>
                    <Tab label="프로필 설정" value={0} />
                    <Tab label="강사 정보" value={1} />
                </TabsStyle>

                {value === 1 && <TeacherInformationComponent />}
            </ContentsInBox>
            <Footer />
        </Container>
    );
};

export default Profile;
