import {styled} from "@mui/material/styles";
import {Button, Typography} from "@mui/material";

export const Container = styled('div')(({ theme }) => ({
    borderBottom: '1px solid rgba(255, 255, 255, 0.5)',
    margin: '0 12px 0',
    paddingTop: 31,
    paddingBottom: 23,
    '@media all and (max-width: 1500px)': {
        paddingTop: 20,
        paddingBottom: 10
    },
}));

export const ContainerIn = styled('div')(({ theme }) => ({
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between'
}));

export const LeftBox = styled('div')(({ theme }) => ({
    width: 'calc(100% - 250px - 20px)',
    marginRight: 20,
    '@media all and (max-width: 1500px)': {
        width: 'calc(100% - 180px - 20px)',
    },
}));

export const TextStyle = styled(Typography)(({ theme }) => ({
    '&.MuiTypography-root':{
        fontSize: '1.125rem',
        color: '#fff',
        fontWeight: 700,
        lineHeight: '24px',
        '@media all and (max-width: 1500px)': {
            fontSize: '1rem',
        },
    }
}));

export const AlignStart = styled('div')(({ theme }) => ({
    display:'flex',
    justifyContent: 'flex-end'
}));

export const AlignCenter = styled('div')(({ theme }) => ({
    display:'flex',
    alignItems: 'center'
}));

export const TagBox = styled(AlignCenter)(({ theme }) => ({
    marginBottom: 14,
    '@media all and (max-width: 1500px)': {
        marginBottom: 8,
    },
}));

export const JustifyColumn = styled('div')(({ theme }) => ({
    display:'flex',
    flexDirection:'column',
    alignItems: 'center'
}));

export const MarginLeft = styled(JustifyColumn)(({ theme }) => ({
    marginLeft: 6
}));

export const TimeText = styled(Typography)(({ theme }) => ({
    '&.MuiTypography-root':{
        fontSize: '1.125rem',
        color: '#fff',
        fontWeight: 400,
        marginBottom: 4,
        '@media all and (max-width: 1500px)': {
            fontSize: '1rem',
        },
    }
}));

export const LiveBox = styled('div')(({ theme }) => ({
    width: 62,
    height: 24,
    borderRadius: 5,
    background:'#ef222e',
    display:'flex',
    justifyContent:'center',
    alignItems: 'center',
    '& p':{
        fontSize: '0.75rem',
        color: '#fff',
        fontWeight: 'bold',
        marginLeft: 3
    },
    '& svg':{
        width: 19,
        height: 19
    },
    '@media all and (max-width: 1500px)': {
        width: 50,
        height: 20,
        borderRadius: 3,
        '& p':{
            fontSize: '0.625rem',
        },
        '& svg':{
            width: 15,
            height: 15
        },
    },
}));

export const DotStyle = styled('div')(({ theme }) => ({
    width: 5,
    height: 5,
    background: '#fff',
    borderRadius: '50%',
    marginRight: 7,
    '@media all and (max-width: 1500px)': {
        width: 3,
        height: 3,
    },
}));

export const IconColorSize = styled('div')(({ theme }) => ({
    width: 20,
    height: 20,
    marginRight: 6,
    '& svg':{
        width: 20,
        height: 20,
        '& path':{
            stroke: '#848589'
        }
    },
}));

export const ViewersText = styled(Typography)(({ theme }) => ({
    '&.MuiTypography-root':{
        fontSize: '1.125rem',
        color:'#fff',
        fontWeight: 400,
        '& span':{
            color: '#23b882',
            fontWeight: 700
        },
        '@media all and (max-width: 1500px)': {
            fontSize: '1rem',
        },
    }
}));

export const ShareButton = styled(Button)(({ theme }) => ({
    "&.MuiButtonBase-root": {
        padding: 0,
        background: 'transparent',
        display:'flex',
        justifyContent:'center',
        alignItems: 'center',
        '&:hover':{
            background: 'transparent'
        },
        '& p':{
            fontSize: '1rem',
            color: '#fff',
            fontWeight: 400,
            textTransform: 'none',
            marginLeft: 6
        },
        '@media all and (max-width: 1500px)': {
            '& p':{
                fontSize: '0.875rem',
            },
            '& svg':{
                width:15,
                height: 15
            }
        },
    }
}));

export const TagBoxIn = styled('div')(({ theme }) => ({
    height: 28,
    padding: '0 9px',
    background: '#d2d2d2',
    borderRadius: 90,
    marginRight: 8,
    display:'flex',
    justifyContent: 'center',
    alignItems: 'center',
    '& p':{
        fontSize: '0.875rem',
        color: 'rgba(24, 24, 29, 0.7)',
        fontWeight: 500
    },
    '&:last-child':{
        marginRight: 0
    },
    '@media all and (max-width: 1500px)': {
        height: 23,
        marginRight: 5,
        '& p':{
            fontSize: '0.75rem',
        },
    },
}));