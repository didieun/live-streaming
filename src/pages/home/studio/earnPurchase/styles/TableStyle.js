import {styled} from "@mui/material/styles";
import {Button, Typography} from "@mui/material";

export const SvgSize = styled('div')(({ theme }) => ({
    marginRight: 10,
    '& svg':{
        width: 36,
        height: 36
    }
}));

export const TypeText = styled(Typography)(({ theme }) => ({
    '&.MuiTypography-root':{
        fontSize: '0.875rem',
        color: '#18181d',
        marginBottom: 4
    }
}));

export const TypeTextBlue = styled(TypeText)(({ theme }) => ({
    '&.MuiTypography-root':{
        color: '#2673e5'
    }
}));

export const FlexColumn = styled('div')(({ theme }) => ({
    display:'flex',
    flexDirection: 'column',
    alignItems: 'flex-start'
}));

export const TypeSpanText = styled('span')(({ theme }) => ({
    color: '#2e8c6a'
}));

export const RedButton = styled(Button)(({ theme }) => ({
    "&.MuiButtonBase-root": {
        width: 130,
        height: 24,
        padding: 0,
        fontSize:'0.75rem',
        fontWeight: 'bold',
        color: '#fff',
        background: '#ef222e',
        borderRadius: 5,
        "&:hover": {
            background: "#ef222e",
        },
    },
}));

export const MinusText = styled('span')(({ theme }) => ({
    fontSize: '1.5rem',
    color: '#000',
    fontWeight: 700,
    marginRight: 9
}));

export const PlusText = styled(MinusText)(({ theme }) => ({
    color: '#0F5FC2',
}));

export const GreenText = styled(MinusText)(({ theme }) => ({
    color: '#3A974C',
}));

export const StatusBox = styled('div')(({ theme }) => ({
    minWidth: 80,
    height: 24,
    padding: '1px 8px 0',
    boxSizing: 'border-box',
    background: '#ef222e',
    borderRadius: 4,
    display: 'flex',
    justifyContent: 'center',
    alignItems:'center',
    '& p':{
        fontSize: '0.75rem',
        color: '#fff',
        fontWeight: 'bold',
    }
}));

export const StatusBoxBlue = styled(StatusBox)(({ theme }) => ({
    background: '#3799D0',
    marginRight: 20,
}));

export const CanceledText = styled(StatusBox)(({ theme }) => ({
    background: '#969696',
}));

export const AlignCenter = styled('div')(({ theme }) => ({
    display:'flex',
    alignItems:'center'
}));

export const ButtonStyle = styled(Button)(({ theme }) => ({
    "&.MuiButtonBase-root": {
        maxWidth: 500,
        padding: 0,
        background: "transparent",
        "&:hover": {
            background: "transparent",
        },
        '& p':{
            fontSize: '0.875rem',
            textTransform:'none',
            fontWeight: 'normal',
            overflow:'hidden',
            textOverflow:'ellipsis',
            whiteSpace:'nowrap',
            color: '#2E8C6A',
            marginLeft: 6,
        }
    },
}));


export const OpenButtonStyle = styled(ButtonStyle)(({ theme }) => ({
    "&.MuiButtonBase-root": {
        '& p':{
            color: '#18181d',
            opacity: 0.6
        }
    },
}));

//settlement
export const ChannelIdTextSettlement = styled(Button)(({ theme }) => ({
    "&.MuiButtonBase-root": {
        maxWidth: 300,
        padding: 0,
        boxSizing: 'border-box',
        background: 'transparent',
        '&:hover':{
            background: 'transparent'
        },
        '& p':{
            width: '100%',
            textTransform: 'none',
            overflow:'hidden',
            textOverflow:'ellipsis',
            whiteSpace:'nowrap',
            fontSize: '0.875rem',
            color: '#2e8c6a',
            textDecoration: 'underline',
        }
    }
}));

