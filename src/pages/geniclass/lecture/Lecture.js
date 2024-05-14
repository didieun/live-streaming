import React from 'react';
import styled from '@emotion/styled/macro';
import { Box, Tab, Tabs } from '@mui/material';
import { useViewSize } from '../../../store';
import LectureComponent from './lecture/LectureComponent';
import StudentViewComponent from './student/StudentViewComponent';
import Header from './header/Header';
import InquiryComponent from './inquiry/InquiryComponent';

const Root = styled(Box)(({ theme }) => ({
    width: '100%'
}));

const LayoutRootIn = styled(Box)(({ theme, isLg }) => ({
    width: isLg ? '100%' : 1380,
    margin: '50px auto',
    padding: isLg ? '0 16px 0 35px' : '0',
    boxSizing: 'border-box'
}));

const Layout2RootIn = styled(LayoutRootIn)(({ theme, isLg }) => ({
    width: '100%',
    maxWidth: 2300,
    margin: '50px auto 0',
    padding: isLg ? '0 16px 0 35px' : '0 30px 0 35px',
    boxSizing: 'border-box'
}));

const TabsStyle = styled(Tabs)(({ theme }) => ({
    width: '100%',
    marginBottom: 36,
    '& .MuiTabs-flexContainer': {
        gap: 15
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
        backgroundColor: '#F5CD79'
    }
}));

export const headerHeight = 78;

const Lecture = () => {
    const { isLg } = useViewSize();
    const [value, setValue] = React.useState(0);
    const [layout, setLayout] = React.useState(true);
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Root>
            <Header />
            {layout ? (
                <LayoutRootIn isLg={isLg}>
                    <TabsStyle value={value} onChange={handleChange}>
                        <Tab label="강의" value={0} />
                        <Tab label="수강생별 보기" value={1} />
                        <Tab label="문의" value={2} />
                    </TabsStyle>
                    {value === 0 && <LectureComponent layout={layout} />}
                    {value === 1 && <StudentViewComponent lecture={value === 1} layout={layout} />}
                    {value === 2 && <InquiryComponent />}
                </LayoutRootIn>
            ) : (
                <Layout2RootIn isLg={isLg}>
                    <TabsStyle value={value} onChange={handleChange}>
                        <Tab label="강의" value={0} />
                        <Tab label="수강생별 보기" value={1} />
                        <Tab label="문의" value={2} />
                    </TabsStyle>
                    {value === 0 && <LectureComponent layout={layout} />}
                    {value === 1 && <StudentViewComponent lecture={value === 1} layout={layout} />}
                    {value === 2 && <InquiryComponent layout={layout} />}
                </Layout2RootIn>
            )}
        </Root>
    );
};

export default Lecture;
