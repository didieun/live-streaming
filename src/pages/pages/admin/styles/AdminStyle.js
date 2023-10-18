import {styled} from "@mui/material/styles";

export const Container = styled('div')(({ theme }) => ({
    width: '100%',
    minHeight: '100vh',
    background: '#F3F3F3',
    '& *, .MuiTypography-root, button':{
        fontFamily:'Inter',
        letterSpacing: '-0.2px'
    }
}));

export const Contents = styled('div')(({ theme }) => ({
    display: 'flex'
}));
