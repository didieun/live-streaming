import React from 'react';
import styled from '@emotion/styled/macro';
import { Box, Typography } from '@mui/material';
import { ArrowTooltipInStyle, ArrowTooltipStyle, IconButtonStyle } from '../../common/styled/CommonStyle';
import { ReactComponent as ArrowIcon } from '../../../../assets/images/ArrowIcon.svg';
import { ReactComponent as TooltipCloseIcon } from '../../../../assets/images/TooltipCloseIcon.svg';
import { useViewSize } from '../../../../store';
import TooltipArrowBlue from '../../../../assets/images/TooltipArrowBlue.svg';

const PdfBox = styled(Box)(({ theme }) => ({
    width: '100%',
    borderRadius: 10,
    aspectRatio: 16 / 9,
    boxSizing: 'border-box',
    background: '#D9D9D9',
    marginBottom: 20,
    '& > div': {
        width: '100%',
        height: '100%',
        position: 'relative'
    }
}));

const PdfButton = styled(IconButtonStyle)(({ theme }) => ({
    '&.MuiButtonBase-root': {
        position: 'absolute',
        top: '50%',
        transform: 'translate(0, -50%)',
        width: 40,
        height: 40,
        border: '1px solid #D5D4DC',
        background: '#fff',
        filter: 'drop-shadow(0px 2.359px 7.077px rgba(138, 136, 149, 0.50))',
        '&:hover': {
            background: '#fff'
        },
        '& svg': {
            width: 20,
            height: 20,
            '& path': {
                fill: '#111'
            }
        },
        '&.Mui-disabled': {
            '& path': {
                fill: '#bbb'
            }
        }
    }
}));

const PdfLeftButton = styled(PdfButton)(({ theme }) => ({
    '&.MuiButtonBase-root': {
        left: 7
    }
}));

const PdfRightButton = styled(PdfButton)(({ theme }) => ({
    '&.MuiButtonBase-root': {
        right: 7
    }
}));

const PageBox = styled(Box)(({ theme }) => ({
    position: 'absolute',
    bottom: 16,
    right: 14,
    minWidth: 70,
    height: 34,
    padding: '0 10px',
    background: 'rgba(51, 51, 51, 0.6)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    '& p': {
        fontSize: '1.125rem',
        color: '#bbb',
        fontWeight: 400,
        letterSpacing: '0.1px',
        '& span': {
            fontWeight: 700,
            color: '#fff'
        }
    }
}));

const ExplanationBox = styled(Box)(({ theme }) => ({
    background: '#3190FF',
    boxShadow: '0 2px 7px 0 rgba(0, 0, 0, 0.25)',
    position: 'absolute',
    padding: '11px',
    bottom: -60,
    left: '50%',
    borderRadius: 6,
    zIndex: 2000,
    transform: 'translate(-50%, 0) ',
    '&::before': {
        backgroundColor: '#3190FF',
        content: "''",
        display: 'block',
        height: '13px',
        position: 'absolute',
        top: -6,
        left: '50%',
        transform: 'rotate( -227deg ) skew( 0deg ) ',
        width: '13px',
        zIndex: 200
    }
}));

const InfoTooltipBoxIn = styled(Box)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    '& button': {
        width: 16,
        height: 16,
        marginLeft: 10
    }
}));

const InfoTooltipText = styled(Typography)(({ theme }) => ({
    '&.MuiTypography-root': {
        fontSize: '0.875rem',
        color: '#fff',
        fontWeight: 400,
        textOverflow: 'unset',
        whiteSpace: 'unset',
        overflow: 'unset',
        textAlign: 'left',
        wordBreak: 'keep-all',
        '& span': {
            fontWeight: 700
        }
    }
}));

const TextbookComponent = (props) => {
    const { isLg } = useViewSize();
    const [tooltip, setTooltip] = React.useState(true);

    const handleCloseTooltip = () => {
        setTooltip(false);
    };

    return (
        <Box sx={{ position: 'relative' }}>
            <PdfBox>
                <Box>
                    <PdfLeftButton disabled={true} disableRipple>
                        <ArrowIcon style={{ transform: 'rotate( 90deg )' }} />
                    </PdfLeftButton>
                    <PdfRightButton disableRipple>
                        <ArrowIcon style={{ transform: 'rotate( -90deg )' }} />
                    </PdfRightButton>
                    <PageBox>
                        <Typography>
                            <span>4 </span> /22
                        </Typography>
                    </PageBox>
                </Box>
            </PdfBox>
            {tooltip && (
                <ExplanationBox>
                    <InfoTooltipBoxIn>
                        <InfoTooltipText>이미지를 클릭하면 새 탭에서 열립니다.</InfoTooltipText>
                        <IconButtonStyle onClick={handleCloseTooltip} disableRipple>
                            <TooltipCloseIcon />
                        </IconButtonStyle>
                    </InfoTooltipBoxIn>
                </ExplanationBox>
            )}
        </Box>
    );
};

export default TextbookComponent;
