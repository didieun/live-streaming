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
