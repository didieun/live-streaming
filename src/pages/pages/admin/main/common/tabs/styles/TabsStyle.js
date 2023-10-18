import {styled} from "@mui/material/styles";
import {Tabs} from "@mui/material";

export const Container = styled('div')(({ theme }) => ({
    position: 'relative'
}));

export const TabBox = styled(Tabs)(({ theme }) => ({
    '&.MuiTabs-root':{
        width: '100%',
        borderBottom: '1px solid #dadada',
        '& .MuiButtonBase-root':{
            minWidth: 120,
            height: 34,
            padding: '0 13px',
            fontSize: '0.938rem',
            color: '#848589',
            fontFamily: 'Inter !important',
            letterSpacing: '-0.2px',
            textTransform: 'none',
            '&.Mui-selected':{
                fontWeight: 'bold',
                color: '#18181d'
            }
        },
        '& .MuiTabs-indicator':{
            height: 2,
            background: '#2e8c6a',
            borderRadius: 99
        }
    }
}));
