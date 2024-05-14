import { useTheme } from '@mui/material/styles';
import { useMediaQuery } from '@mui/material';


export const useViewSize = () => {
    const theme = useTheme();
    const isXl = useMediaQuery(theme?.breakpoints?.down('xl'));
    const isLg = useMediaQuery(theme?.breakpoints?.down('lg'));
    const isHd = useMediaQuery(theme?.breakpoints?.down('hd'));
    const isMd = useMediaQuery(theme?.breakpoints?.down('md'));
    const isSl = useMediaQuery(theme?.breakpoints?.down('sl'));
    const isSd = useMediaQuery(theme?.breakpoints?.down('sd'));
    const isSmall = useMediaQuery(theme?.breakpoints?.down('sm'));
    const isMSmall = useMediaQuery(theme?.breakpoints?.down('ms'));
    const isXSmall = useMediaQuery(theme?.breakpoints?.down('xs'));

    return { isXl, isLg, isHd, isMd, isSl, isSd, isSmall, isMSmall, isXSmall };
};

