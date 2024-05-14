import {CssBaseline} from '@mui/material';
import {createTheme, ThemeProvider} from '@mui/material/styles';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';

import ErrorPage from "./pages/home/Error";
import HomePage from "./pages/home/Home";
import SamplePage from "./pages/home/sample/Sample";
import Studio from "./pages/home/studio/Studio";
import Streaming from "./pages/viewer/streaming/Streaming";
import Watching from "./pages/viewer/watching/Watching";
import MobileHome from "./pages/mobile/home/MobileHome";
import MobileViewer from "./pages/mobile/viewer/MobileViewer";
import Record from "./pages/geniclass/record/Record";
import CreateACourse from "./pages/geniclass/createCourse/CreateACourse";
import Curriculum from "./pages/geniclass/curriculum/Curriculum";
import Main from "./pages/geniclass/main/Main";
import CreateCurriculum from "./pages/geniclass/createCurriculum/CreateCurriculum";
import Invite from "./pages/geniclass/invite/Invite";
import Search from "./pages/geniclass/search/Search";
import Lecture from "./pages/geniclass/lecture/Lecture";
import Landing from "./pages/geniclass/ketsupLanding/Landing";
import Home from "./pages/geniclass/ketsupHome/Home";
import Profile from "./pages/geniclass/ketsupProfile/Profile";
import StudentMain from "./pages/geniclass/ketsupStudentMain/StudentMain";
import MockTest from "./pages/geniclass/ketsupMockTest/MockTest";

export const topBarHeight = 54;
export const drawerOpenWidth = 220;
export const drawerCloseWidth = 70;

const theme = createTheme({

});

const router = createBrowserRouter([
    {
        path: '/',
        element: <HomePage />,
        errorElement: <ErrorPage />,
    },
    {
        path: '/sample',
        element: <SamplePage />,
    },
    {
        path: '/studio',
        element: <Studio />,
    },
    {
        path: '/streaming',
        element: <Streaming />,
    },
    {
        path: '/watching',
        element: <Watching />,
    },
    //mobile
    {
        path: '/mobile',
        element: <MobileHome />,
    },
    {
        path: '/mobile/viewer',
        element: <MobileViewer />,
    },
    //지니클래스
    {
        path: '/record',
        element: <Record />
    },
    {
        path: '/createCourse',
        element: <CreateACourse />
    },
    {
        path: '/curriculum',
        element: <Curriculum />
    },
    {
        path: '/createCurriculum',
        element: <CreateCurriculum />
    },
    {
        path: '/main',
        element: <Main />
    },
    {
        path: '/invite',
        element: <Invite />
    },
    {
        path: '/search',
        element: <Search />
    },
    {
        path: '/lecture',
        element: <Lecture />
    },
    {
        path: '/ketsup/landing',
        element: <Landing />
    },
    {
        path: '/ketsup/home',
        element: <Home />
    },
    {
        path: '/ketsup/profile',
        element: <Profile />
    },
    {
        path: '/ketsup/student/main',
        element: <StudentMain />
    },
    {
        path: '/ketsup/mockTest',
        element: <MockTest />
    }
]);

function App() {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <RouterProvider router={router} />
        </ThemeProvider>
    );
}

export default App;
