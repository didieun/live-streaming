import {styled} from "@mui/material/styles";
import {headerHeight} from "../../Streaming";
import {Box, Button, IconButton, Popover, Typography} from "@mui/material";
import TooltipArrowBlue from "../../../../common/images/TooltipArrowBlue.svg";

export const Container = styled('div')(({ theme }) => ({
    width: '100%',
    height: headerHeight,
    background:'#2A2A2A',
    borderBottom: '1px solid #6f6f6f',
    boxSizing:'border-box',
    padding: '0 24px',
    display:'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
}));

export const AlignCenter = styled('div')(({ theme }) => ({
    display:'flex',
    alignItems: 'center'
}));

export const ChannelImageBox = styled('div')(({ theme }) => ({
    width: 100,
    height: 56,
    display:'flex',
    justifyContent:'center',
    alignItems: 'center',
    overflow: 'hidden',
    border: '1px solid rgba(0, 0, 0, 0.10)',
    boxSizing: 'border-box',
    marginRight: 12,
    background:'#848589',
    '& img':{
        width: '100%'
    },
}));

export const TitleText = styled(Typography)(({ theme }) => ({
    '&.MuiTypography-root':{
        maxWidth: 390,
        fontSize: '1.25rem',
        color:'#fff',
        fontWeight: 700,
        overflow:'hidden',
        textOverflow:'ellipsis',
        whiteSpace:'nowrap',
        marginRight: 4,
    }
}));

export const ButtonIcon = styled(IconButton)(({ theme }) => ({
    "&.MuiButtonBase-root": {
        padding: 0,
        "&:hover": {
            background: "transparent",
            opacity: 0.8
        },
        '&.Mui-disabled':{
            opacity: 0.3
        },
    },
}));


export const bellSelect = (theme) => ({
    '& path':{
        stroke: '#3A974C',
    }
});

export const bell = (theme) => ({
    '& path':{
        stroke: '#848589',
    }
});

export const BellButtonIcon = styled(ButtonIcon, { shouldForwardProp: (prop) => prop !== 'select' })(
    ({ theme, select }) => ({
        ...(select && {
            ...bellSelect(theme),
            '&.MuiButtonBase-root': bellSelect(theme),
        }),
        ...(!select && {
            ...bell(theme),
            '&.MuiButtonBase-root': bell(theme),
        }),
    }),
);

export const TextStyle = styled(Typography)(({ theme }) => ({
    '&.MuiTypography-root':{
        fontSize: '1rem',
        color:'#848589',
        fontWeight: 400,
    }
}));

export const joinMeSelect = (theme) => ({
    padding: 0,
    background:'transparent',
    marginRight: 19,
    '& p': {
        fontSize: '1.25rem',
        marginLeft: 6,
        color:'#3A974C',
        fontWeight: 400,
        textTransform: "none",
    },
    "&:hover": {
        background: "transparent",
        opacity: 0.8
    },
    '&.Mui-disabled':{
        opacity: 0.3
    },
    '& path':{
        fill: '#3A974C',
    }
});

export const joinMe = (theme) => ({
    padding: 0,
    background:'transparent',
    marginRight: 19,
    '& p': {
        fontSize: '1.25rem',
        marginLeft: 6,
        color:'#848589',
        fontWeight: 400,
        textTransform: "none",
    },
    "&:hover": {
        background: "transparent",
        opacity: 0.8
    },
    '&.Mui-disabled':{
        opacity: 0.3
    },
    '& path':{
        fill: '#848589',
    }
});

export const JoinMeButton = styled(Button, { shouldForwardProp: (prop) => prop !== 'select' })(
    ({ theme, select }) => ({
        ...(select && {
            ...joinMeSelect(theme),
            '&.MuiButtonBase-root': joinMeSelect(theme),
        }),
        ...(!select && {
            ...joinMe(theme),
            '&.MuiButtonBase-root': joinMe(theme),
        }),
    }),
);


export const AvatarBox = styled(Box)(({ theme }) => ({
    width: 50,
    height: 50,
    borderRadius: "50%",
    background: "#eeeeee",
    marginRight: 8,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    border: "1px solid #DADADA",
    boxSizing: "border-box",
    overflow:'hidden',
    marginLeft: 19,
    '& img':{
        width: '100%'
    },
    '& svg':{
        width: 30,
        height: 30,
    },
}));


export const StartStreamButton = styled(Button)(({ theme }) => ({
    "&.MuiButtonBase-root": {
        width: 264,
        height: 50,
        padding: 0,
        borderRadius: 5,
        background:'#2e8c6a',
        fontSize: '1.125rem',
        color: '#fff',
        fontWeight: 'bold',
        textTransform: "none",
        marginLeft: 14,
        "&:hover": {
            background: "rgba(35, 184, 130, 0.8)",
        },
        '&.Mui-disabled':{
            opacity: 0.3
        }
    },
}));

export const EndStreamButton = styled(StartStreamButton)(({ theme }) => ({
    "&.MuiButtonBase-root": {
        background:'#ef222e',
        "&:hover": {
            background: "rgba(239, 34, 46, 0.8)",
        },
    },
}));

export const PopoverBox = styled(Popover)(({ theme }) => ({
    '&.MuiPopover-root':{
        '& .MuiPaper-root':{
            background:'transparent',
            boxShadow: 'none',
            paddingTop: 15,
            paddingLeft: 40,
        }
    }
}));

export const PopoverBoxIn = styled('div')(({ theme }) => ({
    background:'#2F80ED',
    borderRadius: 6,
    padding: '11px 10px',
    position: 'relative',
    '&:before':{
        content: "''",
        backgroundImage: `url(${TooltipArrowBlue})`,
        backgroundRepeat:'no-repeat',
        position: 'absolute',
        top: -12,
        right: 110,
        width: 18,
        height: 18,
    }
}));

export const JustifySpace = styled('div')(({ theme }) => ({
    display:'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 6
}));

export const PopoverTitle = styled(Typography)(({ theme }) => ({
    '&.MuiTypography-root':{
        fontSize: '0.875rem',
        fontWeight: 700,
        color: '#fff',
        paddingRight: 30,
    }
}));

export const PopoverUrlText = styled(Typography)(({ theme }) => ({
    '&.MuiTypography-root':{
        fontSize: '0.938rem',
        fontWeight: 400,
        color: '#D2DEED',
        textDecoration: 'underline'
    }
}));

export const CopyButton = styled(Button)(({ theme }) => ({
    "&.MuiButtonBase-root": {
        minWidth: 40,
        height: 18,
        padding: 0,
        background: '#DADADA',
        fontSize: '0.75rem',
        fontWeight: 500,
        color: '#18181d',
        borderRadius: 4,
        textTransform:'none',
        marginLeft: 10,
        "&:hover": {
            background: "#DADADA",
            opacity: 0.8
        },
        '&.Mui-disabled':{
            opacity: 0.3
        }
    },
}));

export const LiveBox = styled("div")(({ theme }) => ({
    width: 78,
    height: 30,
    display:'inline-flex',
    alignItems:'center',
    justifyContent: 'center',
    background:'#ef222e',
    padding: '0 7px ',
    borderRadius: 6,
    boxSizing:'border-box',
    '& p':{
        fontSize: '1.063rem',
        color: '#fff',
        fontWeight: 700,
        marginLeft: 4
    },
    '& svg':{
        width: 24,
        height: 24
    }
}));
