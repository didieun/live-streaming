import {styled} from "@mui/material/styles";

export const Container = styled('div')(({ theme }) => ({
    width: '100%',
    height: '100vh',
    boxSizing: 'border-box',
    background: '#2A2A2A',
    display: 'flex',
    flexDirection:'column',
}));

export const ContainerIn = styled('div')(({ theme }) => ({
    display:'flex'
}));

export const LeftBox = styled('div')(({ theme }) => ({
    width: '100%',
    height: '100vh',
    display:'flex',
    flexDirection: 'column'
}));



