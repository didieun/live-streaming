import {styled} from "@mui/material/styles";
import {
    Box,
    FormControl, IconButton,
    MenuItem, Popover,
    TextareaAutosize,
    Typography
} from "@mui/material";
import PopoverArrow from "../../../common/images/PopoverArrow.png";

export const Container = styled('div')(({ theme }) => ({
    padding: '40px 21px 20px',
    boxSizing: 'border-box'
}));

export const ImageBox = styled('div')(({ theme }) => ({
    width: 630,
    height: 220,
    background: '#3B3B3B',
    display:'flex',
    flexDirection: 'column',
    boxShadow:'0px 1.6414103507995605px 1.6414103507995605px 0px rgba(0, 0, 0, 0.25)',
    boxSizing: 'border-box',
    overflow: 'hidden',
    border: '1px solid #6F6F6F',
    marginBottom: 30,
    padding: 20,
    '& img':{
        width: '100%',
        height: '100%',
        objectFit: 'cover'
    },
}));

export const NoImageBox = styled(ImageBox)(({ theme }) => ({
    border: '1px dashed #6F6F6F',
    justifyContent:'center',
    alignItems:'center',
    '& svg':{
        width: 31,
        height: 31,
        '& g':{
            opacity: 1,
            '& path':{
                stroke: '#fff',
            }
        }
    }
}));

export const Flex = styled('div')(({ theme }) => ({
    display:'flex',
}));

export const AlignCenter = styled('div')(({ theme }) => ({
    display:'flex',
    alignItems: 'center'
}));

export const FlexColumn = styled('div')(({ theme }) => ({
    display:'flex',
    flexDirection: 'column',
}));


export const TitleText = styled(Typography)(({ theme }) => ({
    '&.MuiTypography-root':{
        width: 110,
        fontSize: '1rem',
        fontWeight: 700,
        color: 'rgba(255, 255, 255, 0.7)',
        lineHeight: 1,
        marginTop: 8
    }
}));

export const ImageBoxText = styled(Typography)(({ theme }) => ({
    '&.MuiTypography-root':{
        fontSize: '0.875rem',
        color: '#fff',
        fontWeight:400,
        marginTop: 8
    }
}));

export const JustifyEnd = styled('div')(({ theme }) => ({
    display:'flex',
    justifyContent: 'flex-end'
}));

export const StyledTextarea = styled(TextareaAutosize)(({ theme }) => ({
    width: 522,
    fontSize: '0.875rem',
    fontWeight: 400,
    color:'#fff',
    padding: '10px 12px',
    border:'1px solid #DADADA',
    borderRadius: 4,
    background:'transparent',
    resize: 'none',
    boxSizing:'border-box',
    '&::placeholder':{
        color:'#fff',
        opacity: 0.3
    },
    '&:focus':{
        outline: '0',
        border: '2px solid #23B882'
    },
    overflowY: 'auto',
    '&::-webkit-scrollbar': {
        width: '10px',
    },
    '&::-webkit-scrollbar-thumb': {
        background: '#D9D9D9',
        borderRadius: '10px',
        backgroundClip: 'padding-box',
        border: '3px solid transparent',
    },
    '&::-webkit-scrollbar-track': {
        background: 'transparent',
        marginTop: 5,
    },
}));

export const NumberText = styled(Typography)(({ theme }) => ({
    '&.MuiTypography-root':{
        fontSize: '0.875rem',
        color: '#fff',
        opacity: 0.3,
        fontWeight: 500,
        lineHeight: 1,
        marginBottom: 10
    }
}));

export const FormControlBox = styled(FormControl)(({ theme }) => ({
    '& .MuiInputBase-input':{
        width: 385,
        height:'34px !important',
        padding: '0 30px 0 8px !important',
        boxSizing:'border-box',
        display:'flex',
        alignItems: 'center',
        background: '#3C3C3C',
        '& p':{
            fontSize: '0.875rem',
            color:'#fff',
            fontWeight: 400,
            overflow:'hidden',
            textOverflow:'ellipsis',
            whiteSpace:'nowrap',
        },
        '& input':{
            fontSize: '0.875rem',
        }
    },
    '& .MuiOutlinedInput-notchedOutline, .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline, .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline':{
        border: '1px solid #6f6f6f',
        borderRadius: 4,
    },
}));

export const FormControlFontSizeBox = styled(FormControlBox)(({ theme }) => ({
    marginLeft: 19,
    '& .MuiInputBase-input':{
        width: 116,
        '& p':{
            fontSize: '0.875rem !important',
        },
    },
}));

