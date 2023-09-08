import {styled} from "@mui/material/styles";
import {Snackbar} from "@mui/material";

export const Container = styled('div')(({ theme }) => ({
    width: '100%',
    minHeight: '100vh',
    background: '#F5F5F5',
    '& *, .MuiTypography-root':{
        fontFamily:'Inter',
        letterSpacing: '-0.2px'
    }
}));

export const Contents = styled('div')(({ theme }) => ({

}));

