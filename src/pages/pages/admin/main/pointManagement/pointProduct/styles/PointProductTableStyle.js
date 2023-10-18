import {styled} from "@mui/material/styles";
import {Typography} from "@mui/material";

export const Flex = styled('div')(({ theme }) => ({
    display:'inline-flex',
    alignItems: 'flex-end',
}));

export const PointBoldText = styled(Typography)(({ theme }) => ({
    '&.MuiTypography-root':{
        color: '#2E8C6A',
        fontSize: '1rem',
        fontWeight: 700,
        textDecoration:'underline',
        lineHeight:1,
        textUnderlineOffset:4,
        textDecorationThickness: 1,
        cursor: 'pointer'
    }
}));