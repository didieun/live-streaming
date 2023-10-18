import {styled} from "@mui/material/styles";
import {footerHeight, headerHeight, smallFooterHeight, smallHeaderHeight} from "../../Streaming";
import {IconButton, Popover, Typography} from "@mui/material";

export const Container = styled('div')(({ theme }) => ({
    width: '100%',
    height: `calc(100vh - ${headerHeight}px - ${footerHeight}px)`,
    boxSizing:'border-box',
    padding: '53px 12px 19px',
    display:'flex',
    flexDirection:'column',
    justifyContent:'center',
    '@media all and (max-width: 1800px)': {
        height: `calc(100vh - ${smallHeaderHeight}px - ${smallFooterHeight}px)`,
    },
}));

export const AlignCenter = styled('div')(({ theme }) => ({
    display:'flex',
    alignItems:'center'
}));

export const ButtonIcon = styled(IconButton)(({ theme }) => ({
    "&.MuiButtonBase-root": {
        padding: 0,
        "&:hover": {
            background: "transparent",
            opacity: 0.8,
        },
        '&.Mui-disabled':{
            opacity: 0.3
        },
    },
}));

export const TitleText = styled(Typography)(({ theme }) => ({
    '&.MuiTypography-root':{
        fontSize: '1.5rem',
        color: '#fff',
        fontWeight: 500,
        margin: '0 6px 0 8px'
    }
}));

export const VideoBox = styled('div')(({ theme }) => ({
    width: '100%',
    aspectRatio: 16 / 9,
    background:'#848589',
    boxSizing:'border-box',
    marginTop: 10,
    position: 'relative'
}));

export const SubVideoBox = styled('div')(({ theme }) => ({
    width: 464,
    aspectRatio: 16 / 9,
    position:'absolute',
    bottom: 14,
    left: 24,
    background:'#3F4147',
    boxSizing:'border-box',
}));

export const SubVideoBoxIn = styled('div')(({ theme }) => ({
    width: '100%',
    height: '100%',
    position:'relative',
    boxSizing:'border-box',
}));

export const SubVideoIconButton = styled(ButtonIcon)(({ theme }) => ({
    "&.MuiButtonBase-root": {
        width: 28,
        height: 28,
        background: '#2E8C6A',
        border: '1px solid #1F664C',
        position: 'absolute',
        right: -14,
        top: -14,
        '&:hover':{
            background:'#2E8C6A',

        },
    }
}));

export const SubVideoIconButtonShow = styled(SubVideoIconButton)(({ theme }) => ({
    "&.MuiButtonBase-root": {
        bottom: 24,
        left: 19,
        top: 'unset'
    }
}));

export const PositionBox = styled('div')(({ theme }) => ({
    position: 'absolute',
    right: 9,
    bottom: 7
}));

export const PositionButton = styled(ButtonIcon)(({ theme }) => ({
    "&.MuiButtonBase-root": {
        width: 38,
        height: 38,
        borderRadius: 8,
        background:'rgba(132, 133, 137, 0.7)',
        boxShadow:'0px 0px 8px 0px rgba(42, 42, 42, 0.40)',
        '&:hover':{
            background:'rgba(132, 133, 137, 0.7)',
        }
    }
}));

export const PopoverBox = styled(Popover)(({ theme }) => ({
    '&.MuiPopover-root':{
        '& .MuiPaper-root':{
            background:'rgba(60, 60, 60, 0.9)',
            border: '1px solid #6f6f6f',
            borderRadius: 8,
            padding: '6px 11px',
            marginLeft: 15,
            boxShadow: 'none'
        }
    }
}));

export const Layout = (theme) => ({
    margin: 5,
    '&:hover':{
        '& path':{
            stroke: '#23B882',
            opacity: 0.8
        }
    }
});

export const LayoutOn = (theme) => ({
    margin: 5,
    '& path':{
        stroke: '#23B882'
    },
    '&:hover':{
        '& path':{
            stroke: '#23B882'
        }
    }
});

export const PopoverButton = styled(ButtonIcon, { shouldForwardProp: (prop) => prop !== 'select' })(
    ({ theme, select }) => ({
        ...(select && {
            ...LayoutOn(theme),
            '&.MuiButtonBase-root': LayoutOn(theme),
        }),
        ...(!select && {
            ...Layout(theme),
            '&.MuiButtonBase-root': Layout(theme),
        }),
    }),
);


