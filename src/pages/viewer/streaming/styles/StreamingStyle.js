import {styled} from "@mui/material/styles";
import {asideWidth, headerHeight, smallAsideWidth, smallHeaderHeight} from "../Streaming";
import {Tooltip} from "@mui/material";

export const Container = styled('div')(({ theme }) => ({
    width: '100%',
    minHeight: '100vh',
    background: '#0d0d0d',
    '& *, .MuiTypography-root':{
        fontFamily:'Inter',
        letterSpacing: '-0.2px'
    }
}));

export const Contents = styled('div')(({ theme }) => ({
    display: 'flex'
}));

export const Section = styled('div')(({ theme }) => ({
    width: `calc(100% - ${asideWidth}px)`,
    height: `calc(100vh - ${headerHeight}px)`,
    '@media all and (max-width: 1400px)': {
        width: `calc(100% - ${smallAsideWidth}px)`,
    },
    '@media all and (max-width: 1800px)': {
        height: `calc(100vh - ${smallHeaderHeight}px)`,
    },
}));

export const Aside = styled('div')(({ theme }) => ({
    width: asideWidth,
    height: `calc(100vh - ${headerHeight}px)`,
    borderLeft: '1px solid #6f6f6f',
    boxSizing: 'border-box',
    '@media all and (max-width: 1400px)': {
        width: smallAsideWidth,
    },
    '@media all and (max-width: 1800px)': {
        height: `calc(100vh - ${smallHeaderHeight}px)`,
    },
}));


// 공통 툴팁
export const TooltipStyle = styled(({ className, ...props }) => (
    <Tooltip {...props} componentsProps={{ tooltip: { className: className } }} />
))(`
    background: #f4d219;
    border: 1px solid #F3A50E;
    border-radius: 0;
    font-size: 0.813rem;
    padding: 1px 6px;
    color: #000;
`);