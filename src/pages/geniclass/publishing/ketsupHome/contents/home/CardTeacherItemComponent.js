import React from 'react';
import styled from '@emotion/styled/macro';
import { Box, Card, CardActionArea, CardMedia, CardContent, Typography, Chip } from '@mui/material';
import { Flex } from '../../../common/styled/CommonStyle';
import { ReactComponent as CalendarCheckIcon } from '../../../../../assets/images/CalendarCheckIcon.svg';
import { useViewSize } from '../../../../../store';

const CardStyle = styled(Card)(({ theme, isSl }) => ({
    padding: 0,
    outline: '1px solid #D5D4DC',
    border: 0,
    borderRadius: 20,
    boxShadow: 'none',
    boxSizing: 'border-box',
    '&:hover': {
        backgroundColor: '#fff',
        outline: '3px solid #008638'
    },
    '& .MuiButtonBase-root': {
        padding: 0,
        boxSizing: 'border-box',
        '& .MuiCardActionArea-focusHighlight': {
            backgroundColor: '#fff',
            borderRadius: 10
        }
    },
    '& .MuiCardMedia-root': {
        borderRadius: '8px 8px 0 0',
        aspectRatio: '9/7'
    },
    '& .MuiCardContent-root': {
        display: 'flex',
        flexDirection: 'column',
        padding: '20px 12px 22px'
    }
}));
const CardInfo = styled(Box)(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    gap: 8,
    marginTop: 14,
    '& svg': {
        width: 22,
        height: 22,
        '& path': {
            fill: '#00B959'
        }
    },
    '& p': {
        fontSize: '0.875rem',
        color: '#333',
        fontWeight: 500,
        letterSpacing: '-0.283px'
    }
}));

const ChipStyle = styled(Chip)(({ theme }) => ({
    minWidth: 42,
    height: 24,
    padding: '4px 8px',
    borderRadius: 4,
    backgroundColor: '#F1F7F2',
    '& .MuiChip-label': {
        padding: 0,
        color: '#00B959',
        fontSize: '0.813rem',
        fontWeight: 700
    }
}));

const NameText = styled(Typography)(({ theme, isSl }) => ({
    '&.MuiTypography-root': {
        fontSize: isSl ? '1rem' : '1.25rem',
        color: '#333',
        fontWeight: 700,
        letterSpacing: '-0.5px',
        lineHeight: 'normal',
        display: '-webkit-box',
        wordBreak: 'break-all',
        textOverflow: 'ellipsis',
        WebkitBoxOrient: 'vertical',
        whiteSpace: 'normal',
        WebkitLineClamp: 1,
        overflow: 'hidden',
        textAlign: 'left',
        margin: '16px 0'
    }
}));

const TextStyle = styled(Typography)(({ theme, isSl }) => ({
    '&.MuiTypography-root': {
        fontSize: isSl ? '0.75rem' : '0.875rem',
        fontWeight: 400,
        color: '#737373',
        textAlign: 'left',
        lineHeight: 'normal',
        letterSpacing: '-0.5px',
        display: '-webkit-box',
        wordBreak: 'break-all',
        textOverflow: 'ellipsis',
        WebkitBoxOrient: 'vertical',
        whiteSpace: 'normal',
        WebkitLineClamp: 1,
        overflow: 'hidden'
    }
}));

function CardTeacherItemComponent(props) {
    const { isSl } = useViewSize();
    const { cardContent } = props;

    return (
        <>
            {cardContent.map((item, index) => (
                <CardStyle key={index} isSl={isSl}>
                    <CardActionArea>
                        <CardMedia component="img" image={item.img} alt="Class Image" />
                        <CardContent>
                            <Flex sx={{ gap: '10px' }}>
                                {item.chip.map((list, i) => (
                                    <ChipStyle label={list} />
                                ))}
                            </Flex>
                            <NameText isSl={isSl}>{item.name}</NameText>

                            <Box sx={{ minHeight: '40px' }}>
                                {item.text1 !== '' && <TextStyle>･ {item.text1}</TextStyle>}
                                {item.text2 !== '' && <TextStyle>･ {item.text2}</TextStyle>}
                            </Box>
                        </CardContent>
                    </CardActionArea>
                </CardStyle>
            ))}
        </>
    );
}

export default CardTeacherItemComponent;
