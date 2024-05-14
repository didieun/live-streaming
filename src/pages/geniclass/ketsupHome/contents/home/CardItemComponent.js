import React from 'react';
import styled from '@emotion/styled/macro';
import { Box, Card, CardActionArea, CardMedia, CardContent, Typography, Chip } from '@mui/material';
import { Flex } from '../../../common/styled/CommonStyle';

import { ReactComponent as ChalkboardTeacherIcon } from '../../../../../assets/newImages/ChalkboardTeacherIcon.svg';
import { ReactComponent as UsersThreeIcon } from '../../../../../assets/newImages/UsersThreeIcon.svg';
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
        padding: '20px 12px 22px',
        '& .MuiTypography-h5': {
            minHeight: 48,
            fontSize: isSl ? '1rem' : '1.25rem',
            fontWeight: 600,
            color: '#111',
            textAlign: 'left',
            margin: '16px 0 26px',
            lineHeight: '26px',
            letterSpacing: '-0.5px',
            display: '-webkit-box',
            wordBreak: 'break-all',
            textOverflow: 'ellipsis',
            WebkitBoxOrient: 'vertical',
            whiteSpace: 'normal',
            WebkitLineClamp: 2,
            overflow: 'hidden'
        }
    }
}));
const CardInfo = styled(Box)(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    gap: 7,
    marginRight: 24,
    '& svg': {
        width: 21,
        height: 21
    },
    '& p': {
        fontSize: '0.875rem',
        color: '#666',
        fontWeight: 500,
        letterSpacing: '-0.3px'
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

function CardItemComponent(props) {
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
                            <Typography gutterBottom variant="h5" component="div">
                                {item.title}
                            </Typography>
                            <Flex>
                                <CardInfo>
                                    <ChalkboardTeacherIcon />
                                    <Typography>{item.summary1}</Typography>
                                </CardInfo>
                                <CardInfo>
                                    <UsersThreeIcon />
                                    <Typography>{item.summary2}</Typography>
                                </CardInfo>
                            </Flex>
                        </CardContent>
                    </CardActionArea>
                </CardStyle>
            ))}
        </>
    );
}

export default CardItemComponent;
