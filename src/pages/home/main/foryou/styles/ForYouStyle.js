import {styled} from "@mui/material/styles";
import {Box, Button, Typography} from "@mui/material";

export const Container = styled('div')(({ theme }) => ({
    width: '100%',
    height: '100%'
}));


export const TitleText = styled(Typography)(({ theme }) => ({
    '&.MuiTypography-root':{
        fontSize: '1.5rem',
        color:'#18181D',
        fontWeight: 'bold',
        marginTop: 60,
    }
}));

export const TagListBox = styled(Box)(({ theme }) => ({
    marginTop: 15,
    marginBottom: 14,
    display:'flex',
    alignItems:'center',
}));

export const tagOff = (theme) => ({
    background:'#D2D2D2',
    minWidth: 39,
    height: 24,
    padding: '0 7px',
    borderRadius: 76,
    marginRight: '8px',
    cursor:'pointer',
    boxSizing:'border-box',
    display:'flex',
    justifyContent: 'center',
    alignItems:'center',
    '& p':{
        fontSize: '0.75rem',
        color:'rgba(24, 24, 29, 0.7)',
        fontWeight: 'normal',
        textTransform: "none",
    },
    '&:last-child':{
        marginRight:0
    },
    '&:hover':{
        background:'#D2D2D2'
    }
});

export const tagOn = (theme) => ({
    background:'#2E8C6A',
    minWidth: 39,
    height: 24,
    padding: '0 7px',
    borderRadius: 76,
    marginRight: '8px',
    cursor:'pointer',
    boxSizing:'border-box',
    display:'flex',
    justifyContent: 'center',
    alignItems:'center',
    '& p':{
        fontSize: '0.75rem',
        color:'#fff',
        fontWeight: 'bold',
        textTransform: "none",
    },
    '&:last-child':{
        marginRight:0
    },
    '&:hover':{
        background:'#2e8c6a'
    }
});

export const TagBox = styled(Button, { shouldForwardProp: (prop) => prop !== 'select' })(
    ({ theme, select }) => ({
        ...(select && {
            ...tagOn(theme),
            '&.MuiBox-root': tagOn(theme),
        }),
        ...(!select && {
            ...tagOff(theme),
            '&.MuiBox-root': tagOff(theme),
        }),
    }),
);