export const Menu = styled(MenuItem)(({ theme }) => ({
    '&.MuiMenuItem-root':{
        boxSizing: 'border-box',
        padding: '2px 15px 2px 8px',
        '& p':{
            color:'#fff',
            fontWeight: 400,
            overflow:'hidden',
            textOverflow:'ellipsis',
            whiteSpace:'nowrap',
        },
        '&:hover':{
            background: 'rgba(35, 184, 130, 0.3)'
        },
        '&.Mui-selected':{
            background: 'rgba(35, 184, 130, 0.3)'
        },
    }
}));

export const IconBox = styled(AlignCenter)(({ theme }) => ({
    marginBottom: 23,
    marginTop: 10,
    '& .MuiButtonBase-root':{
        marginRight: 20,
        '&:last-child':{
            marginRight: 0
        }
    }
}));

export const ButtonIcon = styled(IconButton)(({ theme }) => ({
    "&.MuiButtonBase-root": {
        padding: '0 !important',
        "&:hover": {
            background: "transparent",
            opacity: 0.8,
        },
        '&.Mui-disabled':{
            opacity: 0.3
        },
    },
}));

export const selectColor = (theme) => ({
    '& path':{
        fill: '#23B882'
    }
});

export const IconSelect = styled(ButtonIcon, { shouldForwardProp: (prop) => prop !== 'select' })(
    ({ theme, select }) => ({
        ...(select && {
            ...selectColor(theme),
            '&.MuiButtonBase-root': selectColor(theme),
        }),
    }),
);

export const FontStyle = styled(Typography)(({ theme }) => ({
    '&.MuiTypography-root':{
        fontSize: '0.875rem',
        color: '#fff',
    }
}));

export const PopoverBox = styled(Popover)(({ theme }) => ({
    '&.MuiPopover-root':{
        '& .MuiPaper-root':{
            background:'transparent',
            boxShadow: 'none',
            paddingTop: 15,
        }
    }
}));

export const PopoverBoxIn = styled('div')(({ theme }) => ({
    background:'#3c3c3c',
    borderRadius: 6,
    padding: '8px 12px',
    position: 'relative',
    border: '1px solid #6F6F6F',
    '&:before':{
        content: "''",
        backgroundImage: `url(${PopoverArrow})`,
        backgroundRepeat:'no-repeat',
        transform: 'translate(-50%, 0)',
        position: 'absolute',
        top: -10,
        left: '50%',
        width: 22,
        height: 22,
    }
}));

export const ListBox = styled('div')(({ theme }) => ({
    width: 180,
    display:'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between'
}));

export const selectPalette = (theme) => ({
    width: 24,
    height: 24,
    borderRadius: '50%',
    boxSizing:'border-box',
    border: '2px solid #23B882',
    padding: 2,
    display:'flex',
    justifyContent:'center',
    alignItems: 'center',
    cursor:'pointer',
    margin: 4,
    '& div':{
        width: 16,
        height: 16,
        borderRadius: '50%',
        boxSizing:'border-box'
    }
});

export const palette = (theme) => ({
    width: 24,
    height: 24,
    borderRadius: '50%',
    boxSizing:'border-box',
    border: '2px solid #3c3c3c',
    padding: 2,
    display:'flex',
    justifyContent:'center',
    alignItems: 'center',
    cursor:'pointer',
    margin: 4,
    '& div':{
        width: 16,
        height: 16,
        borderRadius: '50%',
        boxSizing:'border-box'
    }
});

export const ColorBoxIn = styled(Box, { shouldForwardProp: (prop) => prop !== 'select' })(
    ({ theme, select }) => ({
        ...(select && {
            ...selectPalette(theme),
            '&.MuiBox-root': selectPalette(theme),
        }),
        ...(!select && {
            ...palette(theme),
            '&.MuiBox-root': palette(theme),
        }),
    }),
);

export const ErrorStyledTextarea = styled(StyledTextarea)(({ theme }) => ({
    border:'2px solid #EF222E',
    '&:focus':{
        outline: '0',
        border: '2px solid #EF222E'
    },
}));

export const JustifySpace = styled('div')(({ theme }) => ({
    display:'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
}));

export const ErrorText = styled(Typography)(({ theme }) => ({
    '&.MuiTypography-root':{
        fontSize: '0.875rem',
        fontWeight: 400,
        color: '#EF222E',
        marginLeft: 6
    }
}));